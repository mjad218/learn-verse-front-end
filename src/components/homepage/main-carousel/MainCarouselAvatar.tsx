import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Props {
  src: string;
  alt: string;
}

const MainCarouselAvatar = ({ src, alt }: Props) => {
  return (
    <div>
      <Avatar>
        <AvatarImage src={src} />
        <AvatarFallback>{alt}</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default MainCarouselAvatar;
