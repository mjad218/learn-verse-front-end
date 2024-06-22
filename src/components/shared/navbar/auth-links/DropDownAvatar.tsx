"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AvatarPlaceholder from "@/../public/assets/home/avatar-placeholder.png";
import Image from "next/image";
import { useCurrentUser } from "@/components/current-user/context";

const DropdownAvatar = () => {
  const { user } = useCurrentUser();
  return (
    <div>
      <Avatar>
        <AvatarImage src={`data:image/jpg;base64,${user?.image ?? ""}`} />
        <AvatarFallback>
          <Image src={AvatarPlaceholder} alt="avatar fallback" />
        </AvatarFallback>
      </Avatar>
    </div>
  );
};

export default DropdownAvatar;
