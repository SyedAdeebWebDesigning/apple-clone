"use client";

import { BsBag as ShoppingBag } from "react-icons/bs";
import { CiLogin, CiLogout } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";

const NavBar = () => {
	const Links = [
		{
			name: "Store",
			url: "/store",
		},
		{
			name: "Mac",
			url: "/mac",
		},
		{
			name: "iPad",
			url: "/ipad",
		},
		{
			name: "iPhone",
			url: "/iphone",
		},
		{
			name: "Watch",
			url: "/watch",
		},
		{
			name: "AirPods",
			url: "/airpods",
		},
		{
			name: "TV & Home",
			url: "/tv-home",
		},
		{
			name: "Entertainment",
			url: "/entertainment",
		},
		{
			name: "Accessories",
			url: "/accessories",
		},
		{
			name: "Support",
			url: "/support",
		},
	];

	const { isAuthenticated, isLoading } = useKindeBrowserClient();

	return (
		<section className="max-w-7xl mx-auto">
			<div className="flex space-x-4 items-center justify-between bg-[#161617cc] min-[1194px]:justify-center h-11 left-[50%] -translate-[50%] fixed w-full top-5.5">
				<Image
					src="/assets/AppleWhite.svg"
					alt="Logo"
					width={30}
					height={44}
					className="p-2 ml-2"
				/>
				<ul className="hidden min-[1194px]:flex  items-center">
					{Links.map((link: { name: string; url: string }) => (
						<li key={link.name} className="inline-block">
							<Link href={link.url} className="navLink mx-5 leading-0">
								{link.name}
							</Link>
						</li>
					))}
				</ul>

				<div className="flex items-center mr-2">
					<Link href={"/"}>
						<ShoppingBag className="navLink mx-5" name="Shopping Bag" />
					</Link>
					{isLoading ? (
						<div>Loading</div>
					) : (
						<div>
							{isAuthenticated ? (
								<LogoutLink
									postLogoutRedirectURL={
										process.env.NEXT_PUBLIC_KINDE_SITE_URL || "/"
									}>
									<CiLogout className="navLink leading-0 text-xl" />
								</LogoutLink>
							) : (
								<LoginLink postLoginRedirectURL="/api/users/">
									<CiLogin className="navLink leading-0 text-xl" />
								</LoginLink>
							)}
						</div>
					)}

					<Sheet defaultOpen={false}>
						<SheetTrigger asChild>
							<Button variant={"link"} className="navLink min-[1194px]:hidden">
								<MenuIcon className="navLink leading-0 text-xl ml-3" />
							</Button>
						</SheetTrigger>

						<SheetContent
							onCloseAutoFocus={(e) => e.preventDefault()}
							className="z-200 [&_button[data-radix-collection-item]]:hidden h-screen bg-[#161617] text-white border-none *:outline-none focus:outline-none focus:ring-0 active:outline-none active:ring-0"
							side="top">
							{/* Accessible title (visually hidden) */}
							<SheetHeader>
								<SheetTitle className="sr-only">Navigation menu</SheetTitle>
								<SheetDescription className="sr-only">
									Primary site navigation
								</SheetDescription>
							</SheetHeader>
							<ul className="flex flex-col items-start justify-start space-y-3 m-8">
								{Links.map(
									(link: { name: string; url: string }, idx: number) => (
										<motion.li
											key={link.name}
											className="inline-block"
											initial={{ opacity: 0, y: -20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: idx * 0.1 }}>
											<Link
												href={link.url}
												className="text-4xl font-semibold text-left">
												{link.name}
											</Link>
										</motion.li>
									)
								)}
							</ul>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</section>
	);
};

export default NavBar;
