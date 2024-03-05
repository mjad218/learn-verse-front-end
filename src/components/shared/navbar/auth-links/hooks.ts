import { useCurrentUser } from "@/components/current-user/context";

export const ExtractCurrentUser = () => {
  const { user } = useCurrentUser();
  if (user) return user;
  return null;
};
