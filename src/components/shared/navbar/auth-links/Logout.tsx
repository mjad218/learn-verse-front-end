"use client";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { menuItemStyle } from "./Dropdown";
import { useRouter } from "next/navigation";

const Logout = () => {
  const router = useRouter();
  const handleClick = () => {
    fetch("/api/logout", {
      method: "POST",
    });
    router.refresh();
    router.push("/");
  };
  return (
    <DropdownMenuItem className={menuItemStyle}>
      <span onClick={handleClick}>Logout</span>
    </DropdownMenuItem>
  );
};

export default Logout;
