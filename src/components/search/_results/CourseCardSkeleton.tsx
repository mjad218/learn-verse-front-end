import { Skeleton } from "@/components/ui/skeleton";

const CourseCardSkeleton = () => {
  return (
    <div className="grid h-[300px] w-full grid-rows-6 overflow-hidden rounded-xl border border-slate-200 px-1 pt-2 hover:cursor-pointer">
      <div style={{ gridRow: "1/5" }} className="overflow-hidden rounded-lg">
        <Skeleton className="h-full w-full" />
      </div>
      <div
        style={{ gridRow: "5/7" }}
        className="my-2 grid min-w-full grid-rows-3"
      >
        <span
          className="font-Roboto text-lg font-bold"
          style={{ gridRow: "1/2" }}
        >
          Introduction to React
        </span>
        <span className="text-base" style={{ gridRow: "2/3" }}>
          Instructor: {"<Course Creator>"}
        </span>
        <div className="mx-8 flex justify-between" style={{ gridRow: "3/4" }}>
          <span className="test-base">Price: 50EGP</span>
          <span className="flex items-center gap-1">3.5</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCardSkeleton;
