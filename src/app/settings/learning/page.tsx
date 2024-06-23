import LearnPanel from "@/components/learning-panel";
import { getMyCourses } from "@/services/courses/multi-course";
import { cookies } from "next/headers";

const LearnPage = async () => {
  let token: string | null = "";
  try {
    const nextCookies = cookies();
    token = nextCookies.get("token")?.value ?? null;
    if (!token) throw "not logged in";
  } catch (error) {}
  const courses = await getMyCourses(token);
  return (
    <div>
      <LearnPanel courses={courses} />
    </div>
  );
};

export default LearnPage;
