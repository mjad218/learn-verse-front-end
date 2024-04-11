import { Row } from "../shared/row";
import { CourseDetails } from "./course-details";
import { CourseReviews } from "./course-reviews";
import { RelatedCourses } from "./related-courses";
import { CourseSideBar } from "./side-bar";

type IProps = {
  slug: string;
};
export const SingleCoursePage = (props: IProps) => {
  return (
    <div className="pb-16 pt-8">
      <Row className="flex flex-col gap-5 lg:flex-row">
        <CourseDetails className=" basis-9/12" />
        <CourseSideBar className=" basis-3/12" />
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
