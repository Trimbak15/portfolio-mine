import type { Metadata } from "next";
import "./globals.css";
import { Inter, Calistoga } from "next/font/google";
import { twMerge } from "tailwind-merge";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-calistoga",
  weight: "400",
  display: "swap",
});

//title n
export const metadata = {
  //name foe the site writtern here...
  title: "Trimbak Pakhale's Portfolio",
  description: "A showcase of my work and skills",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Trimbak Pakhale's Portfolio",
    description: "A showcase of my work and skills",
    url: "https://myportfolio.com",
    siteName: "Trimbak Pakhale's Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "My Portfolio",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",  
  }      
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.variable, calistoga.variable, "bg-white text-gray-900 antialiased dark:bg-gray-900 dark:text-gray-100 font-sans")}>{children}</body>
    </html>
  );
}
