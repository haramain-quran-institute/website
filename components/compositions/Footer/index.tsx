import FooterCTA from "./FooterCTA";
import FooterMain from "./MainFooter";

import { FooterProps } from "./types/links";

export default function Footer({ footerItemsData }: FooterProps) {
  return (
    <section id="footer-cta" className="w-full bg-white">
      <FooterCTA />
      <FooterMain footerItemsData={footerItemsData} />
    </section>
  );
}