import type { Metadata } from "next";
import { Inter, Ubuntu, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MotionProvider } from "@/components/motion/motion-provider";
import { JsonLd } from "@/components/shared/json-ld";
import { organizationSchema } from "@/lib/seo";
import { siteConfig } from "@/data/site-config";
import "./globals.css";

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const headingFont = Ubuntu({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const monoFont = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "LOYAL Air Compressor Group | Industrial Air Compressor Manufacturer",
    template: "%s | LOYAL Air Compressor Group",
  },
  description:
    "Delivering high-performance, energy-efficient industrial air compressors and complete compressed air systems to customers worldwide.",
  openGraph: {
    title: "LOYAL Air Compressor Group",
    description:
      "Delivering high-performance, energy-efficient industrial air compressors and complete compressed air systems to customers worldwide.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LOYAL Air Compressor Group",
    description:
      "Delivering high-performance, energy-efficient industrial air compressors and complete compressed air systems to customers worldwide.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${headingFont.variable} ${monoFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd data={organizationSchema()} />
        <MotionProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
