"use client";

import Link from "next/link";
import { MessageCircle, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "./bridge";

const links = [["Home", "/"], ["Services", "/services"], ["Products", "/products"], ["Projects", "/projects"], ["Contact", "/contact"]] as const;

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);
  const closeMenu = () => setOpen(false);

  return <>
    <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-3 focus:z-[60] focus:rounded-xl focus:bg-white focus:px-4 focus:py-3 focus:text-navy focus:ring-2 focus:ring-[#3B8DE8]">Skip to content</a>
    <header className={`sticky top-0 z-50 bg-white transition duration-200 ${scrolled ? "bg-white/90 shadow-[0_1px_0_rgba(13,11,36,0.06)] backdrop-blur-md" : ""}`}>
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" onClick={closeMenu} aria-label="Bridge AI home" className="shrink-0 focus-visible:rounded-xl focus-visible:ring-2 focus-visible:ring-[#3B8DE8] focus-visible:ring-offset-4"><Logo className="h-[30px] md:h-[34px]" /></Link>
        <nav aria-label="Main" className="hidden items-center gap-10 lg:flex">
          {links.map(([label, href]) => <Link key={href} href={href} className={`relative py-3 text-[15px] font-medium text-[#3A4150] transition hover:text-[#0D0B24] focus-visible:rounded-lg focus-visible:ring-2 focus-visible:ring-[#3B8DE8] ${isActive(href) ? "text-[#0D0B24] after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-1.5 after:-translate-x-1/2 after:rounded-full after:bg-[#2FD07A]" : ""}`}>{label}</Link>)}
        </nav>
        <a href="https://wa.me/254799960446" className="btn btn-green hidden h-11 rounded-xl px-6 font-semibold lg:inline-flex focus-visible:ring-2 focus-visible:ring-[#3B8DE8]" ><MessageCircle className="size-4" aria-hidden="true" />WhatsApp us</a>
        <button type="button" className="flex size-11 items-center justify-center rounded-xl text-navy transition hover:bg-[#F5F7FB] focus-visible:ring-2 focus-visible:ring-[#3B8DE8] lg:hidden" onClick={() => setOpen(value => !value)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav id="mobile-menu" aria-label="Mobile main" className="bg-white px-6 py-6 lg:hidden"><div className="flex flex-col">{links.map(([label, href]) => <Link key={href} href={href} onClick={closeMenu} className="flex min-h-[52px] items-center text-lg font-medium text-[#3A4150] focus-visible:ring-2 focus-visible:ring-[#3B8DE8]">{label}</Link>)}<a href="https://wa.me/254799960446" onClick={closeMenu} className="btn btn-green mt-4 h-12 w-full rounded-xl font-semibold focus-visible:ring-2 focus-visible:ring-[#3B8DE8]"><MessageCircle className="size-4" aria-hidden="true" />WhatsApp us</a></div></nav>}
    </header>
  </>;
}
