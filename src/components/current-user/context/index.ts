"use client";
import { createContext, useContext } from "react";
import { Dispatch, SetStateAction } from "react";

export type User = {};
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
