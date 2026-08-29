"use client";

import React, { useRef, useState, useContext, useLayoutEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../../src/components/button";
import { MainNav } from "./components/MainNav";
import MobileNav from "./components/MobileNav";
import { HeaderProps } from "./types/navigation";
import { useResponsive } from "./hooks/useResponsive";
import { setHideHeader } from "./utils/scroll";
import { SCROLL_THRESHOLD, BREAKPOINTS } from "./constants/header";
import Logo from "@/assets/Logos/Logo _ Mr Charles.png";

import { FormPopupContext } from "@/context/FormPopupContext";

export default function Header({ navItemsData }: HeaderProps) {
  const headerRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const [hideHeader, setHideHeaderState] = useState(false);
  const [bgBlur, setBgBlur] = useState(false);
  const showHeaderSub = useResponsive(BREAKPOINTS.MOBILE);

  const { openFormPopup } = useContext(FormPopupContext);

  useLayoutEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      const isHidden = setHideHeader(
        currentScrollY,
        lastScrollY.current,
        SCROLL_THRESHOLD.STICKY,
        SCROLL_THRESHOLD.SHOW
      );

      setBgBlur(currentScrollY > SCROLL_THRESHOLD.STICKY);
      setHideHeaderState(isHidden);
      lastScrollY.current = currentScrollY;
    };

    if (headerRef.current) {
      headerRef.current.style.willChange = "transform, opacity";
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed left-0 top-4 z-50 w-full bg-transparent transition-all duration-200 ${
        hideHeader ? "max-md:!-translate-y-[140%]" : "translate-y-0"
      }`}
    >
      <div
        className={`mx-auto flex min-h-16 w-[calc(100%-32px)] max-w-[1330px] items-stretch justify-between rounded-[4px] px-6 py-2 transition-all duration-200 md:min-h-20 ${
          bgBlur
            ? "bg-[#0A1815]/100 shadow-lg backdrop-blur-xl"
            : "bg-transparent shadow-none backdrop-blur-xl"
        }`}
      >
        <div className="flex w-full items-stretch justify-between gap-4 md:justify-start lg:gap-16">
          <div className="grid place-items-center">
            <Link href="/">
              <Image
                className="w-36 sm:w-40 lg:w-48"
                src={Logo}
                alt="Mr Charles Logo"
                width={512}
              />
            </Link>
          </div>

          <MainNav navItemsData={navItemsData} />
          <MobileNav navItemsData={navItemsData} />
        </div>

        {showHeaderSub && (
          <div className="hidden place-items-center md:grid">
            <Button onClick={openFormPopup}>Free Trial Class</Button>
          </div>
        )}
      </div>
    </header>
  );
}