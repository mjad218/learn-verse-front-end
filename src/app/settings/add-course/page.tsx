import CoursePanel from "@/components/course-panel";
import { getAllCategories } from "@/services/courses/multi-course";
import { cookies } from "next/headers";

const AddPage = async () => {
  let token: string | null = "";
  try {
    const nextCookies = cookies();
    token = nextCookies.get("token")?.value ?? null;
    if (!token) throw "not logged in";
  } catch (error) {}
  const categories = await getAllCategories(token);
  return (
    <div>
      <CoursePanel categories={categories} />
    </div>
  );
};

export default AddPage;
