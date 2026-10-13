import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ChevronRight, CircleDot, Code2, Download, Fingerprint, Network, Phone, ShieldCheck, Video, Wifi } from "lucide-react";

export const services = [
  { title: "CCTV & Surveillance", icon: Video, bullets: ["IP cameras, NVRs & DVRs", "Remote viewing on your phone", "Smart AI motion analytics"] },
  { title: "Monitoring Rooms", icon: CircleDot, bullets: ["Control room design", "Video walls & operator desks", "Centralised camera management"] },
  { title: "Networking", icon: Network, bullets: ["Structured cabling & racks", "Office-wide Wi-Fi & switching", "Firewalls & routers"] },
  { title: "Security & Access", icon: Fingerprint, bullets: ["Biometric & card access control", "Alarms & intruder detection", "Video intercoms"] },
  { title: "Software", icon: Code2, bullets: ["Websites & web apps", "ERP systems", "Mobile apps"] },
  { title: "Data & Systems", icon: Wifi, bullets: ["Data migrations", "System upgrades", "System redesigns"] },
];

const imageHost = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com";

export const photos = [
  { src: `${imageHost}/CCTV%20Camera%20Installation%20Kampala-GSMWODDZ9S37a1aSrQ0hobUvwllOJG.jpg`, title: "Dome camera installation", category: "CCTV installation" },
  { src: `${imageHost}/1005710160560686836-W5nW4yGJVGvPGdQEurnE6pemfQ3R2j.jpg`, title: "Bullet camera installation", category: "Outdoor surveillance" },
  { src: `${imageHost}/Latest%20GMB%20Post%20-%20Security%20Cameras%20Mississauga-ZDTaYo62omU7vGyDWWZzLkctyPM6Zk.jpg`, title: "Network cabinet and CCTV monitor", category: "CCTV infrastructure" },
  { src: `${imageHost}/13581236385740162-Gdj6TkJnk7vh7yteufkNpsCoyz4Ald.jpg`, title: "Monitoring room display", category: "Video monitoring" },
];

export function Logo({ className = "" }: { className?: string }) {
  return <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bridge-AI-Logo-On-White-y05Ub6yfUe6fQZLjSksQdUDsDPjKEk.jpg" alt="Bridge AI" width={170} height={60} className={`h-10 w-auto object-contain ${className}`} priority />;
}

export function SectionHeading({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return <div className="max-w-2xl"><p className="eyebrow">{eyebrow}</p><h2 className="section-title">{title}</h2>{text && <p className="mt-4 max-w-prose text-lg leading-relaxed text-body">{text}</p>}</div>;
}

export function ServiceGrid() {
  return <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">{services.map(({ title, icon: Icon, bullets }) => <article key={title} className="card flex h-full flex-col p-6 md:p-8"><div className="mb-7 flex size-11 items-center justify-center rounded-xl bg-light-blue text-blue"><Icon aria-hidden="true" /><span className="sr-only">{title} icon</span></div><h3 className="text-xl font-bold text-navy">{title}</h3><ul className="mt-4 flex flex-col gap-3 text-base leading-relaxed text-body">{bullets.map(item => <li key={item} className="flex gap-2"><Check className="mt-1 size-4 shrink-0 text-green" aria-hidden="true" />{item}</li>)}</ul><Link href="/contact" className="mt-7 inline-flex items-center gap-1 text-sm font-bold text-blue">Enquire <ArrowRight className="size-4" /></Link></article>)}</div>;
}

export function CTA() { return <section className="bg-light-blue"><div className="container flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between"><div><p className="eyebrow">LET&apos;S TALK</p><h2 className="mt-2 text-3xl font-bold text-navy">Not sure what fits your site?</h2><p className="mt-2 text-body">Tell us, and we&apos;ll recommend the right setup.</p></div><div className="flex flex-wrap gap-3"><a className="btn btn-primary" href="tel:+254790470430"><Phone className="size-4" />Call us</a><a className="btn btn-green" href="https://wa.me/254799960446"><span>WhatsApp</span><ChevronRight className="size-4" /></a></div></div></section>; }

export function Downloads() { return <section className="container section-pad"><SectionHeading eyebrow="RESOURCES" title="Useful guides for your next setup" /><div className="mt-8 grid gap-4 md:grid-cols-2">{[["Company brochure (PDF)", "/downloads/Bridge-AI-Brochure-A4.pdf"], ["Hardware & product guide (PDF)", "/downloads/Bridge-AI-Hardware-Product-Guide.pdf"]].map(([title, href]) => <div className="card flex items-center justify-between p-5" key={title}><span className="font-bold text-navy">{title}</span><a className="btn btn-outline" href={href} download><Download className="size-4" />Download</a></div>)}</div></section>; }

export function PhotoGrid() { return <div className="grid gap-4 sm:grid-cols-2">{photos.map(photo => <div className="group relative overflow-hidden rounded-xl" key={photo.title}><Image src={photo.src} alt={photo.title} width={700} height={500} className="aspect-[4/3] object-cover transition duration-500 group-hover:scale-105" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 to-transparent p-5 pt-14 text-white"><p className="font-bold">{photo.title}</p><p className="text-sm text-white/70">{photo.category}</p></div></div>)}</div>; }

export function CheckList({ items }: { items: string[] }) { return <ul className="flex flex-col gap-4">{items.map(item => <li key={item} className="flex gap-3 text-body"><Check className="mt-1 size-5 shrink-0 text-green" />{item}</li>)}</ul>; }

export function HeroImage() { return <div className="relative"><Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Best%20CCTV%20Installation%20Services%20in%20Nigeria-GRrkuMAvrtbGGHUCdt4UfQHbtcTggm.jpg" alt="Technician installing a CCTV camera" width={900} height={700} className="aspect-[4/3] w-full rounded-2xl object-cover" priority /><div className="absolute -bottom-4 left-4 rounded-full border border-green/20 bg-white px-4 py-2 text-sm font-bold text-navy shadow-lg"><span className="mr-2 inline-block size-2 rounded-full bg-green" />5+ active clients</div></div>; }

export function BrandBadge() { return <span className="badge"><ShieldCheck className="size-4" />Authorised partner</span>; }
