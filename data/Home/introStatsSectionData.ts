import {
  BookOpen,
  GraduationCap,
  Globe2,
  Users,
} from "lucide-react";

import HeroBackgroundImg from "@/assets/gallery-2.jpg";
import type { IntroStatsSectionProps } from "@/components/sections/IntroStatsSection/types";

const introStatsData: IntroStatsSectionProps = {
  title: "Why Choose Haramain Quran Institute?",
  description:
    "We make Quran learning accessible, engaging, and meaningful for students around the world. With qualified teachers, flexible online classes, and personalized guidance, every student can learn at their own pace and build a lasting connection with the Quran.",
  image: HeroBackgroundImg,
  imageAlt: "Haramain Quran Institute",
  buttonLabel: "Start Learning",
  stats: [
    {
      icon: BookOpen,
      value: "6+",
      title: "Quran Learning Programs",
    },
    {
      icon: GraduationCap,
      value: "100+",
      title: "Students Learning",
    },
    {
      icon: Globe2,
      value: "10+",
      title: "Countries Reached",
    },
    {
      icon: Users,
      value: "10+",
      title: "Qualified Teachers",
    },
  ],
};

export default introStatsData;
