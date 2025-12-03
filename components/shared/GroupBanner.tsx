"use client";

import { useRef, useState, useEffect } from "react";
import { GroupBannerLinks } from "@/lib/links";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const GroupBanner = () => {
	const scrollRef = useRef<HTMLDivElement>(null);

	// Track visibility
	const [canScrollLeft, setCanScrollLeft] = useState(false);
	const [canScrollRight, setCanScrollRight] = useState(true);

	// Scroll by exactly 1 card (no snap-to-nearest)
	const scrollByCard = (direction: "left" | "right") => {
		if (!scrollRef.current) return;

		const container = scrollRef.current;

		// Disable CSS snap during button scroll (prevents drift)
		container.style.scrollSnapType = "none";
		setTimeout(() => {
			container.style.scrollSnapType = "";
		}, 400);

		// Get exact card width + gap
		const firstCard = container.children[0] as HTMLElement;
		if (!firstCard) return;

		const cardGap = 20; // Your gap-5 = 20px
		const cardWidth = firstCard.offsetWidth + cardGap;

		container.scrollBy({
			left: direction === "left" ? -cardWidth : cardWidth,
			behavior: "smooth",
		});
	};

	// Button visibility logic
	const checkScroll = () => {
		const container = scrollRef.current;
		if (!container) return;

		setCanScrollLeft(container.scrollLeft > 0);
		setCanScrollRight(
			container.scrollWidth - container.clientWidth - container.scrollLeft > 10
		);
	};

	useEffect(() => {
		checkScroll();
		const container = scrollRef.current;
		if (!container) return;

		container.addEventListener("scroll", checkScroll);
		window.addEventListener("resize", checkScroll);

		return () => {
			container.removeEventListener("scroll", checkScroll);
			window.removeEventListener("resize", checkScroll);
		};
	}, []);

	return (
		<div className="mt-20 relative">
			<h1 className="font-semibold lg:px-[140px] mx-3 lg:mx-0">
				The latest.{" "}
				<span className="text-neutral-500">
					Take a look at what&apos;s new right now.
				</span>
			</h1>

			{/* SCROLL CONTAINER */}
			<div
				ref={scrollRef}
				className="flex items-center justify-start gap-5 overflow-x-auto mt-4 
				snap-x snap-mandatory scroll-smooth touch-pan-x 
				[-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden 
				[-ms-overflow-style:none] [scrollbar-width:none] 
				relative lg:px-[140px] mx-2 sm:mx-0">
				{GroupBannerLinks.map((link, index) => (
					<Link
						href={link.url}
						key={index}
						className={cn(
							"shrink-0 transition-all duration-500 hover:scale-100 scale-99 relative snap-center w-[400px] h-[500px] bg-neutral-200 rounded-xl flex items-center justify-center text-neutral-500 font-medium",
							index === 0 && "ml-5 sm:ml-0"
						)}>
						{/* TEXT */}
						<div
							className={cn(
								"absolute top-10 left-10 z-10",
								link.backgroundColor === "dark"
									? "text-white"
									: "text-neutral-800"
							)}>
							<h3 className="font-semibold text-3xl">{link.title}</h3>
							<h4 className="mt-3 text-lg font-medium">
								{link.subtitle !== null && link.subtitle}
							</h4>

							{link.price !== null && (
								<p
									className={
										link.backgroundColor === "dark"
											? "text-neutral-300"
											: "text-neutral-500"
									}>
									From ₹{(link.price / 100).toLocaleString("en-IN")}.00
								</p>
							)}
						</div>

						{/* IMAGE */}
						<div className="absolute left-0 right-0 z-0 h-[500px] w-[400px] rounded-xl">
							<Image
								fill
								alt={link.title}
								src={link.image}
								className="rounded-xl object-cover"
							/>
						</div>
					</Link>
				))}
			</div>

			{/* LEFT BUTTON */}
			<div
				className="absolute top-[50%] left-5 rounded-full transition-all duration-700"
				style={{
					opacity: canScrollLeft ? 1 : 0,
					pointerEvents: canScrollLeft ? "auto" : "none",
				}}>
				<Button
					onClick={() => scrollByCard("left")}
					className="rounded-full size-14 bg-white/70 hover:bg-neutral-50 cursor-pointer"
					variant={"secondary"}>
					<ChevronLeft className="size-6 mr-1" />
				</Button>
			</div>

			{/* RIGHT BUTTON */}
			<div
				className="absolute top-[50%] right-5 rounded-full transition-all duration-700"
				style={{
					opacity: canScrollRight ? 1 : 0,
					pointerEvents: canScrollRight ? "auto" : "none",
				}}>
				<Button
					onClick={() => scrollByCard("right")}
					className="rounded-full size-14 cursor-pointer bg-white/80 hover:bg-neutral-50"
					variant={"secondary"}>
					<ChevronRight className="size-6" />
				</Button>
			</div>
		</div>
	);
};

export default GroupBanner;
