"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "./bridge";
const links = [["Home", "/"], ["Services", "/services"], ["Products", "/products"], ["Projects", "/projects"], ["Contact", "/contact"]];
export default function Nav() { const [open, setOpen] = useState(false); return <header className="sticky top-0 z-50 border-b border-border bg-white"><div className="container flex h-[72px] items-center justify-between"><Link href="/"><Logo /></Link><nav className="hidden items-center gap-7 md:flex">{links.map(([label, href]) => <Link key={href} href={href} className="text-sm font-bold text-body hover:text-blue">{label}</Link>)}<a href="https://wa.me/254799960446" className="btn btn-green px-4 py-2.5">WhatsApp us</a></nav><button className="rounded-lg p-2 text-navy md:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</button></div>{open && <nav className="container flex flex-col gap-1 border-t border-border py-4 md:hidden">{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 font-bold text-navy hover:bg-card">{label}</Link>)}<a href="https://wa.me/254799960446" className="btn btn-green mt-2">WhatsApp us</a></nav>}</header>; }
