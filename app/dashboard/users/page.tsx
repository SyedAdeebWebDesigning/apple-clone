import FallbackTable from "@/components/shared/FallbackTable";
import UserTable from "@/components/shared/UserTable";
import { getAllUsers } from "@/lib/actions/user.action";
import { Suspense } from "react";

const page = () => {
	return (
		<div>
			<Suspense fallback={<FallbackTable />}>
				<AllUsers />
			</Suspense>
		</div>
	);
};

export default page;

const AllUsers = async () => {
	const users = await getAllUsers();

	if (users.success) {
		return (
			<div>
				<UserTable users={users.users} />
			</div>
		);
	}

	return <div>Error: {users.message}</div>;
};
