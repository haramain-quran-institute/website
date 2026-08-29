import ServiceCard from "./ServiceCard";
import type { ServiceItem } from "../types";

interface ServicesCardListProps {
  services: ServiceItem[];
}

export default function ServicesCardList({
  services,
}: ServicesCardListProps) {
  return (
    <div className="grid w-full grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-3">
      {services.map((service, index) => {
        const isFirst = index === 0;
        const isLast = index === services.length - 1;

        return (
          <div
            key={`${service.number}-${service.title}`}
            className={[
              isFirst ? "lg:col-span-2" : "",
              isLast ? "lg:col-start-2 lg:col-span-2" : "",
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