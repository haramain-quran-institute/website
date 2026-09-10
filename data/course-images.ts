import type { StaticImageData } from "next/image";

import arabicFeature from "@/assets/ArabicLanguage-Images/feature.png";
import arabicHero from "@/assets/ArabicLanguage-Images/hero.png";
import islamicStudiesFeature from "@/assets/IslamicStudies-Images/feature.png";
import islamicStudiesHero from "@/assets/IslamicStudies-Images/hero.png";
import nasheedFeature from "@/assets/NasheedReciting-Images/feature.png";
import nasheedHero from "@/assets/NasheedReciting-Images/hero.png";
import nooraniQaidaFeature from "@/assets/NooraniQaida-Images/feature.png";
import nooraniQaidaHero from "@/assets/NooraniQaida-Images/hero.png";
import qiratTajweedFeature from "@/assets/QiratTajweed-Images/feature.png";
import qiratTajweedHero from "@/assets/QiratTajweed-Images/hero.png";
import memorizationFeature from "@/assets/QuranMemorization-Images/Quran Memorization Feature Sec.png";
import memorizationHero from "@/assets/QuranMemorization-Images/Quran Memorization hero.png";
import readingFeature from "@/assets/QuranReading-Images/Quran Reading Feature Section.png";
import readingHero from "@/assets/QuranReading-Images/Quran Reading Hero.png";
import translationFeature from "@/assets/QuranTranslation-Images/Quran translation Feature section.png";
import translationHero from "@/assets/QuranTranslation-Images/Quran Translation Hero.png";
import tafsirFeature from "@/assets/Tafsir-Images/feature.png";
import tafsirHero from "@/assets/Tafsir-Images/hero.png";
import womenGuidanceFeature from "@/assets/WomenGuidance-Images/feature.png";
import womenGuidanceHero from "@/assets/WomenGuidance-Images/hero.png";

interface CourseImageSet {
  hero: StaticImageData;
  feature: StaticImageData;
}

export const courseImages: Record<string, CourseImageSet> = {
  "/courses/noorani-qaida": {
    hero: nooraniQaidaHero,
    feature: nooraniQaidaFeature,
  },
  "/courses/quran-reading": {
    hero: readingHero,
    feature: readingFeature,
  },
  "/courses/quran-memorization": {
    hero: memorizationHero,
    feature: memorizationFeature,
  },
  "/courses/quran-translation": {
    hero: translationHero,
    feature: translationFeature,
  },
  "/courses/qirat-tajweed": {
    hero: qiratTajweedHero,
    feature: qiratTajweedFeature,
  },
  "/courses/tafsir": {
    hero: tafsirHero,
    feature: tafsirFeature,
  },
  "/courses/arabic-language": {
    hero: arabicHero,
    feature: arabicFeature,
  },
  "/courses/women-guidance": {
    hero: womenGuidanceHero,
    feature: womenGuidanceFeature,
  },
  "/courses/nasheed-reciting": {
    hero: nasheedHero,
    feature: nasheedFeature,
  },
  "/courses/islamic-studies": {
    hero: islamicStudiesHero,
    feature: islamicStudiesFeature,
  },
};
