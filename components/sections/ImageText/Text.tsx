"use client";
import React, { useContext } from "react";
import { FormPopupContext } from "@/context/FormPopupContext";

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
  return (
    <div className="order-first flex flex-col justify-center gap-6 smd:order-none lmd:gap-8">
      <div className="flex flex-col gap-2 lmd:gap-3">
        <h2 className="text-heading_sm font-bold leading-none tracking-wider text-OnyxBlack-100 sm:text-balance sm:text-heading_base md:text-heading_xl lmd:text-heading_2xl">
          {title}
        </h2>
        <div className="flex max-w-prose flex-col gap-2 text-body_xxxs leading-relaxed tracking-wider text-EbonyShadow-60 sm:text-body_xxs lg:text-body_xs">
          {description.map((item, index) => (
            <div key={index} className="flex flex-row items-center">
              {item.heading && (
                <h4 className="text-heading_xxxs mt-3 font-medium leading-none tracking-wider text-OnyxBlack-100 sm:text-balance smd:text-heading_xxs lmd:text-heading_xs">
                  {item.heading}
                </h4>
              )}
              {item.text && <p className="font-serif">{item.text}</p>}
              {item.list && (
                <ul className="mt-1 flex list-inside list-disc flex-row flex-wrap gap-x-4 gap-y-2 font-serif transition marker:text-PolishedSilver hover:marker:text-EbonyShadow-100">
                  {item.list.items.map((listItem, listIndex) => (
                    <li key={listIndex}>{listItem}</li>
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
      </div>
    </div>
  );
}

export default TextContainer;
