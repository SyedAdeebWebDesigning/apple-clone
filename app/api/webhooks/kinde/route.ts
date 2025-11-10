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
		const token = await req.text();

		const decoded = jwt.decode(token, { complete: true }) as any;
		if (!decoded?.header?.kid) {
			throw new Error("Invalid token header");
		}

		const key = await client.getSigningKey(decoded.header.kid);
		const signingKey = key.getPublicKey();
		const event: any = jwt.verify(token, signingKey);

		const data = event?.data;

		switch (event?.type) {
			// ✅ USER CREATED
			case "user.created":
				await prisma.user.upsert({
					where: { kindeId: data.id },
					update: {
						email: data.email,
						firstName: data.given_name,
						lastName: data.family_name,
						picture: data.picture,
					},
					create: {
						kindeId: data.id,
						email: data.email,
						firstName: data.given_name,
						lastName: data.family_name,
						picture: data.picture,
					},
				});
				break;

			// ✅ USER UPDATED
			case "user.updated":
				await prisma.user.updateMany({
					where: { kindeId: data.id },
					data: {
						email: data.email,
						firstName: data.given_name,
						lastName: data.family_name,
						picture: data.picture,
					},
				});
				break;

			// ✅ USER DELETED
			case "user.deleted":
				await prisma.user.deleteMany({
					where: { kindeId: data.id },
				});
				break;

			default:
				console.log("Unhandled event:", event?.type);
				break;
		}

		return NextResponse.json({ message: "ok" });
	} catch (err) {
		console.error("Webhook error:", err);
		return NextResponse.json({ message: "Webhook failed" }, { status: 400 });
	}
}
