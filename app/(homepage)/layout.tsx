import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<header className="bg-[#161617cc] relative z-10">
				<NavBar theme="dark" />
			</header>
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default layout;
