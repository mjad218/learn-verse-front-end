const API_URL = "http://localhost:8080";
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