import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

const PhoneProBanner = () => {
	return (
		<div className="h-[692px] heroBannerBg flex flex-col justify-center items-center text-center px-4 overflow-hidden z-0 relative">
			<div className="absolute top-30 w-full">
				<h1 className="text-white xl:text-6xl lg:text-5xl md:text-4xl font-semibold">
					iPhone 17 Pro
				</h1>
				<h3 className="text-white lg:text-4xl md:text-3xl mt-2">
					All out Pro.
				</h3>
				<div className="flex mt-5 justify-center gap-4">
					<Link
						href={"/iphone/17-pro"}
						className={cn(
							"rounded-full!",
							buttonVariants({ variant: "default", size: "lg" })
						)}>
						Learn More
					</Link>
					<Link
						href={"/iphone/17-pro"}
						className={cn(
							"rounded-full! border-primary! border-2! bg-transparent! hover:bg-primary! text-primary! hover:text-white! font-semibold!",
							buttonVariants({ variant: "default", size: "lg" })
						)}>
						Buy
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PhoneProBanner;
