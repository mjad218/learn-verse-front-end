"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navigationItems } from "@/constants";
import Link from "next/link";
const CategoriesButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div>Browse</div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {navigationItems.map((item) => (
          <Link href={`/categories/${item.slug}`} key={item.slug}>
            <DropdownMenuItem className="cursor-pointer">
              {item.name}
            </DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CategoriesButton;
