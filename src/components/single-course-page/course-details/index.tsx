import { cn } from "@/lib/utils";
import { CourseDescription } from "./course-description";
import { CourseMetaData } from "./course-meta-data";
import { CourseThumbnail } from "./course-thumb";
import { CourseTitle } from "./course-title";

type IProps = {
  className?: string | undefined;
};

export const CourseDetails = (props: IProps) => {
  return (
    <div className={cn("flex flex-col gap-3", props.className)}>
      <CourseThumbnail />
      <CourseTitle />
      <CourseMetaData />
      <CourseDescription />
    </div>
  );
};
