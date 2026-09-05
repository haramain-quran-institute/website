# Haramain Quran Institute SEO Copy Audit

## Scope and UI lock

This audit covers every public page registered in the current Next.js navigation and App Router. Implementation is limited to copy, metadata, safe semantic markup, alt text, internal links, crawl controls, and factual structured data. Existing layout, spacing, classes, colors, typography, animations, components, and responsive behavior remain unchanged.

## Site-wide findings

- The site already had substantial, distinct course and FAQ copy. Strong material was retained instead of being rewritten wholesale.
- Page metadata previously used one generic title pattern and navigation descriptions. Important routes did not have purpose-built canonical, Open Graph, or Twitter copy.
- The homepage did not identify Haramain as an online Quran institute early or answer the main enrollment questions clearly enough.
- Course pages had strong learning outcomes, prerequisites, one-to-one delivery, and trial information, but international availability was not answered consistently.
- Fees, schedules, free courses, resources, teachers, About, and support pages needed clearer search intent and direct-answer language.
- Organization, website, course, and breadcrumb structured data were absent.
- The XML sitemap existed, but there was no explicit robots metadata route.
- Most meaningful images already had concise descriptive alt text. Decorative styling images were not given keyword-heavy alt text.
- Navigation and footer links already provided broad crawlable access to core pages. CTA anchor wording needed to be more descriptive in a few places.

## Route audit and intent map

| Route | Page purpose | Primary search intent | Secondary intent | Copy issue found | Implemented direction |
|---|---|---|---|---|---|
| `/` | Explain Haramain and guide enrollment | online Quran institute | online Quran classes; learn Quran online | Entity, audiences, delivery, teachers, and worldwide access were not explicit enough above the fold | Clear institute definition, audiences, course breadth, online format, flexible schedule, teacher choice, and trial CTA |
| `/courses/noorani-qaida` | Beginner reading foundation | online Noorani Qaida classes | Quran reading for beginners; Noorani Qaida for kids | Strong existing copy; global access answer missing | Retain distinct curriculum; add worldwide online-class FAQ and focused metadata |
| `/courses/quran-reading` | Develop fluent Quran reading | online Quran reading classes | learn to read Quran; Quran tutor online | Strong existing copy; needed distinct metadata and global answer | Preserve fluency/correction focus; add metadata and international FAQ |
| `/courses/quran-memorization` | Personal Hifz learning | online Quran memorization classes | online Hifz classes; memorize Quran online | Strong retention/revision copy; generic metadata | Distinct Hifz title/description, Course schema, global access FAQ |
| `/courses/quran-translation` | Understand Quran meanings | online Quran translation course | Quran vocabulary; understand Quran meaning | Strong course distinction; generic metadata | Preserve vocabulary/context focus and add dedicated metadata/schema |
| `/courses/qirat-tajweed` | Improve recitation and Tajweed | online Tajweed classes | Qirat course online; improve Quran pronunciation | Strong applied Tajweed copy; generic metadata | Focus metadata on Makharij, rules, stopping, and live correction |
| `/courses/tafsir` | Structured Quran explanation | online Quran Tafsir course | Quran explanation classes | Strong existing curriculum; generic metadata | Preserve context/theme language and add dedicated metadata/schema |
| `/courses/arabic-language` | Arabic and Quranic Arabic study | online Quranic Arabic classes | learn Arabic for Quran | Needed a clearly separate intent from translation | Focus on vocabulary, grammar, communication, and Quranic patterns |
| `/courses/women-guidance` | Private Islamic learning for women | online Islamic classes for women | Quran classes for women | Needed respectful, specific search positioning | Focus on private Quran and Islamic guidance without awkward keyword use |
| `/courses/nasheed-reciting` | Guided Nasheed skills | online Nasheed reciting classes | pronunciation; vocal control | Needed genuine skill-based positioning | Focus on breath, pronunciation, rhythm, tone, and delivery |
| `/courses/islamic-studies` | Practical Islamic education | online Islamic Studies classes | Islamic classes for kids; learn Islam online | Needed clear audience and curriculum metadata | Focus on beliefs, worship, Seerah, character, duas, children and adults |
| `/fee-schedule/courses-fee` | Explain tuition plans | online Quran classes fees | affordable Quran classes; Quran tuition fees | Fee value was clear but search phrasing and transparency were understated | Clarify monthly tuition, weekly plans, currencies, and displayed yearly saving |
| `/fee-schedule/course-schedule` | Explain worldwide timing | online Quran class schedule | flexible Quran classes; time zones | Strong scheduling content; metadata was generic | Emphasize worldwide time zones, weekday/weekend options, and availability caveat |
| `/fee-schedule/free-courses` | Present selected tuition-free programs | free online Islamic courses | free Islamic learning | Free courses, paid courses, and free trial could be confused | Add direct distinction in visible copy and FAQ; dedicated metadata |
| `/resources/tajweede-quran` | Tajweed Quran PDFs | Tajweed Quran PDF resources | Tajweed rules PDF | Needed resource-specific metadata | Describe only the four listed PDF resources and learning use |
| `/resources/tajweede-qaida` | Beginner Qaida PDFs | Tajweede Qaida PDF | Noorani Qaida resources | Needed resource-specific metadata | Focus on letters, joining, Makharij, pronunciation, and revision |
| `/resources/namaz-book` | Salah learning PDFs | Namaz and Salah PDF guide | Wudu and Salah guide | Needed resource-specific metadata | Focus on the actual prayer and Wudu learning resources |
| `/resources/kalma-book` | Six Kalmas PDFs | six Kalmas PDF book | Kalma memorization | Needed resource-specific metadata | Focus on Arabic, meaning, pronunciation, and memorization |
| `/resources/downloads` | Other Islamic PDFs | Islamic books and PDF downloads | Seerah; Sahaba; duas | Needed a defined umbrella intent | Identify the actual Seerah, Sahaba, Prophets, and dua materials |
| `/our-sessions` | Video learning library | online Quran learning videos | Tajweed videos; Islamic reminders | Page purpose was clear; metadata generic | Dedicated lesson/video metadata and canonical route |
| `/sessions` | Legacy alias for sessions | same as `/our-sessions` | — | Duplicate route could compete | Canonicalize to `/our-sessions` with matching metadata |
| `/about-us` | Explain entity, mission, and approach | Haramain Quran Institute | online Quran school; Quran academy | Needed a stronger factual entity definition | State who Haramain serves, what it teaches, online delivery, teacher options, and worldwide reach |
| `/our-teachers` | Present teachers and selection process | online Quran teachers | Quran tutors; male/female teachers | Selection process was strong; metadata generic | Add trust-focused metadata without inventing credentials |
| `/blogs` | Quran and Islamic articles | Quran learning blog | Tajweed; Hifz; Islamic education | Article modal introduced a second H1 | Add distinct metadata and correct modal heading hierarchy |
| `/career` | List current roles | online Quran teaching jobs | Islamic education careers | Strong job content; generic metadata | Dedicated career metadata without implying unlisted openings |
| `/faqs` | Answer enrollment and support questions | online Quran classes FAQs | fees; schedules; teachers | Strong 50-question hub; generic metadata | Retain useful answers and add descriptive metadata |
| `/book-free-trial` | Book a trial assessment | free online Quran trial class | Quran trial lesson | Strong functional page; generic metadata | Describe 30-minute trial, learner assessment, local time, and teacher meeting |
| `/start-chat` | Course and support guidance | online Quran course guidance | choose a Quran course | Functional AI/support page; generic metadata | Explain supported topics without making unsupported service claims |
| `/help-center` | Contact and enrollment support | contact Haramain Quran Institute | Quran class support | Hero could answer contact intent more directly | State support topics clearly; retain regional contacts and existing form |
| `/privacy-policy` | Explain data practices | Haramain privacy policy | student and children's privacy | Legal page should remain clear, not aggressively optimized | Unique accurate metadata only |
| `/terms-and-conditions` | Explain service terms | Haramain terms and conditions | class and cancellation terms | Legal page should remain clear, not aggressively optimized | Unique accurate metadata only |
| `/payment-policy` | Explain payment practices | Haramain payment policy | tuition and refund terms | Legal page should remain clear, not aggressively optimized | Unique accurate metadata only |
| `/sitemap` | Human-readable page directory | Haramain website sitemap | course directory | Generic metadata | Unique directory metadata; preserve complete internal link list |

## Cannibalization controls

- The homepage owns the broad **online Quran institute** topic.
- Every course owns its specific learning intent; course titles, descriptions, FAQs, and Course schema remain distinct.
- The Fees page owns tuition and plan queries; the Schedule page owns timing and time-zone queries.
- Free Courses owns selected tuition-free programs and explicitly distinguishes them from paid courses and the free trial.
- Teachers owns teacher/tutor discovery; About owns the Haramain entity and educational approach.
- Resource pages own their exact PDF/book topics rather than competing with paid course pages.
- `/sessions` is treated as an alias and canonically points to `/our-sessions`.

## Technical and semantic implementation

- Added unique metadata, canonical URLs, Open Graph copy, and Twitter copy for every public route.
- Added factual `EducationalOrganization` and `WebSite` JSON-LD using published contact and social data.
- Added `BreadcrumbList` JSON-LD to routed pages and `Course` JSON-LD only to actual course pages.
- Added an explicit `robots.ts` route referencing the XML sitemap and disallowing API endpoints.
- Kept key descriptive information as visible HTML copy; metadata and JSON-LD do not replace page content.
- Corrected the blog article modal hierarchy from a second page-level H1 to H2/H3 without changing styles.
- Improved descriptive CTA anchors to courses and the free-trial page, with email as the support channel.

## Recommended factual information for the owner to verify or provide

- Establishment date and institute history.
- Verified teacher qualifications, Ijazah details, specializations, and teaching experience.
- Confirmed languages offered by the teaching and support teams.
- Verified active-student, teacher, country-reach, and program totals currently shown on the About page.
- Documented curriculum stages, assessment standards, and progress reporting process.
- Countries currently served based on enrollment records.
- Verified student/guardian reviews and consent to publish them.
- Precise operational meaning of “24/7 availability,” including any unavailable periods.
- Official legal organization name and full publishable address, if different from the displayed institute name and Makkah location.
