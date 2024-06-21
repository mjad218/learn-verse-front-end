import dynamic from "next/dynamic";
import PaginationComponent from "./PaginationComponent";
import CourseCard from "./CourseCard";
import { Suspense } from "react";
import { Row } from "@/components/shared/row";
import CourseCardSkeleton from "./CourseCardSkeleton";
import { API_URL } from "@/constants/api";
import { getToken } from "@/services/users/login";
import { Course } from "@/types/course.type";
import { getCourses } from "@/services/courses/multi-course";

const SearchOptions = dynamic(() => import("../_components/SearchOptions"), {});
const ResultsMessage = dynamic(
  () => import("../_components/ResultsMessage"),
  {},
);
const SearchPage = async () => {
  const token = await getToken();
  const courses: Course[] = await getCourses(token);

  return (
    <Row>
      <div className="flex flex-col gap-10 py-10 text-center text-xl lg:flex-row">
        <div className="flex basis-3/12 flex-col">
          <SearchOptions />
        </div>
        <div className="flex basis-9/12 flex-col gap-5">
          <ResultsMessage />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,400px))] gap-3">
            {courses.map((course, index) => (
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
