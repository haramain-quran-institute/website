import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import StartChatAssistant from "./StartChatAssistant";
import StartChatHero from "./StartChatHero";

export default function StartChatPage() {
  return <main className="min-h-screen bg-[#FBF6EF]"><SiteHeader /><StartChatHero /><StartChatAssistant /><SiteFooter /></main>;
}
