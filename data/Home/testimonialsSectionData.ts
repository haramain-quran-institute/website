import type { TestimonialsData } from "@/components/sections/TestimonialsSection/types";
import VideoThumbnail from "@/videos/thumbnails/Screenshot 2026-01-20 131818.png";
import VideoThumbnail1 from "@/videos/thumbnails/Screenshot 2026-01-20 131846.png";
import VideoThumbnail2 from "@/videos/thumbnails/Screenshot 2026-01-20 131909.png";

const testimonialsData: TestimonialsData = {
  title: "What Our Students Say",
  description: "Hear directly from students and families learning with qualified teachers, flexible timings, and dedicated support.",
  video: {
    title: "What Our Students Say",
    description: "Hear directly from our students and families sharing their Quran learning journey.",
    buttonLabel: "Next Testimonial",
    testimonial: {
      videoThumbnail: [VideoThumbnail, VideoThumbnail1, VideoThumbnail2],
      authorName: "Student Name - USA",
      authorTitle: "Arabic Course Student",
    },
  },
  text: {
    testimonials: [
      { id: "1", quote: "The teachers are patient and professional. I have improved my Quran reading a lot.", authorName: "Ahmed Malik", authorTitle: "USA · Quran Course Student" },
      { id: "2", quote: "A wonderful experience with caring teachers and flexible online classes.", authorName: "Sara Khan", authorTitle: "UK · Arabic Course Student" },
      { id: "3", quote: "The lessons are clear, engaging, and easy to follow. Highly recommended.", authorName: "Omar Hassan", authorTitle: "Canada · Quran Course Student" },
      { id: "4", quote: "My children really enjoy their classes and have made great progress.", authorName: "Maryam Ali", authorTitle: "Australia · Quran Course Student" },
      { id: "5", quote: "The teacher explains everything clearly and gives great attention to detail.", authorName: "Bilal Ahmed", authorTitle: "USA · Arabic Course Student" },
      { id: "6", quote: "Excellent teaching and a very comfortable learning environment.", authorName: "Ayesha Noor", authorTitle: "UK · Islamic Studies Student" },
      { id: "7", quote: "I have seen a real improvement in my confidence and Quran recitation.", authorName: "Usman Raza", authorTitle: "UAE · Quran Course Student" },
      { id: "8", quote: "Professional teachers, smooth classes, and a great learning experience.", authorName: "Hiba Khan", authorTitle: "Germany · Arabic Course Student" },
    ],
    autoScrollInterval: 6000,
  },
};

export default testimonialsData;
