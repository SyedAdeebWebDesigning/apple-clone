import { CategoryBannerLinks } from "@/lib/links";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryBanner = () => {
	return (
		<div className=" overflow-scroll">
			<div className="flex gap-2  overflow-x-auto snap-x snap-mandatory scroll-smooth touch-pan-x [-webkit-overflow-scrolling:touch]  [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
				{CategoryBannerLinks.map((item) => (
					<Link
						key={item.name}
						href={item.url}
						className=" relative w-[136px] h-[146px] shrink-0 snap-center flex flex-col items-center p-2">
						<Image
							src={item.image}
							alt={item.name}
							width={120}
							height={78}
							className="object-cover rounded-lg"
						/>
						<div className="absolute bottom-6 flex items-center justify-center text-neutrals-800 bg-opacity-50 hover:bg-opacity-75">
							<span className="text-base font-medium">{item.name}</span>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default CategoryBanner;
