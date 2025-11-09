import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const MacAirBanner = () => {
	return (
		<div className="h-[400px] sm:h-[600px] flex flex-col justify-center items-center text-center px-4 overflow-hidden z-0 relative macAirBannerBg">
			<div className="absolute top-2 w-full ">
				<h1 className="text-neutral-800  text-4xl mt-2 sm:mt-10 font-semibold">
					MacBook Air
				</h1>
				<h4 className="text-neutral-800 text-xl mt-2">
					Sky blue color. <br /> Sky high performance with M4.
				</h4>
				<div className="flex mt-5 justify-center gap-4">
					<Link
						href={"/mac/macbook-air"}
						className={cn(
							"rounded-full!",
							buttonVariants({ variant: "default", size: "lg" })
						)}>
						Learn More
					</Link>
					<Link
						href={"/store/macbook-air"}
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

export default MacAirBanner;
