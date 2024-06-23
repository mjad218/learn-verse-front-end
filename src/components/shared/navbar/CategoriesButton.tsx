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
import { toTitleCase } from "@/lib/utils";

type IProps = {
  categories: Category[];
};
const CategoriesButton = (props: IProps) => {
  const title_caseCategories: Category[] =
    props.categories.map((category) => ({
      ...category,
      nameEn: toTitleCase(category.nameEn),
    })) || [];

  console.log({ title_caseCategories });

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="focus:outline-none">
        <div className="relative flex items-center justify-center rounded-md bg-accent px-2 py-1">
          <span className="text-lg text-white">Browse</span>
          <RxCaretDown color="white" className="relative top-0.5" size={18} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-[1000001] max-h-48 overflow-scroll">
        {(title_caseCategories ?? []).map((item) => (
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
