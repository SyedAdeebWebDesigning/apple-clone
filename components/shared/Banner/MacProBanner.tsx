import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "../../ui/button";

const MacProBanner = () => {
	return (
		<div className="h-[400px] sm:h-[600px] flex flex-col justify-center items-center text-center px-4 overflow-hidden z-0 relative bg-black macBannerBg">
			<div className="absolute top-2 w-full ">
				<h1 className="text-white  text-4xl mt-2 sm:mt-10 font-semibold">
					MacBook Pro 14
				</h1>
				<h4 className="text-white text-xl mt-2">Supercharged by M5</h4>
				<div className="flex mt-5 justify-center gap-4">
					<Link
						href={"/mac/macbook-pro"}
						className={cn(
							"rounded-full!",
							buttonVariants({ variant: "default", size: "lg" })
						)}>
						Learn More
					</Link>
					<Link
						href={"/store/macbook-pro"}
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

export default MacProBanner;
