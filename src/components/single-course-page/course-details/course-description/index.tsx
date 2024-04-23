import { Course } from "@/types/course.type";

type IProps = {
  course?: Course | null;
};
export const CourseDescription = (props: IProps) => {
  props.course;

  return <div className="my-0 pt-7">{props.course?.description}</div>;
};
