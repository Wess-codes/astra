"use client";

import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Logo } from "./bridge";

const companyLinks = [["Home", "/"], ["Services", "/services"], ["Products", "/products"], ["Projects", "/projects"], ["Contact", "/contact"]];
const serviceLinks = [["CCTV & Surveillance", "/services#cctv-surveillance"], ["Monitoring Rooms", "/services#monitoring-rooms"], ["Networking", "/services#networking"], ["Security & Access", "/services#security-access"], ["Software", "/services#software"], ["Data & Systems", "/services#data-systems"]];

const footerLinkClass = "text-[15px] text-[#3A4150] transition hover:text-[#0D0B24] focus-visible:rounded focus-visible:ring-2 focus-visible:ring-[#3B8DE8]";
const contactLinkClass = "flex min-w-0 items-start gap-3 text-[15px] text-[#3A4150] transition hover:text-[#0D0B24] focus-visible:rounded focus-visible:ring-2 focus-visible:ring-[#3B8DE8]";

export default function Footer() {
  return <footer className="bg-[#F5F7FB]"><div className="container grid gap-12 pt-20 pb-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
    <div><Logo className="h-8" /><p className="mt-5 max-w-xs text-[15px] leading-6 text-[#3A4150]">Smarter security and technology solutions for businesses in Nairobi and beyond.</p><p className="mt-6 text-sm font-semibold text-[#0D0B24]">Authorised partner: Dahua · Hikvision · Hanwha</p></div>
    <div><h2 className="mb-5 text-sm font-semibold uppercase tracking-wider text-[#0D0B24]">Company</h2><div className="flex flex-col space-y-3">{companyLinks.map(([label, href]) => <Link href={href} key={href} className={footerLinkClass}>{label}</Link>)}</div></div>
    <div><h2 className="mb-5 text-sm font-semibold uppercase tracking-wider text-[#0D0B24]">Services</h2><div className="flex flex-col space-y-3">{serviceLinks.map(([label, href]) => <Link href={href} key={href} className={footerLinkClass}>{label}</Link>)}</div></div>
    <div><h2 className="mb-5 text-sm font-semibold uppercase tracking-wider text-[#0D0B24]">Get in touch</h2><div className="flex flex-col space-y-4">
      <a className={contactLinkClass} href="tel:+254790470430"><Phone className="mt-0.5 size-4 shrink-0 text-[#3B8DE8]" aria-hidden="true" /><span>+254 790 470 430</span></a>
      <a className={contactLinkClass} href="tel:+254799960446"><Phone className="mt-0.5 size-4 shrink-0 text-[#3B8DE8]" aria-hidden="true" /><span>+254 799 960 446</span></a>
      <a className={contactLinkClass} href="https://wa.me/254799960446"><MessageCircle className="mt-0.5 size-4 shrink-0 text-[#3B8DE8]" aria-hidden="true" /><span>WhatsApp us</span></a>
      <a className={contactLinkClass} href="mailto:oyoogeoffrey8@gmail.com"><Mail className="mt-0.5 size-4 shrink-0 text-[#3B8DE8]" aria-hidden="true" /><span className="break-all">oyoogeoffrey8@gmail.com</span></a>
      <a className={contactLinkClass} href="mailto:wesskibaara77@gmail.com"><Mail className="mt-0.5 size-4 shrink-0 text-[#3B8DE8]" aria-hidden="true" /><span className="break-all">wesskibaara77@gmail.com</span></a>
      <p className={contactLinkClass}><MapPin className="mt-0.5 size-4 shrink-0 text-[#3B8DE8]" aria-hidden="true" /><span>Nairobi, Kenya</span></p>
    </div></div>
    </div><div className="container flex flex-col items-center justify-between gap-4 border-t border-[rgba(13,11,36,0.08)] pt-8 pb-8 text-sm text-[#4A5468] md:flex-row"><span>© 2026 Bridge AI. All rights reserved.</span><button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="focus-visible:rounded focus-visible:ring-2 focus-visible:ring-[#3B8DE8]">Back to top</button></div></footer>;
}
