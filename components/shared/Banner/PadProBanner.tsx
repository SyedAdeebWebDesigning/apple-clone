import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "../../ui/button";
import Image from "next/image";

const PadProBanner = () => {
	return (
		<div className="h-[400px] sm:h-[600px] flex flex-col justify-center items-center text-center px-4 overflow-hidden z-0 relative bg-black iPadProBannerBg">
			<div className="absolute bottom-0 left-0 right-0 flex justify-center min-[1172px]:hidden">
				<div className="relative h-[300px] min-[600px]:h-[500px] flex items-center justify-center w-full px-10">
					<Image
						src="/assets/banner/ipad-pro-banner.webp"
						alt="Watch Series 11 Banner"
						fill
						priority
						className="w-auto h-auto object-cover"
					/>
				</div>
			</div>
			<div className="absolute top-2 w-full ">
				<h1 className="text-white text-2xl min-[1172px]:text-4xl mt-10 font-semibold">
					iPad Pro
				</h1>
				<h4 className="text-white text-xl mt-2 max-w-[350px] mx-auto">
					Apple devices work together so seamlessly, it almost feels like magic.
				</h4>
				<div className="flex mt-5 justify-center gap-4">
					<Link
						href={"/ipad/ipad-pro"}
						className={cn(
							"rounded-full!",
							buttonVariants({ variant: "default", size: "lg" })
						)}>
						Learn More
					</Link>
					<Link
						href={"/store/ipad-pro"}
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

export default PadProBanner;
