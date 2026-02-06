import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile & Web App Development • Cross-Platform Solutions",
  description: "Custom mobile and web application development. Build responsive web apps, native mobile apps, and cross-platform solutions that deliver exceptional user experiences.",
  keywords: ["mobile app development", "web app development", "cross-platform apps", "responsive web design", "native mobile apps", "React Native", "progressive web apps", "PWA"],
  openGraph: {
    title: "Mobile & Web App Development • Cross-Platform Solutions",
    description: "Custom mobile and web app development. Responsive web apps and native mobile solutions for exceptional experiences.",
    url: "https://ims-saigon.com/mobile-web-apps",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile & Web App Development • IMS Saigon",
    description: "Custom mobile and web application development with cross-platform solutions.",
  },
  alternates: {
    canonical: "https://ims-saigon.com/mobile-web-apps",
  },
};

export default function MobileWebAppsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
