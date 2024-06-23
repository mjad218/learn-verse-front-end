import dynamic from "next/dynamic";
import PaginationComponent from "./PaginationComponent";
import CourseCard from "./CourseCard";
import { Suspense } from "react";
import { Row } from "@/components/shared/row";
import CourseCardSkeleton from "./CourseCardSkeleton";
import { Course } from "@/types/course.type";
import { getCourses } from "@/services/courses/multi-course";
import { sort } from "fast-sort";

const SearchOptions = dynamic(() => import("../_components/SearchOptions"), {});
const ResultsMessage = dynamic(
  () => import("../_components/ResultsMessage"),
  {},
);

type QueryParams = {
  q: string;
  rating: string;
  price: string;
  level: string;
  lang: string;
  p: string;
};

type Props = {
  query: QueryParams;
};

const SearchPage = async ({ query }: Props) => {
  let displayedCourses: Course[] = [];
  try {
    const searchQuery = query?.q;
    const courses: Course[] = await getCourses(searchQuery);
    const filteredCourses = (courses ?? [])
      .filter(
        (c) =>
          !query?.price ||
          (c?.price && Number(c?.price) <= Number(query?.price)),
      )
      .filter(
        (c) =>
          !query?.rating ||
          (c?.rating && Number(c?.rating) >= Number(query?.rating)),
      );

    displayedCourses = sort(filteredCourses).by([
      { desc: (course) => course?.rating },
      { asc: (course) => course?.price },
    ]);
    const page = Number(query.p);
    displayedCourses = displayedCourses.slice(page - 1 * 6, page * 6);
  } catch (error) {}

  return (
    <Row>
      <div className="flex flex-col gap-10 py-10 text-center text-xl lg:flex-row">
        <div className="flex basis-3/12 flex-col">
          <SearchOptions />
        </div>
        <div className="flex basis-9/12 flex-col gap-5">
          <ResultsMessage />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,400px))] gap-3">
            {displayedCourses.map((course, index) => (
              <Suspense key={index} fallback={<CourseCardSkeleton />}>
                <CourseCard course={course} />
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
