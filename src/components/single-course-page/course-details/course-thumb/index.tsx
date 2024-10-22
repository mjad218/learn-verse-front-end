import Image from "next/image";
import { Course } from "@/types/course.type";

type IProps = {
  course?: Course | null;
};
export const CourseThumbnail = (props: IProps) => {
  return (
    <div className="h-96 w-full overflow-hidden rounded-2xl">
      <Image
        src={`data:image/jpg;base64,${props?.course?.image ?? ""}` ?? ""}
        width={900}
        height={600}
        alt="Course thumbnail"
        className="block h-full w-full object-cover"
      />
    </div>
  );
};
