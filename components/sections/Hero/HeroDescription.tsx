interface HeroDescriptionProps {
  description: string;
}

const HeroDescription: React.FC<HeroDescriptionProps> = ({
  description,
}) => {
  const highlighted = description
    .replace(/Mr Charles/g, "<strong>Mr Charles</strong>")
    .replace(/luxury travel/gi, "<strong>luxury travel</strong>")
    .replace(/lifestyle management/gi, "<strong>lifestyle management</strong>")
    .replace(/enjoy life properly/gi, "<strong>enjoy life properly</strong>")
    .replace(/Copenhagen/gi, "<strong>Copenhagen</strong>")
    .replace(/Denmark/gi, "<strong>Denmark</strong>");

  return (
    <p
      className="max-w-2xl text-center font-body text-body_sm leading-relaxed text-[#C7C1B9] md:text-body_base lg:text-body_xl
      [&_strong]:font-semibold
      [&_strong]:text-white"
      dangerouslySetInnerHTML={{ __html: highlighted }}
    />
  );
};

export default HeroDescription;