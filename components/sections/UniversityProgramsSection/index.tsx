"use client";

import DiamondIcon from "@/assets/Icons/Diamond";
import FlagAustralia from "@/assets/Icons/FlagAustralia";
import FlagCanada from "@/assets/Icons/FlagCanada";
import FlagUAE from "@/assets/Icons/FlagUAE";
import FlagUK from "@/assets/Icons/FlagUK";
import FlagUSA from "@/assets/Icons/FlagUSA";
import FlagTurkey from "@/app/assets/Icons/FlagTurkey";
import FlagEU from "@/app/assets/Icons/FlagEU";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
/*
Popup imports preserved for future use
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
*/
import { cn } from "@/lib/utils";
import type {
  CountryKey,
  DegreeLevel,
  UniversityCatalogData,
  UniversityItem,
  UniversityProgramsPageData,
  UniversityProgramsSectionData,
} from "./types";

type SectionVariant = "teaser" | "full";

interface UniversityProgramsSectionProps {
  sectionData: UniversityProgramsSectionData;
  catalogData: UniversityCatalogData;
  pageData?: UniversityProgramsPageData;
  variant?: SectionVariant;
}

const countriesKey = "countries";
const programsKey = "programs";
const degreesKey = "degrees";

function parseCsvParam(value: string | null): string[] {
  if (!value) return [];
  return value
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean);
}

function MultiSelectGroup({
  label,
  items,
  selectedValues,
  onToggle,
  className,
  headerRight,
  renderItemLeft,
}: {
  label: string;
  items: Array<{ id: string; name: string }>;
  selectedValues: string[];
  onToggle: (id: string) => void;
  className?: string;
  headerRight?: React.ReactNode;
  renderItemLeft?: (item: { id: string; name: string }) => React.ReactNode;
}) {
  return (
    <div className={cn("space-y-3", className)}>
      <div className="flex items-center justify-between gap-3">
        <p className="font-heading text-smoky-black text-base">{label}</p>
        {headerRight}
      </div>

      <div className="max-h-48 overflow-auto pr-1 sm:max-h-56">
        <div className="flex flex-wrap gap-2">
          {items.map((item) => {
            const active = selectedValues.includes(item.id);

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onToggle(item.id)}
                className={cn(
                  "border-caribbean-current/20 hover:border-caribbean-current/60 cursor-pointer rounded-full border px-3 py-2 text-xs leading-none transition-colors",
                  active &&
                    "bg-caribbean-current border-caribbean-current text-white",
                )}
              >
                <span className="flex items-center gap-2">
                  {renderItemLeft ? renderItemLeft(item) : null}
                  <span>{item.name}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function UniversityProgramsSection({
  sectionData,
  catalogData,
  pageData,
  variant = "full",
}: UniversityProgramsSectionProps) {
  const isTeaser = variant === "teaser";

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const flagIcons = {
    "united-states": FlagUSA,
    "united-kingdom": FlagUK,
    "uae": FlagUAE,
    "australia": FlagAustralia,
    "canada": FlagCanada,
    "turkey": FlagTurkey,
    "eu": FlagEU,
  } as const;

  const selectedCountryIds = useMemo(
    () => parseCsvParam(searchParams.get(countriesKey)) as CountryKey[],
    [searchParams],
  );

  const selectedProgramIds = useMemo(
    () => parseCsvParam(searchParams.get(programsKey)),
    [searchParams],
  );

  const selectedDegrees = useMemo(
    () => parseCsvParam(searchParams.get(degreesKey)) as DegreeLevel[],
    [searchParams],
  );

  const [selectedUniversity] = useState<UniversityItem | null>(null);

  const programsById = useMemo(
    () => new Map(catalogData.programs.map((program) => [program.id, program])),
    [catalogData.programs],
  );

  const degreeFilters = useMemo(() => {
    const unique = new Set(
      catalogData.programs.map((program) => program.degreeLevel),
    );
    return Array.from(unique).map((degree) => ({ id: degree, name: degree }));
  }, [catalogData.programs]);

  const filteredUniversities = useMemo(() => {
    return catalogData.universities.filter((university) => {
      const countryMatch =
        selectedCountryIds.length === 0 ||
        selectedCountryIds.includes(university.country);

      const programMatch =
        selectedProgramIds.length === 0 ||
        selectedProgramIds.every((programId) =>
          university.programIds.includes(programId),
        );

      const degreeMatch =
        selectedDegrees.length === 0 ||
        selectedDegrees.every((degree) =>
          university.programIds.some(
            (programId) => programsById.get(programId)?.degreeLevel === degree,
          ),
        );

      return countryMatch && programMatch && degreeMatch;
    });
  }, [
    catalogData.universities,
    programsById,
    selectedCountryIds,
    selectedDegrees,
    selectedProgramIds,
  ]);

  const updateMultiFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const existing = parseCsvParam(params.get(key));

    const nextValues = existing.includes(value)
      ? existing.filter((item) => item !== value)
      : [...existing, value];

    if (nextValues.length === 0) params.delete(key);
    else params.set(key, nextValues.join(","));

    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  const updateCountryFilter = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const existing = parseCsvParam(params.get(countriesKey));

    const nextValues = existing.includes(value)
      ? existing.filter((item) => item !== value)
      : [...existing, value];

    if (nextValues.length === 0) params.delete(countriesKey);
    else params.set(countriesKey, nextValues.join(","));

    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  const clearFilters = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(countriesKey);
    params.delete(programsKey);
    params.delete(degreesKey);
    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  return (
    <section
      id={sectionData.id}
      className={cn(
        "w-full bg-transparent",
        isTeaser
          ? "my-20 sm:my-24 md:my-28"
          : "my-32 sm:my-36 md:my-40 lg:my-44",
      )}
    >
      <div className="container flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <DiamondIcon className="text-caribbean-current h-11 w-11" />

          {pageData && !isTeaser ? (
            <>
              <h1 className="text-heading-smd xs:text-heading-md lg:text-heading-lmd xl:text-heading-lg text-smoky-black font-heading">
                {pageData.title}
              </h1>
              <p className="text-body-base text-smoky-black/70">
                {pageData.description}
              </p>
            </>
          ) : (
            <>
              <h2 className="text-heading-smd xs:text-heading-md lg:text-heading-lmd xl:text-heading-lg text-smoky-black font-heading">
                {sectionData.title}
              </h2>
              <p className="text-body-base text-smoky-black/70">
                {sectionData.description}
              </p>
            </>
          )}
        </div>

        {/* HOME PAGE FLAGS */}
        {isTeaser && (
          <>
            <div className="flex flex-wrap items-start justify-center gap-10">
              {sectionData.countries.map((country) => {
                const FlagIcon = flagIcons[country.id];
                const href = `${sectionData.teaserCtaHref}?${countriesKey}=${country.id}`;

                return (
                  <Link
                    key={country.id}
                    href={href}
                    className="flex flex-col items-center"
                  >
                    <FlagIcon className="size-40" />
                    <p className="text-smoky-black/70 text-center">
                      {country.name}
                    </p>
                  </Link>
                );
              })}
            </div>

            <div className="flex justify-center">
              <Button asChild variant="secondary">
                <Link href={sectionData.teaserCtaHref}>
                  {sectionData.teaserCtaLabel}
                </Link>
              </Button>
            </div>
          </>
        )}

        {/* UNIVERSITIES PAGE */}
        {!isTeaser && (
          <>
            {/* Filters */}
            <div className="bg-isabelle/20 grid gap-6 rounded-2xl p-5 md:p-6 lg:grid-cols-3">
              <MultiSelectGroup
                label="Filter by Country"
                items={sectionData.countries.map((country) => ({
                  id: country.id,
                  name: country.name,
                }))}
                selectedValues={selectedCountryIds}
                onToggle={(value) => updateCountryFilter(value)}
              />

              <MultiSelectGroup
                label="Filter by Program"
                items={catalogData.programs.map((program) => ({
                  id: program.id,
                  name: program.title,
                }))}
                selectedValues={selectedProgramIds}
                onToggle={(value) => updateMultiFilter(programsKey, value)}
              />

              <MultiSelectGroup
                label="Filter by Degree Level"
                items={degreeFilters}
                selectedValues={selectedDegrees}
                onToggle={(value) => updateMultiFilter(degreesKey, value)}
                headerRight={
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="text-caribbean-current text-xs underline"
                  >
                    Clear filters
                  </button>
                }
              />
            </div>

            {/* Universities */}
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredUniversities.map((university) => (
                <article
                  key={university.id}
                  className="overflow-hidden rounded-2xl border border-[#1A16120F] bg-white shadow-sm"
                >
                  <div className="relative aspect-16/10 w-full">
                    <Image
                      src={university.image}
                      alt={university.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col items-start gap-8 px-5 py-9">
                    <div className="flex flex-col items-start gap-3">
                      <h3 className="font-heading text-heading-xs text-smoky-black">
                        {university.name}
                      </h3>
                      <p className="text-smoky-black/70 text-body-sm">
                        {university.description}
                      </p>
                    </div>

                    <Button asChild variant="secondary">
                      <Link
                        href={university.websiteUrl || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Programs
                      </Link>
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
