import { API_URL } from "@/constants/api";
import { Course, CourseSchema } from "@/types/course.type";
import { getToken } from "../users/login";

export const getSingleCourse = async (courseId: number | undefined) => {
  if (!courseId) return null;
  try {
    const token = await getToken();

    const request = await fetch(`${API_URL}/course/${courseId}`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(`Getting Single course, Course Id ${courseId}`);
    if (!request.ok) {
      console.log(`${request.ok} ${request.status} ${request.statusText} `);
      throw `${request.ok} ${request.status} ${request.statusText} `;
    }
    const data = await request.json();
    console.log({
      course: data,
    });

    const parseResult = CourseSchema.safeParse(data);
    let course: Course | null = null;
    if (parseResult.success) course = parseResult.data;
    return { data, course };
  } catch (error) {
    console.log(error);
    return null;
  }
};
