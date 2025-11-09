import AirPodsProBanner from "@/components/shared/Banner/AirPodsProBanner";
import ContinuityBanner from "@/components/shared/Banner/ContinuityBanner";
import MacAirBanner from "@/components/shared/Banner/MacAirBanner";
import MacProBanner from "@/components/shared/Banner/MacProBanner";
import PadAirBanner from "@/components/shared/Banner/PadAirBanner";
import PadProBanner from "@/components/shared/Banner/PadProBanner";
import PhoneAirBanner from "@/components/shared/Banner/PhoneAirBanner";
import PhoneProBanner from "@/components/shared/Banner/PhoneProBanner";
import TradeInBanner from "@/components/shared/Banner/TradeInBanner";
import WatchSeries from "@/components/shared/Banner/WatchSeries";
import NavBar from "@/components/shared/NavBar";

export default function Home() {
	return (
		<main>
			<header className="bg-[#161617cc] relative z-10">
				<NavBar theme="dark" />
			</header>
			<section>
				<div className="-mt-12">
					<PhoneProBanner />
				</div>
				<div className="mt-4">
					<PhoneAirBanner />
				</div>
				<div className="mt-4">
					<PadAirBanner />
				</div>
				{/* Grid Banners */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
					<AirPodsProBanner />
					<WatchSeries />
					<PadProBanner />
					<MacProBanner />
					<MacAirBanner />
					<TradeInBanner />
				</div>
			</section>
		</main>
	);
}
