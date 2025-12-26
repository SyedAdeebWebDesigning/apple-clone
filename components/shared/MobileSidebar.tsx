import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import {
	IoPhonePortraitOutline,
	IoWatchOutline,
	IoTvOutline,
} from "react-icons/io5";
import { HiMiniDeviceTablet } from "react-icons/hi2";
import { BsLaptop } from "react-icons/bs";
import { TbDeviceAirpodsCase } from "react-icons/tb";
import { Users } from "lucide-react";
import { PiBagSimple } from "react-icons/pi";
import { MdMenuOpen } from "react-icons/md";
import Link from "next/link";

const MobileSidebar = () => {
	const ProductSidebarLinks = [
		{
			label: "Mac",
			href: "/dashboard/mac",
			icon: BsLaptop,
		},
		{
			label: "iPad",
			href: "/dashboard/ipad",
			icon: HiMiniDeviceTablet,
		},
		{
			label: "iPhone",
			href: "/dashboard/iphone",
			icon: IoPhonePortraitOutline,
		},
		{
			label: "Watch",
			href: "/dashboard/watch",
			icon: IoWatchOutline,
		},
		{
			label: "Airpods",
			href: "/dashboard/airpods",
			icon: TbDeviceAirpodsCase,
		},
		{
			label: "Apple TV 4K",
			href: "/dashboard/apple_tv_4k",
			icon: IoTvOutline,
		},
	];

	const UsersSidebarLinks = [
		{
			label: "All Users",
			href: "/dashboard/users",
			icon: Users,
		},
		{
			label: "Orders",
			href: "/dashboard/orders",
			icon: PiBagSimple,
		},
	];
	return (
		<div className="">
			<Sheet>
				<SheetTrigger className="xl:hidden block rounded-full border border-neutral-300 p-2">
					<div>
						<MdMenuOpen />
					</div>
				</SheetTrigger>
				<SheetContent className="md:w-[50%]">
					<SheetTitle className="p-4 hidden">Dashboard Sidebar</SheetTitle>
					<div className="fixed w-full ">
						<nav className="relative">
							<h1 className="text-2xl font-bold p-4 mt-8"></h1>
							<div className="w-[19.9%]">
								<p className="px-4 text-lg text-neutral-500 font-semibold">
									Products
								</p>
								{ProductSidebarLinks.map((link) => (
									<Link
										href={link.href}
										key={link.href}
										className="flex items-center gap-2 py-4 ml-6 hover:bg-neutral-100 w-[200%]">
										{link.label}
									</Link>
								))}
								<p className="px-4 text-lg text-neutral-500 font-semibold">
									Users
								</p>
								{UsersSidebarLinks.map((link) => (
									<Link
										href={link.href}
										key={link.href}
										className="flex items-center gap-2 py-4 ml-6 hover:bg-neutral-100 w-full">
										{link.label}
									</Link>
								))}
							</div>
						</nav>
					</div>
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default MobileSidebar;
