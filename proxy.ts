import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";

export default withAuth(async function middleware(req: Request) {}, {
	publicPaths: [
		"/",
		"/store",
		"/store/:path*",
		"/products/:path*",
		"/collections/:path*",
		"/about",
		"/contact",
		"/api/webhooks/kinde", // ✅ Must stay public
	],
});

export const config = {
	matcher: ["/((?!_next|.*\\..*|api/webhooks/kinde).*)"],
};
