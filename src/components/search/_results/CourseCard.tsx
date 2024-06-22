import { Course } from "@/types/course.type";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const CourseCard = ({ course }: { course: Course }) => {
  return (
    <div className="grid h-[300px] w-full grid-rows-6 overflow-hidden rounded-xl border border-slate-200 px-1 pt-2 hover:cursor-pointer">
      <div style={{ gridRow: "1/5" }} className="overflow-hidden rounded-lg">
        <Image
          src={
            `data:image/jpg;base64,${course?.image ?? ""}` ??
            "/assets/TempImages/TempCourse.jpg"
          }
          alt="course"
          width={`${300}`}
          height={`${300}`}
          style={{ objectFit: "cover" }}
          className="h-full w-full"
        />
      </div>
      <div
        style={{ gridRow: "5/7" }}
        className="my-2 grid min-w-full grid-rows-3"
      >
        <span
          className="font-Roboto text-lg font-bold"
          style={{ gridRow: "1/2" }}
        >
          {course?.courseName ?? "Introduction to React"}
        </span>
        <span className="text-base" style={{ gridRow: "2/3" }}>
          Instructor: {"<Course Creator>"}
        </span>
        <div className="mx-8 flex justify-between" style={{ gridRow: "3/4" }}>
          <span className="test-base">
            Price: {course?.price ? `${course.price}EGP` : "50EGP"}
          </span>
          <span className="flex items-center gap-1">
            {course?.rating ? course.rating.toFixed(1) : "3.5"}
            <FaStar color="gold" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
