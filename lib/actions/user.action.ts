"use server";

import { prisma } from "../prisma";

export async function getUserByKindeId(kindeId: string | null) {
	"use cache";

	if (!kindeId) return null;

	return prisma.user.findUnique({
		where: { kindeId },
	});
}
