import { getSingleCourse } from "@/services/courses/single-course";
import { Row } from "../shared/row";
import { CourseDetails } from "./course-details";
import { CourseReviews } from "./course-reviews";
import { RelatedCourses } from "./related-courses";
import { CourseSideBar } from "./side-bar";
import { CourseSchema } from "@/types/course.type";

type IProps = {
  courseId: number;
};
export const SingleCoursePage = async (props: IProps) => {
  const res = await getSingleCourse(props.courseId);

  if (!res) {
    console.log(res);
    return null;
  }

  const { data, course } = res;
  console.log({
    data,
    course,
    schema: CourseSchema.safeParse(data),
  });
  return (
    <div className="pb-16 pt-8">
      {props.courseId}
      {}
      <Row className="flex flex-col gap-5 lg:flex-row">
        <CourseDetails className="basis-9/12" />
        <CourseSideBar className="basis-3/12" />
      </Row>
      <Row>
        <RelatedCourses />
      </Row>
      <Row>
        <CourseReviews />
      </Row>
    </div>
  );
};
