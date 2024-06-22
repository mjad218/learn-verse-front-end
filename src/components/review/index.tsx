"use client";
import { Review } from "@/types/review.type";
import ReactStars from "react-stars";

type IProps = {
  review: Review;
};
export const SingleReview = (props: IProps) => {
  return (
    <div className="flex flex-col gap-1 rounded-xl bg-slate-300 p-2">
      <h1 className="m-0 p-0 pb-5">{props?.review?.user?.firstName}</h1>
      <p>{props?.review?.content}</p>
      <div className="flex items-center gap-2">
        <ReactStars
          half
          edit={false}
          size={20}
          value={props?.review?.stars ?? 0}
        />
        stars
      </div>
    </div>
  );
};
