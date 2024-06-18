"use client";
import { ReactNode, useMemo, useState } from "react";
import { AccessTokenContext, User, UserContext } from "../context";

type IProps = {
  user: User | null;
  token: string | null;
  children: ReactNode;
};
const CurrentUserProviderClient = (props: IProps) => {
  let [user, setUser] = useState<User | null>(props.user);
  let [token, setToken] = useState<string | null>(props.token);

  const userMemoVal = useMemo(() => ({ user, setUser }), [user, setUser]);
  const tokenMemoVal = useMemo(() => ({ token, setToken }), [token, setToken]);

  return (
    <UserContext.Provider value={userMemoVal}>
      <AccessTokenContext.Provider value={tokenMemoVal}>
        {props.children}
      </AccessTokenContext.Provider>
    </UserContext.Provider>
  );
};

export default CurrentUserProviderClient;
