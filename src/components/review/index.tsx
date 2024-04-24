import { Review } from "@/types/review.type";

type IProps = {
  review: Review;
};
export const SingleReview = (props: IProps) => {
  return (
    <div className="flex flex-col gap-1 rounded-xl bg-slate-300 p-2">
      <h1>{props?.review?.student?.firstName}</h1>
      <p>{props?.review?.content}</p>
      <span>⭐⭐⭐⭐⭐ {props?.review?.stars ?? 0} stars,</span>
    </div>
  );
};
