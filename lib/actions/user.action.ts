"use server";

import { prisma } from "../prisma";

export async function getUserByKindeId(kindeId: string | null) {
	if (!kindeId) return null;

	return prisma.user.findUnique({
		where: { kindeId },
	});
}

export const getAllUsers = async () => {
	try {
		const data = await prisma.user.findMany();
		return {
			success: true,
			users: data,
			message: "Users fetched successfully",
		};
	} catch (error) {
		return {
			success: false,
			users: [],
			message: error instanceof Error ? error.message : "Unknown error",
		};
	}
};

export const updateUserRole = async (
	userId: string,
	newRole: "USER" | "ADMIN"
) => {
	try {
		const updatedUser = await prisma.user.update({
			where: { id: userId },
			data: { role: newRole },
		});
		return {
			success: true,
			user: updatedUser,
			message: "User role updated successfully",
		};
	} catch (error) {
		return {
			success: false,
			user: null,
			message: error instanceof Error ? error.message : "Unknown error",
		};
	}
};
