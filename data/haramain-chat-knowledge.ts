import { coursePages } from "@/data/course-pages";
import type { ChatSessionContext } from "@/components/chat/types";

const courses = coursePages.map((course) => ({
  title: course.title,
  url: course.url,
  description: course.heroDescription,
  suitableFor: course.overviewPoints.find((point) => point.label === "Best for")?.value ?? course.overviewDescription,
  format: course.overviewPoints.find((point) => point.label === "Class format")?.value ?? "Live online lessons",
  learningGoal: course.overviewPoints.find((point) => point.label === "Learning goal")?.value ?? "Personal Quran learning",
}));

export const haramainChatKnowledge = {
  courses,
  teachers: ["Male and female teachers are available, subject to a suitable schedule match.", "Teachers are assessed for qualifications, Quran and Tajweed knowledge, teaching ability, experience, and professional conduct."],
  classes: ["Courses use live, personalized one-to-one online lessons.", "Children, teenagers, and adults are supported; suitability varies by course.", "Class options are offered throughout the day for worldwide time zones, subject to teacher availability.", "Weekend options are available."],
  trial: ["The free trial is a complimentary 30-minute online class, normally through Google Meet.", "It lets a visitor meet a teacher, assess their level, discuss timing, and confirm a suitable learning plan."],
  fees: ["Fees vary by course group, weekly frequency, currency, and billing period.", "Use /fee-schedule/courses-fee for current displayed pricing; enrollment confirmation includes the final payable amount."],
  routes: { teachers: "/our-teachers", schedule: "/fee-schedule/course-schedule", trial: "/book-free-trial", fees: "/fee-schedule/courses-fee", support: "/help-center" },
} as const;

export const courseRoutes = new Set<string>(courses.map((course) => course.url));

const courseAliases: Array<[RegExp, string]> = [
  [/noorani|qaida/i, "Noorani Qaida"], [/memor(?:ize|isation|ization)|hifz/i, "Quran Memorization"], [/translation|meaning/i, "Quran Translation"], [/tajweed|qirat|recitation/i, "Qirat & Tajweed"], [/tafsir/i, "Tafsir"], [/arabic language|learn arabic/i, "Arabic Language"], [/women|sister/i, "Women Guidance"], [/nasheed/i, "Nasheed Reciting"], [/islamic studies|belief|seerah|worship/i, "Islamic Studies"], [/quran reading|read quran|fluency/i, "Quran Reading"],
];

function compactCourse(title: string) {
  const course = courses.find((item) => item.title === title);
  return course ? `${course.title} | ${course.url} | For: ${course.suitableFor} | Goal: ${course.learningGoal} | ${course.format}` : "";
}

export function retrieveHaramainKnowledge(message: string, session: ChatSessionContext) {
  const parts: string[] = [];
  const matchedCourses = courseAliases.filter(([pattern]) => pattern.test(message)).map(([, title]) => title);
  const recommendationIntent = /recommend|which course|suitable|choose|best course|difference|compare/i.test(message) || session.assessmentStep === "ready";
  if (recommendationIntent) parts.push(`COURSES\n${courses.map((course) => compactCourse(course.title)).join("\n")}`);
  else if (matchedCourses.length) parts.push(`COURSES\n${[...new Set(matchedCourses)].map(compactCourse).join("\n")}`);
  if (/fee|price|pricing|cost|pay/i.test(message)) parts.push(`FEES\n${haramainChatKnowledge.fees.join(" ")}`);
  if (/teacher|male|female|ijazah|tutor/i.test(message)) parts.push(`TEACHERS\n${haramainChatKnowledge.teachers.join(" ")} Route: ${haramainChatKnowledge.routes.teachers}`);
  if (/schedule|time|timezone|weekend|available|class/i.test(message) || session.preferredTiming) parts.push(`CLASSES\n${haramainChatKnowledge.classes.join(" ")} Route: ${haramainChatKnowledge.routes.schedule}`);
  if (/trial|try|demo/i.test(message)) parts.push(`TRIAL\n${haramainChatKnowledge.trial.join(" ")} Route: ${haramainChatKnowledge.routes.trial}`);
  if (!parts.length) parts.push("GENERAL\nAnswer only if the supplied session and recent messages provide enough reliable information. Otherwise offer a team handoff.");
  return parts.join("\n\n");
}

export const HARAMAIN_STATIC_INSTRUCTIONS = `You are Haramain Quran Institute's concise AI assistant. Be warm, polite and Islamic in tone.
Use only supplied Haramain context. Never invent fees, schedules, policies, credentials, availability or routes. When unsure, say: "I'd prefer to connect you with our team so you receive the correct information." and set handoff=true. Never claim a human is online.
Ask at most one question per reply. Normally use 40-100 words and 1-3 short paragraphs. For course selection, use the collected learner profile and recommend one listed course only when confident.
Return JSON only: {"message":"...","recommendation":null,"handoff":false,"collected":{}}. A recommendation is {"title":"exact title","url":"exact route","suitableFor":"brief reason"}. collected may only use: studentAge, studentType, quranLevel, learningGoal, teacherPreference, country, timezone, preferredTiming, recommendedCourse.`;

export function buildCompactSessionSummary(session: ChatSessionContext) {
  const entries = Object.entries(session).filter(([key, value]) => key !== "summary" && key !== "assessmentStep" && typeof value === "string" && value.trim());
  return entries.length ? entries.map(([key, value]) => `${key}=${value}`).join("; ").slice(0, 500) : "No learner details collected yet.";
}
