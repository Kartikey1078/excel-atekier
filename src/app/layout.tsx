import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { SiteJsonLd } from "@/components/SiteJsonLd";
import { getSiteUrl, siteConfig } from "@/lib/site";
import "./globals.css";

export const dynamic = "force-static";
export const revalidate = false;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
  preload: true,
});

const siteUrl = getSiteUrl();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} | Architecture & Design Studio`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "architecture studio",
    "interior design",
    "workplace design",
    "retail design",
    "startup office",
    siteConfig.name,
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Architecture & Design Studio`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImagePath,
        width: 800,
        height: 320,
        alt: `${siteConfig.name} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Architecture & Design Studio`,
    description: siteConfig.description,
    images: [siteConfig.ogImagePath],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  formatDetection: {
    telephone: true,
    email: false,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className="min-h-full bg-black text-white antialiased">
        <SiteJsonLd />
        {children}
      </body>
    </html>
  );
}
