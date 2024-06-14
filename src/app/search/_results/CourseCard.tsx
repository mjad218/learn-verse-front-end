import Image from "next/image";
import { FaStar } from "react-icons/fa";

const CourseCard = () => {
  return (
    <div className="grid h-[250px] w-[300px] grid-rows-5 rounded-2xl border border-t-0 border-slate-400">
      <div
        className="rounded-t-2xl"
        style={{ gridRow: "1/4", overflow: "hidden" }}
      >
        <Image
          src={"/assets/TempImages/TempCourse.jpg"}
          alt="course"
          width={`${300}`}
          height={`${150}`}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div
        style={{ gridRow: "4/6" }}
        className="my-2 grid grid-rows-3 items-center justify-center"
      >
        <span className="text-base" style={{ gridRow: "1/2" }}>
          Course Title
        </span>
        <span className="text-base" style={{ gridRow: "2/3" }}>
          Course Creator
        </span>
        <div className="mx-8 flex justify-between" style={{ gridRow: "3/4" }}>
          <span className="text-sm">Price: $</span>
          <FaStar color="gold" />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
