import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ContentPage } from "@/components/landing/content-page";
import AboutPage from "@/components/about/AboutPage";
import BlogsPage from "@/components/blogs/BlogsPage";
import CareerPage from "@/components/career/CareerPage";
import CoursePage from "@/components/course/CoursePage";
import CoursesFeePage from "@/components/fees/CoursesFeePage";
import FreeCoursesPage from "@/components/free-courses/FreeCoursesPage";
import FAQPage from "@/components/faq-page/FAQPage";
import OurSessionsPage from "@/components/sessions/OurSessionsPage";
import TeachersPage from "@/components/teachers/TeachersPage";
import BookTrialPage from "@/components/book-trial/BookTrialPage";
import StartChatPage from "@/components/chat/StartChatPage";
import HelpCenterPage from "@/components/help-center/HelpCenterPage";
import ResourcePage from "@/components/resources/ResourcePage";
import { getResourcePage } from "@/components/resources/resource-data";
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

  if (page.url === "/career") {
    return <CareerPage />;
  }

  if (page.url === "/faqs") {
    return <FAQPage />;
  }

  if (page.url === "/our-teachers") {
    return <TeachersPage />;
  }

  if (page.url === "/book-free-trial") {
    return <BookTrialPage />;
  }

  if (page.url === "/start-chat") {
    return <StartChatPage />;
  }

  if (page.url === "/help-center") {
    return <HelpCenterPage />;
  }

  if (page.section === "Resources") {
    const resourcePage = getResourcePage(page.url);
    if (resourcePage) return <ResourcePage page={resourcePage} />;
  }

  if (page.url === "/about-us") {
    return <AboutPage />;
  }

  return <ContentPage page={page} />;
}
