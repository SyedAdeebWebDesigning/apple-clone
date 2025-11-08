import { getUserByKindeId } from "@/lib/actions/user.action";
import { getKindeUserIdUncached } from "@/lib/utils";
import UserButton from "./UserButton";
import { User as IUser } from "@prisma/client";

const User = async () => {
	const kindeId = await getKindeUserIdUncached();
	const user: IUser | null = kindeId ? await getUserByKindeId(kindeId) : null; // cached by id

	return (
		<div>
			<UserButton user={user} />
		</div>
	);
};

export default User;
