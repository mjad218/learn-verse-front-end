'use client'
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { navigationItems } from "@/constants"

const NavigationButtons = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base">Categories</NavigationMenuTrigger>
          <NavigationMenuContent className="flex gap-1 flex-col justify-center">
            {navigationItems.map((item) =>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} key={item.name}>
                <Link href={`/courses/${item.slug}`}>{item.name}</Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default NavigationButtons