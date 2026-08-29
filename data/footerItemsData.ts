import type { FooterColumn } from "@/components/compositions/Footer/types/links";

const footerItemsData: FooterColumn[] = [
  {
    title: "Programs",
    links: [
      { title: "Quran Reading", url: "/courses/quran-reading" },
      { title: "Quran Memorization", url: "/courses/quran-memorization" },
      { title: "Noorani Qaida", url: "/courses/noorani-qaida" },
      { title: "Qirat & Tajweed", url: "/courses/qirat-tajweed" },
    ],
  },
  {
    title: "Institute",
    links: [
      { title: "About Us", url: "/about-us" },
      { title: "Our Teachers", url: "/our-teachers" },
      { title: "Our Sessions", url: "/our-sessions" },
      { title: "Career", url: "/career" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Tajweede Quran", url: "/resources/tajweede-quran" },
      { title: "Namaz Book", url: "/resources/namaz-book" },
      { title: "Blogs", url: "/blogs" },
      { title: "FAQs", url: "/faqs" },
    ],
  },
  {
    title: "Support",
    links: [
      { title: "Book Free Trial", url: "/book-free-trial" },
      { title: "Start Chat", url: "/start-chat" },
      { title: "Help Center", url: "/help-center" },
      { title: "Courses Fee", url: "/fee-schedule/courses-fee" },
    ],
  },
];

export default footerItemsData;
