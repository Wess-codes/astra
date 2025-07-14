// layout.tsx or layout.js
import type { Metadata } from "next";
import { Manrope } from "next/font/google"; // ✅ Import Manrope from next/font/google
import "./globals.css";
import Nav from "./components/nav";
import Footer from "./components/footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope", // Define a custom CSS variable
  display: "swap",
});

export const metadata: Metadata = {
  title: "Astra Design",
  description: "Crafted by Astra Design for forward-thinking brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} font-sans antialiased scroll-smooth`} // ✅ Apply the Manrope font
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
