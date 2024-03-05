import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DropdownAvatar from "./DropDownAvatar";

interface Props {
  user: { name: string; email: string };
}

const Dropdown = ({ user }: Props) => {
  return (
    <div className="">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <DropdownAvatar />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{user.email}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Dropdown;
