"use client";

import { useCurrentUser } from "@/components/current-user/context";

export const UserMenu = () => {
  const { user } = useCurrentUser();

  if (!user) return null;
  return (
    <div className="flex flex-col gap-0">
      Welcome
      <span>{user.userName}</span>
    </div>
  );
};
