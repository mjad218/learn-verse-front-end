import { API_URL } from "@/constants/api";
import { Review } from "@/types/review.type";

export const getCourseReviews = async (
  courseId: number | undefined | string,
  token: string | undefined | null,
) => {
  if (!courseId) return [];
  try {
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
  } catch (error) {
    console.log(error);
    return [];
  }
};
