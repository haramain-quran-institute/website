export interface NavigationItem {
  title: string;
  description: string;
  url: string;
}

export interface NavigationSection {
  title: string;
  url?: string;
  subItems: NavigationItem[];
}

export const navigationItems: NavigationSection[] = [
  { title: "Home", url: "/", subItems: [] },
  {
    title: "Courses",
    subItems: [
      { title: "Noorani Qaida", description: "Build a strong foundation in Arabic letters and pronunciation.", url: "/courses/noorani-qaida" },
      { title: "Quran Reading", description: "Learn to read the Quran fluently with proper pronunciation.", url: "/courses/quran-reading" },
      { title: "Quran Memorization", description: "Follow a structured Hifz program with experienced teachers.", url: "/courses/quran-memorization" },
      { title: "Quran Translation", description: "Understand the meaning and message of the Holy Quran.", url: "/courses/quran-translation" },
      { title: "Qirat & Tajweed", description: "Master Tajweed rules and improve your recitation.", url: "/courses/qirat-tajweed" },
      { title: "Tafsir", description: "Explore the deeper meanings and context of Quranic verses.", url: "/courses/tafsir" },
      { title: "Arabic Language", description: "Learn Arabic for a better understanding of the Quran.", url: "/courses/arabic-language" },
      { title: "Women Guidance", description: "Dedicated Islamic learning sessions designed for women.", url: "/courses/women-guidance" },
      { title: "Nasheed Reciting", description: "Improve voice, rhythm, and confidence for Islamic nasheeds.", url: "/courses/nasheed-reciting" },
      { title: "Islamic Studies", description: "Build a practical understanding of essential Islamic beliefs and daily guidance.", url: "/courses/islamic-studies" },
    ],
  },
  {
    title: "Fee & Schedule",
    subItems: [
      { title: "Courses Fee", description: "View flexible fee options for all available courses.", url: "/fee-schedule/courses-fee" },
      { title: "Course Schedule", description: "Check available class timings and schedules.", url: "/fee-schedule/course-schedule" },
      { title: "Free Courses", description: "Explore our complimentary Islamic learning resources.", url: "/fee-schedule/free-courses" },
    ],
  },
  {
    title: "Resources",
    subItems: [
      { title: "Tajweede Quran", description: "Quran resources prepared with Tajweed guidance.", url: "/resources/tajweede-quran" },
      { title: "Tajweede Qaida", description: "Learn Tajweed basics with an accessible Qaida guide.", url: "/resources/tajweede-qaida" },
      { title: "Namaz Book", description: "A step-by-step guide to performing Salah correctly.", url: "/resources/namaz-book" },
      { title: "Kalma Book", description: "Learn and memorize the six Kalmas.", url: "/resources/kalma-book" },
      { title: "Other Downloads", description: "Explore additional Islamic learning materials.", url: "/resources/downloads" },
    ],
  },
  {
    title: "About",
    subItems: [
      { title: "Our Sessions", description: "Explore our online classes and learning environment.", url: "/our-sessions" },
      { title: "About Us", description: "Learn more about Haramain Quran Institute.", url: "/about-us" },
      { title: "Our Teachers", description: "Meet our qualified and caring Quran teachers.", url: "/our-teachers" },
      { title: "Blogs", description: "Read Islamic articles and educational content.", url: "/blogs" },
      { title: "Career", description: "Join our teaching and support team.", url: "/career" },
      { title: "FAQ's", description: "Find answers to commonly asked questions.", url: "/faqs" },
    ],
  },
  {
    title: "Contact Us",
    subItems: [
      { title: "Book Free Trial", description: "Schedule your complimentary trial class today.", url: "/book-free-trial" },
      { title: "Start Chat", description: "Connect with our support team directly.", url: "/start-chat" },
      { title: "Help Center", description: "Get support and find helpful information.", url: "/help-center" },
    ],
  },
];

export const navigationPages = navigationItems.flatMap((section) =>
  section.subItems.map((item) => ({ ...item, section: section.title })),
);

export function getNavigationPage(pathname: string) {
  return navigationPages.find((item) => item.url === pathname);
}
