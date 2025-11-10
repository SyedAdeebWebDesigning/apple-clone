import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";

export default withAuth(async function middleware(req: Request) {}, {
	// Middleware still runs on all routes, but doesn't protect the blog route
	publicPaths: [
		"/",
		"/store",
		"/store/:path*",
		"/products/:path*",
		"/collections/:path*",
		"/about",
		"/contact",
		"/api/kinde-webhook",
	],
});

export const config = {
	matcher: ["/((?!_next|.*\\..*|api/kinde-webhook).*)"],
};
