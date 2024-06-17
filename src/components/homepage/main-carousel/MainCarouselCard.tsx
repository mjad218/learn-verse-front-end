"use client";
import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";
import MainCarouselAvatar from "./MainCarouselAvatar";

type IProps = {
  image: string;
  title: string;
  instructor: string;
  slug: string;
};

const MainCarouselCard = ({ image, title, instructor, slug }: IProps) => {
  slug;
  return (
    <div className="font-roboto">
      <Card
        className={`relative mx-3 h-96 w-full cursor-pointer bg-cover rounded-2xl overflow-hidden `}
        style={{
          backgroundImage: `url('/${image}')`,
        }}
      >
        <CardHeader className="absolute left-0 right-0 top-8 bg-zinc-800/80">
          <div className="flex flex-col items-center justify-center gap-4">
            <CardTitle className="font-bold text-gray-200">{title}</CardTitle>
            <MainCarouselAvatar />
            <CardDescription className="text-2xl font-medium text-gray-200">
              {instructor}
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};

export default MainCarouselCard;
