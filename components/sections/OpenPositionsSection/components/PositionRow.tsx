import { Button } from "@/components/ui/button";

interface PositionRowProps {
  title: string;
  description: string;
  meta: string[];
}

export default function PositionRow({
  title,
  description,
  meta,
}: PositionRowProps) {
  return (
    <div className="border-alabaster flex flex-col gap-5 border-b py-8 md:flex-row md:items-start md:justify-between md:gap-12">
      <div className="flex max-w-3xl flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-heading-sm xs:text-heading-smd font-heading text-smoky-black leading-tight font-normal tracking-wide">
            {title}
          </h3>
          <p className="text-body-sm font-body text-smoky-black/70 leading-relaxed">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {meta.map((item, index) => (
            <span
              key={index}
              className="border-caribbean-current/30 text-body-xs font-body text-smoky-black/70 rounded-full border px-3 py-1"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="shrink-0 pt-2">
        <Button
          variant="primary"
          className="border-caribbean-current/10 cursor-pointer border bg-white"
        >
          <span className="z-10">Apply Now</span>
        </Button>
      </div>
    </div>
  );
}
