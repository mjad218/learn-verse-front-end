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
interface Props {
  user: { name: string; email: string };
}

const menuItemStyle =
  "cursor-pointer text-lg font-medium focus:bg-[#2563EB] focus:rounded focus:text-white";

const Dropdown = ({ user }: Props) => {
  return (
    <div className="">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <DropdownAvatar />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className="text-lg font-medium">
            {user.email}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link href="/settings">
            <DropdownMenuItem className={menuItemStyle}>
              Settings
            </DropdownMenuItem>
          </Link>
          <Link href="/login">
            <DropdownMenuItem className={menuItemStyle}>
              Logout
            </DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Dropdown;
