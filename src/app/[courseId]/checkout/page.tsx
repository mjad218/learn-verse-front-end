import CheckoutFormContainer from "@/components/single-course-page/course-checkout/CheckoutFormContainer";
import { getSingleCourse } from "@/services/courses/single-course";
import { cookies } from "next/headers";

type Props = {
  params: { courseId: string };
};

const page = async ({ params }: Props) => {
  const courseId = params.courseId;
  let token: string | null = "";
  try {
    const nextCookies = cookies();
    token = nextCookies.get("token")?.value ?? null;
    if (!token) throw "not logged in";
  } catch (error) {}

  const course = await getSingleCourse(courseId, token);
  return (
    <div className="my-4 flex items-center justify-center">
      <CheckoutFormContainer courseInfo={course} />
    </div>
  );
};

export default page;
