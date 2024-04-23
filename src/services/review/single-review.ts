import { API_URL } from "@/constants/api";
import { getToken } from "../users/login";
import { Review } from "@/types/review.type";

export const getCourseReviews = async (courseId: number | undefined) => {
  if (!courseId) return null;
  try {
    const token = await getToken();

    const request = await fetch(`${API_URL}/reviews/course/${courseId}`, {
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
    return data as Review[];
    // console.log({
    //   course: data,
    // });

    // const parseResult = ReviewSchema.safeParse(data);
    // let course: Review | null = null;
    // if (parseResult.success) course = parseResult.data;
    // return course;
  } catch (error) {
    console.log(error);
    return null;
  }
};
