import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "../../ui/button";

const ContinuityBanner = () => {
	return (
		<div className="h-[400px] sm:h-[600px] flex flex-col justify-center items-center text-center px-4 overflow-hidden z-0 relative bg-black continuityBannerBg">
			<div className="absolute top-2 w-full ">
				<h1 className="text-neutral-800 text-2xl min-[1172px]:text-4xl mt-1 font-semibold">
					Using them together <br /> sets them apart.
				</h1>
				<h4 className="text-neutral-800 text-lg max-w-[350px] mx-auto">
					Advanced AI performance and game-changing capabilities.
				</h4>
				<div className="flex mt-1 justify-center gap-4">
					<Link
						href={"/mac/continuity"}
						className={cn(
							"rounded-full!",
							buttonVariants({ variant: "default", size: "lg" })
						)}>
						Learn More
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ContinuityBanner;
