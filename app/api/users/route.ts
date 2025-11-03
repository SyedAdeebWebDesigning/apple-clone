import { NextResponse } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "@/lib/prisma";

async function syncUser() {
	try {
		const { getUser } = getKindeServerSession();
		const kindeUser = await getUser();

		if (!kindeUser) {
			console.error("❌ No Kinde user found — redirecting to login");
			// Use absolute URL for redirect
			const loginUrl = new URL(
				"/api/auth/login",
				process.env.NEXT_PUBLIC_KINDE_SITE_URL
			);
			return NextResponse.redirect(loginUrl);
		}

		// Build a name from given_name + family_name if available
		const fullName =
			kindeUser.given_name || kindeUser.family_name
				? `${kindeUser.given_name ?? ""} ${kindeUser.family_name ?? ""}`.trim()
				: null;

		// 🔹 Upsert user based on kindeId
		await prisma.user.upsert({
			where: { kindeId: kindeUser.id },
			update: {
				email: kindeUser.email ?? undefined,
				name: fullName ?? undefined,
				givenName: kindeUser.given_name ?? undefined,
				familyName: kindeUser.family_name ?? undefined,
			},
			create: {
				kindeId: kindeUser.id,
				email: kindeUser.email ?? "",
				name: fullName,
				givenName: kindeUser.given_name ?? null,
				familyName: kindeUser.family_name ?? null,
			},
		});

		// Redirect to home page with proper absolute URL
		const homeUrl = new URL("/", process.env.NEXT_PUBLIC_KINDE_SITE_URL);
		return NextResponse.redirect(homeUrl);
	} catch (error) {
		console.error("❌ Failed to sync user:", error);
		const message = error instanceof Error ? error.message : String(error);
		return NextResponse.json(
			{ error: "Failed to sync user", details: message },
			{ status: 500 }
		);
	}
}

export async function GET() {
	return syncUser();
}

export async function POST() {
	return syncUser();
}
