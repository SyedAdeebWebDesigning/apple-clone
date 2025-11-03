import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const PhoneProBanner = () => {
	return (
		<div className="h-[692px] flex flex-col justify-center items-center text-center px-4 overflow-hidden z-0 relative bg-black heroBannerBg">
			<div className="absolute bottom-0 left-0 right-0 flex justify-center min-[600px]:hidden">
				<Image
					src="/assets/banner/hero-banner-2.webp"
					alt="Hero Banner 2"
					width={1920}
					height={1080}
					priority
					className="w-auto h-auto max-w-none"
					style={{
						objectFit: "contain",
					}}
				/>
			</div>
			<div className="absolute top-30 w-full ">
				<h1 className="text-white min-[600px]:text-7xl text-4xl min-[600px]:mt-0 mt-20 font-semibold">
					iPhone 17 Pro
				</h1>
				<h4 className="text-white text-2xl min-[600px]:text-4xl mt-2">
					All out Pro.
				</h4>
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
