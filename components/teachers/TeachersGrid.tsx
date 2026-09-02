import Image, { type StaticImageData } from "next/image";
import { Award, Clock3 } from "lucide-react";

import portraitOne from "@/videos/thumbnails/Screenshot 2026-01-20 131818.png";
import portraitTwo from "@/videos/thumbnails/Screenshot 2026-01-20 131846.png";
import portraitThree from "@/videos/thumbnails/Screenshot 2026-01-20 131909.png";
import portraitFour from "@/videos/thumbnails/487807579_1080638864100861_2303679364308615_n.jpg";

interface Teacher { name: string; specialty: string; experience: number; image: StaticImageData; }
const teachers: Teacher[] = [
  { name: "Qari Nouman Ahmed", specialty: "Quran Reading & Tajweed", experience: 12, image: portraitOne },
  { name: "Qari Abdul Rahman", specialty: "Hifz & Quran Revision", experience: 10, image: portraitTwo },
  { name: "Qari Rizwan Ali", specialty: "Qirat & Tajweed", experience: 9, image: portraitThree },
  { name: "Qari Hamza Farooq", specialty: "Noorani Qaida & Beginners", experience: 8, image: portraitFour },
  { name: "Mufti Salman Haris", specialty: "Islamic Studies & Guidance", experience: 14, image: portraitTwo },
  { name: "Qari Usman Kareem", specialty: "Quran Memorization", experience: 11, image: portraitThree },
  { name: "Qari Bilal Mahmood", specialty: "Arabic & Quran Translation", experience: 7, image: portraitFour },
  { name: "Qari Ahmad Hasan", specialty: "Children's Quran Learning", experience: 8, image: portraitOne },
];

export default function TeachersGrid() {
  return <section id="teacher-profiles" className="w-full bg-white py-24 sm:py-28 min-[1024px]:py-32"><div className="container"><div className="mx-auto max-w-4xl text-center"><p className="font-body text-xs font-bold uppercase tracking-[0.18em] text-[#0D706D]">Eight Dedicated Educators</p><h2 className="mt-4 font-heading text-4xl font-medium text-[#0D463E] sm:text-5xl min-[1024px]:text-[58px]">Meet the People Behind <span className="font-accent font-normal italic">Every Lesson</span></h2><p className="mx-auto mt-5 max-w-3xl font-body text-base leading-7 text-[#0D463E]/62">Our teachers guide learners with clarity, patience, careful correction, and respect for each student&apos;s pace and goals.</p></div><div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 min-[1100px]:grid-cols-4">{teachers.map((teacher) => <article key={teacher.name} className="group overflow-hidden rounded-[14px] border border-[#0D463E]/10 bg-[#FBF6EF] shadow-[0_10px_32px_rgba(13,70,62,0.06)]"><div className="relative aspect-[4/5] overflow-hidden bg-[#0D463E]"><Image src={teacher.image} alt={`${teacher.name}, ${teacher.specialty} teacher`} fill sizes="(min-width: 1100px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.035]" /><div className="absolute inset-0 bg-gradient-to-t from-[#071F1B]/45 via-transparent to-transparent" /><span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-[#FBF6EF]/95 px-3 py-1.5 font-body text-[11px] font-bold text-[#0D463E]"><Clock3 className="size-3.5 text-[#0D706D]" /> {teacher.experience} years experience</span></div><div className="p-6"><div className="flex items-start gap-3"><Award className="mt-1 size-5 shrink-0 text-[#0D706D]" /><div><h3 className="font-heading text-[23px] font-medium leading-tight text-[#0D463E]">{teacher.name}</h3><p className="mt-2 font-body text-sm leading-6 text-[#0D463E]/60">{teacher.specialty}</p></div></div></div></article>)}</div></div></section>;
}
