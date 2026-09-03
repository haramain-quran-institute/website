import type { AssistantResponse, ChatSessionContext } from "@/components/chat/types";
import { buildCompactSessionSummary } from "@/data/haramain-chat-knowledge";

function response(message: string, session: ChatSessionContext, options: Partial<AssistantResponse> = {}): AssistantResponse {
  const next = { ...session, summary: buildCompactSessionSummary(session) };
  return { message, recommendation: null, handoff: false, collected: {}, session: next, source: "local", ...options };
}

export function getLocalResponse(message: string, session: ChatSessionContext): AssistantResponse | null {
  const text = message.trim(); const lower = text.toLowerCase();
  if (/^(?:as-?salaamu? ?alaikum|assalamu ?alaikum|salaam|hello|hi|hey)[!. ]*$/i.test(text)) return response("Wa alaikum assalam! How may I help with your Quran learning today?", session);
  if (/^(?:thank you|thanks|jazakallah|jazak allahu khairan)[!. ]*$/i.test(text)) return response("You’re very welcome. JazakAllahu khairan. Is there anything else I can help you with?", session);
  if (/\b(human|agent|representative|team member|real person|talk to (?:a|the|our) team|speak to (?:a|the|our) team|custom pricing|special arrangement)\b/i.test(text)) return response("Of course — I’ll prepare a handoff so a member of the Haramain team can help you personally.", session, { handoff: true });
  if (/^(?:contact|contact us|support|help)[!. ]*$/i.test(text)) return response("Of course — I’ll prepare a handoff so the Haramain team can help you.", session, { handoff: true });
  if (/^(?:book|open|start)?\s*(?:a\s*)?(?:free\s*)?trial(?: class)?[!. ]*$/i.test(text)) return response("Of course. Use the “Book Free Trial” button below to open the existing booking form.", session);
  if (session.assessmentStep && session.assessmentStep !== "ready") {
    const next = { ...session };
    if (session.assessmentStep === "studentAge") { next.studentAge = text.slice(0, 60); next.studentType = /child|kid|boy|girl|son|daughter|\b(?:[3-9]|1[0-7])\b/i.test(text) ? "Child" : "Adult"; next.assessmentStep = "quranLevel"; return response("Can the student currently recognize and pronounce Arabic letters?", next); }
    if (session.assessmentStep === "quranLevel") { next.quranLevel = text.slice(0, 100); next.assessmentStep = "learningGoal"; return response("What is the student’s main learning goal?", next); }
    if (session.assessmentStep === "learningGoal") { next.learningGoal = text.slice(0, 120); next.assessmentStep = "teacherPreference"; return response("Would you prefer a male teacher, a female teacher, or do you have no preference?", next); }
    if (session.assessmentStep === "teacherPreference") { next.teacherPreference = text.slice(0, 60); next.assessmentStep = "country"; return response("Which country or time zone will the student attend from?", next); }
    if (session.assessmentStep === "country") { next.country = text.slice(0, 80); next.timezone = text.slice(0, 80); next.assessmentStep = "preferredTiming"; return response("What class timing is usually most convenient—morning, afternoon, evening, or weekend?", next); }
  }
  if (/help me (?:choose|find)|which course.*(?:me|student)|course.*suitable|i want to learn quran/i.test(lower)) return response("Of course. What is the student’s age?", { ...session, assessmentStep: "studentAge" });
  if (/female teacher|male teacher|teacher preference/i.test(lower)) return response("Yes. Male and female teachers are available, subject to a suitable schedule match. We make every effort to honor the learner’s preference.", session);
  if (/^(?:what|which).{0,20}courses?.{0,20}(?:offer|available|have)/i.test(lower)) return response("Haramain offers Noorani Qaida, Quran Reading, Quran Memorization, Quran Translation, Qirat & Tajweed, Tafsir, Arabic Language, Islamic Studies, Women Guidance, and Nasheed Reciting.", session);
  if (/kids?|children|adults?/i.test(lower) && /class|course|student|learn/i.test(lower)) return response("Haramain supports children, teenagers, and adults. The most suitable course and lesson pace depend on the student’s current level and learning goal.", session);
  if (/one[- ]to[- ]one|1[- ](?:on[- ])?1|private class/i.test(lower)) return response("Yes. Haramain courses use live, personalized one-to-one online lessons, allowing the teacher to adapt the lesson to the student’s level and pace.", session);
  if (/24\/7|worldwide|time ?zone|weekend class|class schedule|course schedule|available time/i.test(lower)) return response("Class options are offered throughout the day for learners worldwide, including weekends. Exact times depend on teacher availability and the selected weekly plan.", session);
  if (/^(?:what|where|tell me|show me|how much).{0,35}(?:fee|fees|price|pricing|cost)/i.test(lower)) return response("Fees vary by course, weekly frequency, currency, and billing period. Please use the Courses Fee page for current displayed pricing; the final payable amount is confirmed during enrollment.", session);
  if (/^(?:how|where|when).{0,35}(?:book|free trial|trial class)/i.test(lower)) return response("You can book a complimentary 30-minute online trial using the “Book Free Trial” button. It helps us assess the learner’s level and discuss suitable timing.", session);
  return null;
}

export function prepareSessionForAI(message: string, session: ChatSessionContext) {
  if (session.assessmentStep !== "preferredTiming") return session;
  const next: ChatSessionContext = { ...session, preferredTiming: message.trim().slice(0, 80), assessmentStep: "ready" };
  next.summary = buildCompactSessionSummary(next);
  return next;
}
