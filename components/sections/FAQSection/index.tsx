import Link from "next/link";
import type { FAQSectionProps } from "./types";
import FAQs from "./components/FAQs";
import { Button } from "@/components/ui/button";
import { instituteContact } from "@/data/site-contact";

export default function FAQSection({
  id = "faq",
  title,
  faqs,
}: FAQSectionProps) {
  return (
    <section id={id} className="my-24 w-full md:my-32 lg:my-40">
      <div className="container grid w-full grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
        {/* Left */}
        <div className="flex w-full flex-col items-start gap-10">
          <div className="flex w-full flex-col gap-4">
            <h2 className="max-w-4xl font-heading text-5xl font-medium leading-[1.05] tracking-tight text-[#0D463E] sm:text-6xl lg:text-[3rem] xl:text-[5rem]">
  Frequently{" "}
  <span className="font-['Libre_Baskerville'] font-normal italic">
    Asked
  </span>{" "}
  Questions!
</h2>

            <p className="mt-2 max-w-2xl font-body text-base font-normal leading-7 tracking-tight text-[#0D463E] sm:text-lg sm:leading-8">
  Need another answer? Contact Haramain Quran Institute by{" "}
  <Link
    href={instituteContact.emailHref}
    className="font-semibold text-[#0D463E] transition-opacity hover:opacity-70"
  >
    email
  </Link>
  for help with courses, fees, schedules, or enrollment.
</p>
          </div>

          <Button asChild variant="primaryReverse" className="mt-2">
            <Link href="/book-free-trial">Book a Free Trial Class</Link>
          </Button>
        </div>

        {/* Right */}
<div className="w-full">
  <FAQs items={faqs} />
</div>
      </div>
    </section>
  );
}
