"use client";
import * as React from "react";
import { useState } from "react";
import Image from "next/image";

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useResponsive } from "../hooks/useResponsive";
import { BREAKPOINTS } from "../constants/header";
import { HeaderProps } from "../types/navigation";
import { ListItem } from "./ListItem";

import LogoElement from "@/assets/Logos/Mr Charles _ ELEMENT.png";
import MenuIcon from "@/assets/Icons/horizontal-line";

export default function MobileNav({ navItemsData }: HeaderProps) {
  const showMobileNav = !useResponsive(BREAKPOINTS.DESKTOP);
  const [defaultOpenItems] = useState(["Luxury Chauffeur"]);

  if (!showMobileNav) return null;

  return (
    <Sheet>
      <SheetTrigger>
        <SheetTitle className="text-PearlWhite flex flex-row items-center gap-1">
          <span className="text-body_xs font-serif">Menu</span>
          <div className="w-8">
            <MenuIcon />
          </div>
        </SheetTitle>
      </SheetTrigger>
      <SheetContent side="left" className="dark bg-[#0D463E] pl-1 pr-0 pt-9">
        <div className="flex w-full flex-row items-center gap-2 px-6">
          <Image src={LogoElement} alt="Mr Charles Logo Element" width={32} />
          <span className="text-ChampagneSilk font-bold">Mr Charles Group</span>
        </div>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-8 pl-6">
          <div className="pl-1 pr-7">
            <Accordion type="multiple" className="w-full" defaultValue={defaultOpenItems}>
              {navItemsData.map((item) => (
                <AccordionItem key={item.title} value={item.title}>
                  <AccordionTrigger className="text-PearlWhite">{item.title}</AccordionTrigger>
                  <AccordionContent className="text-PearlWhite">
                    <ul className="grid min-w-full gap-4">
                      {item.subItems.map((subItem) => (
                        <ListItem key={subItem.title} title={subItem.title} href={subItem.url}>
                          {subItem.description}
                        </ListItem>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}