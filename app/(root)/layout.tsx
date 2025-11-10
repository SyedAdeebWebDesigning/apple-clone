import Footer from "@/components/shared/Footer";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
	return (
		<main>
			{children}
			<Footer />
		</main>
	);
};

export default layout;
