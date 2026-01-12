import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gotik Consulting • Transforming Ideas into Scalable Software Solutions",
  description: "Expert guidance for your digital transformation journey. From cloud migration to custom development, we turn your vision into reality.",
  icons: {
    icon: '/logo_footer.png',
    apple: '/logo_footer.png',
    shortcut: '/logo_footer.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className="antialiased"
        suppressHydrationWarning
      >
        {children}
        <script src="https://cdn.jsdelivr.net/npm/motion@11.11.17/dist/motion.js" defer></script>
      </body>
    </html>
  );
}
