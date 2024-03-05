import { ReactNode } from "react";
import { cookies } from "next/headers";
import { User } from "../context";
import CurrentUserProviderClient from "../client";

type IProps = {
  children: ReactNode;
};
const CurrentUserProvider = async (props: IProps) => {
  let user: User | null = null;
  try {
    const nextCookies = cookies();
    nextCookies;
    user = {}; // get USer from the backend and pass the nextCookies if needed
  } catch (error) {}

  return (
    <CurrentUserProviderClient user={user}>
      {props.children}
    </CurrentUserProviderClient>
  );
};

export default CurrentUserProvider;
