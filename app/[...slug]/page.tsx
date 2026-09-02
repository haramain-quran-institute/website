import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ContentPage } from "@/components/landing/content-page";
import AboutPage from "@/components/about/AboutPage";
import BlogsPage from "@/components/blogs/BlogsPage";
import CoursePage from "@/components/course/CoursePage";
import CoursesFeePage from "@/components/fees/CoursesFeePage";
import FreeCoursesPage from "@/components/free-courses/FreeCoursesPage";
import OurSessionsPage from "@/components/sessions/OurSessionsPage";
import CourseSchedulePage from "@/components/schedule/CourseSchedulePage";
import { getCoursePageData } from "@/data/course-pages";
import { getNavigationPage, navigationPages } from "@/data/navigation";

interface RouteProps {
  params: Promise<{ slug: string[] }>;
}

export function generateStaticParams() {
  return navigationPages.map((page) => ({ slug: page.url.slice(1).split("/") }));
}

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getNavigationPage(`/${slug.join("/")}`);

  if (!page) return {};

  return {
    title: `${page.title} | Haramain Quran Institute`,
    description: page.description,
  };
}

export default async function NavigationPage({ params }: RouteProps) {
  const { slug } = await params;
  const page = getNavigationPage(`/${slug.join("/")}`);

  if (!page) notFound();

  if (page.section === "Courses") {
    const course = getCoursePageData(page.url);
    if (course) return <CoursePage course={course} />;
  }

  if (page.url === "/fee-schedule/courses-fee") {
    return <CoursesFeePage />;
  }

  if (page.url === "/fee-schedule/course-schedule") {
    return <CourseSchedulePage />;
  }

  if (page.url === "/fee-schedule/free-courses") {
    return <FreeCoursesPage />;
  }

  if (page.url === "/our-sessions") {
    return <OurSessionsPage />;
  }

  if (page.url === "/blogs") {
    return <BlogsPage />;
  }

  if (page.url === "/about-us") {
    return <AboutPage />;
  }

  return <ContentPage page={page} />;
}
