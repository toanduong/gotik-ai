import type { Metadata } from "next";
import "./globals.css";
import { OrganizationSchema, WebsiteSchema } from "@/components/seo/JsonLd";
import { WebVitals } from "@/components/analytics/WebVitals";

export const metadata: Metadata = {
  metadataBase: new URL('https://gotik.ai'),
  title: {
    default: "Gotik Consulting • Transforming Ideas into Scalable Software Solutions",
    template: "%s | Gotik Consulting"
  },
  description: "Expert guidance for your digital transformation journey. From cloud migration to custom development, we turn your vision into reality.",
  keywords: ["software consulting", "digital transformation", "cloud migration", "AI consulting", "data solutions", "software architecture", "cloud services", "custom development", "enterprise software"],
  authors: [{ name: "Gotik Consulting" }],
  creator: "Gotik Consulting",
  publisher: "Gotik Consulting",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/logo_footer.png',
    apple: '/logo_footer.png',
    shortcut: '/logo_footer.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gotik.ai',
    siteName: 'Gotik Consulting',
    title: 'Gotik Consulting • Transforming Ideas into Scalable Software Solutions',
    description: 'Expert guidance for your digital transformation journey. From cloud migration to custom development, we turn your vision into reality.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Gotik Consulting - Software & Cloud Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gotik Consulting • Transforming Ideas into Scalable Software Solutions',
    description: 'Expert guidance for your digital transformation journey. From cloud migration to custom development, we turn your vision into reality.',
    images: ['/og-image.png'],
    creator: '@gotikAI',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add when available:
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <OrganizationSchema />
        <WebsiteSchema />
      </head>
      <body
        className="antialiased"
        suppressHydrationWarning
      >
        <WebVitals />
        {children}
        <script src="https://cdn.jsdelivr.net/npm/motion@11.11.17/dist/motion.js" defer></script>
      </body>
    </html>
  );
}
