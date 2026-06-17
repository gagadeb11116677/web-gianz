import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GianzBot v3.5 — WhatsApp Multi-Bot Premium",
  description: "GianzBot WhatsApp bot premium — JPM, SWGC Media, Auto Join, Push Kontak, Multi-Bot. Source code kualitas terbaik by GianzOfficial.",
  keywords: ["GianzBot", "WhatsApp Bot", "JPM Bot", "SWGC", "Auto Join", "Bot WA Premium", "Source Code Bot WA"],
  authors: [{ name: "GianzOfficial" }],
  icons: { icon: "https://files.catbox.moe/lx30um.jpg" },
  openGraph: {
    title: "GianzBot v3.5 — Premium WhatsApp Bot",
    description: "Source code bot WhatsApp premium — JPM, SWGC, Multi-Bot support.",
    images: ["https://files.catbox.moe/lx30um.jpg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
