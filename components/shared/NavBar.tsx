import { BsApple, BsBag as ShoppingBag } from "react-icons/bs";
import { CiLogin } from "react-icons/ci";
import Link from "next/link";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import MobileNavLinks from "./MobileNavLinks";
import User from "./User";
import { cn } from "@/lib/utils";
import { NavLinks } from "@/lib/links";

const NavBar = async ({ theme }: { theme: "light" | "dark" }) => {
	const { isAuthenticated } = getKindeServerSession();
	const auth = await isAuthenticated();

	return (
		<section className="max-w-7xl mx-auto">
			<div
				className={cn(
					"flex space-x-4 items-center justify-between backdrop-blur-xs min-[1194px]:justify-center h-11 left-[50%] -translate-[50%] fixed w-full top-5.5",
					theme === "dark"
						? "bg-[#161617cc] text-white"
						: "bg-white text-neutral-800"
				)}>
				<Link href={"/"} className="flex items-center py-1 ml-2">
					<BsApple
						className={cn(
							"size-4.5",
							theme === "dark" ? "text-white" : "text-black"
						)}
					/>
				</Link>
				<ul
					className={cn(
						"hidden min-[1194px]:flex  items-center",
						theme === "dark" ? "text-neutral-300 " : "text-neutral-700 "
					)}>
					{NavLinks.map((link: { name: string; url: string }) => (
						<li key={link.name} className="inline-block">
							<Link
								href={link.url}
								className={cn(
									"navLink mx-5 leading-0",
									theme === "dark"
										? "hover:text-neutral-100"
										: "hover:text-neutral-900"
								)}>
								{link.name}
							</Link>
						</li>
					))}
				</ul>

				<div className="flex items-center mr-2">
					<Link href={"/"}>
						<ShoppingBag className="navLink mx-5" name="Shopping Bag" />
					</Link>

					<div>
						{auth ? (
							<User />
						) : (
							<LoginLink>
								<CiLogin className="navLink leading-0 text-xl" />
							</LoginLink>
						)}
					</div>

					<MobileNavLinks theme={theme} />
				</div>
			</div>
		</section>
	);
};

export default NavBar;
