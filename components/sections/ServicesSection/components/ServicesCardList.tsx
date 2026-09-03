import ServiceCard from "./ServiceCard";
import type { ServiceItem } from "../types";

interface ServicesCardListProps {
  services: ServiceItem[];
}

export default function ServicesCardList({
  services,
}: ServicesCardListProps) {
  const hasTwoItems = services.length === 2;

  return (
    <div className={`grid w-full grid-cols-1 gap-5 min-[576px]:gap-6 ${hasTwoItems ? "min-[768px]:grid-cols-2" : "min-[992px]:grid-cols-3"}`}>
      {services.map((service, index) => {
        const isFirst = index === 0;
        const isLast = index === services.length - 1;

        return (
          <div
            key={`${service.number}-${service.title}`}
            className={[
              !hasTwoItems && isFirst ? "min-[992px]:col-span-2" : "",
              !hasTwoItems && isLast ? "min-[992px]:col-start-2 min-[992px]:col-span-2" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <ServiceCard
              item={service}
              index={index}
            />
          </div>
        );
      })}
    </div>
  );
}
