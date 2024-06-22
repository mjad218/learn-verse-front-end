import { getCoursesByCategory } from "@/services/courses/multi-course";
import { cookies } from "next/headers";
import CourseCard from "../search/_results/CourseCard";

type IProps = {
  slug: string;
};
export const CategoryServerPage = async (props: IProps) => {
  let token: string | null = "";
  try {
    const nextCookies = cookies();
    token = nextCookies.get("token")?.value ?? null;
    if (!token) throw "not logged in";
  } catch (error) {}
  const courses = await getCoursesByCategory(props.slug, token);
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,400px))] gap-3">
      {(courses ?? []).map((c) => (
        <CourseCard key={c?.id} course={c} />
      ))}
    </div>
  );
};
