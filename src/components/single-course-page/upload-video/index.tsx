import { getSingleCourse } from "@/services/courses/single-course";
import { cookies } from "next/headers";
import { UploadVideoForm } from "./upload-form";
import { CourseTitle } from "../course-details/course-title";
import { CourseDescription } from "../course-details/course-description";
import { Row } from "@/components/shared/row";

type IProps = {
  courseId: number | string | undefined;
};
export const UploadVideoPage = async (props: IProps) => {
  let token: string | null = "";
  try {
    const nextCookies = cookies();
    token = nextCookies.get("token")?.value ?? null;
    if (!token) throw "not logged in";
  } catch (error) {}
  const course = await getSingleCourse(props.courseId, token);
  // if (!course) notFound();

  console.log({
    course,
  });

  return (
    <Row>
      <CourseTitle course={course} />
      <CourseDescription course={course} />
      <UploadVideoForm course={course} />
    </Row>
  );
};
