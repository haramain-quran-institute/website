import { Phone, Mail } from "lucide-react";
import WhatsApp from "@/assets/Icons/WhatsApp";
import { instituteContact } from "@/data/site-contact";

const contactMethods = [
  {
    id: "phone",
    icon: Phone,
    label: "Direct Line",
    href: instituteContact.whatsappHref,
  },
  {
    id: "whatsapp",
    icon: WhatsApp,
    label: "WhatsApp",
    href: instituteContact.whatsappHref,
  },
  {
    id: "email",
    icon: Mail,
    label: instituteContact.email,
    href: instituteContact.emailHref,
  },
];

export function QuickConnect() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      {contactMethods.map(({ id, icon: Icon, label, href }) => (
        <a
          key={id}
          href={href}
          target={href.startsWith("https://") ? "_blank" : undefined}
          rel={href.startsWith("https://") ? "noopener noreferrer" : undefined}
          className="group text-smoky-black/60 hover:text-caribbean-current inline-flex items-center gap-2 transition-colors"
        >
          <Icon className="h-4 w-4" strokeWidth={1.5} />
          <span className="text-body-sm">{label}</span>
        </a>
      ))}
    </div>
  );
}
