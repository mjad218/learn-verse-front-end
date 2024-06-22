"use client";
import {
  useAccessToken,
  useCurrentUser,
} from "@/components/current-user/context";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { API_URL } from "@/constants/api";
import { Review } from "@/types/review.type";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

type IProps = {
  courseId?: number | undefined | string;
};
export const AddReview = (props: IProps) => {
  const [text, setText] = useState("");
  props.courseId;
  const [rating, setRating] = useState(0); // Initial value
  const { user } = useCurrentUser();
  const { token } = useAccessToken();
  const router = useRouter();
  const onSubmit = async () => {
    try {
      const res = await fetch(`${API_URL}/reviews`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Bearer or Basic ?
        },
        body: JSON.stringify({
          content: text,
          courseId: props.courseId,
          studentId: user?.id,
          stars: rating,
        }),
      });
      if (!res.ok) throw "not ok response";
      const result: Review = await res.json();
      result;
      router.refresh();
    } catch (error) {}
  };

  return (
    <div className="pt-10">
      <h2 className="pb-5 pt-1 font-dmSerif text-2xl">Add Review</h2>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="text">Text</label>
          <Textarea
            id="text"
            value={text}
            onChange={(e) => setText(e?.target?.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor=""> Stars</label>
          <Rating
            style={{ maxWidth: 250 }}
            value={rating}
            onChange={setRating}
          />
        </div>
        <Button onClick={onSubmit}>Add Review</Button>
      </div>
    </div>
  );
};
