"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";
import { Links } from "./NavBar";

const MobileNavLinks = () => {
	return (
		<Sheet defaultOpen={false}>
			<SheetTrigger asChild>
				<Button variant={"link"} className="navLink min-[1194px]:hidden">
					<MenuIcon className="navLink leading-0 text-xl" />
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
					{Links.map((link: { name: string; url: string }, idx: number) => (
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
					))}
				</ul>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNavLinks;
