import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AvatarPlaceholder from "@/../public/assets/home/avatar-placeholder.png";
import Image from "next/image";

interface Props {
  src?: string;
  name?: string;
}

const DropdownAvatar = ({ src, name }: Props) => {
  return (
    <div>
      <Avatar>
        <AvatarImage src={src} />
        <AvatarFallback>
          {name ? name : <Image src={AvatarPlaceholder} alt="default avatar" />}
        </AvatarFallback>
      </Avatar>
    </div>
  );
};

export default DropdownAvatar;
