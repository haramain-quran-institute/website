import { Phone, Mail } from "lucide-react";
import WhatsApp from "@/assets/Icons/WhatsApp";

const contactMethods = [
  {
    id: "phone",
    icon: Phone,
    label: "Direct Line",
    href: "tel:+923041110786",
  },
  {
    id: "whatsapp",
    icon: WhatsApp,
    label: "WhatsApp",
    href: "https://wa.me/923041110786",
  },
  {
    id: "email",
    icon: Mail,
    label: "info@alfursan.digital",
    href: "mailto:info@alfursan.digital",
  },
];

export function QuickConnect() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      {contactMethods.map(({ id, icon: Icon, label, href }) => (
        <a
          key={id}
          href={href}
          target={id === "whatsapp" ? "_blank" : undefined}
          rel={id === "whatsapp" ? "noopener noreferrer" : undefined}
          className="group text-smoky-black/60 hover:text-caribbean-current inline-flex items-center gap-2 transition-colors"
        >
          <Icon className="h-4 w-4" strokeWidth={1.5} />
          <span className="text-body-sm">{label}</span>
        </a>
      ))}
    </div>
  );
}
