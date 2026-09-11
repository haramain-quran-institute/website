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
    <h1 className="max-w-5xl text-balance text-center font-heading text-[clamp(2.625rem,11vw,3rem)] font-bold leading-[1.03] tracking-tight !text-[#ffffff] sm:text-[3rem] md:text-[clamp(3.25rem,6vw,3.75rem)] lg:text-heading_4xl lg:leading-[1.08] lg:-tracking-[0.04em]">
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
