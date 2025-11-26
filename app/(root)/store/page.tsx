import CategoryBanner from "@/components/shared/Banner/CategoryBanner";
import GroupBanner from "@/components/shared/GroupBanner";
import React from "react";

const page = () => {
	return (
		<section className="mt-10">
			<div className="py-5 text-center">
				<p className="text-xs sm:text-sm mx-2">
					Get up to 6 months of No Cost EMI Footnote plus up to ₹10000.00
					instant cashback Footnote on selected products with eligible cards.
					See offers
				</p>
			</div>
			<div className="bg-[#f5f5f7]">
				<div className=" flex flex-col lg:flex-row mx-10 lg:mx-[140px] items-start lg:items-center justify-start lg:justify-between py-20">
					<h1 className="text-4xl lg:text-7xl font-semibold">Store</h1>
					<div className="text-xl lg:text-3xl font-semibold text-left lg:text-right mt-1">
						<h6>
							The best way to buy the <br /> products you love.
						</h6>
					</div>
				</div>
			</div>
			<div className="bg-[#f5f5f7] ">
				{/* Category Banner */}
				<CategoryBanner />
				<GroupBanner />
			</div>
		</section>
	);
};

export default page;
