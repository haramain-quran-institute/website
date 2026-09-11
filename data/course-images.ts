import type { StaticImageData } from "next/image";

import arabicFeature from "@/assets/ArabicLanguage-Images/feature.webp";
import arabicHero from "@/assets/ArabicLanguage-Images/hero.webp";
import islamicStudiesFeature from "@/assets/IslamicStudies-Images/feature.webp";
import islamicStudiesHero from "@/assets/IslamicStudies-Images/hero.webp";
import nasheedFeature from "@/assets/NasheedReciting-Images/feature.webp";
import nasheedHero from "@/assets/NasheedReciting-Images/hero.webp";
import nooraniQaidaFeature from "@/assets/NooraniQaida-Images/feature.webp";
import nooraniQaidaHero from "@/assets/NooraniQaida-Images/hero.webp";
import qiratTajweedFeature from "@/assets/QiratTajweed-Images/feature.webp";
import qiratTajweedHero from "@/assets/QiratTajweed-Images/hero.webp";
import memorizationFeature from "@/assets/QuranMemorization-Images/Quran Memorization Feature Sec.webp";
import memorizationHero from "@/assets/QuranMemorization-Images/Quran Memorization hero.webp";
import readingFeature from "@/assets/QuranReading-Images/Quran Reading Feature Section.webp";
import readingHero from "@/assets/QuranReading-Images/Quran Reading Hero.webp";
import translationFeature from "@/assets/QuranTranslation-Images/Quran translation Feature section.webp";
import translationHero from "@/assets/QuranTranslation-Images/Quran Translation Hero.webp";
import tafsirFeature from "@/assets/Tafsir-Images/feature.webp";
import tafsirHero from "@/assets/Tafsir-Images/hero.webp";
import womenGuidanceFeature from "@/assets/WomenGuidance-Images/feature.webp";
import womenGuidanceHero from "@/assets/WomenGuidance-Images/hero.webp";

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
