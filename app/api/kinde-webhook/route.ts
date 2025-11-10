/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import jwksClient from "jwks-rsa";
import jwt from "jsonwebtoken";
import { prisma } from "@/lib/prisma";

const client = jwksClient({
	jwksUri: `${process.env.KINDE_ISSUER_URL}/.well-known/jwks.json`,
});

export async function POST(req: Request) {
	try {
		console.log("✅ WEBHOOK RECEIVED");

		const token = await req.text();
		console.log("RAW TOKEN:", token?.slice(0, 40));

		const decoded = jwt.decode(token, { complete: true }) as any;
		const key = await client.getSigningKey(decoded.header.kid);
		const event: any = jwt.verify(token, key.getPublicKey());

		console.log("FULL EVENT PAYLOAD:", JSON.stringify(event, null, 2));

		// UNIVERSAL USER PARSER
		const user = event.data?.user || event.user || event.data || null;

		if (!user?.id) {
			console.log("❌ INVALID USER PAYLOAD:", user);
			return NextResponse.json(
				{ error: "Invalid user payload" },
				{ status: 400 }
			);
		}

		switch (event.type) {
			case "user.created":
				await prisma.user.upsert({
					where: { kindeId: user.id },
					create: {
						kindeId: user.id,
						email: user.email || null,
						firstName: user.given_name || null,
						lastName: user.family_name || null,
						picture: user.picture || null,
					},
					update: {
						email: user.email || null,
						firstName: user.given_name || null,
						lastName: user.family_name || null,
						picture: user.picture || null,
					},
				});
				break;

			case "user.updated":
				await prisma.user.updateMany({
					where: { kindeId: user.id },
					data: {
						email: user.email || null,
						firstName: user.given_name || null,
						lastName: user.family_name || null,
						picture: user.picture || null,
					},
				});
				break;

			case "user.deleted":
				await prisma.user.deleteMany({
					where: { kindeId: user.id },
				});
				break;
		}

		return NextResponse.json({ ok: true });
	} catch (err: any) {
		console.log("❌ WEBHOOK ERROR:", err.message);
		return NextResponse.json({ error: err.message }, { status: 400 });
	}
}
