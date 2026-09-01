import ServicesCardList from "./components/ServicesCardList";
import type { ServiceItem, ServicesSectionProps } from "./types";

const defaultServices: ServiceItem[] = [
  {
    number: "01",
    title: "Quran Reading",
    description:
      "Learn to read the Quran correctly with proper pronunciation and fluency.",
    href: "/courses/quran-reading",
  },
  {
    number: "02",
    title: "Quran Memorization",
    description:
      "Memorize the Quran with structured lessons and personal guidance.",
    href: "/courses/quran-memorization",
  },
  {
    number: "03",
    title: "Qirat & Tajweed",
    description:
      "Master Tajweed and recite the Quran with accuracy and confidence.",
    href: "/courses/qirat-tajweed",
  },
  {
    number: "04",
    title: "Noorani Qaida",
    description:
      "Build a strong foundation for Quran reading with our Qaida course.",
    href: "/courses/noorani-qaida",
  },
  {
    number: "05",
    title: "Quran Translation",
    description:
      "Understand the Quran through clear and accessible translation lessons.",
    href: "/courses/quran-translation",
  },
  {
    number: "06",
    title: "Tafsir Courses",
    description:
      "Explore the meanings, wisdom, and lessons of the Quran.",
    href: "/courses/tafsir",
  },
  {
    number: "07",
    title: "Arabic Language",
    description:
      "Learn Arabic to better understand the Quran and Islamic texts.",
    href: "/courses/arabic-language",
  },
  {
    number: "08",
    title: "Women Guidance",
    description:
      "Dedicated Islamic learning and guidance designed for women.",
    href: "/courses/women-guidance",
  },
  {
    number: "09",
    title: "Nasheed Reciting",
    description:
      "Develop your voice and recitation skills through guided learning.",
    href: "/courses/nasheed-reciting",
  },
  {
    number: "10",
    title: "Islamic Studies",
    description:
      "Build a strong understanding of essential Islamic knowledge and teachings.",
    href: "/courses/islamic-studies",
  },
];

export default function ServicesSection({
  id = "courses",
  title = "Our Courses",
  description = "Explore our structured Quran and Islamic learning programs, designed to help students learn, understand, and connect with the Quran.",
  services,
}: ServicesSectionProps) {
  const courseServices =
    services && services.length > 0
      ? services
      : defaultServices;

  return (
    <section
  id={id}
  className="w-full bg-[#FFFFFF] py-24 sm:py-28 md:py-32"
>
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex w-full flex-col items-center justify-center text-center">
          <h2 className="font-heading text-[52px] font-medium leading-[1.05] tracking-tight text-[#0D463E]">
            {title}
          </h2>

          <p className="font-body mt-5 max-w-4xl text-[16px] font-normal leading-7 tracking-tight text-[#0D463E]">
            {description}
          </p>
        </div>

        {/* Courses */}
        <div className="mt-16 sm:mt-18 md:mt-20">
          <ServicesCardList services={courseServices} />
        </div>
      </div>
    </section>
  );
}
