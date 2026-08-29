export interface FAQ {
  question: string;
  answer: string;
}

export interface FAQSectionProps {
  id?: string;
  title: string;
  faqs: FAQ[];
}