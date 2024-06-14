"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navigationItems } from "@/constants";
import Link from "next/link";
import { RxCaretDown } from "react-icons/rx";

const CategoriesButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none">
        <div className="bg-accent relative flex items-center justify-center rounded-md px-2 py-1">
          <span className=" text-lg text-white">Browse</span>
          <RxCaretDown color="white" className="relative top-0.5" size={18} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {navigationItems.map((item) => (
          <Link href={`/categories/${item.slug}`} key={item.slug}>
            <DropdownMenuItem className="focus:bg-accent hover:bg-accent hover:text-white focus:text-white">
              <div className="mx-auto">{item.name}</div>
            </DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CategoriesButton;
