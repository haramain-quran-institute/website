"use client";
import React, { useContext } from "react";
import { FormPopupContext } from "@/context/FormPopupContext";
import { GalleryPopupContext } from "@/context/GalleryPopupContext";

import { Button } from "@/components/ui/button";
import IconArrowRight from "@/assets/Icons/arrow-right";

interface DescriptionItem {
  heading?: string;
  text?: string;
  list?: { type: "ul" | "ol"; items: string[] };
  link?: { text: string; url: string };
}

interface TextContainerProps {
  title: string;
  description: DescriptionItem[];
  buttonText: string;
}

function TextContainer({ title, description, buttonText }: TextContainerProps) {
  const { openFormPopup } = useContext(FormPopupContext);
  const { openGalleryPopup } = useContext(GalleryPopupContext);
  return (
    <div className="order-first flex flex-col justify-center gap-6 smd:order-none lmd:gap-8 py-16">
      <div className="flex flex-col gap-4 lmd:gap-6">
        <h2 className="text-heading_base font-bold leading-none tracking-wider text-OnyxBlack-100 sm:text-balance sm:text-heading_xl md:text-heading_2xl lmd:text-heading_4xl">
          {title}
        </h2>
        <div className="flex max-w-prose flex-col gap-4 text-body_xxxs leading-relaxed tracking-wider text-EbonyShadow-60 sm:text-body_xxs lg:text-body_xs">
          {description.map((item, index) => (
            <div key={index} className="flex flex-row items-center">
              {item.heading && (
                <h4 className="text-heading_xxxs mt-3 font-medium leading-none tracking-wider text-OnyxBlack-100 sm:text-balance smd:text-heading_xxs lmd:text-heading_xs">
                  {item.heading}
                </h4>
              )}
              {item.text && <p className="font-serif">{item.text}</p>}
              {item.list && (
                <ul className="mt-1 flex list-none flex-row flex-wrap gap-x-4 gap-y-2 font-serif">
                  {item.list.items.map((listItem, listIndex) => (
                    <li
                      key={listIndex}
                      className="relative pl-6 before:absolute before:left-0 before:top-0 before:content-['✓'] before:text-AntiqueGold before:font-bold hover:before:text-SunsetBronze"
                    >
                      {listItem}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="hidden sm:block">
        <Button onClick={openFormPopup} variant={"primaryReverse"}>
          {buttonText} <IconArrowRight />
        </Button>
        {/* <div className="grid w-full grid-cols-2 border border-OnyxBlack-100 sm:w-fit">
          <Button
            onClick={openGalleryPopup}
            variant={"secondary"}
            className="bg-PearlWhite !text-OnyxBlack-100 hover:bg-OnyxBlack-20"
          >
            See All Images
          </Button>
          <Button onClick={openFormPopup} variant={"primaryReverse"} className="!border-0 !border-l">
            {buttonText}
            <IconArrowRight />
          </Button>
        </div> */}
      </div>
    </div>
  );
}

export default TextContainer;
