import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Bot, MessageCircleMore, Sparkles } from "lucide-react";
import heroImage from "@/assets/gallery-4.jpg";

export default function StartChatHero() {
  return <section className="relative flex min-h-[580px] items-end overflow-hidden pb-16 pt-40 text-white md:min-h-[650px] md:pb-20">
    <Image src={heroImage} alt="Haramain Quran learning assistant" fill priority sizes="100vw" className="object-cover" />
    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,28,24,.98)_0%,rgba(4,44,38,.9)_52%,rgba(13,70,62,.4)_100%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_28%,rgba(208,168,108,.22),transparent_34%)]" />
    <div className="container relative z-10"><div className="max-w-4xl"><div className="inline-flex items-center gap-2 rounded-full border border-[#D0A86C]/30 bg-[#D0A86C]/10 px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-[#D0A86C]"><Sparkles className="size-3.5" /> AI Learning Guidance</div><h1 className="mt-6 font-heading text-5xl font-semibold leading-[.98] sm:text-6xl lg:text-[78px]">Start Chat</h1><p className="mt-6 max-w-3xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">Meet the Haramain AI Assistant—your thoughtful guide to courses, teachers, schedules, fees, and the right next step in your Quran learning journey.</p><div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/80"><span className="inline-flex items-center gap-2"><Bot className="size-4 text-[#D0A86C]" /> Course guidance</span><span className="inline-flex items-center gap-2"><MessageCircleMore className="size-4 text-[#D0A86C]" /> Concise answers</span></div><div className="mt-10"><Link href="/" className="inline-flex items-center gap-3 rounded-[4px] bg-[#FBF6EF] px-7 py-4 text-sm font-semibold text-[#0D463E] transition hover:bg-[#D0A86C]"><ArrowLeft className="size-4" /> Go Back</Link></div></div></div>
  </section>;
}
