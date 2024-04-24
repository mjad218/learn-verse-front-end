"use client";
import { Review } from "@/types/review.type";
import ReactStars from "react-stars";

type IProps = {
  review: Review;
};
export const SingleReview = (props: IProps) => {
  return (
    <div className="flex flex-col gap-1 rounded-xl bg-slate-300 p-2">
      <h1>{props?.review?.student?.firstName}</h1>
      <p>{props?.review?.content}</p>
      <ReactStars
        half
        edit={false}
        size={20}
        value={props?.review?.n_stars ?? 0}
      />
      stars,
    </div>
  );
};
