import { getSingleCourse } from "@/services/courses/single-course";
import { Row } from "../shared/row";
import { CourseDetails } from "./course-details";
import { CourseReviews } from "./course-reviews";
// import { RelatedCourses } from "./related-courses";
import { CourseSideBar } from "./side-bar";

type IProps = {
  courseId: number;
};
export const SingleCoursePage = async (props: IProps) => {
  const course = await getSingleCourse(props.courseId);

  console.log({
    course,
  });
  return (
    <div className="pb-16 pt-8">
      <Row className="flex flex-col gap-5 lg:flex-row">
        <CourseDetails className="basis-9/12" course={course} />
        <CourseSideBar className="basis-3/12" />
      </Row>
      {/* <Row>
        <RelatedCourses />
      </Row> */}
      <Row>
        <CourseReviews courseId={props.courseId} />
      </Row>
    </div>
  );
};
