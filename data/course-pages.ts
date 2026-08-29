import type { FAQ } from "@/components/sections/FAQSection/types";

export type CoursePricingGroup = "foundation" | "advanced";

export interface CourseFeature {
  title: string;
  description: string;
}

export interface CourseOverviewPoint {
  label: string;
  value: string;
}

export interface CoursePageData {
  url: string;
  title: string;
  heroDescription: string;
  overviewTitle: string;
  overviewDescription: string;
  overviewPoints: CourseOverviewPoint[];
  features: CourseFeature[];
  pricingGroup: CoursePricingGroup;
  faqs: FAQ[];
}

function courseFaqs(
  course: string,
  focus: string,
  startingLevel: string,
  materials: string,
): FAQ[] {
  return [
    {
      question: `Who can join the ${course} course?`,
      answer: startingLevel,
    },
    {
      question: `What will I learn in ${course}?`,
      answer: focus,
    },
    {
      question: "Are the classes one-to-one?",
      answer:
        "Yes. Classes are taught live and one-to-one, allowing the teacher to adapt every lesson to your pace, goals, and current level.",
    },
    {
      question: "What learning materials are provided?",
      answer: materials,
    },
    {
      question: "Can I book a free trial before enrolling?",
      answer:
        "Yes. Your free trial lets you meet a teacher, assess your current level, discuss timings, and confirm the right learning plan before enrolling.",
    },
  ];
}

export const coursePages: CoursePageData[] = [
  {
    url: "/courses/noorani-qaida",
    title: "Noorani Qaida",
    heroDescription:
      "Build a confident foundation in Arabic letters, sounds, joining rules, and Quranic pronunciation through patient one-to-one guidance.",
    overviewTitle: "Build the right foundation from the very first letter.",
    overviewDescription:
      "The Noorani Qaida course introduces the building blocks of Quran reading in a clear, carefully sequenced way. Students progress from letter recognition to joined words and accurate recitation without feeling rushed.",
    overviewPoints: [
      { label: "Best for", value: "Beginners and young learners" },
      { label: "Class format", value: "Live one-to-one lessons" },
      { label: "Learning goal", value: "Independent Quran reading" },
    ],
    features: [
      { title: "Arabic Letters", description: "Recognize every Arabic letter in its isolated and joined forms." },
      { title: "Correct Sounds", description: "Learn accurate pronunciation and essential articulation points." },
      { title: "Vowels & Symbols", description: "Understand harakat, sukoon, tanween, madd, and tashdeed." },
      { title: "Word Building", description: "Move naturally from individual sounds to complete Quranic words." },
      { title: "Guided Reading", description: "Practice with immediate, encouraging correction from your teacher." },
    ],
    pricingGroup: "foundation",
    faqs: courseFaqs(
      "Noorani Qaida",
      "You will learn Arabic letters, joining rules, vowel signs, pronunciation, and the core reading patterns needed before beginning fluent Quran recitation.",
      "It is designed for complete beginners, children, and adults who want to rebuild their Quran-reading foundation correctly.",
      "A structured digital Qaida, guided practice pages, and lesson-by-lesson exercises are provided for home revision.",
    ),
  },
  {
    url: "/courses/quran-reading",
    title: "Quran Reading",
    heroDescription:
      "Develop smooth, accurate Quran reading with personalized correction, consistent practice, and a teacher who progresses at your pace.",
    overviewTitle: "Read the Quran with clarity, fluency, and confidence.",
    overviewDescription:
      "This course supports learners who know the Arabic alphabet and want to strengthen their reading. Each lesson combines recitation, correction, repetition, and practical pronunciation guidance.",
    overviewPoints: [
      { label: "Best for", value: "Developing Quran readers" },
      { label: "Class format", value: "Personalized live recitation" },
      { label: "Learning goal", value: "Fluent, accurate reading" },
    ],
    features: [
      { title: "Reading Fluency", description: "Build a smooth pace while keeping every letter clear and complete." },
      { title: "Pronunciation", description: "Correct common articulation mistakes through focused practice." },
      { title: "Word Recognition", description: "Recognize recurring Quranic patterns and read with less hesitation." },
      { title: "Live Correction", description: "Receive precise feedback during every reading session." },
      { title: "Confident Recitation", description: "Strengthen consistency through guided reading and home revision." },
    ],
    pricingGroup: "foundation",
    faqs: courseFaqs(
      "Quran Reading",
      "Lessons focus on fluent reading, accurate pronunciation, word recognition, stopping rules, and confidence in reciting complete passages.",
      "Students should recognize Arabic letters and basic joining patterns. Beginners can start with Noorani Qaida first if needed.",
      "Your teacher provides reading selections, revision notes, and practice guidance suited to your current level.",
    ),
  },
  {
    url: "/courses/quran-memorization",
    title: "Quran Memorization",
    heroDescription:
      "Follow a structured, sustainable Hifz plan that balances new memorization, strong revision, Tajweed, and long-term retention.",
    overviewTitle: "Memorize with structure and retain with consistency.",
    overviewDescription:
      "Every Hifz journey is different. Your teacher creates a realistic plan around your ability and available time, then supports new memorization with daily revision and regular progress checks.",
    overviewPoints: [
      { label: "Best for", value: "Children, teens, and adults" },
      { label: "Class format", value: "Individual Hifz plan" },
      { label: "Learning goal", value: "Strong long-term retention" },
    ],
    features: [
      { title: "Personal Hifz Plan", description: "Set realistic daily and weekly targets around your routine." },
      { title: "Revision Cycle", description: "Balance new lessons with recent and long-term revision." },
      { title: "Tajweed Support", description: "Memorize each passage with correct recitation from the start." },
      { title: "Progress Tracking", description: "Review milestones and strengthen areas needing more attention." },
      { title: "Motivating Guidance", description: "Stay consistent with patient accountability and encouragement." },
    ],
    pricingGroup: "advanced",
    faqs: courseFaqs(
      "Quran Memorization",
      "You will follow a personalized Hifz schedule covering new memorization, daily revision, Tajweed correction, and regular retention assessments.",
      "The course welcomes new and continuing Hifz students. Your teacher begins with an assessment and sets a suitable starting point.",
      "A personal memorization tracker, revision schedule, and assigned audio or reading references are provided.",
    ),
  },
  {
    url: "/courses/quran-translation",
    title: "Quran Translation",
    heroDescription:
      "Understand the message of the Quran through accessible translation, key vocabulary, connected themes, and guided reflection.",
    overviewTitle: "Move from recitation to meaningful understanding.",
    overviewDescription:
      "The Quran Translation course makes meanings accessible without overwhelming the learner. Lessons connect key words, verse translations, and central themes so students can understand what they recite.",
    overviewPoints: [
      { label: "Best for", value: "Readers seeking understanding" },
      { label: "Class format", value: "Guided verse-by-verse study" },
      { label: "Learning goal", value: "Understand Quranic meaning" },
    ],
    features: [
      { title: "Key Vocabulary", description: "Learn frequently occurring Quranic words and expressions." },
      { title: "Clear Translation", description: "Study accurate meanings in simple, accessible language." },
      { title: "Connected Themes", description: "See how verses connect within each surah and topic." },
      { title: "Context & Meaning", description: "Understand essential context supporting each passage." },
      { title: "Practical Reflection", description: "Relate Quranic guidance thoughtfully to daily life." },
    ],
    pricingGroup: "advanced",
    faqs: courseFaqs(
      "Quran Translation",
      "You will study verse meanings, recurring Quranic vocabulary, important themes, and the context needed to understand each passage clearly.",
      "The course is suitable for students who can read the Quran and want to understand its message. Arabic fluency is not required.",
      "Translation notes, vocabulary lists, selected references, and guided reflection questions are included.",
    ),
  },
  {
    url: "/courses/qirat-tajweed",
    title: "Qirat & Tajweed",
    heroDescription:
      "Refine your recitation by mastering articulation, Tajweed rules, rhythm, stopping points, and applied correction with an expert tutor.",
    overviewTitle: "Give every letter its right with careful Tajweed.",
    overviewDescription:
      "This applied course turns Tajweed knowledge into confident recitation. Students learn each rule clearly, hear correct examples, and practice directly with precise teacher feedback.",
    overviewPoints: [
      { label: "Best for", value: "Readers refining recitation" },
      { label: "Class format", value: "Theory with live application" },
      { label: "Learning goal", value: "Accurate, beautiful recitation" },
    ],
    features: [
      { title: "Makharij", description: "Master the articulation point and quality of every Arabic letter." },
      { title: "Tajweed Rules", description: "Understand essential rules through clear examples and practice." },
      { title: "Applied Recitation", description: "Use each rule while reading real Quranic passages." },
      { title: "Stopping & Starting", description: "Learn where to pause, continue, and begin correctly." },
      { title: "Detailed Correction", description: "Refine subtle errors with focused one-to-one feedback." },
    ],
    pricingGroup: "advanced",
    faqs: courseFaqs(
      "Qirat & Tajweed",
      "The course covers makharij, letter qualities, noon and meem rules, madd, qalqalah, stopping rules, and their practical application in recitation.",
      "It is best for students who can already read Quranic text and want to correct or beautify their recitation.",
      "You receive Tajweed summaries, practice passages, rule-based exercises, and personalized correction notes.",
    ),
  },
  {
    url: "/courses/tafsir",
    title: "Tafsir",
    heroDescription:
      "Explore Quranic context, themes, wisdom, and practical lessons through structured study with a knowledgeable teacher.",
    overviewTitle: "Discover the wisdom and context behind the verses.",
    overviewDescription:
      "The Tafsir course guides students beyond a surface translation. Lessons explore context, themes, key language, and scholarly explanation while keeping the learning clear and relevant.",
    overviewPoints: [
      { label: "Best for", value: "Students seeking deeper study" },
      { label: "Class format", value: "Structured thematic lessons" },
      { label: "Learning goal", value: "Deeper Quranic insight" },
    ],
    features: [
      { title: "Revelation Context", description: "Understand the setting and background of selected passages." },
      { title: "Surah Themes", description: "Follow the central message and structure of each surah." },
      { title: "Key Language", description: "Explore important words that deepen the verse meaning." },
      { title: "Scholarly Guidance", description: "Learn from reliable explanations presented accessibly." },
      { title: "Life Lessons", description: "Reflect on practical guidance and spiritual development." },
    ],
    pricingGroup: "advanced",
    faqs: courseFaqs(
      "Tafsir",
      "You will explore revelation context, surah themes, key terms, scholarly explanations, and practical lessons from selected Quranic passages.",
      "It is suitable for adults and older students who want a structured understanding of the Quran. Translation study is helpful but not required.",
      "Lesson summaries, selected Tafsir references, vocabulary notes, and reflection prompts are provided.",
    ),
  },
  {
    url: "/courses/arabic-language",
    title: "Arabic Language",
    heroDescription:
      "Develop practical Arabic vocabulary, grammar, comprehension, and communication skills with a pathway toward understanding Quranic Arabic.",
    overviewTitle: "Learn Arabic clearly, practically, and step by step.",
    overviewDescription:
      "This course builds a balanced Arabic foundation through vocabulary, sentence structure, listening, reading, and guided conversation. Quran-focused learners also gain tools for recognizing familiar words and patterns.",
    overviewPoints: [
      { label: "Best for", value: "Beginner to intermediate learners" },
      { label: "Class format", value: "Interactive one-to-one lessons" },
      { label: "Learning goal", value: "Practical and Quranic Arabic" },
    ],
    features: [
      { title: "Core Vocabulary", description: "Build useful everyday and Quran-related vocabulary." },
      { title: "Grammar Foundations", description: "Understand sentence patterns without unnecessary complexity." },
      { title: "Reading Skills", description: "Read short Arabic passages with stronger comprehension." },
      { title: "Guided Conversation", description: "Practice speaking and listening in supportive live lessons." },
      { title: "Quranic Connection", description: "Recognize language patterns found throughout the Quran." },
    ],
    pricingGroup: "advanced",
    faqs: courseFaqs(
      "Arabic Language",
      "Lessons develop vocabulary, grammar, reading, listening, guided conversation, and recognition of common Quranic language patterns.",
      "Complete beginners and continuing learners are welcome. Your first lesson identifies the most suitable level and learning pathway.",
      "Digital worksheets, vocabulary lists, reading exercises, and optional home practice are provided.",
    ),
  },
  {
    url: "/courses/women-guidance",
    title: "Women Guidance",
    heroDescription:
      "Learn Quran and essential Islamic guidance in a respectful, private, and supportive environment designed for women.",
    overviewTitle: "A supportive space for meaningful Islamic learning.",
    overviewDescription:
      "Women Guidance brings Quran study and essential Islamic knowledge together in a flexible one-to-one format. Lessons are adapted to each learner's goals, questions, schedule, and prior knowledge.",
    overviewPoints: [
      { label: "Best for", value: "Women of all learning levels" },
      { label: "Class format", value: "Private online guidance" },
      { label: "Learning goal", value: "Confident faith and practice" },
    ],
    features: [
      { title: "Dedicated Tutors", description: "Learn in a comfortable and respectful one-to-one setting." },
      { title: "Quran Study", description: "Choose reading, Tajweed, memorization, or understanding goals." },
      { title: "Islamic Essentials", description: "Study practical knowledge relevant to daily worship and life." },
      { title: "Flexible Topics", description: "Shape lessons around your questions and personal learning needs." },
      { title: "Private Scheduling", description: "Arrange consistent lesson times around home and work." },
    ],
    pricingGroup: "foundation",
    faqs: courseFaqs(
      "Women Guidance",
      "The course can include Quran reading, Tajweed, Islamic essentials, worship guidance, selected duas, and topics agreed with your teacher.",
      "Women of every age and learning level can join. Lessons begin from your existing knowledge and personal goals.",
      "Your tutor shares relevant Quran materials, lesson notes, duas, and practical reference resources.",
    ),
  },
  {
    url: "/courses/nasheed-reciting",
    title: "Nasheed Reciting",
    heroDescription:
      "Develop clear pronunciation, vocal control, rhythm, expression, and confidence through guided Islamic nasheed practice.",
    overviewTitle: "Strengthen your voice while honoring every word.",
    overviewDescription:
      "Nasheed Reciting lessons combine pronunciation, breath control, rhythm, tone, and expression. Students work with suitable pieces and receive personal feedback in a positive learning environment.",
    overviewPoints: [
      { label: "Best for", value: "Children, teens, and adults" },
      { label: "Class format", value: "Live guided vocal practice" },
      { label: "Learning goal", value: "Clear, confident recitation" },
    ],
    features: [
      { title: "Vocal Control", description: "Develop steady breath, tone, and comfortable projection." },
      { title: "Clear Pronunciation", description: "Recite Arabic words carefully and preserve their meaning." },
      { title: "Rhythm & Timing", description: "Follow balanced patterns without rushing or losing clarity." },
      { title: "Guided Repertoire", description: "Practice suitable nasheeds selected for your ability." },
      { title: "Confident Delivery", description: "Build expression and presence through personal feedback." },
    ],
    pricingGroup: "foundation",
    faqs: courseFaqs(
      "Nasheed Reciting",
      "Lessons cover pronunciation, breath control, rhythm, tone, expression, and guided practice with suitable Islamic nasheeds.",
      "The course welcomes children, teens, and adults. No prior vocal training is required.",
      "Lyrics, pronunciation guidance, practice recordings or references, and personalized revision notes are provided.",
    ),
  },
  {
    url: "/courses/islamic-studies",
    title: "Islamic Studies",
    heroDescription:
      "Build a clear, practical understanding of Islamic beliefs, worship, character, Seerah, and daily guidance through structured one-to-one lessons.",
    overviewTitle: "Learn essential Islamic knowledge with clarity and purpose.",
    overviewDescription:
      "This course connects reliable Islamic knowledge with everyday life. Lessons are adapted to the learner's age and level, making important beliefs, worship practices, manners, and history easier to understand and apply.",
    overviewPoints: [
      { label: "Best for", value: "Children, teens, and adults" },
      { label: "Class format", value: "Interactive one-to-one study" },
      { label: "Learning goal", value: "Knowledge, character, and practice" },
    ],
    features: [
      { title: "Core Beliefs", description: "Understand essential beliefs through clear, age-appropriate explanations." },
      { title: "Worship Guidance", description: "Learn practical guidance for Salah, duas, and daily acts of worship." },
      { title: "Seerah Lessons", description: "Explore the Prophet's life and the values found throughout his example." },
      { title: "Islamic Character", description: "Connect good manners, responsibility, and kindness with everyday choices." },
      { title: "Personal Questions", description: "Discuss important topics with a qualified teacher in a supportive setting." },
    ],
    pricingGroup: "advanced",
    faqs: courseFaqs(
      "Islamic Studies",
      "Lessons can include Islamic beliefs, worship, Seerah, manners, selected duas, Islamic history, and practical guidance for daily life.",
      "Children, teens, and adults can join. The teacher adapts the language, pace, and subject depth to the student's age and current knowledge.",
      "Students receive relevant lesson notes, duas, reading references, worksheets, and optional revision activities.",
    ),
  },
];

export function getCoursePageData(url: string) {
  return coursePages.find((course) => course.url === url);
}
