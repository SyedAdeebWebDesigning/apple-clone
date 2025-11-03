import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
	const { getUser } = getKindeServerSession();
	const user = await getUser();

	console.log("🧩 Kinde user object:", user);

	return NextResponse.json(user);
}
