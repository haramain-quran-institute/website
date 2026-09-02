export type ResourceKind = "free" | "paid";

export interface ResourceItem {
  title: string;
  description: string;
  filename: string;
  kind: ResourceKind;
  price?: number;
  pages: number;
}

export interface ResourcePageConfig {
  path: string;
  title: string;
  eyebrow: string;
  description: string;
  heroImage: number;
  resources: ResourceItem[];
}

export const resourcePages: ResourcePageConfig[] = [
  {
    path: "/resources/tajweede-quran", title: "Tajweede Quran", eyebrow: "Quran Resources", heroImage: 6,
    description: "Download practical Tajweed resources designed to improve Quran reading, rule recognition, recitation practice, and steady progress.",
    resources: [
      { title: "Color-Coded Tajweed Guide", description: "Recognize common Tajweed cues and apply them while reading.", filename: "color-coded-tajweed-guide.pdf", kind: "free", pages: 1 },
      { title: "Essential Tajweed Rules Reference", description: "A concise reference for Noon Sakinah, Meem Sakinah, Madd, and stops.", filename: "tajweed-rules-reference.pdf", kind: "paid", price: 6, pages: 1 },
      { title: "Daily Recitation Workbook", description: "Build accuracy through warm-ups, guided practice, and self-review.", filename: "daily-recitation-workbook.pdf", kind: "free", pages: 1 },
      { title: "Quran Reading Progress Journal", description: "Track weekly reading goals, corrections, reflections, and next steps.", filename: "quran-reading-progress-journal.pdf", kind: "paid", price: 5, pages: 1 },
    ],
  },
  {
    path: "/resources/tajweede-qaida", title: "Tajweede Qaida", eyebrow: "Beginner Resources", heroImage: 7,
    description: "Build a confident foundation in Arabic letters, pronunciation, joining, Makharij, and early Quran reading.",
    resources: [
      { title: "Tajweede Qaida for Beginners", description: "Learn Arabic letters, short vowels, joining, and beginner reading.", filename: "tajweede-qaida-beginner.pdf", kind: "free", pages: 1 },
      { title: "Makharij Practice Guide", description: "Practise articulation points through clear letter-pair exercises.", filename: "makharij-practice-guide.pdf", kind: "paid", price: 6, pages: 1 },
      { title: "Qaida Lesson Workbook", description: "Review each lesson with reading exercises and progress checks.", filename: "qaida-lesson-workbook.pdf", kind: "paid", price: 5, pages: 1 },
      { title: "Parent's Qaida Support Guide", description: "Help young learners practise effectively and positively at home.", filename: "parent-qaida-support.pdf", kind: "free", pages: 1 },
    ],
  },
  {
    path: "/resources/namaz-book", title: "Namaz Book", eyebrow: "Salah Resources", heroImage: 8,
    description: "Learn Wudu, Salah, prayer movements, recitations, and consistent worship through accessible step-by-step guides.",
    resources: [
      { title: "Complete Namaz Guide", description: "Understand preparation, prayer movements, recitation, and consistency.", filename: "complete-namaz-guide.pdf", kind: "paid", price: 7, pages: 1 },
      { title: "Wudu and Salah Step by Step", description: "Follow a clear sequence from purification to completing the prayer.", filename: "wudu-and-salah.pdf", kind: "free", pages: 1 },
      { title: "Salah Guide for Children", description: "A welcoming introduction to why and how Muslims pray.", filename: "salah-for-children.pdf", kind: "free", pages: 1 },
      { title: "Daily Prayer Tracker", description: "Build a gentle, consistent five-prayer habit with weekly reflection.", filename: "daily-prayer-tracker.pdf", kind: "paid", price: 4, pages: 1 },
    ],
  },
  {
    path: "/resources/kalma-book", title: "Kalma Book", eyebrow: "Faith Resources", heroImage: 9,
    description: "Study the six Kalmas, their meanings, pronunciation, foundations of faith, and a practical memorization method.",
    resources: [
      { title: "The Six Kalmas Guide", description: "Study Arabic text, meaning, pronunciation, and memorization steps.", filename: "six-kalmas-guide.pdf", kind: "free", pages: 1 },
      { title: "Kalmas for Young Learners", description: "Child-friendly learning portions with recall and family practice.", filename: "kalma-for-kids.pdf", kind: "free", pages: 1 },
      { title: "Kalma and Foundations of Faith", description: "Connect the testimony of faith with essential Muslim beliefs.", filename: "faith-foundations.pdf", kind: "paid", price: 6, pages: 1 },
      { title: "Kalma Memorization Workbook", description: "Use weekly targets, revision checks, meaning, and reflection.", filename: "kalma-memorization-workbook.pdf", kind: "paid", price: 5, pages: 1 },
    ],
  },
  {
    path: "/resources/downloads", title: "Other Downloads", eyebrow: "Islamic Resources", heroImage: 10,
    description: "Explore accessible guides covering Seerah, the Sahaba, stories of the Prophets, daily duas, and general Islamic guidance.",
    resources: [
      { title: "A Concise Seerah Guide", description: "Explore the Prophet's life, perseverance, and lessons for character.", filename: "seerah-book.pdf", kind: "paid", price: 8, pages: 1 },
      { title: "Stories of the Sahaba", description: "Learn from examples of courage, sincerity, generosity, and service.", filename: "stories-of-sahaba.pdf", kind: "paid", price: 7, pages: 1 },
      { title: "Stories of the Prophets", description: "Reflect on faith through trials, trust in Allah, and timeless lessons.", filename: "stories-of-prophets.pdf", kind: "paid", price: 8, pages: 1 },
      { title: "Islamic Duas and Daily Guidance", description: "Practise duas for daily routines with meaning and mindfulness.", filename: "islamic-duas-guide.pdf", kind: "free", pages: 1 },
    ],
  },
];

export function getResourcePage(path: string) { return resourcePages.find((page) => page.path === path); }
