import Link from "next/link";

import { FacebookIcon, InstagramIcon, LinkedInIcon, TikTokIcon } from "@/assets/Icons";
import { instituteSocialLinks } from "@/data/site-contact";

const socials = [
  { name: "Facebook", href: instituteSocialLinks.facebook, Icon: FacebookIcon },
  { name: "Instagram", href: instituteSocialLinks.instagram, Icon: InstagramIcon },
  { name: "TikTok", href: instituteSocialLinks.tiktok, Icon: TikTokIcon },
  { name: "LinkedIn", href: instituteSocialLinks.linkedin, Icon: LinkedInIcon },
];

export default function SocialFollowCTA() {
  return (
    <section className="w-full bg-[#FBF6EF] py-20 sm:py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-[8px] bg-[#071F1B] px-6 py-16 text-center sm:px-10 sm:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(208,168,108,0.2),transparent_45%)]" />
          <div className="relative mx-auto max-w-3xl">
            <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-[#D0A86C]">Stay Connected</p>
            <h2 className="mt-4 font-heading text-4xl font-medium leading-tight text-white sm:text-5xl">Follow Our Learning Journey</h2>
            <p className="mx-auto mt-5 max-w-2xl font-body text-base leading-7 text-white/65">Join our social community for new Quran recitations, short reminders, helpful lessons, children’s sessions, and uplifting Islamic guidance.</p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              {socials.map(({ name, href, Icon }) => <Link key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Follow us on ${name}`} className="grid size-12 place-items-center rounded-full border border-white/20 text-white transition-colors hover:border-[#D0A86C] hover:bg-[#D0A86C] hover:text-[#071F1B]"><Icon className="size-5" /></Link>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
