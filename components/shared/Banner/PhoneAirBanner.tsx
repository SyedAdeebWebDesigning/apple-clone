import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../../ui/button";
import { cn } from "@/lib/utils";

const PhoneAirBanner = () => {
	return (
		<div className="h-[500px] sm:h-[650px] flex flex-col justify-center items-center bg-[#f6f6f8] text-center px-4 overflow-hidden z-0 relative airBannerBg">
			<div className="absolute bottom-0 left-0 right-0 flex justify-center min-[1172px]:hidden">
				<div className="relative h-[500px] sm:h-[700px] flex items-center justify-center w-full px-10">
					<Image
						src="/assets/banner/air-banner-2.webp"
						alt="Hero Banner 2"
						fill
						priority
						className="w-auto h-auto object-cover"
					/>
				</div>
			</div>
			<div className="absolute -top-12 min-[1172px]:top-30 w-full ">
				<h1 className="text-neutral-800 min-[1172px]:text-5xl text-4xl min-[1172px]:mt-0 mt-20 font-semibold">
					iPhone Air
				</h1>
				<h4 className="text-neutral-800 md:text-2xl min-[1172px]:text-4xl mt-2 min-[320px]:text-lg text-xs leading-2">
					The thinnest iPhone ever made.
				</h4>
				<h4 className="text-neutral-800 md:text-2xl min-[1172px]:text-4xl mt-2 min-[320px]:text-lg text-xs">
					With the power of Pro inside.
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

export default PhoneAirBanner;
