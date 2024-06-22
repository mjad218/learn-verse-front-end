"use client";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { menuItemStyle } from "./Dropdown";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import { useCurrentUser } from "@/components/current-user/context";

const Logout = () => {
  const { setUser } = useCurrentUser();

  const router = useRouter();
  const handleClick: MouseEventHandler<HTMLDivElement> = async (e) => {
    try {
      e.stopPropagation();
      const res = await fetch("/api/logout", {
        method: "POST",
        cache: "no-cache",
      });
      await res.json();
    } catch (error) {}
    setUser(null);
    router.push("/");
    router.refresh();
  };
  return (
    <DropdownMenuItem className={menuItemStyle} onClick={handleClick}>
      <span>Logout</span>
    </DropdownMenuItem>
  );
};

export default Logout;
