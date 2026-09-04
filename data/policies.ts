import { instituteContact } from "@/data/site-contact";

export interface PolicySection {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface PolicyPageData {
  url: string;
  title: string;
  eyebrow: string;
  description: string;
  updated: string;
  sections: PolicySection[];
}

const contactEmail = instituteContact.email;

export const policyPages: PolicyPageData[] = [
  {
    url: "/privacy-policy",
    title: "Privacy Policy",
    eyebrow: "Your Information Matters",
    description:
      "A clear explanation of how Haramain Quran Institute collects, uses, protects, and respects personal information.",
    updated: "September 4, 2026",
    sections: [
      {
        id: "information-we-collect",
        title: "Information We Collect",
        paragraphs: [
          "Haramain Quran Institute collects information that is reasonably needed to answer enquiries, arrange trial classes, enroll students, deliver lessons, process payments, and provide support.",
        ],
        bullets: [
          "Contact details, such as a name, email address, telephone or WhatsApp number, country, and time zone.",
          "Student details, such as age group, learning level, course interests, teacher preference, availability, and relevant learning needs.",
          "Enrollment, attendance, support, and communication records.",
          "Technical information, such as browser type, device information, IP address, cookie choices, and general website activity.",
        ],
      },
      {
        id: "how-we-use-information",
        title: "How We Use Information",
        paragraphs: [
          "We use personal information to recommend suitable courses, schedule and deliver classes, communicate with students or guardians, manage accounts and payments, improve our services, protect the website, and meet legal or administrative requirements.",
          "We do not use personal information for purposes that are incompatible with the reason it was collected without providing an appropriate explanation or obtaining consent where required.",
        ],
      },
      {
        id: "childrens-privacy",
        title: "Children’s Privacy",
        paragraphs: [
          "Children are welcome to learn with Haramain Quran Institute, but a parent or legal guardian should submit registration details, approve the child’s participation, and remain the primary contact for enrollment, payments, and privacy requests.",
          "We aim to collect only the information needed to teach and support a child. A parent or guardian may ask what information we hold, request a correction, or request deletion where applicable. Children should not independently send payment details or other sensitive information through chat or forms.",
        ],
      },
      {
        id: "trial-and-enrollment",
        title: "Trial Class and Enrollment Information",
        paragraphs: [
          "When a trial class or enrollment is requested, we may collect the student’s age, current Quran level, learning goal, preferred teacher, country, time zone, available timings, and contact preference. This information helps us match the student with an appropriate class and teacher.",
          "If a visitor does not continue after a trial, we retain only the information reasonably needed for follow-up, recordkeeping, security, or legal obligations, and then delete or anonymize it according to our retention practices.",
        ],
      },
      {
        id: "payment-information",
        title: "Payment-Related Information",
        paragraphs: [
          "We may receive billing details, the amount and currency paid, transaction references, payment status, and invoice history. Card, wallet, or bank payments may be handled by an approved payment provider or financial institution under its own privacy and security terms.",
          "Haramain Quran Institute does not ask students to send passwords, one-time passcodes, or complete card details by email, WhatsApp, or ordinary chat. When a payment provider is used, we generally receive a confirmation or reference rather than the complete card credentials.",
        ],
      },
      {
        id: "cookies-and-analytics",
        title: "Cookies and Analytics",
        paragraphs: [
          "Our website may use essential cookies for functions such as security, forms, and saved preferences. With the visitor’s choice where required, analytics cookies may help us understand page visits, device types, and general website performance.",
          "Visitors can use the website’s cookie controls and may also adjust browser settings. Blocking essential cookies can affect certain website functions.",
        ],
      },
      {
        id: "third-party-services",
        title: "Third-Party Services",
        paragraphs: [
          "We may use trusted providers for video classes, email, messaging, website hosting, analytics, payment processing, scheduling, or customer support. These providers may process limited information only to provide their services and are responsible for their own privacy practices.",
          "Before using a third-party platform, students and guardians should review its privacy choices and use a secure device and connection.",
        ],
      },
      {
        id: "information-sharing",
        title: "Information Sharing",
        paragraphs: [
          "We do not sell personal information. We may share necessary information with assigned teachers, authorized staff, service providers, or professional advisers who need it to deliver or support our services.",
          "Information may also be disclosed when required by law, to protect a person’s safety, to prevent fraud or misuse, or during a lawful organizational change. We limit sharing to what is reasonably necessary.",
        ],
      },
      {
        id: "data-security",
        title: "Data Security",
        paragraphs: [
          "Haramain Quran Institute uses reasonable administrative and technical safeguards to protect information from unauthorized access, loss, alteration, or disclosure. Access is limited to people who need the information for their role.",
          "No online service can guarantee absolute security. Students and guardians should use strong passwords, protect meeting links, and tell us promptly if they suspect unauthorized access.",
        ],
      },
      {
        id: "data-retention",
        title: "Data Retention",
        paragraphs: [
          "We keep information only for as long as it is reasonably needed for teaching, support, payments, records, disputes, safety, or legal obligations. Retention periods vary by the type of information and the reason it is held.",
          "When information is no longer required, we take reasonable steps to delete it, anonymize it, or securely restrict its use.",
        ],
      },
      {
        id: "privacy-rights",
        title: "User Privacy Rights",
        paragraphs: [
          "Depending on local law, a student, parent, or guardian may ask to access, correct, delete, restrict, or receive a copy of personal information, or object to certain uses. Consent can be withdrawn where processing depends on consent.",
          `Send a request to ${contactEmail}. We may need to confirm identity and authority before acting, especially when the request concerns a child. Some records may need to be retained for legal, payment, safety, or dispute purposes.`,
        ],
      },
      {
        id: "external-links",
        title: "External Links",
        paragraphs: [
          "Our website may link to external websites, social networks, payment services, or learning tools. Their content and privacy practices are controlled by their operators, not by Haramain Quran Institute. Please review the relevant policy before providing information on another service.",
        ],
      },
      {
        id: "policy-updates",
        title: "Policy Updates",
        paragraphs: [
          "We may update this Privacy Policy when our services, providers, or legal responsibilities change. The revised version will be posted on this page with a new last-updated date. Important changes may also be communicated through an appropriate contact channel.",
        ],
      },
      {
        id: "privacy-contact",
        title: "Contact Information",
        paragraphs: [
          `For privacy questions or requests, contact Haramain Quran Institute at ${contactEmail}. Please do not include passwords, payment security codes, or unnecessary sensitive information in your message.`,
        ],
      },
    ],
  },
  {
    url: "/terms-and-conditions",
    title: "Terms & Conditions",
    eyebrow: "Clear Learning Expectations",
    description:
      "Practical terms that help students, guardians, teachers, and Haramain Quran Institute enjoy a respectful learning experience.",
    updated: "September 4, 2026",
    sections: [
      {
        id: "acceptance",
        title: "Acceptance of Terms",
        paragraphs: [
          "By using the website, booking a trial, enrolling in a course, or attending a class, the student—or the parent or guardian for a child—agrees to these Terms & Conditions and the policies referenced on this website.",
          "If you do not agree, please contact Haramain Quran Institute before booking or enrolling so we can clarify the relevant terms.",
        ],
      },
      {
        id: "eligibility",
        title: "Eligibility",
        paragraphs: [
          "Haramain Quran Institute serves children and adults worldwide. Enrollment is subject to a suitable course, an available teacher, compatible scheduling, appropriate conduct, and any lawful restrictions that apply to the service or payment method.",
        ],
      },
      {
        id: "guardian-responsibility",
        title: "Parent or Guardian Responsibility",
        paragraphs: [
          "A parent or legal guardian must register a child, approve the child’s participation, provide accurate information, manage payments and scheduling, and remain available for important communications. The guardian is responsible for deciding what level of supervision is suitable for the child.",
        ],
      },
      {
        id: "registration-information",
        title: "Registration Information",
        paragraphs: [
          "Registration details must be complete, current, and accurate. Please update Haramain Quran Institute if contact information, time zone, learning needs, or scheduling availability changes. Do not provide another person’s information without permission.",
        ],
      },
      {
        id: "free-trials",
        title: "Free Trial Classes",
        paragraphs: [
          "A free trial is an introductory assessment and learning experience, subject to teacher and schedule availability. A trial does not guarantee a particular teacher, permanent time slot, or enrollment until Haramain Quran Institute confirms the arrangement.",
        ],
      },
      {
        id: "course-enrollment",
        title: "Course Enrollment",
        paragraphs: [
          "Enrollment becomes active when the course, teacher arrangement, schedule, applicable fee, and payment status are confirmed. Recommendations are based on the information available and may be adjusted after a teacher assesses the student’s level.",
        ],
      },
      {
        id: "class-scheduling",
        title: "Class Scheduling",
        paragraphs: [
          "Classes are arranged in the student’s stated time zone and confirmed through an official Haramain Quran Institute channel. Students should check the date, local time, duration, and time zone carefully. Seasonal clock changes can affect international time differences.",
        ],
      },
      {
        id: "teacher-availability",
        title: "Teacher Availability",
        paragraphs: [
          "Teacher requests are considered but remain subject to qualifications, availability, course needs, and schedule compatibility. Haramain Quran Institute does not guarantee that a requested teacher will always be available.",
        ],
      },
      {
        id: "teacher-gender",
        title: "Male and Female Teachers",
        paragraphs: [
          "Students may state a preference for a male or female teacher. We will make a reasonable effort to honor that preference, but placement depends on availability. We will discuss suitable alternatives before confirming a different arrangement.",
        ],
      },
      {
        id: "missed-classes",
        title: "Missed Classes",
        paragraphs: [
          "A class missed without the notice required in the student’s enrollment confirmation may be counted as delivered. Joining late does not normally extend the scheduled end time. Please contact the team as soon as possible when an emergency prevents attendance.",
        ],
      },
      {
        id: "makeup-classes",
        title: "Makeup Classes",
        paragraphs: [
          "A makeup class is subject to the notice rules provided at enrollment, teacher availability, and the reason for the missed lesson. Makeup lessons are not guaranteed for a no-show or late student cancellation. Approved makeup lessons should be used within the period communicated by the team.",
        ],
      },
      {
        id: "student-cancellations",
        title: "Student Cancellations",
        paragraphs: [
          "Students or guardians should cancel or request a reschedule through an official contact channel within the notice period stated at enrollment. Repeated late cancellations may be treated as completed classes or may require a schedule review.",
        ],
      },
      {
        id: "teacher-cancellations",
        title: "Teacher Cancellations",
        paragraphs: [
          "If Haramain Quran Institute or the assigned teacher cancels a class, we will normally offer a replacement class, another suitable teacher, or an appropriate account adjustment. The available option will be communicated to the student or guardian.",
        ],
      },
      {
        id: "technical-issues",
        title: "Internet and Technical Issues",
        paragraphs: [
          "Students are responsible for a suitable device, stable internet connection, working audio, and access to the agreed class platform. If a technical problem occurs, both sides should try reasonable troubleshooting. Institute-side or teacher-side failures will be reviewed for rescheduling or adjustment.",
        ],
      },
      {
        id: "islamic-holidays",
        title: "Islamic Holidays",
        paragraphs: [
          "Class arrangements may change during Ramadan, Eid, Hajj periods, or other announced holidays. Haramain Quran Institute will communicate planned closures, reduced schedules, rescheduling, or any payment adjustment that applies.",
        ],
      },
      {
        id: "monthly-payments",
        title: "Monthly Payments",
        paragraphs: [
          "Tuition is generally billed monthly and is due by the date shown in the enrollment confirmation or invoice. Continued access to reserved class times depends on timely payment. Current fees and the final payable currency must be confirmed through an official Haramain Quran Institute channel.",
        ],
      },
      {
        id: "refund-rules",
        title: "Refund Rules",
        paragraphs: [
          "Fees for completed classes, student no-shows, or classes treated as delivered under the cancellation rules are normally non-refundable. Duplicate payments, incorrect amounts, undelivered services, and unused future tuition may be reviewed under the Payment Policy and applicable law.",
        ],
      },
      {
        id: "student-conduct",
        title: "Student Conduct",
        paragraphs: [
          "Students, guardians, teachers, and staff must communicate respectfully. Harassment, discrimination, abusive language, inappropriate behavior, deliberate disruption, or misuse of private contact information is not accepted. Concerns should be reported to the Haramain Quran Institute team.",
        ],
      },
      {
        id: "child-supervision",
        title: "Parent Supervision for Children",
        paragraphs: [
          "A parent or guardian should help a child join on time, use the learning platform safely, and follow class expectations. Younger students or children who need additional support should have an adult nearby for the level of supervision reasonably required.",
        ],
      },
      {
        id: "recordings-and-privacy",
        title: "Class Recordings and Privacy",
        paragraphs: [
          "Students may not record, photograph, stream, or share a class without prior permission. Haramain Quran Institute will not record a class unless there is a stated teaching, quality, safety, or training purpose and appropriate notice or consent is provided, including guardian consent where required for a child.",
        ],
      },
      {
        id: "learning-materials",
        title: "Learning Materials",
        paragraphs: [
          "Students may receive digital or printed learning materials. They are responsible for obtaining any clearly identified books, software, or equipment not included in the tuition. Materials should be used only for the enrolled student unless permission says otherwise.",
        ],
      },
      {
        id: "intellectual-property",
        title: "Intellectual Property",
        paragraphs: [
          "The Haramain Quran Institute name, website design, original course content, videos, documents, and teaching resources remain the property of their respective owners. Access is granted for personal, non-commercial learning and does not transfer ownership rights.",
        ],
      },
      {
        id: "prohibited-use",
        title: "Prohibited Use",
        paragraphs: [
          "The website and classes must not be used for unlawful activity, impersonation, harassment, unauthorized recording, copying or resale of materials, disruption, security testing without permission, malware, fraudulent payments, or access to another person’s account.",
        ],
      },
      {
        id: "third-party-platforms",
        title: "Third-Party Platforms",
        paragraphs: [
          "Classes, messages, bookings, or payments may use third-party services such as meeting, messaging, scheduling, or payment platforms. Their separate terms and privacy policies may apply. Haramain Quran Institute is not responsible for changes or outages controlled by those providers, but we will provide reasonable support.",
        ],
      },
      {
        id: "service-availability",
        title: "Service Availability",
        paragraphs: [
          "We work to provide reliable worldwide online learning, but uninterrupted access cannot be guaranteed. Maintenance, emergencies, internet outages, teacher illness, local restrictions, or events beyond reasonable control may temporarily affect the website or classes.",
        ],
      },
      {
        id: "liability",
        title: "Limitation of Liability",
        paragraphs: [
          "To the extent permitted by law, Haramain Quran Institute is not responsible for indirect or unexpected losses caused by internet failures, third-party services, student devices, inaccurate information supplied by a user, or events outside our reasonable control. Nothing in these terms removes rights or responsibilities that cannot lawfully be excluded.",
        ],
      },
      {
        id: "suspension",
        title: "Suspension or Termination",
        paragraphs: [
          "Access or enrollment may be paused or ended for serious or repeated misconduct, non-payment, fraud, unsafe behavior, misuse of services, or material breach of these terms. Where appropriate, Haramain Quran Institute will explain the concern and provide a reasonable opportunity to resolve it.",
        ],
      },
      {
        id: "teacher-or-schedule-changes",
        title: "Changes to Teachers or Schedules",
        paragraphs: [
          "A teacher or schedule may need to change because of availability, illness, performance needs, time-zone changes, or operational reasons. We will communicate material changes and work with the student or guardian to find a suitable alternative.",
        ],
      },
      {
        id: "terms-updates",
        title: "Updates to Terms",
        paragraphs: [
          "These terms may be updated to reflect service, operational, or legal changes. The latest version and date will appear on this page. Continued use after an update means the revised terms apply from their effective date, subject to applicable law.",
        ],
      },
      {
        id: "terms-contact",
        title: "Contact Information",
        paragraphs: [
          `Questions about these Terms & Conditions can be sent to Haramain Quran Institute at ${contactEmail}. Please include the student name and relevant course or invoice reference, but do not send passwords or complete payment credentials.`,
        ],
      },
    ],
  },
  {
    url: "/payment-policy",
    title: "Payment Policy",
    eyebrow: "Simple and Secure Payments",
    description:
      "A practical guide to tuition payments, confirmations, refunds, adjustments, and payment support at Haramain Quran Institute.",
    updated: "September 4, 2026",
    sections: [
      {
        id: "payment-purpose",
        title: "Payment Purpose",
        paragraphs: [
          "Payments cover the courses, class frequency, learning period, resources, or other services confirmed by Haramain Quran Institute. The student or guardian should review the course, amount, currency, billing period, and recipient details before paying.",
        ],
      },
      {
        id: "monthly-tuition",
        title: "Monthly Tuition Fees",
        paragraphs: [
          "Online class tuition is generally charged per student, per month. The final fee depends on the confirmed course, class frequency, duration, and currency. Payment is due by the date shown in the enrollment confirmation or invoice to keep a recurring class time reserved.",
        ],
      },
      {
        id: "approved-methods",
        title: "Approved Payment Methods",
        paragraphs: [
          "Use only the payment options shown on an official Haramain Quran Institute checkout, invoice, or verified message. Available methods may differ by country and can include an approved card processor, digital wallet, bank transfer, or another authorized provider.",
          "Do not send money to a teacher, personal account, or unverified contact unless Haramain Quran Institute has confirmed the recipient in writing through an official channel.",
        ],
      },
      {
        id: "official-payment-details",
        title: "Official Payment Details",
        paragraphs: [
          "Current account, merchant, or payment-link details are provided securely during enrollment or on the relevant official payment page. Because details can change, always use the latest instructions and confirm any unexpected change with the institute before paying.",
          "Haramain Quran Institute will never ask for your password, one-time passcode, PIN, or complete card security details through ordinary email, WhatsApp, or chat.",
        ],
      },
      {
        id: "international-payments",
        title: "International Payments and Currency",
        paragraphs: [
          "Website currency displays may be estimates. The enrollment confirmation or invoice states the final payable amount and currency. A bank or payment provider may apply its own exchange rate, conversion cost, or cross-border charge, which is outside Haramain Quran Institute’s control.",
        ],
      },
      {
        id: "payment-confirmation",
        title: "Payment Confirmation",
        paragraphs: [
          "After paying, keep the receipt or transaction reference. If confirmation is not received within a reasonable processing time, send the student name, amount, date, method, and transaction reference to payment support. Do not send complete card or bank credentials.",
        ],
      },
      {
        id: "payment-verification",
        title: "Payment Verification",
        paragraphs: [
          "A payment is treated as complete after the funds or an authorized provider’s confirmation can be verified. A screenshot alone may help locate a transaction but does not replace settlement or provider verification.",
        ],
      },
      {
        id: "transaction-charges",
        title: "Transaction or Bank Charges",
        paragraphs: [
          "Unless Haramain Quran Institute states otherwise, the payer is responsible for bank, card, wallet, intermediary, transfer, conversion, and international transaction charges. The amount received should match the amount due on the invoice.",
        ],
      },
      {
        id: "incorrect-payments",
        title: "Incorrect Payments",
        paragraphs: [
          "If the wrong amount, currency, recipient, or reference is used, contact payment support promptly. We will review payments received by Haramain Quran Institute and explain whether a correction, balance, credit, or refund is available. We cannot control or guarantee recovery from an unrelated or incorrect recipient.",
        ],
      },
      {
        id: "late-payments",
        title: "Late Payments",
        paragraphs: [
          "If tuition is overdue, Haramain Quran Institute may send a reminder, pause future classes, or release a reserved time slot until payment is resolved. Please contact us before the due date if there is a genuine difficulty so the available options can be discussed.",
        ],
      },
      {
        id: "failed-payments",
        title: "Failed or Reversed Payments",
        paragraphs: [
          "A declined, failed, cancelled, disputed, or reversed transaction does not settle the invoice. The payer remains responsible for the confirmed amount and any classes already delivered. We do not repeatedly charge a failed method without authorization.",
        ],
      },
      {
        id: "refunds",
        title: "Refunds",
        paragraphs: [
          "Refund requests are reviewed against the enrollment confirmation, classes already delivered, cancellation notice, payment-provider rules, and applicable law. Completed classes, student no-shows, and non-refundable provider charges are normally excluded.",
          "Duplicate payments, verified incorrect amounts, undelivered services, and unused future tuition may qualify for a refund or account credit after review. Approved refunds are normally returned through the original method where possible; processing time depends on the provider or bank.",
        ],
      },
      {
        id: "cancellation-adjustments",
        title: "Class Cancellation and Payment Adjustments",
        paragraphs: [
          "A class cancelled by the institute or teacher will normally be rescheduled or reflected as an appropriate account adjustment. Student cancellations and missed classes follow the notice and makeup rules confirmed at enrollment. A rescheduled class does not also create a payment credit.",
        ],
      },
      {
        id: "chargebacks",
        title: "Chargebacks and Payment Disputes",
        paragraphs: [
          "Please contact Haramain Quran Institute before opening a chargeback so we can check the invoice, attendance, and transaction. A chargeback does not automatically cancel an outstanding balance. We may provide accurate enrollment, payment, and service records to the payment provider when responding to a dispute.",
        ],
      },
      {
        id: "payment-support",
        title: "Payment Support",
        paragraphs: [
          `For payment help, contact Haramain Quran Institute at ${contactEmail}. Include the student name, invoice or course, payment date, amount, currency, method, and transaction reference. Never include a password, PIN, one-time code, or complete card number.`,
        ],
      },
    ],
  },
];

export function getPolicyPage(pathname: string) {
  return policyPages.find((page) => page.url === pathname);
}
