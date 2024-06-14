import dynamic from "next/dynamic";
import PaginationComponent from "./_results/PaginationComponent";
import CourseCard from "./_results/CourseCard";
import { Suspense } from "react";
import { Row } from "@/components/shared/row";

const SearchOptions = dynamic(() => import("./_components/SearchOptions"), {});
const ResultsMessage = dynamic(
  () => import("./_components/ResultsMessage"),
  {},
);

const SearchPage = () => {
  return (
    <Row>
      <div className="flex flex-col gap-6 py-10 text-center text-xl lg:flex-row">
        <div className="flex basis-1/3 flex-col">
          <SearchOptions />
        </div>
        <div className="flex basis-2/3 flex-col gap-5">
          <ResultsMessage />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,320px))] gap-3">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <CourseCard key={index} />
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
