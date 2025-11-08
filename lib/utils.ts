import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

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
