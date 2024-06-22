"use client";
import { createContext, useContext } from "react";
import { Dispatch, SetStateAction } from "react";

export type User = {
  firstName: string;
  familyName: string;
  userName: string;
  password: string | null;
  email: string;
  address: string;
  image?: string;
  id?: number | string | undefined;
};
export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

type UserContextType = {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
};

export const useCurrentUser = () => {
  return useContext(UserContext);
};

type AccessTokenContextType = {
  token: string | null;
  setToken: Dispatch<SetStateAction<string | null>>;
};

export const AccessTokenContext = createContext<AccessTokenContextType>({
  token: null,
  setToken: () => {},
});

export const useAccessToken = () => {
  return useContext(AccessTokenContext);
};
