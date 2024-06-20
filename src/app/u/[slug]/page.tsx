import { User } from "@/components/current-user/context";
import { getUserById } from "@/services/users";
import Image from "next/image";

type IProps = {
  params: { slug: string };
};
const UserPage = async (props: IProps) => {
  const user: User | null = await getUserById(props.params.slug);

  return (
    <div className="flex flex-col justify-center gap-6">
      <Image
        src={`data:image/jpg;base64,${user?.image ?? ""}` ?? ""}
        alt={"User"}
        className="block h-40 w-40 overflow-hidden rounded-full"
      />
      <h2>{user?.userName}</h2>
    </div>
  );
};

export default UserPage;
