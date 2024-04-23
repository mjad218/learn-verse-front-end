import { User } from "@/components/current-user/context";
import { API_URL } from "@/constants/api";

export const getToken = () => {
  return loginByUsernameAndPassword("user1", "1234567");
};

export const loginByUsernameAndPassword = async (
  username: string,
  password: string,
) => {
  const credentials = btoa(username + ":" + password);
  const request = await fetch(`${API_URL}/sign-in`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${credentials}`,
    },
  });
  if (!request.ok) return null;

  const res = await request.json();
  const token = res.token;
  return token as string;
};

export const signUp = async (
  username: string,
  password: string,
  email: string,
  token: string,
) => {
  const request = await fetch(`${API_URL}/sign-up`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      userName: username,
      password: password,
      email,
      address: "myAddress",
    }),
  });
  return request.ok;
};

export const findCurentAuthenticatedUser = async (token: string) => {
  const request = await fetch(`${API_URL}/user`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // Bearer or Basic ?
    },
  });
  if (!request.ok) return null;

  const user = await request.json();
  return user["payload"] as User;
};
