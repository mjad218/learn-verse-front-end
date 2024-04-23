import { Review } from "@/types/review.type";

type IProps = {
  review: Review;
};
export const SingleReview = (props: IProps) => {
  return (
    <div className="flex flex-col gap-1">
      <h1></h1>
      <p>{props?.review?.content}</p>
      <span>
        {props?.review?.stars ?? 0}
        {` Stars`}
      </span>
    </div>
  );
};
