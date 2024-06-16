"use client";
import toast from "react-hot-toast";
import { redirect, useRouter } from "next/navigation";
import { useCurrentUser } from "../current-user/context";
import { useEffect } from "react";

type IProps = {
  children: React.ReactNode;
  message?: string;
};

const WithAuth = ({
  message = "Insufficient Credentials",
  children,
}: IProps) => {
  const router = useRouter();

  const { user } = useCurrentUser();
  useEffect(() => {
    if (!user) {
      toast.error(message, { id: "error" });
      return router.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <>{user && children}</>;
};

export default WithAuth;
