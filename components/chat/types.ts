export interface CourseRecommendation {
  title: string;
  url: string;
  suitableFor: string;
}

export interface AssistantMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  recommendation?: CourseRecommendation | null;
  handoff?: boolean;
  isError?: boolean;
}

export interface AssistantResponse {
  message: string;
  recommendation: CourseRecommendation | null;
  handoff: boolean;
  collected: Record<string, string>;
  session: ChatSessionContext;
  source?: "local" | "ai";
}

export type AssessmentStep = "studentAge" | "quranLevel" | "learningGoal" | "teacherPreference" | "country" | "preferredTiming" | "ready";

export interface ChatSessionContext {
  studentAge?: string;
  studentType?: string;
  quranLevel?: string;
  learningGoal?: string;
  teacherPreference?: string;
  country?: string;
  timezone?: string;
  preferredTiming?: string;
  recommendedCourse?: string;
  assessmentStep?: AssessmentStep;
  summary?: string;
}
