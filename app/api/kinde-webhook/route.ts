/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import jwksClient from "jwks-rsa";
import jwt from "jsonwebtoken";
import { prisma } from "@/lib/prisma"; // <- adjust if needed

const client = jwksClient({
	jwksUri: `${process.env.KINDE_ISSUER_URL}/.well-known/jwks.json`,
});

export async function POST(req: Request) {
	try {
		console.log("✅ WEBHOOK RECEIVED");

		// Kinde sends the webhook as a *raw JWT string*
		const token = await req.text();
		console.log("RAW TOKEN:", token?.slice(0, 50));

		if (!token) {
			console.log("❌ EMPTY TOKEN — middleware or wrong URL.");
			return NextResponse.json({ error: "Empty token" }, { status: 400 });
		}

		// Decode header to get kid
		const decoded = jwt.decode(token, { complete: true }) as any;
		if (!decoded?.header?.kid) {
			console.log("❌ NO KID — token invalid");
			return NextResponse.json(
				{ error: "Invalid token header" },
				{ status: 400 }
			);
		}

		const key = await client.getSigningKey(decoded.header.kid);
		const signingKey = key.getPublicKey();

		// Verify JWT
		const event: any = jwt.verify(token, signingKey);
		console.log("✅ VERIFIED EVENT:", event.type);

		const data = event.data;

		switch (event.type) {
			case "user.created":
				console.log("🟢 USER CREATED:", data.id);
				await prisma.user.upsert({
					where: { kindeId: data.id },
					create: {
						kindeId: data.id,
						email: data.email,
						firstName: data.given_name || null,
						lastName: data.family_name || null,
						picture: data.picture || null,
					},
					update: {
						email: data.email,
						firstName: data.given_name || null,
						lastName: data.family_name || null,
						picture: data.picture || null,
					},
				});
				break;

			case "user.updated":
				console.log("🟡 USER UPDATED:", data.id);
				await prisma.user.updateMany({
					where: { kindeId: data.id },
					data: {
						email: data.email,
						firstName: data.given_name || null,
						lastName: data.family_name || null,
						picture: data.picture || null,
					},
				});
				break;

			case "user.deleted":
				console.log("🔴 USER DELETED:", data.id);
				await prisma.user.deleteMany({
					where: { kindeId: data.id },
				});
				break;

			default:
				console.log("⚪ UNHANDLED EVENT:", event.type);
				break;
		}

		return NextResponse.json({ ok: true });
	} catch (err: any) {
		console.log("❌ WEBHOOK ERROR:", err.message);
		return NextResponse.json({ error: err.message }, { status: 400 });
	}
}
