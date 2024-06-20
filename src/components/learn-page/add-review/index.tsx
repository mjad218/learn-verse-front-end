"use client";
import { Input } from "@/components/ui/input";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { useState } from "react";

type IProps = {
  courseId?: number | undefined | string;
};
export const AddReview = (props: IProps) => {
  const [text, setText] = useState("");
  props.courseId;
  const [rating, setRating] = useState(0); // Initial value

  return (
    <div>
      <h2 className="pb-5 pt-1 font-dmSerif text-2xl">Add Review</h2>
      {text}
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="text">Text</label>
          <Input
            type="text"
            id="text"
            value={text}
            onChange={(e) => setText(e?.target?.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          {rating}
          <label htmlFor=""> Stars</label>
          <Rating
            style={{ maxWidth: 250 }}
            value={rating}
            onChange={setRating}
          />
        </div>
      </div>
    </div>
  );
};
