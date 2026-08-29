import React from "react";

interface HeroTitleProps {
  title: React.ReactNode;
}

const HeroTitle: React.FC<HeroTitleProps> = ({ title }) => {
  const parts =
    typeof title === "string"
      ? title.split(/(Lifestyle)/i)
      : [title];

  return (
    <h1 className="max-w-5xl text-balance text-center font-heading text-heading_xl font-bold leading-[1.08] -tracking-[0.04em] !text-[#ffffff] sm:text-heading_2xl md:text-heading_3xl lg:text-heading_4xl">
      {parts.map((part, index) =>
        typeof part === "string" && part.toLowerCase() === "lifestyle" ? (
          <span
            key={index}
            className="font-accent italic font-normal text-[#D0A86C]"
          >
            {part}
          </span>
        ) : (
          <React.Fragment key={index}>{part}</React.Fragment>
        )
      )}
    </h1>
  );
};

export default HeroTitle;