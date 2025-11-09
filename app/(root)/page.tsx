import PhoneAirBanner from "@/components/shared/PhoneAirBanner";
import PhoneProBanner from "@/components/shared/PhoneProBanner";

export default function Home() {
	return (
		<section>
			<div className="-mt-12">
				<PhoneProBanner />
			</div>
			<div className="mt-2">
				<PhoneAirBanner />
			</div>
		</section>
	);
}
