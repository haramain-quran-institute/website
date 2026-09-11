"use client";

import { useContext } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FormPopupContext } from "@/context/FormPopupContext";

interface HeroCTAProps {
  btnPrimaryText: string;
  btnSecondaryText: string;
  btnSecondaryLink: string;
}

const HeroCTA: React.FC<HeroCTAProps> = ({
  btnPrimaryText,
  btnSecondaryText,
  btnSecondaryLink,
}) => {
  const { openFormPopup } = useContext(FormPopupContext);

  return (
    <div className="mx-auto grid w-full max-w-[23rem] grid-cols-2 overflow-hidden rounded-[var(--radius-sm)] border border-white/70 sm:w-fit sm:max-w-none">
      <Button
        variant="secondary"
        asChild
        className="min-h-11 rounded-none border-0 bg-transparent px-2.5 py-3 text-center text-[12px] text-white hover:bg-[#0a3e37]/40 min-[375px]:px-3 min-[375px]:text-[13px] sm:min-h-12 sm:px-7 sm:py-4 sm:text-sm"
      >
        <Link href={btnSecondaryLink}>
          <span className="sm:hidden">Explore Courses</span>
          <span className="hidden sm:inline">{btnSecondaryText}</span>
        </Link>
      </Button>

      <Button
        onClick={openFormPopup}
        className="min-h-11 rounded-none border-0 border-l border-white/70 bg-[#FFFFFF] px-2.5 py-3 text-center text-[12px] text-[#0D463E] hover:bg-[#D0A86C] hover:text-[#FFFFFF] min-[375px]:px-3 min-[375px]:text-[13px] sm:min-h-12 sm:px-7 sm:py-4 sm:text-sm"
      >
        <span className="sm:hidden">Book Free Trial</span>
        <span className="hidden sm:inline">{btnPrimaryText}</span>
        <ArrowRight className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" aria-hidden="true" />
      </Button>
    </div>
  );
};

export default HeroCTA;
