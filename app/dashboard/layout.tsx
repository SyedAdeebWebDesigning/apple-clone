import { ReactNode } from "react";
import { checkAdminAccess } from "@/lib/utils";
import { redirect } from "next/navigation";
import Sidebar from "@/components/shared/Sidebar";
import MobileSidebar from "@/components/shared/MobileSidebar";
import DashboardTitle from "@/components/shared/DashboardTitle";

const layout = async ({ children }: { children: ReactNode }) => {
	const adminAccess = await checkAdminAccess();
	if (!adminAccess) {
		return redirect("/");
	}

	return (
		<main className="grid grid-cols-5">
			<section className="xl:col-span-1 min-h-screen w-full col-span-0 hidden xl:block bg-white border-r border-neutral-200">
				<Sidebar />
			</section>
			<section className="w-full col-span-5 xl:col-span-4 bg-neutral-100 p-4">
				<header className="flex items-center justify-between ">
					<h1 className="text-3xl font-bold mb-4">
						<DashboardTitle />
					</h1>
					<MobileSidebar />
				</header>
				{children}
			</section>
		</main>
	);
};

export default layout;
