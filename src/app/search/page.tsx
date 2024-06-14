import dynamic from "next/dynamic";
import PaginationComponent from "./_results/PaginationComponent";
import CourseCard from "./_results/CourseCard";
import { Suspense } from "react";

const SearchOptions = dynamic(() => import("./_components/SearchOptions"), {});
const ResultsMessage = dynamic(
  () => import("./_components/ResultsMessage"),
  {},
);

const SearchPage = () => {
  return (
    <div className="font-roboto mx-auto my-6 max-w-[95%]">
      <div className="grid grid-cols-5 grid-rows-1 text-center text-xl">
        <div style={{ gridColumn: "1/2" }} className="flex flex-col">
          <SearchOptions />
        </div>
        <div style={{ gridColumn: "2/6" }}>
          <ResultsMessage />
          <div className="ml-4 mt-4 grid grid-cols-3 grid-rows-2 gap-y-4">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <CourseCard key={index} />
            ))}
          </div>
        </div>
      </div>
      <Suspense>
        <PaginationComponent />
      </Suspense>
    </div>
  );
};

export default SearchPage;
