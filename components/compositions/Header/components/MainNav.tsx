"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { HeaderProps } from "../types/navigation";
import { useResponsive } from "../hooks/useResponsive";
import { BREAKPOINTS } from "../constants/header";
import { ListItem } from "./ListItem";

export function MainNav({ navItemsData }: HeaderProps) {
  const showMainNav = useResponsive(BREAKPOINTS.DESKTOP);

  if (!showMainNav) return null;

  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-2 lg:gap-1 [&_a]:!font-body [&_a]:!text-[15px] [&_a]:!font-medium [&_a]:!tracking-normal [&_a]:!text-white [&_button]:!font-body [&_button]:!text-[15px] [&_button]:!font-medium [&_button]:!tracking-normal [&_button]:!text-white [&_a:hover]:!text-[#D0A86C] [&_button:hover]:!text-[#D0A86C] [&_button[data-state=open]]:!text-[#D0A86C]">
        {navItemsData.map((item) => (
          <NavigationMenuItem key={item.title}>
            {item.subItems.length === 0 ? (
              <Link
                href={item.url || "/"}
                className={`${navigationMenuTriggerStyle()} !font-body !text-[15px] !font-medium !tracking-normal !text-white hover:!text-[#D0A86C]`}
              >
                {item.title}
              </Link>
            ) : (
              <>
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-x-8 gap-y-7 p-8 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {item.subItems.map((subItem) => (
                      <ListItem
                        key={subItem.title}
                        title={subItem.title}
                        href={subItem.url}
                      >
                        {subItem.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}