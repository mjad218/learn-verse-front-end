import { API_URL } from "@/constants/api";
import { getToken } from "../users/login";
import { CourseVideo } from "@/types/video.type";

export const getSingleCourse = async (
  courseId: number | string | undefined,
) => {
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
    const course = await request.json();

    console.log({
      course,
    });
    return course;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getCourseVideos = async (
  courseId: number | string | undefined,
) => {
  if (!courseId) return [];
  try {
    const token = await getToken();
    const request = await fetch(`${API_URL}/videos/courses/${courseId}`, {
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

    // const parseResult = CourseSchema.safeParse(data);
    // let course: Course | null = null;
    // if (parseResult.success) course = parseResult.data;
    const vids = data.payload;

    return vids as CourseVideo[];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getSingleVideo = async (videoId: number | string | undefined) => {
  if (!videoId) return null;
  try {
    const token = await getToken();
    const request = await fetch(`${API_URL}/videos/courses/${videoId}`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!request.ok) {
      console.log(`${request.ok} ${request.status} ${request.statusText} `);
      throw `${request.ok} ${request.status} ${request.statusText} `;
    }
    const data = await request.json();
    console.log({
      course: data,
    });

    // const parseResult = CourseSchema.safeParse(data);
    // let course: Course | null = null;
    // if (parseResult.success) course = parseResult.data;
    const vids = data.payload;

    return vids as CourseVideo[];
  } catch (error) {
    console.log(error);
    return [];
  }
};
