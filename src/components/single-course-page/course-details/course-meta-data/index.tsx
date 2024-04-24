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
      <div className="flex items-center gap-2">
        <ReactStars
          half
          edit={false}
          size={20}
          value={props.course?.rating ?? 0}
        />
        stars
      </div>

      <span className="w-fit">{props.course?.nStudents ?? 0} Students</span>
    </div>
  );
};
