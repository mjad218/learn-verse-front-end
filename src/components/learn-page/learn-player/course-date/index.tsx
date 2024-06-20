import { CourseDescription } from "@/components/single-course-page/course-details/course-description";
import { CourseTitle } from "@/components/single-course-page/course-details/course-title";
import { getSingleCourse } from "@/services/courses/single-course";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

type IProps = {
  courseId?: number | undefined | string;
};
export const CourseData = async (props: IProps) => {
  let token: string | null = "";
  try {
    const nextCookies = cookies();
    token = nextCookies.get("token")?.value ?? null;
    if (!token) throw "not logged in";
  } catch (error) {}
  const course = await getSingleCourse(props.courseId, token);
  if (!course) notFound();
  return (
    <div>
      <CourseTitle course={course} />
      <CourseDescription course={course} />
    </div>
  );
};
