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
    <div className="grid w-full grid-cols-2 overflow-hidden rounded-[4px] border border-white/70 sm:w-fit">
      <Button
        variant="secondary"
        asChild
        className="rounded-none border-0 bg-transparent text-white hover:bg-[#0a3e37]/40"
      >
        <Link href={btnSecondaryLink}>{btnSecondaryText}</Link>
      </Button>

      <Button
        onClick={openFormPopup}
        className="rounded-none border-0 bg-[#FFFFFF] text-[#0D463E] hover:bg-[#D0A86C] hover:text-[#FFFFFF]"
      >
        {btnPrimaryText}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Button>
    </div>
  );
};

export default HeroCTA;
