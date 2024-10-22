import { API_URL } from "@/constants/api";
import { Category, Course } from "@/types/course.type";
import { fetchUserDetails } from "../users";

export const getCourses = async (
  query: string | null,
  token: string | null,
) => {
  try {
    const request = await fetch(`${API_URL}/course/search?q=${query}`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Bearer or Basic ?
      },
      cache: "no-cache",
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

export const getCoursesByCategory = async (
  categoryId: string | null,
  token: string | null,
) => {
  try {
    const request = await fetch(`${API_URL}/category/${categoryId}/courses`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Bearer or Basic ?
      },
      cache: "no-cache",
    });
    if (!request.ok) {
      throw `${request.ok} ${request.status} ${request.statusText} `;
    }
    const courses = (await request.json()).payload;

    return courses as Course[];
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getAllCategories = async (token: string | null) => {
  try {
    const request = await fetch(`${API_URL}/category`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-cache",
    });
    if (!request.ok) {
      throw `${request.ok} ${request.status} ${request.statusText} `;
    }
    const categories = (await request.json()).payload;

    return categories as Category[];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getMyCourses = async (token: string | null) => {
  const user = await fetchUserDetails(token);
  if (!user?.id) return [];
  try {
    const request = await fetch(`${API_URL}/user/${user?.id}/courses`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-cache",
    });
    if (!request.ok) {
      throw `${request.ok} ${request.status} ${request.statusText} `;
    }

    const courses = await request.json();
    console.log(courses);
    return courses as Course[];
  } catch (error) {
    console.log(error);
    return [];
  }
};
