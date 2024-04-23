import { ListReviews } from "@/components/list-reviews";
import { getCourseReviews } from "@/services/review/single-review";

type IProps = {
  courseId: number | undefined;
};
export const CourseReviews = async (props: IProps) => {
  const reviews = await getCourseReviews(props.courseId);
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
