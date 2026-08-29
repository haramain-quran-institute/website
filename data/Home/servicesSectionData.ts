import type { ServicesSectionProps } from "@/components/sections/ServicesSection/types";

const servicesData: ServicesSectionProps = {
  title: "Our Courses",
  description:
    "Explore our Quran learning programs designed to help students of all ages learn, understand, and build a lasting connection with the Quran.",
  services: [
    {
      number: "01",
      title: "Quran Reading",
      description:
        "Learn to read the Quran correctly with structured lessons designed for beginners and students looking to improve their reading skills.",
      href: "/courses/quran-reading",
    },
    {
      number: "02",
      title: "Tajweed",
      description:
        "Learn the rules of Tajweed and improve your Quran recitation with proper pronunciation, articulation, and rhythm.",
      href: "/courses/tajweed",
    },
    {
      number: "03",
      title: "Noorani Qaida",
      description:
        "Build a strong foundation in Arabic letters, pronunciation, and Quran reading through the Noorani Qaida method.",
      href: "/courses/noorani-qaida",
    },
    {
      number: "04",
      title: "Quran Memorization",
      description:
        "Memorize the Quran with personalized guidance, consistent revision, and a structured learning approach.",
      href: "/courses/quran-memorization",
    },
    {
      number: "05",
      title: "Quran Translation",
      description:
        "Explore the meanings and messages of the Quran through guided translation and explanation.",
      href: "/courses/quran-translation",
    },
    {
      number: "06",
      title: "Islamic Studies",
      description:
        "Develop a deeper understanding of Islamic teachings, values, and essential knowledge through structured lessons.",
      href: "/courses/islamic-studies",
    },
  ],
};

export default servicesData;