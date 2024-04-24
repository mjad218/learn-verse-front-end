"use client";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { DropdownMenu, Button } from "@radix-ui/themes";
import { navigationItems } from "@/constants";
import Link from "next/link";
const CategoriesButton = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="outline" className="text-md bg-blue-600 text-white">
          Browse
          <CaretDownIcon />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content variant="solid">
        {navigationItems.map((item) => (
          <Link href={`/categories/${item.slug}`} key={item.slug}>
            <DropdownMenu.Item className="cursor-pointer">
              {item.name}
            </DropdownMenu.Item>
          </Link>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default CategoriesButton;
