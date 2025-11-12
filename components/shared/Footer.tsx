import Link from "next/link";
import { Separator } from "../ui/separator";
import FooterText from "./FooterText";
import {
	AccountLinks,
	AppleStoreLinks,
	ContactLinks,
	EntertainmentLinks,
	NavLinks,
} from "@/lib/links";

const Footer = () => {
	return (
		<footer className="bg-neutral-100 py-5">
			<div className="max-w-5xl mx-auto">
				<FooterText />
				<Separator className="my-10 bg-neutral-400" />
				<div className="grid grid-cols-2 md:grid-cols-5 place-items-center md:place-items-start place-content-center gap-8">
					<div className="md:mr-auto">
						<h5 className="text-sm font-semibold">Shop and learn</h5>
						<nav>
							<ul className="flex flex-col gap-2 text-xs mt-2">
								{NavLinks.map((link: { name: string; url: string }) => (
									<li key={link.name} className="text-xs ">
										<Link href={link.url} className="hover:underline">
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</nav>
					</div>
					<div className="md:mx-[20%]">
						<h5 className="text-sm font-semibold">Entertainment</h5>
						<nav>
							<ul className="flex flex-col gap-2 text-xs mt-2">
								{EntertainmentLinks.map(
									(link: { name: string; url: string }) => (
										<li key={link.name} className="text-xs ">
											<Link href={link.url} className="hover:underline">
												{link.name}
											</Link>
										</li>
									)
								)}
							</ul>
						</nav>
					</div>
					<div className="md:ml-[25%]">
						<h5 className="text-sm font-semibold">Account</h5>
						<nav>
							<ul className="flex flex-col gap-2 text-xs mt-2">
								{AccountLinks.map((link: { name: string; url: string }) => (
									<li key={link.name} className="text-xs ">
										<Link href={link.url} className="hover:underline">
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</nav>
					</div>
					<div className="md:ml-[40%]">
						<h5 className="text-sm font-semibold">Apple store</h5>
						<nav>
							<ul className="flex flex-col gap-2 text-xs mt-2">
								{AppleStoreLinks.map((link: { name: string; url: string }) => (
									<li key={link.name} className="text-xs ">
										<Link href={link.url} className="hover:underline">
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</nav>
					</div>
					<div className="md:ml-auto">
						<h5 className="text-sm font-semibold">Contact</h5>
						<nav>
							<ul className="flex flex-col gap-2 text-xs mt-2">
								{ContactLinks.map((link: { name: string; url: string }) => (
									<li key={link.name} className="text-xs ">
										<Link href={link.url} className="hover:underline">
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</nav>
					</div>
				</div>

				<p className="text-xs font-extralight text-justify mx-2 sm:mx-0 mt-10">
					This is a clone website made for educational purposes only. All
					product names, logos, and brands are property of their respective
					owners. No affiliation or endorsement is implied.
					<br />
					Payment methods shown are for demonstration purposes only and do not
					represent real payment options.
				</p>
				<Separator className="my-10 bg-neutral-400" />
				<div className="flex items-center justify-between flex-col sm:flex-row">
					<p className="text-xs font-extralight">
						&copy; 2025 Apple Inc. All rights reserved.
					</p>
					<p className="text-xs font-extralight mt-2 sm:mt-0">India</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
