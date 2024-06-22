import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AvatarPlaceholder from "@/../public/assets/home/avatar-placeholder.png";
import Image from "next/image";
import { fetchUserDetails } from "@/services/users";
import { userDetailsType } from "@/types/user.type";
import { cookies } from "next/headers";

const DropdownAvatar = async () => {
  let token: string | null = "";
  try {
    const nextCookies = cookies();
    token = nextCookies.get("token")?.value ?? null;
    if (!token) throw "not logged in";
  } catch (error) {}

  const userDetails: userDetailsType = await fetchUserDetails(token);

  return (
    <div>
      <Avatar>
        <AvatarImage
          src={`data:image/jpg;base64,${userDetails?.image ?? ""}`}
        />
        <AvatarFallback>
          <Image src={AvatarPlaceholder} alt="avatar fallback" />
        </AvatarFallback>
      </Avatar>
    </div>
  );
};

export default DropdownAvatar;
