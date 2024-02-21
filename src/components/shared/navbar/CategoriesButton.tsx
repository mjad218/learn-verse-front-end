'use client';
import { CaretDownIcon } from "@radix-ui/react-icons"
import { DropdownMenu, Button } from "@radix-ui/themes"
import { navigationItems } from '@/constants'
import Link from "next/link";
const CategoriesButton = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="solid" className="bg-blue-600 text-white text-md">
          Browse
          <CaretDownIcon />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content variant="solid">
        {navigationItems.map((item) => (
          <DropdownMenu.Item key={item.slug}>
            <Link href={`/categories/${item.slug}`}>{item.name}</Link>
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}

export default CategoriesButton