import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, BookOpenCheck, HeartHandshake, UsersRound } from "lucide-react";

import heroImage from "@/assets/gallery-1.jpg";

export default function AboutHero() {
  return (
    <section className="relative flex min-h-[650px] items-end overflow-hidden pb-20 pt-40 text-white min-[768px]:min-h-[720px] min-[1024px]:pb-24">
      <Image
        src={heroImage}
        alt="About Haramain Quran Institute"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,28,24,0.97)_0%,rgba(4,44,38,0.88)_48%,rgba(13,70,62,0.42)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_30%,rgba(208,168,108,0.18),transparent_35%)]" />

      <div className="container relative z-10">
        <div className="max-w-4xl">
          <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-[#D0A86C]">About Our Institute</p>
          <h1 className="mt-5 font-heading text-5xl font-semibold leading-[0.98] tracking-tight text-white sm:text-6xl min-[1024px]:text-[78px]">
            About Us
          </h1>
          <p className="mt-6 max-w-3xl font-body text-base leading-7 text-white/78 sm:text-lg sm:leading-8">
            Discover a caring online Quran institute built around qualified teachers, personal guidance, flexible learning, and a meaningful connection with the Quran.
          </p>

          <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/80">
            <span className="inline-flex items-center gap-2"><UsersRound className="size-4 text-[#D0A86C]" /> Personal learning</span>
            <span className="inline-flex items-center gap-2"><BookOpenCheck className="size-4 text-[#D0A86C]" /> Structured programs</span>
            <span className="inline-flex items-center gap-2"><HeartHandshake className="size-4 text-[#D0A86C]" /> Caring guidance</span>
          </div>

          <div className="mt-10">
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-[4px] bg-[#FBF6EF] px-7 py-4 font-body text-sm font-semibold text-[#0D463E] transition-colors hover:bg-[#D0A86C]"
            >
              <ArrowLeft className="size-4" /> Go Back
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
