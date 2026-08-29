import Footer from "@/components/compositions/Footer";
import { ContextTrialPopup } from "@/components/landing/context-trial-popup";
import footerItemsData from "@/data/footerItemsData";

export function SiteFooter() {
  return (
    <>
      <Footer footerItemsData={footerItemsData} />
      <ContextTrialPopup />
    </>
  );
}
