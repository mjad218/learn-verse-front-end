"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Category } from "@/types/course.type";
import Link from "next/link";
import { RxCaretDown } from "react-icons/rx";
type IProps = {
  categories: Category[];
};
const CategoriesButton = (props: IProps) => {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="focus:outline-none">
        <div className="relative flex items-center justify-center rounded-md bg-accent px-2 py-1">
          <span className="text-lg text-white">Browse</span>
          <RxCaretDown color="white" className="relative top-0.5" size={18} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-[1000001]">
        {(props.categories ?? []).map((item) => (
          <Link href={`/categories/${item?.id}`} key={item?.id}>
            <DropdownMenuItem className="hover:bg-accent hover:text-white focus:bg-accent focus:text-white">
              <div className="mx-auto">{item.nameEn}</div>
            </DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CategoriesButton;
