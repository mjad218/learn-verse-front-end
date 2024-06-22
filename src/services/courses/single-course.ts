import { API_URL } from "@/constants/api";
import { NewCourseType } from "@/types/course.type";
import { CourseVideo } from "@/types/video.type";

export const getSingleCourse = async (
  courseId: number | string | undefined,
  token: string | null,
) => {
  token;
  if (!courseId) return null;
  try {
    const request = await fetch(`${API_URL}/course/${courseId}`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Bearer or Basic ?
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
  token: string | null,
) => {
  if (!courseId) return [];
  try {
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

export const getSingleVideo = async (
  videoId: number | string | undefined,
  token: string | null,
) => {
  if (!videoId) return null;
  try {
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

export const addSingleCourse = async (
  course: NewCourseType,
  image: string | ArrayBuffer | null,
  token: string | null,
): Promise<Response> => {
  return await fetch(`${API_URL}/course`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // Bearer or Basic ?
    },
    body: JSON.stringify({
      courseName: course.courseName,
      description: course.description,
      price: course.price,
      image: image,
    }),
  });
};
