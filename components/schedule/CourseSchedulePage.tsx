import {
  BadgeCheck,
  BookOpenCheck,
  CalendarClock,
  Clock3,
  Globe2,
  GraduationCap,
  Languages,
  MessagesSquare,
  MoonStar,
  RefreshCw,
  UserRoundCheck,
} from "lucide-react";

import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import FAQSection from "@/components/sections/FAQSection";
import FeaturesGridSection from "@/components/sections/FeaturesGridSection";
import type { FAQ } from "@/components/sections/FAQSection/types";
import { startFeatures } from "@/data/start-features";

import AvailabilityOverview, { type AvailabilityFeature } from "./AvailabilityOverview";
import CourseScheduleHero from "./CourseScheduleHero";
import TeacherExpertiseSection, { type TeacherExpertiseFeature } from "./TeacherExpertiseSection";

const availabilityFeatures: AvailabilityFeature[] = [
  { title: "Round-the-Clock Options", description: "Morning, afternoon, evening, and late-hour options help students learn around daily responsibilities.", icon: Clock3 },
  { title: "Worldwide Time Zones", description: "Our scheduling team coordinates lessons for learners across North America, Europe, Asia, the Middle East, and beyond.", icon: Globe2 },
  { title: "Consistent Weekly Routine", description: "Reserve regular class days and times to create a steady, dependable learning rhythm.", icon: CalendarClock },
  { title: "Easy Rescheduling Support", description: "When plans change, our team helps arrange a suitable alternative according to teacher availability.", icon: RefreshCw },
  { title: "Family-Friendly Planning", description: "Coordinate schedules for siblings, parents, and children without disrupting school, work, or home life.", icon: UserRoundCheck },
  { title: "Weekend Availability", description: "Weekend options give busy students and families more freedom to maintain their Quran studies.", icon: MoonStar },
];

const teacherFeatures: TeacherExpertiseFeature[] = [
  { title: "Male & Female Teachers", description: "Choose experienced male or female teachers according to the learner's comfort and preference.", icon: UserRoundCheck },
  { title: "Ijazah-Certified Teachers", description: "Learn with qualified teachers who bring strong Quranic knowledge, authentic recitation, and careful correction.", icon: BadgeCheck },
  { title: "Arabic & Asian Teachers", description: "Our diverse teaching team supports different languages, cultures, learning styles, and student needs.", icon: Languages },
  { title: "Experienced Online Educators", description: "Teachers are skilled in clear one-to-one instruction for children, teenagers, adults, and beginners.", icon: GraduationCap },
  { title: "Personal Learning Guidance", description: "Every teacher adapts lesson pace, revision, feedback, and practice to the student's individual goals.", icon: BookOpenCheck },
];

const scheduleFaqs: FAQ[] = [
  { question: "Are Quran classes available 24/7?", answer: "We offer class options throughout the day for students in different time zones. Your exact time is confirmed according to teacher availability and your chosen weekly plan." },
  { question: "Can I choose my preferred class time?", answer: "Yes. Share your preferred days, time, and time zone with our enrollment team, and we will match you with the most suitable available teacher." },
  { question: "How many classes can I take each week?", answer: "You can choose from flexible weekly plans based on your course, goals, and availability. Our team will help you select an appropriate frequency during your free trial." },
  { question: "Can I request a male or female teacher?", answer: "Yes. Male and female teachers are available, and we make every effort to honor your preference while confirming a suitable schedule." },
  { question: "What happens if I need to reschedule a class?", answer: "Contact the support team as early as possible. A replacement time can be arranged according to the rescheduling policy and teacher availability." },
  { question: "Do you offer weekend classes?", answer: "Yes. Weekend schedules are available for students and families who cannot attend regularly during weekdays." },
];

export default function CourseSchedulePage() {
  return (
    <main className="min-h-screen bg-[#FBF6EF]">
      <SiteHeader />
      <CourseScheduleHero />
      <FeaturesGridSection id="how-to-start" title="How to Start" description="Begin your Quran learning journey in three simple, supportive steps." features={startFeatures} />
      <AvailabilityOverview
        title="24/7 Availability All Over the World"
        description="Wherever you live and whatever your routine looks like, our scheduling team helps you build a consistent Quran learning plan. Flexible teacher availability makes meaningful one-to-one learning accessible across countries and time zones."
        imageAlt="Flexible Quran classes available for students worldwide"
        features={availabilityFeatures}
      />
      <TeacherExpertiseSection
        title="Learn with the Right Teacher"
        description="Our diverse teaching team combines authentic Quranic knowledge, online teaching experience, and personal guidance so every student can learn with confidence."
        features={teacherFeatures}
      />
      <FAQSection id="course-schedule-faqs" title="Course Schedule FAQs" faqs={scheduleFaqs} />
      <SiteFooter />
    </main>
  );
}
