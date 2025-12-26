"use client";

import { User } from "@prisma/client";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "../ui/table";
import { updateUserRole } from "@/lib/actions/user.action";
import { useState } from "react";
import { Button } from "../ui/button";

export default function UserTable({ users }: { users: User[] }) {
	const [role] = useState(
		users.reduce((acc, user) => {
			acc[user.id] = user.role;
			return acc;
		}, {} as Record<string, "USER" | "ADMIN">)
	);

	const [isLoading, setIsLoading] = useState(false);

	return (
		<Table>
			<TableCaption>A list of your recent users.</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead>Name</TableHead>
					<TableHead>Email</TableHead>
					<TableHead>Role</TableHead>
					<TableHead className="text-right">Change Role</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{users.map((user) => {
					return (
						<TableRow key={user.id}>
							<TableCell>{user.firstName + " " + user.lastName}</TableCell>
							<TableCell>{user.email}</TableCell>
							<TableCell>{role[user.id]}</TableCell>
							<TableCell className="text-right cursor-pointer">
								<Button
									variant="link"
									disabled={isLoading}
									className="text-sm cursor-pointer text-blue-600 hover:underline p-0 disabled:cursor-not-allowed"
									onClick={async () => {
										setIsLoading(true);
										await updateUserRole(
											user.id,
											role[user.id] === "USER" ? "ADMIN" : "USER"
										);
										setIsLoading(false);
										window.location.reload();
									}}>
									{role[user.id] === "USER" ? (
										<p className="group-hover:underline">Make Admin</p>
									) : (
										<p className="group-hover:underline">Make User</p>
									)}
								</Button>
							</TableCell>
						</TableRow>
					);
				})}
			</TableBody>
		</Table>
	);
}
