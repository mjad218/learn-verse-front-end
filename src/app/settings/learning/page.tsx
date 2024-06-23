import LearnPanel from "@/components/learning-panel";
import { getMyCourses } from "@/services/courses/multi-course";
import { Course } from "@/types/course.type";
import { cookies } from "next/headers";

const LearnPage = async () => {
  let token: string | null = "";
  try {
    const nextCookies = cookies();
    token = nextCookies.get("token")?.value ?? null;
    if (!token) throw "not logged in";
  } catch (error) {
    console.log(error);
  }

  const courses:Course[] = await getMyCourses(token);
  return (
    <div>
      <LearnPanel courses={courses} />
    </div>
  );
};

export default LearnPage;
