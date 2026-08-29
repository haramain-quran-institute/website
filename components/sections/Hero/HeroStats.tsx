interface Stat {
  value: string;
  label: string;
}

interface HeroStatsProps {
  stats: Stat[];
}

const HeroStats: React.FC<HeroStatsProps> = ({ stats }) => {
  return (
    <div className="grid w-full max-w-[640px] grid-cols-3 items-center justify-center rounded-[4px] border border-[#FFFFFF]/10 bg-[#021C18]/5 px-2 py-3 backdrop-blur-md sm:flex sm:px-5">
      {stats.map((stat, index) => (
        <div key={index} className="flex min-w-0 items-center justify-center">
          <div className="flex min-w-0 flex-col items-center justify-center gap-1 px-1 text-center sm:min-w-[160px] sm:flex-row sm:gap-2 sm:px-3">
            <span className="font-heading text-xs font-semibold leading-none tracking-tight text-[#D0A86C] sm:text-sm md:text-base">
              {stat.value}
            </span>

            <span className="font-body text-[9px] font-medium leading-tight tracking-wide text-[#d4cec7] sm:whitespace-nowrap sm:text-[12px] sm:leading-none md:text-[13px]">
              {stat.label}
            </span>
          </div>

          {index !== stats.length - 1 && (
            <span className="hidden text-[#D0A86C] sm:inline">•</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default HeroStats;
