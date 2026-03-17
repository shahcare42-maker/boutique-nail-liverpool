import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import Chatbot from "@/components/Chatbot";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Boutique Nail Liverpool | Luxury Nail Salon & BIAB Specialist",
  description: "Boutique Nail Liverpool offers premium nail services including BIAB, Acrylic, and Gel in an elegant setting. Book your appointment online today.",
  keywords: "Nail Salon Liverpool, BIAB Nails Liverpool, Luxury Nails, Acrylic Nails, Gel Polish, Pedicure Liverpool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="antialiased">
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
