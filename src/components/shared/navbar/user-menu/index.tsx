"use client";

import { useCurrentUser } from "@/components/current-user/context";

export const UserMenu = () => {
  const { user } = useCurrentUser();

  return (
    <div>
      logged in user
      {JSON.stringify(user)}
    </div>
  );
};
