"use client";
import { Course } from "@/types/course.type";
import ReactStars from "react-stars";

type IProps = {
  course?: Course | null;
};
export const CourseMetaData = (props: IProps) => {
  return (
    <div className="flex flex-col flex-wrap justify-between gap-3 lg:flex-row">
      {/* Just dummy emojis, will get replaced later */}
      <ReactStars
        half
        edit={false}
        size={20}
        value={props.course?.rating ?? 0}
      />
      stars,
      <span className="w-fit">{props.course?.nStudents ?? 0} Students</span>
    </div>
  );
};
