import type { Metadata } from "next";
import type { ReactNode } from "react";
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
import PolicyPage from "@/components/policies/PolicyPage";
import SitemapPage from "@/components/sitemap/SitemapPage";
import StructuredData from "@/components/seo/StructuredData";
import { getCoursePageData } from "@/data/course-pages";
import { getNavigationPage, navigationPages } from "@/data/navigation";
import { getPolicyPage } from "@/data/policies";
import { getRouteSeo, siteUrl } from "@/data/seo";

interface RouteProps {
  params: Promise<{ slug: string[] }>;
}

export function generateStaticParams() {
  return navigationPages.map((page) => ({ slug: page.url.slice(1).split("/") }));
}

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { slug } = await params;
  const pathname = `/${slug.join("/")}`;
  const page = getNavigationPage(pathname);

  if (!page) return {};

  const seo = getRouteSeo(pathname);
  const title = seo?.title ?? `${page.title} | Haramain Quran Institute`;
  const description = seo?.description ?? page.description;

  return {
    title,
    description,
    alternates: { canonical: pathname },
    openGraph: {
      title,
      description,
      url: `${siteUrl}${pathname}`,
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default async function NavigationPage({ params }: RouteProps) {
  const { slug } = await params;
  const page = getNavigationPage(`/${slug.join("/")}`);

  if (!page) notFound();

  const pathname = page.url;
  const course = page.section === "Courses" ? getCoursePageData(pathname) : undefined;
  let content: ReactNode;

  if (course) {
    content = <CoursePage course={course} />;
  } else if (page.url === "/fee-schedule/courses-fee") {
    content = <CoursesFeePage />;
  } else if (page.url === "/fee-schedule/course-schedule") {
    content = <CourseSchedulePage />;
  } else if (page.url === "/fee-schedule/free-courses") {
    content = <FreeCoursesPage />;
  } else if (page.url === "/our-sessions") {
    content = <OurSessionsPage />;
  } else if (page.url === "/blogs") {
    content = <BlogsPage />;
  } else if (page.url === "/career") {
    content = <CareerPage />;
  } else if (page.url === "/faqs") {
    content = <FAQPage />;
  } else if (page.url === "/our-teachers") {
    content = <TeachersPage />;
  } else if (page.url === "/book-free-trial") {
    content = <BookTrialPage />;
  } else if (page.url === "/start-chat") {
    content = <StartChatPage />;
  } else if (page.url === "/help-center") {
    content = <HelpCenterPage />;
  } else {
    const policy = getPolicyPage(page.url);

    if (policy) {
      content = <PolicyPage policy={policy} />;
    } else if (page.url === "/sitemap") {
      content = <SitemapPage />;
    } else if (page.section === "Resources") {
      const resourcePage = getResourcePage(page.url);
      content = resourcePage ? <ResourcePage page={resourcePage} /> : <ContentPage page={page} />;
    } else if (page.url === "/about-us") {
      content = <AboutPage />;
    } else {
      content = <ContentPage page={page} />;
    }
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: page.title,
        item: `${siteUrl}${pathname}`,
      },
    ],
  };

  const courseData = course
    ? {
        "@context": "https://schema.org",
        "@type": "Course",
        name: course.title,
        description: course.heroDescription,
        url: `${siteUrl}${course.url}`,
        provider: {
          "@type": "EducationalOrganization",
          "@id": `${siteUrl}/#organization`,
          name: "Haramain Quran Institute",
          url: siteUrl,
        },
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "Online",
          courseWorkload: "Flexible weekly plans",
        },
      }
    : null;

  return (
    <>
      <StructuredData data={breadcrumbData} />
      {courseData && <StructuredData data={courseData} />}
      {content}
    </>
  );
}
