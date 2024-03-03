import { AUTH_API_BASE } from "@/constants/api";

export const loginByUsernameAndPassword = async (
  username: string,
  password: string,
) => {
  const request = await fetch(
    `${AUTH_API_BASE}/realms/myRealm/protocol/openid-connect/tokenA`,
    {
      method: "POST",
      credentials: "include",
      headers: {},
      body: JSON.stringify({
        client_id: "client",
        grant_type: "password",
        username: username,
        password: password,
        client_secret: "MJ2foJwvvYEv1dPdKcW4f3NbNOQsqCJG",
      }),
    },
  );
  if (!request.ok) return null;

  const user = await request.json();
  return user;
};
