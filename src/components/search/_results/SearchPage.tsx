import dynamic from "next/dynamic";
import PaginationComponent from "./PaginationComponent";
import CourseCard from "./CourseCard";
import { Suspense } from "react";
import { Row } from "@/components/shared/row";
import CourseCardSkeleton from "./CourseCardSkeleton";

const SearchOptions = dynamic(() => import("../_components/SearchOptions"), {});
const ResultsMessage = dynamic(
  () => import("../_components/ResultsMessage"),
  {},
);

const SearchPage = () => {
  return (
    <Row>
      <div className="flex flex-col gap-10 py-10 text-center text-xl lg:flex-row">
        <div className="flex basis-3/12 flex-col">
          <SearchOptions />
        </div>
        <div className="flex basis-9/12 flex-col gap-5">
          <ResultsMessage />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,400px))] gap-3">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <Suspense key={index} fallback={<CourseCardSkeleton />}>
                <CourseCard />
              </Suspense>
            ))}
          </div>
        </div>
      </div>
      <Suspense>
        <PaginationComponent />
      </Suspense>
    </Row>
  );
};

export default SearchPage;
