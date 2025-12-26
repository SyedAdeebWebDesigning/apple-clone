import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { getUserByKindeId } from "./actions/user.action";
import { User } from "@prisma/client";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// NOT cached — reads request-specific session/cookies
export async function getKindeUserIdUncached(): Promise<string | null> {
	try {
		const { getKindeServerSession } = await import(
			"@kinde-oss/kinde-auth-nextjs/server"
		);
		const { getUser } = getKindeServerSession();
		const user = await getUser();
		return user?.id ?? null;
	} catch (err) {
		console.error("Error fetching Kinde user ID:", err);
		return null;
	}
}

export async function checkAdminAccess(): Promise<boolean> {
	try {
		const { getKindeServerSession } = await import(
			"@kinde-oss/kinde-auth-nextjs/server"
		);
		const { getUser } = getKindeServerSession();
		const KindeUser = await getUser();
		if (!KindeUser) {
			return false;
		}
		const user = (await getUserByKindeId(KindeUser?.id || "")) as User | null;

		if (user && user.role && user.role === "ADMIN") {
			return true;
		}
		return false;
	} catch (err) {
		console.error("Error checking admin access:", err);
		return false;
	}
}
