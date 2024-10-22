import { Course } from "@/types/course.type";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
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
        <Link
          className="font-Roboto text-lg font-bold text-[#333]"
          style={{ gridRow: "1/2" }}
          href={`/${course?.id}`}
        >
          {course?.courseName ?? "Introduction to React"}
        </Link>
        <div className="mx-8 flex justify-between" style={{ gridRow: "2/4" }}>
          <span className="test-base">
            Price: {course?.price ? `${course.price}EGP` : "50EGP"}
          </span>
          <span className="flex items-center gap-1">
            {course?.rating ? `${course.rating}` : "3.5"}
            <FaStar color="gold" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

type Props = {
  course: Course;
  children?: ReactNode;
};
export const HorizontalCourseCard = (props: Props) => {
  return (
    <div className="flex w-full gap-2 overflow-hidden rounded-xl border border-slate-200 px-1 pt-2 hover:cursor-pointer">
      <Image
        src={
          `data:image/jpg;base64,${props?.course?.image ?? ""}` ??
          "/assets/TempImages/TempCourse.jpg"
        }
        alt="course"
        width={96}
        height={96}
        className="aspect-square h-24 w-24 shrink-0 object-cover"
      />
      <div className="my-2 flex grow flex-col">
        <Link
          className="font-Roboto text-lg font-bold text-[#333]"
          style={{ gridRow: "1/2" }}
          href={`/${props?.course?.id}`}
        >
          {props?.course?.courseName ?? "Introduction to React"}
        </Link>
        {props.children}
      </div>
    </div>
  );
};
