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
          <NavigationMenuTrigger className="text-base font-roboto border-black border">Browse</NavigationMenuTrigger>
          <NavigationMenuContent className="flex gap-1 flex-col justify-center">
            {navigationItems.map((item) =>
              <Link href={`/courses/${item.slug}`} key={item.name} className="text-center">
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
                  {item.name}
                </NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default NavigationButtons