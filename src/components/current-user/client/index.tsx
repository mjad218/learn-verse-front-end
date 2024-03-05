"use client";
import { ReactNode, useMemo, useState } from "react";
import { User, UserContext } from "../context";

type IProps = {
  user: User | null;
  children: ReactNode;
};
const CurrentUserProviderClient = (props: IProps) => {
  let [user, setUser] = useState<User | null>(props.user);

  const userMemoVal = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <UserContext.Provider value={userMemoVal}>
      {props.children}
    </UserContext.Provider>
  );
};

export default CurrentUserProviderClient;
