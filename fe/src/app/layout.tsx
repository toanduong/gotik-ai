import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gotik Consulting • Transforming Ideas into Scalable Software Solutions",
  description: "Expert guidance for your digital transformation journey. From cloud migration to custom development, we turn your vision into reality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${inter.variable} ${dmSans.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <script src="https://cdn.jsdelivr.net/npm/motion@11.11.17/dist/motion.js" defer></script>
      </body>
    </html>
  );
}
