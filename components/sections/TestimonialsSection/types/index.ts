export interface TextTestimonial {
  id: string;
  quote: string;
  authorName: string;
  authorTitle: string;
}

export interface TextTestimonialsData {
  testimonials: TextTestimonial[];
  autoScrollInterval?: number;
}

export interface TestimonialsData {
  title: string;
  description: string;
  video: VideoTestimonialsData;
  text: TextTestimonialsData;
}

export interface TestimonialsSectionProps {
  id?: string;
  data: TestimonialsData;
}
import type { StaticImageData } from "next/image";

export interface VideoTestimonialCardProps {
  videoThumbnail: StaticImageData[];
  authorName: string;
  authorTitle: string;
}

export interface VideoTestimonialsData {
  title: string;
  description: string;
  buttonLabel: string;
  testimonial: VideoTestimonialCardProps;
}
