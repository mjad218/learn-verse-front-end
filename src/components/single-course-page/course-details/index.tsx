import { cn } from "@/lib/utils";
import { CourseDescription } from "./course-description";
import { CourseMetaData } from "./course-meta-data";
import { CourseThumbnail } from "./course-thumb";
import { CourseTitle } from "./course-title";
import { Course } from "@/types/course.type";

type IProps = {
  className?: string | undefined;
  course?: Course | null;
};

export const CourseDetails = (props: IProps) => {
  return (
    <div className={cn("flex flex-col gap-3", props.className)}>
      <CourseThumbnail course={props.course} />
      <CourseTitle course={props.course} />
      <CourseMetaData course={props.course} />
      <CourseDescription course={props.course} />
    </div>
  );
};
