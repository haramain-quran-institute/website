import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TikTokIcon,
  YouTubeIcon,
} from "@/assets/Icons";
import { instituteContact, instituteSocialLinks } from "@/data/site-contact";
import FooterLogo from "@/assets/FooterLogo.png";
import type { FooterProps } from "./types/links";

const socialLinks = [
  { title: "Facebook", href: instituteSocialLinks.facebook, Icon: FacebookIcon },
  { title: "Instagram", href: instituteSocialLinks.instagram, Icon: InstagramIcon },
  { title: "LinkedIn", href: instituteSocialLinks.linkedin, Icon: LinkedInIcon },
  { title: "YouTube", href: instituteSocialLinks.youtube, Icon: YouTubeIcon },
  { title: "TikTok", href: instituteSocialLinks.tiktok, Icon: TikTokIcon },
];

export default function FooterMain({ footerItemsData }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[#E8E1D7]/80 bg-white">
      <div className="container overflow-hidden bg-white">
        <div className="grid grid-cols-1 gap-12 py-14 min-[1024px]:grid-cols-[minmax(0,1.15fr)_minmax(0,2.85fr)] min-[1024px]:gap-14 min-[1024px]:py-[72px] min-[1280px]:gap-16">
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-5">
              <Link href="/" className="inline-flex w-fit" aria-label="Haramain Quran Institute home">
                <Image
                  src={FooterLogo}
                  alt="Haramain Quran Institute"
                  className="h-auto w-48 sm:w-52"
                  sizes="(min-width: 576px) 208px, 192px"
                />
              </Link>

              <p className="max-w-md font-body text-[15px] leading-6 text-[#161513]/70">
                Learn the Quran with qualified teachers through flexible,
                personalized classes designed around your schedule.
              </p>
            </div>

            <address className="flex flex-col gap-4 not-italic">
              <div className="flex items-start gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#0D706D]" />
                <p className="font-body text-[15px] leading-6 text-[#161513]/75">
                  {instituteContact.address}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 shrink-0 text-[#0D706D]" />
                <Link
                  href={instituteContact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-[15px] text-[#161513]/70 transition-colors hover:text-[#0D463E]"
                >
                  {instituteContact.phoneDisplay}
                </Link>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 shrink-0 text-[#0D706D]" />
                <Link
                  href={instituteContact.emailHref}
                  className="break-all font-body text-[15px] text-[#161513]/70 transition-colors hover:text-[#0D463E]"
                >
                  {instituteContact.email}
                </Link>
              </div>
            </address>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-12 min-[700px]:grid-cols-4 min-[1280px]:gap-x-14">
            {footerItemsData.map((column) => (
              <div key={column.title} className="flex flex-col gap-5">
                <h3 className="whitespace-nowrap font-accent text-[17px] font-normal leading-tight text-[#0D463E] min-[1280px]:text-[20px]">
                  {column.title}
                </h3>

                <ul className="flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.url}
                        className="font-body text-[15px] leading-6 text-[#161513]/70 transition-colors hover:text-[#0D463E]"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-[#E8E1D7] py-6 min-[700px]:flex-row min-[700px]:items-center min-[700px]:justify-between min-[1024px]:py-7">
          <div className="flex flex-col gap-1 min-[700px]:flex-row min-[700px]:items-center min-[700px]:gap-2">
            <p className="font-body text-[13px] leading-relaxed text-[#161513]/60 min-[1024px]:text-[14px]">
              © {currentYear} Haramain Quran Institute. All rights reserved.
            </p>
            <span className="hidden text-[#161513]/30 min-[700px]:inline">•</span>
            <p className="font-body text-[13px] leading-relaxed text-[#161513]/50 min-[1024px]:text-[14px]">
              Website by{" "}
              <Link
                href="https://dynamgalaxy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#161513]/65 transition-colors hover:text-[#0D463E]"
              >
                Dynam Galaxy
              </Link>
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ title, href, Icon }) => (
              <Link
                key={title}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={title}
                className="group flex h-9 w-9 items-center justify-center rounded-full border border-[#0D463E]/20 text-[#0D463E] transition-all duration-300 hover:border-[#0D463E] hover:bg-[#0D463E] hover:text-white"
              >
                <Icon className="h-4 w-4 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
