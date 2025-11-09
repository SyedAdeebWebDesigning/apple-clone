import Link from "next/link";
import { buttonVariants } from "../../ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const PadAirBanner = () => {
	return (
		<div className="h-[780px] flex flex-col justify-center items-center text-center px-4 overflow-hidden z-0 relative iPadAirBannerBg ">
			<div className="absolute w-full top-30 ">
				<div className="relative h-[45px] w-[200px] flex items-center justify-center mx-auto">
					<Image
						src={"/assets/logos/ipad-air.webp"}
						alt="iPad Air Logo"
						fill
						objectFit="contain"
					/>
				</div>
				<h4 className="text-neutral-800 md:text-2xl min-[1172px]:text-4xl mt-2 min-[320px]:text-lg text-xs">
					Now Supercharged by M3 chip.
				</h4>
				<div className="flex mt-5 justify-center gap-4">
					<Link
						href={"/iphone/air"}
						className={cn(
							"rounded-full!",
							buttonVariants({ variant: "default", size: "lg" })
						)}>
						Learn More
					</Link>
					<Link
						href={"/store/air"}
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

export default PadAirBanner;
