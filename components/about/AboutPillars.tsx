import { Eye, HeartHandshake, Target } from "lucide-react";

const pillars = [
  {
    title: "Our Vision",
    description:
      "To make trusted Quran and Islamic learning accessible to every home through clear teaching, modern online access, and lasting student confidence.",
    icon: Eye,
  },
  {
    title: "Our Mission",
    description:
      "To provide structured one-to-one classes led by qualified teachers who guide each learner with patience, consistency, and personal attention.",
    icon: Target,
  },
  {
    title: "Our Core Values",
    description:
      "Faith, sincerity, respect, care, excellence, and responsibility shape the way we teach, communicate, and support every student and family.",
    icon: HeartHandshake,
  },
];

export default function AboutPillars() {
  return (
    <section id="our-principles" className="w-full bg-white py-20 sm:py-24 min-[1024px]:py-28">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-4xl font-medium leading-[1.06] tracking-tight text-[#0D463E] sm:text-5xl min-[1024px]:text-[58px]">
            What <span className="font-accent font-normal italic">Guides</span> Haramain
          </h2>
          <p className="mx-auto mt-5 max-w-3xl font-body text-base leading-7 text-[#0D463E]/62">
            A clear vision, a focused mission, and strong values keep every part of our learning experience centered on the student.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-14 min-[768px]:grid-cols-3 min-[1024px]:mt-20">
          {pillars.map(({ title, description, icon: Icon }, index) => (
            <article key={title} className="relative flex min-h-[235px] flex-col items-center px-4 text-center">
              {index === 0 && (
                <Eye
                  className="pointer-events-none absolute left-1/2 top-1/2 size-64 -translate-x-1/2 -translate-y-1/2 text-[#0D463E]/[0.035]"
                  strokeWidth={1}
                  aria-hidden="true"
                />
              )}
              <Icon className="relative size-12 text-[#0D6B65]" strokeWidth={1.8} />
              <h3 className="relative mt-7 font-heading text-[27px] font-medium leading-[1.12] text-[#0D463E]">{title}</h3>
              <p className="relative mt-4 max-w-sm font-body text-[15px] leading-6 text-[#0D463E]/62">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
