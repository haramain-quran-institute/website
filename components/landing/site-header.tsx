"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

import { navigationItems } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { TrialPopup } from "./trial-popup";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import HeaderLogo from "@/assets/HeaderLogo.png";

function InstituteMark() {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center" aria-label="Haramain Quran Institute home">
      <Image
        src={HeaderLogo}
        alt="Haramain Quran Institute"
        priority
        className="h-auto w-36 sm:w-40 min-[1200px]:w-[184px]"
        sizes="(min-width: 1200px) 184px, (min-width: 576px) 160px, 144px"
      />
    </Link>
  );
}

function DesktopNavigation() {
  return (
    <NavigationMenu className="hidden min-[1100px]:flex">
      <NavigationMenuList className="gap-1">
        {navigationItems.map((section) => (
          <NavigationMenuItem key={section.title}>
            {section.subItems.length === 0 ? (
              <Link
                href={section.url ?? "/"}
                className="inline-flex h-10 items-center px-3 font-body text-[15px] font-semibold text-white transition-colors hover:text-[#D0A86C]"
              >
                {section.title}
              </Link>
            ) : (
              <>
                <NavigationMenuTrigger className="h-10 px-3 !font-body !text-[15px] !font-semibold !tracking-normal">
                  {section.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className={cn("grid w-[620px] gap-2 p-5", (section.subItems.length > 3 || section.title === "Fee & Schedule" || section.title === "Contact Us") && "grid-cols-2")}>
                    {section.subItems.map((item) => (
                      <li key={item.url}>
                        <Link
                          href={item.url}
                          className="group block rounded-[4px] p-3 transition-colors hover:bg-[#0A3E37] focus:bg-[#0A3E37] focus:outline-none"
                        >
                          <span className="block font-body text-[14px] font-semibold leading-none text-white">
                            {item.title}
                          </span>
                          <span className="mt-2 block font-body text-[12px] leading-[1.45] text-white/65">
                            {item.description}
                          </span>
                        </Link>
                      </li>
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

function MobileNavigation() {
  return (
    <Sheet>
      <SheetTrigger className="flex items-center gap-2 text-white min-[1100px]:hidden" aria-label="Open navigation">
        <span className="font-body text-sm">Menu</span>
        <Menu className="size-5" />
      </SheetTrigger>
      <SheetContent side="left" className="w-[90%] border-r border-white/10 bg-[#071F1B] px-6 pt-10 text-white sm:max-w-md">
        <SheetTitle className="text-white"><InstituteMark /></SheetTitle>
        <SheetDescription className="sr-only">Haramain Quran Institute navigation</SheetDescription>
        <div className="mt-8 h-[calc(100vh-8rem)] overflow-y-auto pr-2">
          <Accordion type="multiple" className="w-full">
            {navigationItems.map((section) =>
              section.subItems.length === 0 ? (
                <div key={section.title} className="border-b border-white/10 py-4">
                  <SheetClose asChild>
                    <Link href={section.url ?? "/"} className="font-body text-base font-semibold text-white">
                      {section.title}
                    </Link>
                  </SheetClose>
                </div>
              ) : (
                <AccordionItem key={section.title} value={section.title} className="border-white/10">
                  <AccordionTrigger className="py-4 font-body text-base font-semibold text-white hover:no-underline">
                    {section.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="grid gap-2 pb-3">
                      {section.subItems.map((item) => (
                        <li key={item.url}>
                          <SheetClose asChild>
                            <Link href={item.url} className="block rounded-[4px] bg-white/[0.04] p-3 hover:bg-white/[0.08]">
                              <span className="block font-body text-sm font-semibold text-white">{item.title}</span>
                              <span className="mt-1 block font-body text-xs leading-5 text-white/60">{item.description}</span>
                            </Link>
                          </SheetClose>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ),
            )}
          </Accordion>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function SiteHeader() {
  const previousScroll = useRef(0);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 96);
      setHidden(current > 96 && current > previousScroll.current);
      previousScroll.current = current;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("fixed inset-x-0 top-4 z-50 transition-transform duration-200", hidden && "max-[1099px]:-translate-y-[140%]")}>
      <div className={cn("mx-auto flex min-h-16 w-[calc(100%-32px)] max-w-[1330px] items-center justify-between rounded-[4px] px-5 py-2 transition-all duration-200 md:min-h-20 md:px-7", scrolled ? "bg-[#071F1B]/95 shadow-xl backdrop-blur-xl" : "bg-transparent shadow-none backdrop-blur-none")}>
        <InstituteMark />
        <DesktopNavigation />
        <div className="hidden min-[1100px]:block"><TrialPopup triggerLabel="Free Trial Class" /></div>
        <MobileNavigation />
      </div>
    </header>
  );
}
