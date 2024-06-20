import { getSingleCourse } from "@/services/courses/single-course";
import { Row } from "../shared/row";
import { CourseDetails } from "./course-details";
import { CourseReviews } from "./course-reviews";
// import { RelatedCourses } from "./related-courses";
import { CourseSideBar } from "./side-bar";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";

type IProps = {
  courseId: number;
};
export const SingleCoursePage = async (props: IProps) => {
  let token: string | null = "";
  try {
    const nextCookies = cookies();
    token = nextCookies.get("token")?.value ?? null;
    if (!token) throw "not logged in";
  } catch (error) {}
  const course = await getSingleCourse(props.courseId, token);
  if (!course) notFound();

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
