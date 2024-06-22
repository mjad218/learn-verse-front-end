"use client";
import { useCurrentUser } from "@/components/current-user/context";
import { SingleReview } from "@/components/review";
import { Review } from "@/types/review.type";
import { AddReview } from "../../add-review";

type IProps = {
  reviews: Review[];
  courseId?: number | undefined | string;
};
export const LearnCourseReviews = (props: IProps) => {
  const { user } = useCurrentUser();

  const review = (props.reviews ?? []).find((r) => r?.user?.id === user?.id);
  if (review) return <SingleReview review={review} />;
  return <AddReview courseId={props.courseId} />;
};
