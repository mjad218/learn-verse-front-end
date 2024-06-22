"use client";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { menuItemStyle } from "./Dropdown";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";

const Logout = () => {
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
