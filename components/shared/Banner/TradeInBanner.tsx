import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { BsApple } from "react-icons/bs";

const TradeInBanner = () => {
	return (
		<div className="h-[400px] sm:h-[600px] flex flex-col justify-center items-center text-center px-4 overflow-hidden z-0 relative bg-black TradeInBannerBg">
			<div className="absolute top-2 w-full ">
				<h1 className="text-neutral-800 text-2xl min-[1172px]:text-4xl mt-2 sm:mt-10 font-semibold">
					<span className="flex items-center justify-center">
						<BsApple /> Trade In
					</span>
				</h1>
				<h4 className="text-neutral-800 text-lg max-w-[350px] mx-auto mt-2">
					Upgrade and save. <br /> It&apos;s that easy.
				</h4>
				<div className="flex mt-2 justify-center gap-4">
					<Link
						href={"/store/trade-in"}
						className={cn(
							"rounded-full!",
							buttonVariants({ variant: "default", size: "lg" })
						)}>
						Get Your Estimate
					</Link>
				</div>
			</div>
		</div>
	);
};

export default TradeInBanner;
