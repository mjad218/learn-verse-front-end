import { ListReviews } from "@/components/list-reviews";
import { getCourseReviews } from "@/services/review/single-review";
import { cookies } from "next/headers";

type IProps = {
  courseId: number | undefined;
};
export const CourseReviews = async (props: IProps) => {
  let token: string | null = "";
  try {
    const nextCookies = cookies();
    token = nextCookies.get("token")?.value ?? null;
    if (!token) throw "not logged in";
  } catch (error) {}
  const reviews = await getCourseReviews(props.courseId, token);
  return (
    <div>
      <h2 className="mx-0 my-0 px-0 pb-4 pt-7 text-2xl font-bold">
        Course Reviews
      </h2>
      <div>
        <ListReviews reviews={reviews ?? []} />
      </div>
    </div>
  );
};
