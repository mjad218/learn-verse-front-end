import { Review } from "@/types/review.type";
import { SingleReview } from "../review";

type IProps = {
  reviews: Review[];
};

export const ListReviews = (props: IProps) => {
  return (
    <div className="flex flex-col gap-5">
      {(props.reviews ?? []).map((r) => (
        <SingleReview key={r?.reviewId} review={r} />
      ))}
    </div>
  );
};
