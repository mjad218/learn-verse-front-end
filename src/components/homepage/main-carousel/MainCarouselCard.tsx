import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";

import MainCarouselAvatar from "./MainCarouselAvatar";
const MainCarouselCard = () => {
  return (
    <div>
      <Card className="relative mx-auto h-96 max-w-6xl bg-[url('/assets/TempImages/TempCourse.jpg')] bg-cover">
        <CardHeader className="absolute left-0 right-0 top-8 bg-zinc-800/50">
          <div className="flex flex-col items-center justify-center gap-4">
            <CardTitle className="font-bold text-gray-200">
              Learn JavaScript by doing
            </CardTitle>
            <MainCarouselAvatar />
            <CardDescription className="text-2xl font-medium text-gray-200">
              {"Instructor"}
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};

export default MainCarouselCard;
