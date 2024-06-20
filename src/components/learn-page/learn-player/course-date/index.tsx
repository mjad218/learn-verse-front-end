import { CourseDescription } from "@/components/single-course-page/course-details/course-description";
import { CourseTitle } from "@/components/single-course-page/course-details/course-title";
import { getSingleCourse } from "@/services/courses/single-course";

type IProps = {
  courseId?: number | undefined | string;
};
export const CourseData = async (props: IProps) => {
  const course = await getSingleCourse(props.courseId);
  return (
    <div>
      <CourseTitle course={course} />
      <CourseDescription course={course} />
    </div>
  );
};
