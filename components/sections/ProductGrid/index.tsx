"use client";
import React, { useContext } from "react";
import { FormPopupContext } from "@/context/FormPopupContext";

import CarouselGallery from "../Carousel";
import { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";

interface ProductGridProps {
  subtitle?: string;
  title: string;
  description: string;
  seperator?: boolean;
  products: ProductData[];
  section_id?: string;
}

interface ProductData {
  title?: string;
  description?: string;
  imgSrc: StaticImageData[];
  altText: string[];
  url?: string;
  ratio?: number;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  subtitle,
  title,
  description,
  products,
  seperator = false,
  section_id = "",
}) => {
  const { openFormPopup } = useContext(FormPopupContext);
  return (
    <section className="my-24 md:my-28 lmd:my-36 lg:my-40" id={section_id}>
      <div className="container flex w-full flex-col items-center gap-8 sm:gap-12 md:gap-16">
        <div className="flex w-full flex-col items-center gap-8 text-center">
          <div className="flex max-w-screen-smd flex-col items-center gap-3">
            {subtitle && (
              <span className="text-heading_base font-bold leading-none tracking-wider text-PolishedSilver sm:text-balance sm:text-heading_xl md:text-heading_2xl lmd:text-heading_3xl lg:text-heading_4xl">
                {subtitle}
              </span>
            )}
            <h2 className="text-heading_sm font-bold leading-none tracking-wider text-OnyxBlack-100 sm:text-balance sm:text-heading_base md:text-heading_xl lmd:text-heading_2xl">
              {title}
            </h2>
            <p className="font-serif text-body_xxxs leading-relaxed tracking-wider text-EbonyShadow-60 sm:text-body_xxs lg:text-body_xs">
              {description}
            </p>
          </div>
          <Button onClick={openFormPopup} variant={"primaryReverse"} className="hidden w-fit md:block">
            Book Now
          </Button>
        </div>
        {seperator && (
          <div className="flex w-full flex-row items-center justify-between gap-1">
            <div className="h-[2px] w-full rounded bg-EbonyShadow-100"></div>
            <span className="text- min-w-fit text-center text-[8px] font-extralight leading-none tracking-wider sm:text-[9px] md:text-[10px]">
              The Premier Experience Awaits
            </span>
            <div className="h-[2px] w-full rounded bg-EbonyShadow-100"></div>
          </div>
        )}
        <div className="grid w-full grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-4 smd:gap-x-8 md:grid-cols-3 md:gap-x-12">
          {products.map((product, index) => (
            <CarouselGallery key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
