import { API_URL } from "@/constants/api";
import { Course, CourseSchema } from "@/types/course.type";

export const getSingleCourse = async (courseId: number | undefined) => {
  if (!courseId) return null;
  try {
    const request = await fetch(`${API_URL}/course/${courseId}`, {
      method: "GET",
      credentials: "include",
      headers: {},
    });

    const data = await request.json();
    const parseResult = CourseSchema.safeParse(data);
    let course: Course | null = null;
    if (parseResult.success) course = parseResult.data;
    return course;
  } catch (error) {
    return null;
  }
};
