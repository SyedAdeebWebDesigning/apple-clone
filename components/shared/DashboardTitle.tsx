"use client";

import { usePathname } from "next/navigation";
import React from "react";

const DashboardTitle = () => {
	const pathname = usePathname();
	const path = `${process.env.NEXT_PUBLIC_KINDE_SITE_URL}${pathname}`;
	return <div>{path}</div>;
};

export default DashboardTitle;
