import { Award, Clock3, UserRound } from "lucide-react";

interface Teacher { name: string; specialty: string; experience: number; }
const teachers: Teacher[] = [
  { name: "Qari Abdul Rahman", specialty: "Quran Reading & Tajweed", experience: 10 },
  { name: "Qari Muhammad Nouman", specialty: "Noorani Qaida & Beginners", experience: 12 },
  { name: "Qari Muhammad Rizwan", specialty: "Qirat & Tajweed", experience: 9 },
  { name: "Qari Abdul Wajid", specialty: "Hifz & Quran Revision", experience: 8 },
  { name: "Qaria Binte Aftab", specialty: "Women & Children Quran Learning", experience: 10 },
  { name: "Qaria Binte Aamir", specialty: "Quran Reading & Islamic Studies", experience: 9 },
  { name: "Mufti Muhammad Aftab", specialty: "Islamic Studies & Guidance", experience: 14 },
  { name: "Mufti Muhammad Aamir", specialty: "Quran Translation & Tafsir", experience: 13 },
];

export default function TeachersGrid() {
  return <section id="teacher-profiles" className="w-full bg-white py-24 sm:py-28 min-[1024px]:py-32"><div className="container"><div className="mx-auto max-w-4xl text-center"><p className="font-body text-xs font-bold uppercase tracking-[0.18em] text-[#0D706D]">Eight Dedicated Educators</p><h2 className="mt-4 font-heading text-4xl font-medium text-[#0D463E] sm:text-5xl min-[1024px]:text-[58px]">Meet the People Behind <span className="font-accent font-normal italic">Every Lesson</span></h2><p className="mx-auto mt-5 max-w-3xl font-body text-base leading-7 text-[#0D463E]/62">Our teachers guide learners with clarity, patience, careful correction, and respect for each student&apos;s pace and goals.</p></div><div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 min-[1100px]:grid-cols-4">{teachers.map((teacher) => <article key={teacher.name} className="group overflow-hidden rounded-[var(--radius-md)] border border-[#0D463E]/10 bg-[#FBF6EF] shadow-[0_10px_32px_rgba(13,70,62,0.06)]"><div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-[#0D463E]"><div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_22%,rgba(208,168,108,0.22),transparent_40%)]" /><div className="relative grid size-28 place-items-center rounded-full border border-[#D0A86C]/35 bg-[#FBF6EF]/10 text-[#D0A86C]"><UserRound className="size-16" strokeWidth={1.4} /></div><span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-[#FBF6EF]/95 px-3 py-1.5 font-body text-[11px] font-bold text-[#0D463E]"><Clock3 className="size-3.5 text-[#0D706D]" /> {teacher.experience} years experience</span></div><div className="p-6"><div className="flex items-start gap-3"><Award className="mt-1 size-5 shrink-0 text-[#0D706D]" /><div><h3 className="font-heading text-[23px] font-medium leading-tight text-[#0D463E]">{teacher.name}</h3><p className="mt-2 font-body text-sm leading-6 text-[#0D463E]/60">{teacher.specialty}</p></div></div></div></article>)}</div></div></section>;
}
