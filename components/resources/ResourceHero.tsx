import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, BookOpenText, Clock3, FileText } from "lucide-react";

import tajweedeQuranHero from "@/assets/TajweedeQuran-Images/Tajeede Quran Hero.png";
import tajweedeQaidaHero from "@/assets/TajweedeQaida-Images/Tajweede Qaida Hero.png";
import namazBookHero from "@/assets/NamazBook-Images/Nimaaz Book hero.png";
import kalmaBookHero from "@/assets/KalmaBook-Images/kalma Book hero.png";
import fallbackHero from "@/assets/Home-Images/hero.png";
import type { ResourcePageConfig } from "./resource-data";

const images = {
  6: tajweedeQuranHero,
  7: tajweedeQaidaHero,
  8: namazBookHero,
  9: kalmaBookHero,
  10: fallbackHero,
};

export default function ResourceHero({ page }: { page: ResourcePageConfig }) {
  const heroImage = images[page.heroImage as keyof typeof images] ?? fallbackHero;
  return <section className="relative flex min-h-[650px] items-end overflow-hidden pb-20 pt-40 text-white min-[768px]:min-h-[720px] min-[1024px]:pb-24"><Image src={heroImage} alt={`${page.title} learning resources`} fill priority sizes="100vw" className="object-cover" /><div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,28,24,0.97)_0%,rgba(4,44,38,0.9)_48%,rgba(13,70,62,0.42)_100%)]" /><div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_30%,rgba(208,168,108,0.2),transparent_35%)]" /><div className="container relative z-10"><div className="max-w-4xl"><p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-[#D0A86C]">{page.eyebrow}</p><h1 className="mt-5 font-heading text-5xl font-semibold leading-[0.98] text-white sm:text-6xl min-[1024px]:text-[78px]">{page.title}</h1><p className="mt-6 max-w-3xl font-body text-base leading-7 text-white/78 sm:text-lg sm:leading-8">{page.description}</p><div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/80"><span className="inline-flex items-center gap-2"><FileText className="size-4 text-[#D0A86C]" /> Free resources</span><span className="inline-flex items-center gap-2"><Clock3 className="size-4 text-[#D0A86C]" /> Coming soon</span><span className="inline-flex items-center gap-2"><BookOpenText className="size-4 text-[#D0A86C]" /> Study-ready guides</span></div><div className="mt-10"><Link href="/" className="inline-flex items-center gap-3 rounded-[var(--radius-sm)] bg-[#FBF6EF] px-7 py-4 font-body text-sm font-semibold text-[#0D463E] transition-colors hover:bg-[#D0A86C]"><ArrowLeft className="size-4" /> Go Back</Link></div></div></div></section>;
}
