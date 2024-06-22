import { User } from "@/components/current-user/context";
import { API_URL } from "@/constants/api";

export const getAuthUser = async () => {
  const request = await fetch(`${API_URL}/auth`, {
    method: "POST",
    credentials: "include",
    headers: {},
    body: JSON.stringify({
      username: "atef135",
      password: "fggfdh5rte",
    }),
  });

  const user = await request.json();
  return user;
};
export const getUserById = async (id: string | null | number) => {
  const request = await fetch(`${API_URL}/user/${id}`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const user = await request.json();
  return user as User;
};

export const fetchUserDetails = async (token: string | null) => {
  try {
    const request = await fetch(`${API_URL}/user`, {
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
    const userDetails = await request.json();

    return userDetails;
  } catch (error) {
    console.log(error);
    return null;
  }
};
