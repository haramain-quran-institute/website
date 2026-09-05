export interface RouteSeo {
  title: string;
  description: string;
  primaryIntent: string;
  secondaryIntents: string[];
}

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://haramainquraninstitute.com"
).replace(/\/$/, "");

export const routeSeo: Record<string, RouteSeo> = {
  "/": {
    title: "Online Quran Institute & Classes | Haramain",
    description: "Learn Quran online through one-to-one classes for children and adults worldwide, with male and female teachers, flexible schedules, and a free trial.",
    primaryIntent: "online Quran institute",
    secondaryIntents: ["online Quran classes", "learn Quran online", "online Quran school"],
  },
  "/courses/noorani-qaida": {
    title: "Online Noorani Qaida Classes | Haramain",
    description: "Learn Noorani Qaida online through personal lessons in Arabic letters, joining, vowel signs, pronunciation, and beginner Quran reading for children and adults.",
    primaryIntent: "online Noorani Qaida classes",
    secondaryIntents: ["Quran reading for beginners", "Noorani Qaida for kids", "learn Noorani Qaida online"],
  },
  "/courses/quran-reading": {
    title: "Online Quran Reading Classes | Haramain",
    description: "Build accurate, fluent Quran reading through live one-to-one lessons, guided recitation, pronunciation correction, and practice suited to your current level.",
    primaryIntent: "online Quran reading classes",
    secondaryIntents: ["learn to read Quran", "Quran reading for beginners", "Quran tutor online"],
  },
  "/courses/quran-memorization": {
    title: "Online Quran Memorization & Hifz Classes | Haramain",
    description: "Memorize Quran online with a personal Hifz plan that balances new memorization, Tajweed correction, daily revision, and long-term retention.",
    primaryIntent: "online Quran memorization classes",
    secondaryIntents: ["online Hifz classes", "memorize Quran online", "Quran memorization teacher"],
  },
  "/courses/quran-translation": {
    title: "Online Quran Translation Course | Haramain",
    description: "Understand Quran meanings through guided online translation lessons covering key vocabulary, verse meanings, themes, context, and practical reflection.",
    primaryIntent: "online Quran translation course",
    secondaryIntents: ["understand Quran meaning", "learn Quran translation", "Quran vocabulary"],
  },
  "/courses/qirat-tajweed": {
    title: "Online Tajweed & Qirat Classes | Haramain",
    description: "Improve Quran recitation through online Tajweed and Qirat lessons covering Makharij, letter qualities, recitation rules, stopping, and live correction.",
    primaryIntent: "online Tajweed classes",
    secondaryIntents: ["Qirat course online", "Quran recitation classes", "improve Quran pronunciation"],
  },
  "/courses/tafsir": {
    title: "Online Quran Tafsir Course | Haramain",
    description: "Study Quran Tafsir online through structured lessons on revelation context, Surah themes, key language, scholarly explanation, and practical guidance.",
    primaryIntent: "online Quran Tafsir course",
    secondaryIntents: ["learn Quran Tafsir", "Quran explanation classes", "understand Quran deeply"],
  },
  "/courses/arabic-language": {
    title: "Online Quranic Arabic Classes | Haramain",
    description: "Learn Arabic online with one-to-one lessons in vocabulary, grammar, reading, listening, conversation, and language patterns that support Quran study.",
    primaryIntent: "online Quranic Arabic classes",
    secondaryIntents: ["learn Arabic for Quran", "Arabic language course online", "Quranic vocabulary"],
  },
  "/courses/women-guidance": {
    title: "Online Islamic Classes for Women | Haramain",
    description: "Join private online Quran and Islamic guidance classes for women, with flexible learning shaped around Quran study, worship, daily questions, and personal goals.",
    primaryIntent: "online Islamic classes for women",
    secondaryIntents: ["Islamic guidance for women", "Quran classes for women", "online Islamic education for women"],
  },
  "/courses/nasheed-reciting": {
    title: "Online Nasheed Reciting Classes | Haramain",
    description: "Develop clear pronunciation, breath control, rhythm, tone, expression, and confident delivery through personal online Islamic nasheed lessons.",
    primaryIntent: "online Nasheed reciting classes",
    secondaryIntents: ["Islamic Nasheed lessons", "Arabic Nasheed pronunciation", "Nasheed vocal training"],
  },
  "/courses/islamic-studies": {
    title: "Online Islamic Studies Classes | Haramain",
    description: "Learn Islamic Studies online through age-appropriate lessons on beliefs, worship, Seerah, character, duas, and practical guidance for children and adults.",
    primaryIntent: "online Islamic Studies classes",
    secondaryIntents: ["online Islamic education", "Islamic classes for kids", "learn Islam online"],
  },
  "/fee-schedule/courses-fee": {
    title: "Online Quran Classes Fees & Plans | Haramain",
    description: "Compare transparent monthly fees for one-to-one online Quran classes, weekly lesson plans, supported currencies, and the available yearly saving.",
    primaryIntent: "online Quran classes fees",
    secondaryIntents: ["Quran tuition fees", "affordable online Quran classes", "Quran course prices"],
  },
  "/fee-schedule/course-schedule": {
    title: "Flexible Online Quran Class Schedule | Haramain",
    description: "Arrange flexible online Quran classes across worldwide time zones, with weekday, weekend, morning, evening, and late-hour options subject to teacher availability.",
    primaryIntent: "online Quran class schedule",
    secondaryIntents: ["flexible Quran classes", "Quran classes for different time zones", "weekend Quran classes"],
  },
  "/fee-schedule/free-courses": {
    title: "Free Online Islamic Courses & Learning | Haramain",
    description: "Explore Haramain's selected free online Islamic courses for children, families, and beginners, clearly separate from paid classes and the free trial lesson.",
    primaryIntent: "free online Islamic courses",
    secondaryIntents: ["free Quran learning", "free Islamic learning resources", "free courses for Muslim families"],
  },
  "/resources/tajweede-quran": {
    title: "Tajweed Quran PDF Resources | Haramain",
    description: "Browse free and paid Tajweed Quran PDF resources for rule recognition, recitation practice, daily revision, and Quran reading progress.",
    primaryIntent: "Tajweed Quran PDF resources",
    secondaryIntents: ["Tajweed learning resources", "Quran recitation workbook", "Tajweed rules PDF"],
  },
  "/resources/tajweede-qaida": {
    title: "Tajweede Qaida PDF Resources | Haramain",
    description: "Download Tajweede Qaida learning resources for Arabic letters, joining, Makharij, pronunciation practice, beginner lessons, and parent-supported revision.",
    primaryIntent: "Tajweede Qaida PDF",
    secondaryIntents: ["Noorani Qaida learning resources", "Makharij practice guide", "Qaida for beginners"],
  },
  "/resources/namaz-book": {
    title: "Namaz & Salah PDF Guides | Haramain",
    description: "Explore practical Namaz and Salah PDF guides covering Wudu, prayer steps, children's learning, daily worship, and consistent prayer habits.",
    primaryIntent: "Namaz and Salah PDF guide",
    secondaryIntents: ["how to pray Salah", "Wudu and Salah guide", "Salah guide for children"],
  },
  "/resources/kalma-book": {
    title: "Six Kalmas PDF Books & Guides | Haramain",
    description: "Study the six Kalmas through downloadable PDF guides covering Arabic text, meaning, pronunciation, faith foundations, and memorization practice.",
    primaryIntent: "six Kalmas PDF book",
    secondaryIntents: ["Kalma guide for children", "Kalma memorization", "Islamic faith resources"],
  },
  "/resources/downloads": {
    title: "Islamic Books & PDF Downloads | Haramain",
    description: "Browse Islamic PDF books and study guides about Seerah, the Sahaba, stories of the Prophets, daily duas, and practical Islamic guidance.",
    primaryIntent: "Islamic books and PDF downloads",
    secondaryIntents: ["Seerah PDF", "stories of the Sahaba", "Islamic duas guide"],
  },
  "/our-sessions": {
    title: "Quran Lessons, Tajweed Videos & Reminders | Haramain",
    description: "Watch short Quran lessons, Tajweed guidance, recitations, children's learning moments, Islamic reminders, lectures, and motivation from Haramain.",
    primaryIntent: "online Quran learning videos",
    secondaryIntents: ["Tajweed videos", "Islamic reminders", "Quran lessons online"],
  },
  "/about-us": {
    title: "About Haramain Quran Institute | Online Quran School",
    description: "Learn how Haramain Quran Institute provides structured one-to-one Quran and Islamic education for children and adults through flexible online classes worldwide.",
    primaryIntent: "Haramain Quran Institute",
    secondaryIntents: ["online Quran school", "online Quran academy", "Quran learning institute"],
  },
  "/our-teachers": {
    title: "Online Quran Teachers & Tutors | Haramain",
    description: "Meet Haramain's online Quran teachers and learn how educators are assessed for recitation, Tajweed, teaching clarity, experience, and student care.",
    primaryIntent: "online Quran teachers",
    secondaryIntents: ["Quran tutors online", "male Quran teachers", "female Quran teachers"],
  },
  "/blogs": {
    title: "Quran Learning & Islamic Education Blog | Haramain",
    description: "Read original articles about Quran learning, Tajweed, Hifz, Islamic Studies, parenting, duas, Quranic Arabic, and practical Muslim family life.",
    primaryIntent: "Quran learning blog",
    secondaryIntents: ["Islamic education articles", "Tajweed guidance", "Hifz tips"],
  },
  "/career": {
    title: "Quran Teaching & Education Careers | Haramain",
    description: "Explore current remote, onsite, and hybrid opportunities in Quran teaching, Islamic education, admissions, academic operations, content, and media.",
    primaryIntent: "online Quran teaching jobs",
    secondaryIntents: ["Islamic education careers", "remote Quran teacher jobs", "Haramain careers"],
  },
  "/faqs": {
    title: "Online Quran Classes FAQs | Haramain",
    description: "Find clear answers about online Quran courses, fees, schedules, male and female teachers, free trials, enrollment, resources, and technical support.",
    primaryIntent: "online Quran classes FAQs",
    secondaryIntents: ["Quran course questions", "Quran class fees", "online Quran lesson support"],
  },
  "/book-free-trial": {
    title: "Book a Free Online Quran Trial Class | Haramain",
    description: "Book a free 30-minute online Quran trial class, choose a local date and time, share the learner's level and goals, and meet a suitable teacher.",
    primaryIntent: "free online Quran trial class",
    secondaryIntents: ["book Quran trial lesson", "online Quran class assessment", "try Quran classes online"],
  },
  "/start-chat": {
    title: "Quran Course Guidance & Support Chat | Haramain",
    description: "Ask the Haramain assistant about Quran courses, learning levels, teachers, fees, schedules, worldwide availability, or booking a free trial class.",
    primaryIntent: "online Quran course guidance",
    secondaryIntents: ["choose a Quran course", "Quran class support", "Haramain chat"],
  },
  "/help-center": {
    title: "Contact & Quran Class Support | Haramain",
    description: "Contact Haramain Quran Institute for help with course selection, Quran class fees, schedules, teachers, enrollment, free trials, and student support.",
    primaryIntent: "contact Haramain Quran Institute",
    secondaryIntents: ["Quran class support", "ask about Quran courses", "book Quran trial"],
  },
  "/privacy-policy": {
    title: "Privacy Policy | Haramain Quran Institute",
    description: "Read how Haramain Quran Institute collects, uses, protects, retains, and shares information for students, guardians, trial classes, and website services.",
    primaryIntent: "Haramain Quran Institute privacy policy",
    secondaryIntents: ["student data privacy", "children's privacy", "website privacy"],
  },
  "/terms-and-conditions": {
    title: "Terms & Conditions | Haramain Quran Institute",
    description: "Read the terms for registration, trial classes, enrollment, scheduling, payments, cancellations, conduct, learning materials, and online services.",
    primaryIntent: "Haramain Quran Institute terms and conditions",
    secondaryIntents: ["online Quran class terms", "class cancellation terms", "student responsibilities"],
  },
  "/payment-policy": {
    title: "Payment Policy | Haramain Quran Institute",
    description: "Understand monthly tuition, approved payment methods, confirmation, international transactions, refunds, adjustments, disputes, and payment support.",
    primaryIntent: "Haramain Quran Institute payment policy",
    secondaryIntents: ["Quran class refunds", "tuition payment terms", "payment support"],
  },
  "/sitemap": {
    title: "Website Sitemap | Haramain Quran Institute",
    description: "Browse every main Haramain Quran Institute page, including online Quran courses, fees, schedules, resources, teachers, support, and policies.",
    primaryIntent: "Haramain Quran Institute sitemap",
    secondaryIntents: ["Quran course directory", "website navigation", "Haramain pages"],
  },
};

export function getRouteSeo(pathname: string) {
  return routeSeo[pathname];
}
