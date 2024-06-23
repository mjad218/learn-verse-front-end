"use client";
import { Course } from "@/types/course.type";
type Props = {
  courses: Course[];
};
import Image from "next/image";

const LearnPanel = ({ courses }: Props) => {
  return (
    <>
      <span className="font-roboto text-2xl font-semibold">My Learnings</span>
      <div className="mx-auto flex h-full max-w-md flex-col gap-2 space-x-2 py-2">
        {courses.map((course) => (
          <div
            className="grid max-w-sm grid-cols-2 p-2"
            key={`course-${course.id}`}
          >
            <Image
              src={`data:image/jpg;base64,${course?.image ?? ""}`}
              alt={`${course}`}
              className="h-40 w-40 overflow-hidden rounded-sm object-cover"
              style={{
                gridColumn: "1/2",
              }}
            />
            <div className="flex flex-col items-center">
              <span className="text-2xl">{course.courseName}</span>
              <div className="text-bold flex justify-between text-sm">
                <span>Rating: {course.rating}</span>
                <span>Price: {course.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default LearnPanel;
