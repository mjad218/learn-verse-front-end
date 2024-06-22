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
        <Skeleton className="text-lg font-bold" style={{ grid: "1/2" }} />

        <Skeleton
          className="mx-8 flex justify-between"
          style={{ gridRow: "3/4" }}
        />
      </div>
    </div>
  );
};

export default CourseCardSkeleton;
