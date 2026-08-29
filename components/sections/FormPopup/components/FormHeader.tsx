import { QuickConnect } from "./QuickConnect";

type FormHeaderProps = {
  title?: string;
  subtitle?: string;
};

export function FormHeader({
  title = "Get In Touch",
  subtitle = "Your gateway to seamless Hajj, Umrah, and travel experiences.",
}: FormHeaderProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h2 className="font-heading text-heading-sm text-smoky-black leading-tight tracking-tight">
          {title}
        </h2>
        <p className="text-body-sm text-smoky-black/60">
          {subtitle}
        </p>
      </div>

      <QuickConnect />

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="border-smoky-black/10 w-full border-t" />
        </div>
        <div className="relative flex justify-center">
          <span className="text-body-xs text-smoky-black/70 overflow-hidden rounded-full px-4 tracking-widest uppercase backdrop-blur-sm">
            Or Leave a Message
          </span>
        </div>
      </div>
    </div>
  );
}
