import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AvatarPlaceholder from "@/../public/assets/home/avatar-placeholder.png";
import Image from "next/image";

interface Props {
  src?: string;
  alt?: string;
}

const MainCarouselAvatar = ({ src, alt }: Props) => {
  return (
    <div>
      <Avatar>
        <AvatarImage src={src} />
        <AvatarFallback>
          {alt ? alt : <Image src={AvatarPlaceholder} alt="default avatar" />}
        </AvatarFallback>
      </Avatar>
    </div>
  );
};

export default MainCarouselAvatar;
