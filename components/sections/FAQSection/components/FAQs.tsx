import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FAQ } from "../types";

interface FAQsProps {
  items: FAQ[];
}

export default function FAQs({ items }: FAQsProps) {
  return (
    <Accordion
      className="flex w-full flex-col gap-5"
      type="single"
      collapsible
      defaultValue="item-0"
    >
      {items.map((faq, index) => (
        <AccordionItem
          className="w-full rounded-0 border-none data-[state=open]:bg-[#F3EEE6]"
          key={index}
          value={`item-${index}`}
        >
          <AccordionTrigger className="font-heading border-alabaster data-[state=open]:border-caribbean-current text-smoky-black cursor-pointer border-l p-5 !text-[18px] !font-semibold leading-tight tracking-wide">
            {faq.question}
          </AccordionTrigger>

          <AccordionContent className="font-body border-alabaster text-smoky-black/70 border-l p-5 leading-relaxed tracking-tight">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
