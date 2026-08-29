import type { GallerySectionProps } from "@/components/sections/GallerySection/types";

import Gallery1 from "@/assets/gallery-1.jpg";
import Gallery2 from "@/assets/gallery-2.jpg";
import Gallery3 from "@/assets/gallery-3.jpg";
import Gallery4 from "@/assets/gallery-4.jpg";
import Gallery5 from "@/assets/gallery-5.jpg";
import Gallery6 from "@/assets/gallery-6.jpg";
import Gallery7 from "@/assets/gallery-7.jpg";
import Gallery8 from "@/assets/gallery-8.jpg";
import Gallery9 from "@/assets/gallery-9.jpg";
import Gallery10 from "@/assets/gallery-10.jpg";

const galleryData: GallerySectionProps = {
  title: "Our Students Gallery",
  description:
    "Explore the learning experience at Haramain Quran Institute, where students can learn the Quran in a focused, supportive, and meaningful environment.",
  slides: [
    {
      layout: "ModernMosaic",
      media: [
        {
          type: "image",
          src: Gallery1,
          alt: "Haramain Quran Institute",
        },
        {
          type: "image",
          src: Gallery2,
          alt: "Quran learning at Haramain Quran Institute",
        },
        {
          type: "image",
          src: Gallery3,
          alt: "Online Quran learning",
        },
        {
          type: "image",
          src: Gallery4,
          alt: "A focused Quran lesson",
        },
        {
          type: "image",
          src: Gallery5,
          alt: "Students learning the Quran",
        },
      ],
    },
    {
      layout: "EditorialGrid",
      media: [
        {
          type: "image",
          src: Gallery4,
          alt: "Quran education",
        },
        {
          type: "image",
          src: Gallery5,
          alt: "Online Quran classes",
        },
        {
          type: "image",
          src: Gallery6,
          alt: "Haramain Quran Institute students",
        },
        {
          type: "image",
          src: Gallery7,
          alt: "Personal Quran instruction",
        },
      ],
    },
    {
      layout: "BalancedElegance",
      media: [
        {
          type: "image",
          src: Gallery7,
          alt: "Quran learning experience",
        },
        {
          type: "image",
          src: Gallery8,
          alt: "Quran study",
        },
        {
          type: "image",
          src: Gallery9,
          alt: "A meaningful Quran learning moment",
        },
        {
          type: "image",
          src: Gallery10,
          alt: "Haramain Quran Institute class",
        },
        {
          type: "image",
          src: Gallery1,
          alt: "Online Quran learning from home",
        },
      ],
    },
    {
      layout: "LuxuryShowcase",
      media: [
        {
          type: "image",
          src: Gallery9,
          alt: "Haramain Quran Institute learning",
        },
        {
          type: "image",
          src: Gallery10,
          alt: "Quran education and learning",
        },
        {
          type: "image",
          src: Gallery1,
          alt: "Haramain Quran Institute online lesson",
        },
        {
          type: "image",
          src: Gallery3,
          alt: "Learning the Quran with a qualified teacher",
        },
      ],
    },
  ],
};

export default galleryData;
