import type { FooterColumn } from "@/components/compositions/Footer/types/links";

const footerItemsData: FooterColumn[] = [
  {
    title: "Courses",
    links: [
      { title: "Noorani Qaida", url: "/courses/noorani-qaida" },
      { title: "Quran Reading", url: "/courses/quran-reading" },
      { title: "Quran Memorization", url: "/courses/quran-memorization" },
      { title: "Quran Translation", url: "/courses/quran-translation" },
      { title: "Qirat & Tajweed", url: "/courses/qirat-tajweed" },
      { title: "Islamic Studies", url: "/courses/islamic-studies" },
    ],
  },
  {
    title: "Fee & Resources",
    links: [
      { title: "Courses Fee", url: "/fee-schedule/courses-fee" },
      { title: "Free Courses", url: "/fee-schedule/free-courses" },
      { title: "Tajweede Quran", url: "/resources/tajweede-quran" },
      { title: "Tajweede Qaida", url: "/resources/tajweede-qaida" },
      { title: "Other Downloads", url: "/resources/downloads" },
    ],
  },
  {
    title: "About",
    links: [
      { title: "Our Sessions", url: "/our-sessions" },
      { title: "About Us", url: "/about-us" },
      { title: "Our Teachers", url: "/our-teachers" },
      { title: "Blogs", url: "/blogs" },
      { title: "Career", url: "/career" },
    ],
  },
  {
    title: "Support",
    links: [
      { title: "Book Free Trial", url: "/book-free-trial" },
      { title: "Help Center", url: "/help-center" },
      { title: "Career", url: "/career" },
      { title: "Privacy Policy", url: "/privacy-policy" },
      { title: "Terms & Conditions", url: "/terms-and-conditions" },
      { title: "Payment Policy", url: "/payment-policy" },
      { title: "Sitemap", url: "/sitemap" },
    ],
  },
];

export default footerItemsData;
