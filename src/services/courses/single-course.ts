import { API_URL } from "@/constants/api";
import { Course } from "@/types/course.type";

export const getSingleCourse = async (courseId: number | undefined) => {
  if (!courseId) return null;
  try {
    const request = await fetch(`${API_URL}/course/${courseId}`, {
      method: "GET",
      credentials: "include",
      headers: {},
    });

    const course = await request.json();
    return course as Course;
  } catch (error) {
    return null;
  }
};
