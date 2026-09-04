"use client";

import { useMemo, useState } from "react";
import FAQs from "@/components/sections/FAQSection/components/FAQs";
import type { FAQ } from "@/components/sections/FAQSection/types";

type Category = "Courses" | "Fees & Payments" | "Schedule & Classes" | "Trial & Enrollment" | "Teachers" | "Sessions & Resources" | "Technical Support" | "General Support";
interface CategorizedFAQ extends FAQ { category: Category; }
const categories = ["All FAQs", "Courses", "Fees & Payments", "Schedule & Classes", "Trial & Enrollment", "Teachers", "Sessions & Resources", "Technical Support", "General Support"] as const;

const faq = (category: Category, question: string, answer: string): CategorizedFAQ => ({ category, question, answer });
const allFaqs: CategorizedFAQ[] = [
  faq("Courses", "What Quran courses do you offer?", "We offer Noorani Qaida, Quran Reading, Quran Memorization, Quran Translation, Qirat and Tajweed, Tafsir, Arabic Language, Women Guidance, Nasheed Reciting, and Islamic Studies."),
  faq("Courses", "Which course is best for a complete beginner?", "Noorani Qaida is usually the best starting point for learners who do not yet recognize Arabic letters or join them confidently. A trial assessment confirms the right level."),
  faq("Courses", "Can children and adults study the same courses?", "Yes. Most programs are available for children, teenagers, and adults, but lesson pace, examples, goals, and materials are adapted to the learner's age."),
  faq("Courses", "Can I study more than one subject?", "Yes. Students can combine related goals such as Quran reading with Tajweed or Islamic Studies, subject to an appropriate schedule and learning plan."),
  faq("Courses", "How long does a course take to complete?", "Completion time depends on the course, starting level, weekly frequency, personal goals, and revision between lessons. Your teacher will provide progress guidance."),
  faq("Courses", "Do you offer Quran memorization revision only?", "Yes. Students who have already memorized portions can follow a revision-focused plan to strengthen retention, correct mistakes, and organize regular review."),
  faq("Courses", "Is Arabic Language taught for Quran understanding?", "Yes. Arabic lessons can focus on Quranic vocabulary, foundational grammar, recurring word patterns, reading, and comprehension."),
  faq("Courses", "Can women request women-focused Islamic guidance?", "Yes. Women Guidance provides a private and respectful setting for Quran learning, worship guidance, Islamic essentials, and personal learning questions."),
  faq("Fees & Payments", "How much do online Quran classes cost?", "Fees vary by course group, number of weekly classes, and billing period. The Courses Fee page shows the available plans and supported currencies."),
  faq("Fees & Payments", "Which currencies can I view?", "Course fees can currently be viewed in USD, AUD, PKR, and CAD for easier comparison."),
  faq("Fees & Payments", "Is there a discount for yearly payment?", "Yes. The current yearly billing option displays a 20% saving compared with monthly billing."),
  faq("Fees & Payments", "Are there any registration charges?", "Any applicable enrollment or material charges will be explained clearly before payment. Ask the enrollment team for the exact total for your selected plan."),
  faq("Fees & Payments", "Can siblings receive a family discount?", "Family arrangements may be available depending on the number of learners and selected plans. Contact the enrollment team for a personalized confirmation."),
  faq("Fees & Payments", "How do paid PDF resources work?", "Choose a paid resource and select Card, PayPal, or Apple Pay. Live purchasing requires the institute's secure payment provider to be active."),
  faq("Schedule & Classes", "Are classes available 24 hours a day?", "We offer broad availability across global time zones. Exact times depend on the selected course, teacher availability, and weekly plan."),
  faq("Schedule & Classes", "Can I choose my preferred days and times?", "Yes. Share your preferred schedule and time zone, and the team will match you with the closest available teacher slots."),
  faq("Schedule & Classes", "How many classes can I take each week?", "Multiple weekly plans are available, including two, three, four, five, and weekend-based schedules depending on the course."),
  faq("Schedule & Classes", "How long is each class?", "Class duration is confirmed according to the student's age, course, and plan. The enrollment team will explain the session length before classes begin."),
  faq("Schedule & Classes", "Can I take weekend-only classes?", "Yes. Weekend options are available for learners who cannot attend during weekdays, subject to teacher availability."),
  faq("Schedule & Classes", "What if I need to reschedule a class?", "Contact support as early as possible. A replacement may be arranged according to the rescheduling policy and the teacher's available times."),
  faq("Schedule & Classes", "What time zone is used for my schedule?", "Your schedule is confirmed in your local time zone to reduce confusion. Please notify the team if your location or daylight-saving time changes."),
  faq("Trial & Enrollment", "Is the trial class free?", "Yes. The free trial allows you to meet a teacher, experience the lesson format, discuss goals, and confirm the most suitable course and schedule."),
  faq("Trial & Enrollment", "How do I book a free trial?", "Select a Free Trial Class button, submit the requested learner details, or contact the institute by email or WhatsApp."),
  faq("Trial & Enrollment", "What happens during the trial class?", "The teacher welcomes the learner, checks the current level, teaches a short sample lesson, discusses goals, and suggests a suitable starting plan."),
  faq("Trial & Enrollment", "Do I need to prepare anything for the trial?", "Bring any Quran or Qaida currently used and be ready to share previous learning experience, goals, preferred schedule, and technology setup."),
  faq("Trial & Enrollment", "Can more than one child take a trial?", "Yes. Each learner should receive an individual assessment so the institute can recommend the correct teacher, level, and plan."),
  faq("Trial & Enrollment", "How soon can regular classes begin?", "Classes can begin after the course, teacher, schedule, and payment plan are confirmed. Start time depends on the selected availability."),
  faq("Teachers", "Are your Quran teachers qualified?", "Teachers are selected for Quranic knowledge, recitation quality, teaching ability, communication, patience, and experience with online learners."),
  faq("Teachers", "Do you have Ijazah-certified teachers?", "Ijazah-certified teachers may be available for relevant programs. Request this preference during enrollment so the team can confirm a suitable match."),
  faq("Teachers", "Can I choose a male or female teacher?", "Yes. Male and female teachers are available, and the institute makes every effort to honor the learner's preference."),
  faq("Teachers", "What languages do teachers speak?", "The teaching team includes Arabic and Asian educators with different language abilities. Tell the enrollment team which language support you need."),
  faq("Teachers", "Can I change my teacher?", "If a match is not working well, contact student support. The team will discuss the concern and help arrange an appropriate solution where possible."),
  faq("Teachers", "How do teachers track student progress?", "Teachers use lesson observation, reading accuracy, revision, memorization checks, practice consistency, and learning goals to guide progress."),
  faq("Sessions & Resources", "What can I watch on the Our Sessions page?", "The Sessions page includes Quran recitations, Tajweed guidance, Islamic reminders, children's learning, lectures, and motivational videos."),
  faq("Sessions & Resources", "Can I filter videos by teacher or topic?", "Yes. Sessions can be filtered by content category and teacher, then sorted by Latest, Popular, or Oldest."),
  faq("Sessions & Resources", "What downloadable resources are available?", "The resource pages include Tajweede Quran, Tajweede Qaida, Namaz, Kalma, Seerah, Sahaba, Prophets, duas, and general Islamic guides."),
  faq("Sessions & Resources", "Are any PDF resources free?", "Yes. Use the Free switcher on each resource page to see guides available without purchase."),
  faq("Sessions & Resources", "Can I use the PDFs between classes?", "Yes. The PDFs are designed to support revision, family practice, reflection, and questions for your next teacher-led lesson."),
  faq("Sessions & Resources", "Do resources replace live instruction?", "No. Resources are helpful companions, but qualified instruction is important for recitation correction, detailed explanation, and structured progress."),
  faq("Technical Support", "Which device can I use for online classes?", "You can normally join from a laptop, desktop computer, tablet, or suitable smartphone with a working camera, microphone, and stable internet connection."),
  faq("Technical Support", "How fast should my internet connection be?", "A stable connection capable of clear video calling is more important than a particular speed. Test your camera, microphone, and connection before class."),
  faq("Technical Support", "What should I do if I cannot join a lesson?", "Check your connection and meeting link, restart the app if needed, and contact support promptly so the teacher knows you are experiencing a problem."),
  faq("Technical Support", "Why is my microphone or camera not working?", "Confirm browser or app permissions, select the correct device in call settings, close other apps using it, and restart the browser or device if necessary."),
  faq("Technical Support", "Can I download resources on a phone?", "Yes. Standard PDF files can be downloaded and opened using the browser or a PDF reader on most modern phones and tablets."),
  faq("General Support", "Where is Haramain Quran Institute based?", "Haramain Quran Institute is based in Makkah Al-Mukarramah, KSA, while serving online learners across multiple countries and time zones."),
  faq("General Support", "Are classes one-to-one or group based?", "The main learning experience is personalized one-to-one instruction. Any group or free-course format will be clearly identified during registration."),
  faq("General Support", "How can I contact the institute?", "Use the Free Trial, Help Center, Start Chat, phone, WhatsApp, or email options shown across the website."),
  faq("General Support", "Can parents receive progress updates?", "Parents can discuss learning goals and progress with the institute. The exact update process depends on the student's course and plan."),
  faq("General Support", "Do you offer careers for Quran teachers?", "Yes. Visit the Career page to view remote, onsite, and hybrid teaching, academic, admissions, content, and media opportunities."),
  faq("General Support", "How can I stay informed about new content?", "Follow the institute on social media, watch the Sessions page, explore new blog articles, or join the newsletter for updates."),
];

export default function FAQHub() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All FAQs");
  const visible = useMemo(() => allFaqs.filter((item) => category === "All FAQs" || item.category === category), [category]);
  const midpoint = Math.ceil(visible.length / 2);
  return <section id="faq-library" className="w-full bg-white py-24 sm:py-28 min-[1024px]:py-32"><div className="container"><div className="mx-auto max-w-4xl text-center"><p className="font-body text-xs font-bold uppercase tracking-[0.18em] text-[#0D706D]">Knowledge Base</p><h2 className="mt-4 font-heading text-4xl font-medium text-[#0D463E] sm:text-5xl min-[1024px]:text-[58px]">How Can We <span className="font-accent font-normal italic">Help?</span></h2><p className="mx-auto mt-5 max-w-3xl font-body text-base leading-7 text-[#0D463E]/62">Choose a topic to quickly find the answers most relevant to your learning journey.</p><div className="mt-9 flex flex-wrap justify-center gap-2">{categories.map((item) => <button key={item} type="button" onClick={() => setCategory(item)} className={`rounded-full px-4 py-2.5 font-body text-sm font-bold transition-colors ${category === item ? "bg-[#0D463E] text-white" : "border border-[#0D463E]/12 bg-[#FBF6EF] text-[#0D463E] hover:bg-[#0D463E]/5"}`}>{item}</button>)}</div><p className="mt-5 font-body text-xs font-semibold uppercase tracking-wider text-[#0D463E]/45">Showing {visible.length} of {allFaqs.length} questions</p></div><div key={category} className="mt-14 grid gap-5 min-[900px]:grid-cols-2 min-[900px]:items-start min-[900px]:gap-8"><FAQs items={visible.slice(0, midpoint)} /><FAQs items={visible.slice(midpoint)} /></div></div></section>;
}
