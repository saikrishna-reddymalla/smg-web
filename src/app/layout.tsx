import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { FloatingWhatsApp } from "@/components/sections/floating-whatsapp";
import { siteConfig } from "@/lib/site-content";

import "./globals.css";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Premium Wholesale Fashion`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.longDescription,
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,#fffefb_0%,#f8f2e8_45%,#f5efe6_100%)] text-stone-900">
          <Navbar />
          {children}
          <Footer />
          <FloatingWhatsApp />
        </div>
      </body>
    </html>
  );
}
