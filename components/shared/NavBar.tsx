import { BsBag as ShoppingBag } from "react-icons/bs";
import { CiLogin } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";

import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import MobileNavLinks from "./MobileNavLinks";
import User from "./User";

export const Links = [
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

const NavBar = async () => {
	const { isAuthenticated } = getKindeServerSession();
	const auth = await isAuthenticated(); // <-- CALL the function

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

					<div>
						{auth ? (
							<User />
						) : (
							<LoginLink>
								<CiLogin className="navLink leading-0 text-xl" />
							</LoginLink>
						)}
					</div>

					<MobileNavLinks />
				</div>
			</div>
		</section>
	);
};

export default NavBar;
