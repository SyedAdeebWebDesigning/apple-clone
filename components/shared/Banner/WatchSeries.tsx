import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "../../ui/button";
import { BsApple } from "react-icons/bs";
import Image from "next/image";

const WatchSeries = () => {
	return (
		<div className="h-[400px] sm:h-[600px] flex flex-col justify-center items-center text-center px-4 overflow-hidden z-0 relative bg-[#f6f6f8] watchSeriesBg">
			<div className="absolute bottom-0 left-0 right-0 flex justify-center min-[1172px]:hidden">
				<div className="relative h-[300px] min-[600px]:h-[500px] flex items-center justify-center w-full px-10">
					<Image
						src="/assets/banner/watch-series-11-banner.webp"
						alt="Watch Series 11 Banner"
						fill
						priority
						className="w-auto h-auto object-cover"
					/>
				</div>
			</div>
			<div className="absolute top-2 w-full ">
				<h1 className="text-neutral-800  text-4xl mt-10 font-semibold flex items-center justify-center">
					<BsApple />
					Watch Series 11
				</h1>
				<h4 className="text-neutral-800 text-xl mt-2">Supercharged by M5</h4>
				<div className="flex mt-5 justify-center gap-4">
					<Link
						href={"/watch/watch-series-11"}
						className={cn(
							"rounded-full!",
							buttonVariants({ variant: "default", size: "lg" })
						)}>
						Learn More
					</Link>
					<Link
						href={"/store/watch-series-11"}
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

export default WatchSeries;
