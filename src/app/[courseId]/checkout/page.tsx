import CheckoutFormContainer from "@/components/single-course-page/course-checkout/CheckoutFormContainer";
import { getSingleCourse } from "@/services/courses/single-course";

type Props = {
  params: { courseId: string };
};

const page = async ({ params }: Props) => {
  const courseId = params.courseId;
  const course = await getSingleCourse(courseId);
  return (
    <div className="my-4 flex items-center justify-center">
      <CheckoutFormContainer courseInfo={course} />
    </div>
  );
};

export default page;
