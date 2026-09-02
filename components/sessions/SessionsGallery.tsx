"use client";

import Image, { type StaticImageData } from "next/image";
import { Play, SlidersHorizontal, X } from "lucide-react";
import { useMemo, useState } from "react";

import thumbnailOne from "@/videos/thumbnails/Screenshot 2026-01-20 131818.png";
import thumbnailTwo from "@/videos/thumbnails/Screenshot 2026-01-20 131846.png";
import thumbnailThree from "@/videos/thumbnails/Screenshot 2026-01-20 131909.png";
import thumbnailFour from "@/videos/thumbnails/487807579_1080638864100861_2303679364308615_n.jpg";

type Category = "Quran" | "Tajweed" | "Islamic Guidance" | "Short Reminders" | "Kids" | "Lectures" | "Motivations";
type SortOption = "Latest" | "Popular" | "Oldest";

interface SessionVideo {
  id: number;
  title: string;
  category: Category;
  teacher: string;
  thumbnail: StaticImageData;
  videoId: string;
  popularity: number;
}

const categories = ["All", "Quran", "Tajweed", "Islamic Guidance", "Short Reminders", "Kids", "Lectures", "Motivations"] as const;
const teachers = ["All Scholars & Teachers", "Qari Nouman", "Qari Abdul Rahman", "Qari Rizwan", "Ustadha Maryam", "Mufti Hamza"];
const thumbnails = [thumbnailOne, thumbnailTwo, thumbnailThree, thumbnailFour];
const videoIds = ["R3JpYbTgJjg", "XEn66FxVgH8", "L67IjYgMK5I"];

const videos: SessionVideo[] = [
  ["A Beautiful Quran Recitation", "Quran", "Qari Nouman", 96],
  ["One Tajweed Rule to Remember", "Tajweed", "Qari Abdul Rahman", 88],
  ["Begin Your Day with Gratitude", "Short Reminders", "Qari Rizwan", 91],
  ["Learning Salah for Children", "Kids", "Ustadha Maryam", 83],
  ["Living with Patience and Trust", "Islamic Guidance", "Mufti Hamza", 94],
  ["Correcting Common Recitation Mistakes", "Tajweed", "Qari Nouman", 79],
  ["A Reminder for the Heart", "Motivations", "Qari Abdul Rahman", 99],
  ["Understanding Surah Al-Fatihah", "Lectures", "Qari Rizwan", 86],
  ["Quran Practice for Young Learners", "Kids", "Ustadha Maryam", 76],
  ["The Value of Consistent Worship", "Islamic Guidance", "Mufti Hamza", 90],
  ["Recite with Calm and Confidence", "Quran", "Qari Nouman", 84],
  ["Small Steps, Lasting Faith", "Motivations", "Qari Rizwan", 81],
].map(([title, category, teacher, popularity], index) => ({
  id: index + 1,
  title: title as string,
  category: category as Category,
  teacher: teacher as string,
  popularity: popularity as number,
  thumbnail: thumbnails[index % thumbnails.length],
  videoId: videoIds[index % videoIds.length],
}));

export default function SessionsGallery() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [sort, setSort] = useState<SortOption>("Latest");
  const [teacher, setTeacher] = useState(teachers[0]);
  const [activeVideo, setActiveVideo] = useState<SessionVideo | null>(null);

  const filteredVideos = useMemo(() => {
    const filtered = videos.filter((video) => (category === "All" || video.category === category) && (teacher === teachers[0] || video.teacher === teacher));
    return [...filtered].sort((a, b) => sort === "Popular" ? b.popularity - a.popularity : sort === "Oldest" ? a.id - b.id : b.id - a.id);
  }, [category, sort, teacher]);

  return (
    <section id="session-videos" className="w-full bg-white py-24 sm:py-28 min-[1024px]:py-32">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-4xl font-medium leading-[1.06] text-[#0D463E] sm:text-5xl min-[1024px]:text-[58px]">Watch, Learn &amp; <span className="font-accent font-normal italic">Reflect</span></h2>
          <p className="mx-auto mt-5 max-w-3xl font-body text-base leading-7 text-[#0D463E]/62">Choose a topic or teacher and discover short lessons made to bring beneficial knowledge into your day.</p>
        </div>

        <div className="mt-12 rounded-[18px] border border-[#0D463E]/10 bg-[#FBF6EF] p-4 sm:p-5">
          <div className="flex items-center gap-2 font-body text-xs font-bold uppercase tracking-[0.15em] text-[#0D463E]/55"><SlidersHorizontal className="size-4" /> Explore sessions</div>
          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((item) => <button key={item} type="button" onClick={() => setCategory(item)} className={`rounded-full px-4 py-2 font-body text-sm font-semibold transition-colors ${category === item ? "bg-[#0D463E] text-white" : "border border-[#0D463E]/12 bg-white text-[#0D463E] hover:bg-[#0D463E]/5"}`}>{item}</button>)}
          </div>
          <div className="mt-4 grid gap-3 border-t border-[#0D463E]/10 pt-4 sm:grid-cols-2">
            <label className="flex items-center gap-3 rounded-[8px] bg-white px-4 py-2.5 font-body text-sm text-[#0D463E]"><span className="shrink-0 font-semibold">Sort</span><select value={sort} onChange={(event) => setSort(event.target.value as SortOption)} className="w-full bg-transparent py-1 outline-none"><option>Latest</option><option>Popular</option><option>Oldest</option></select></label>
            <label className="flex items-center gap-3 rounded-[8px] bg-white px-4 py-2.5 font-body text-sm text-[#0D463E]"><span className="shrink-0 font-semibold">Teacher</span><select value={teacher} onChange={(event) => setTeacher(event.target.value)} className="w-full bg-transparent py-1 outline-none">{teachers.map((name) => <option key={name}>{name}</option>)}</select></label>
          </div>
        </div>

        {filteredVideos.length > 0 ? (
          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 min-[900px]:grid-cols-4">
            {filteredVideos.map((video) => (
              <button key={video.id} type="button" onClick={() => setActiveVideo(video)} className="group text-left">
                <div className="relative aspect-[9/16] overflow-hidden rounded-[14px] bg-[#071F1B] shadow-[0_12px_35px_rgba(13,70,62,0.12)]">
                  <Image src={video.thumbnail} alt={video.title} fill sizes="(min-width: 900px) 25vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071F1B]/90 via-transparent to-black/10" />
                  <span className="absolute right-4 top-4 grid size-11 place-items-center rounded-full bg-white/92 text-[#0D463E] transition-transform group-hover:scale-110"><Play className="ml-0.5 size-5 fill-current" /></span>
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5"><span className="font-body text-[10px] font-bold uppercase tracking-[0.14em] text-[#D0A86C]">{video.category}</span><h3 className="mt-2 font-heading text-lg font-medium leading-tight text-white sm:text-xl">{video.title}</h3><p className="mt-2 font-body text-xs text-white/65">{video.teacher}</p></div>
                </div>
              </button>
            ))}
          </div>
        ) : <div className="mt-12 rounded-[14px] border border-dashed border-[#0D463E]/20 py-16 text-center font-body text-[#0D463E]/60">No sessions match these filters yet.</div>}
      </div>

      {activeVideo && <div role="dialog" aria-modal="true" aria-label={activeVideo.title} className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4 backdrop-blur-xl" onClick={() => setActiveVideo(null)}><button type="button" aria-label="Close video" onClick={() => setActiveVideo(null)} className="absolute right-5 top-5 grid size-11 place-items-center rounded-full bg-[#FBF6EF] text-[#0D463E]"><X className="size-5" /></button><div className="relative aspect-[9/16] w-full max-w-[350px] overflow-hidden rounded-[16px] bg-black shadow-2xl" onClick={(event) => event.stopPropagation()}><iframe src={`https://www.youtube.com/embed/${activeVideo.videoId}?autoplay=1&rel=0&modestbranding=1`} title={activeVideo.title} className="absolute inset-0 size-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div></div>}
    </section>
  );
}
