import { StaticImageData } from "next/image";

export type CountryKey =
  | "united-states"
  | "united-kingdom"
  | "uae"
  | "australia"
  | "canada"
  | "turkey";

export type DegreeLevel =
  | "Foundation"
  | "Undergraduate"
  | "Postgraduate"
  | "MBA";

export interface UniversityProgram {
  id: string;
  title: string;
  description: string;
  duration: string;
  degreeLevel: DegreeLevel;
}

export interface UniversityItem {
  id: string;
  country: CountryKey;
  name: string;
  description: string;
  image: StaticImageData;
  programIds: string[];
  websiteUrl?: string;
}

export interface UniversityCatalogData {
  programs: UniversityProgram[];
  universities: UniversityItem[];
}

export interface CountryFilterItem {
  id: CountryKey;
  name: string;
}

export interface UniversityProgramsSectionData {
  id: string;
  title: string;
  description: string;
  teaserCtaLabel: string;
  teaserCtaHref: string;
  emptyStateTitle: string;
  emptyStateDescription: string;
  countries: CountryFilterItem[];
}

export interface UniversityProgramsPageData {
  title: string;
  description: string;
}
