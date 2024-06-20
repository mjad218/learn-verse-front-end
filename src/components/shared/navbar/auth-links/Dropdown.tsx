import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DropdownAvatar from "./DropDownAvatar";
import Link from "next/link";
import { useCurrentUser } from "@/components/current-user/context";
import Logout from "./Logout";

export const menuItemStyle =
  "cursor-pointer text-lg font-medium focus:bg-[#2563EB] focus:rounded focus:text-white";

const Dropdown = () => {
  const { user } = useCurrentUser();
  if (!user) return null;
  return (
    <div className="">
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger>
          <DropdownAvatar />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className="text-lg font-medium">
            {user.userName}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link href="/settings">
            <DropdownMenuItem className={menuItemStyle}>
              Settings
            </DropdownMenuItem>
          </Link>
          <Logout />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Dropdown;
