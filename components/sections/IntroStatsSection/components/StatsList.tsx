import StatCard from "./StatCard";
import type { StatType } from "../types";

interface StatsListProps {
  stats: StatType[];
}

export default function StatsList({ stats }: StatsListProps) {
  return (
    <div className="grid w-full grid-cols-1 gap-5 min-[640px]:grid-cols-2 min-[1024px]:grid-cols-4">
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;

        return (
          <StatCard key={index} title={stat.title} value={stat.value}>
            <IconComponent
              className="h-full w-full text-[#0D706D]"
              aria-hidden
            />
          </StatCard>
        );
      })}
    </div>
  );
}
