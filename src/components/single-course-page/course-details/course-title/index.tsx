import { Course } from "@/types/course.type";

type IProps = {
  course?: Course | null;
};

export const CourseTitle = (props: IProps) => {
  props.course;
  return (
    <h1 className="mx-0 my-0 px-0 pb-4 pt-7 text-3xl font-bold">
      {props.course?.courseName}
    </h1>
  );
};
