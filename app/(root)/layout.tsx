import NavBar from "@/components/shared/NavBar";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<header className="bg-[#161617cc] relative z-10">
				<NavBar />
			</header>
			<main>{children}</main>
		</>
	);
};

export default layout;
