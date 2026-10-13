// layout.tsx
import type { Metadata } from "next";
import { Manrope, Quicksand } from "next/font/google";
import "./globals.css";
import Nav from "./components/nav";
import Footer from "./components/footer";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const quicksand = Quicksand({ subsets: ["latin"], variable: "--font-quicksand", weight: ["600", "700"], display: "swap" });

export const metadata: Metadata = {
  title: "Bridge AI | Security & technology solutions",
  description: "CCTV installation Nairobi, access control, networking and software supplied, installed and supported by Bridge AI.",
  openGraph: { title: "Bridge AI", description: "Smarter security and technology solutions in Nairobi.", images: ["/bridge-ai-logo.png"] },
  icons: {
    icon: "/favicon.ico", // ✅ Add favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Fallback for browsers not using Next.js metadata */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${manrope.variable} ${quicksand.variable} font-sans antialiased scroll-smooth`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
