import { API_URL } from "@/constants/api";

export const getCourses = async (token: string | null) => {
  try {
    const request = await fetch(`${API_URL}/course`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!request.ok) {
      throw `${request.ok} ${request.status} ${request.statusText} `;
    }
    const courses = await request.json();

    return courses;
  } catch (error) {
    console.log(error);
    return null;
  }
};
