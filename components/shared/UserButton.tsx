"use client";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { User } from "@prisma/client";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { CiBoxList, CiLogout, CiUser } from "react-icons/ci";
import { Separator } from "../ui/separator";

const UserButton = ({ user }: { user: User | null }) => {
	const DropdownLinks = [
		{
			label: "Profile",
			href: "/profile",
			icon: <CiUser className="text-white group-hover:text-black" />,
		},
		{
			label: "Orders",
			href: "/orders",
			icon: <CiBoxList className="text-white group-hover:text-black" />,
		},
	];
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button className="size-8 rounded-full p-0 overflow-hidden bg-neutral-700 group hover:bg-neutral-800 cursor-pointer flex items-center justify-center relative">
					{user?.picture ? (
						<Image width={30} height={30} alt="User" src={user.picture} />
					) : (
						<span className="text-sm uppercase">
							{user?.givenName ? user.givenName.charAt(0) : "U"}
							{user?.familyName ? user.familyName.charAt(0) : "N"}
						</span>
					)}
					<div className="absolute w-0.5 h-full -left-10 bg-white/50 transition-all duration-500 group-hover:left-10 rotate-45" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align="center"
				className="mt-2 bg-neutral-900 border-neutral-800 mx-10">
				<DropdownMenuLabel className="text-white">
					<p className="text-base font-medium">Welcome {user?.name}</p>
					<span className="text-xs font-light">{user?.email}</span>
				</DropdownMenuLabel>
				<Separator className="my-1 bg-neutral-800" />
				{DropdownLinks.map((link) => (
					<Link
						key={link.label}
						href={link.href}
						className="cursor-pointer group text-neutral-100 hover:text-neutral-200 group-hover:bg-neutral-800">
						<DropdownMenuItem className="hover:bg-neutral-800">
							{link.icon}
							{link.label}
						</DropdownMenuItem>
					</Link>
				))}
				<Separator className="my-1 bg-neutral-800" />

				<DropdownMenuItem className="cursor-pointer">
					<CiLogout className="text-red-500" />
					<LogoutLink
						className="text-red-500"
						postLogoutRedirectURL={
							process.env.NEXT_PUBLIC_KINDE_SITE_URL || "/"
						}>
						Logout
					</LogoutLink>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default UserButton;
