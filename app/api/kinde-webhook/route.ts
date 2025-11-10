/* eslint-disable @typescript-eslint/no-explicit-any */
// import { NextResponse } from "next/server";
// import jwksClient from "jwks-rsa";
// import jwt from "jsonwebtoken";
// import { prisma } from "@/lib/prisma";

// const client = jwksClient({
// 	jwksUri: `${process.env.KINDE_ISSUER_URL}/.well-known/jwks.json`,
// });

// export async function POST(req: Request) {
// 	try {
// 		console.log("✅ WEBHOOK RECEIVED");

// 		const token = await req.text();
// 		console.log("RAW TOKEN:", token?.slice(0, 40));

// 		const decoded = jwt.decode(token, { complete: true }) as any;
// 		const key = await client.getSigningKey(decoded.header.kid);
// 		const event: any = jwt.verify(token, key.getPublicKey());

// 		console.log("FULL EVENT PAYLOAD:", JSON.stringify(event, null, 2));

// 		// UNIVERSAL USER PARSER
// 		const user = event.data?.user || event.user || event.data || null;

// 		if (!user?.id) {
// 			console.log("❌ INVALID USER PAYLOAD:", user);
// 			return NextResponse.json(
// 				{ error: "Invalid user payload" },
// 				{ status: 400 }
// 			);
// 		}

// 		switch (event.type) {
// 			case "user.created":
// 				await prisma.user.upsert({
// 					where: { kindeId: user.id },
// 					create: {
// 						kindeId: user.id,
// 						email: user.email || null,
// 						firstName: user.given_name || null,
// 						lastName: user.family_name || null,
// 						picture: user.picture || null,
// 					},
// 					update: {
// 						email: user.email || null,
// 						firstName: user.given_name || null,
// 						lastName: user.family_name || null,
// 						picture: user.picture || null,
// 					},
// 				});
// 				break;

// 			case "user.updated":
// 				await prisma.user.updateMany({
// 					where: { kindeId: user.id },
// 					data: {
// 						email: user.email || null,
// 						firstName: user.given_name || null,
// 						lastName: user.family_name || null,
// 						picture: user.picture || null,
// 					},
// 				});
// 				break;

// 			case "user.deleted":
// 				await prisma.user.deleteMany({
// 					where: { kindeId: user.id },
// 				});
// 				break;
// 		}

// 		return NextResponse.json({ ok: true });
// 	} catch (err: any) {
// 		console.log("❌ WEBHOOK ERROR:", err.message);
// 		return NextResponse.json({ error: err.message }, { status: 400 });
// 	}
// }

import { NextResponse } from "next/server";
import jwksClient from "jwks-rsa";
import jwt from "jsonwebtoken";

// The Kinde issuer URL should already be in your `.env` file
// from when you initially set up Kinde. This will fetch your
// public JSON web keys file
const client = jwksClient({
	jwksUri: `${process.env.KINDE_ISSUER_URL}/.well-known/jwks.json`,
});

export async function POST(req: Request) {
	try {
		// Get the token from the request
		const token = await req.text();

		// Decode the token
		const { header } = jwt.decode(token, { complete: true }) as any;
		const { kid } = header;

		// Verify the token
		const key = await client.getSigningKey(kid);
		const signingKey = key.getPublicKey();
		const event: any = await jwt.verify(token, signingKey);

		// Handle various events
		switch (event.type) {
			case "user.updated":
				// handle user updated event
				// e.g update database with event.data
				console.log(event.data);
				break;
			case "user.created":
				// handle user created event
				// e.g add user to database with event.data
				console.log(event.data);
				break;
			default:
				// other events that we don't handle
				break;
		}
	} catch (err) {
		if (err instanceof Error) {
			console.error(err.message);
			return NextResponse.json({ message: err.message }, { status: 400 });
		}
	}
	return NextResponse.json({ status: 200, statusText: "success" });
}
