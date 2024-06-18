import { ReactNode } from "react";
import { cookies } from "next/headers";
import { User } from "../context";
import CurrentUserProviderClient from "../client";
import { findCurentAuthenticatedUser } from "@/services/users/login";

type IProps = {
  children: ReactNode;
};
const CurrentUserProvider = async (props: IProps) => {
  let user: User | null = null;
  let token: string | null = "";
  try {
    const nextCookies = cookies();
    token = nextCookies.get("token")?.value ?? null;
    if (!token) throw "not logged in";
    user = await findCurentAuthenticatedUser(token); // get USer from the backend and pass the nextCookies if needed
  } catch (error) {}

  return (
    <CurrentUserProviderClient user={user} token={token}>
      {props.children}
    </CurrentUserProviderClient>
  );
};

export default CurrentUserProvider;
