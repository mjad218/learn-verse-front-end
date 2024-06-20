"use client";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { menuItemStyle } from "./Dropdown";
import { redirect } from "next/navigation";

const handleClick = () => {
  fetch("/logout", {
    method: "POST",
  });
  redirect("/");
};

const Logout = () => {
  return (
    <DropdownMenuItem className={menuItemStyle} onClick={handleClick}>
      Logout
    </DropdownMenuItem>
  );
};

export default Logout;
