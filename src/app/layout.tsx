// layout.tsx or layout.js
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Nav from "./components/nav";
import Footer from "./components/footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Astra Design",
  description: "Crafted by Astra Design for forward-thinking brands.",
  icons: {
    icon: "/favicon.ico", // ✅ Add your favicon here
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${manrope.variable} font-sans antialiased scroll-smooth`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
