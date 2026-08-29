interface HeroSubTitleProps {
  subtitle: string;
}

const HeroSubTitle: React.FC<HeroSubTitleProps> = ({ subtitle }) => {
  return (
    <span className="font-serif text-body_xxs leading-relaxed tracking-wider text-[#D0A86C] sm:text-body_xs md:text-body_sm lg:text-body_base">
      {subtitle}
    </span>
  );
};

export default HeroSubTitle;