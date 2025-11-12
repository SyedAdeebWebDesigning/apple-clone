"use client";

import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { CiLogin } from "react-icons/ci";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoginButton() {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setMounted(true);
	}, []);

	if (!mounted) return null; // ✅ avoid SSR mismatch

	const currentURL =
		searchParams.toString().length > 0
			? `${pathname}?${searchParams.toString()}`
			: pathname;

	return (
		<LoginLink postLoginRedirectURL={currentURL}>
			<CiLogin className="navLink leading-0 text-xl cursor-pointer" />
		</LoginLink>
	);
}
