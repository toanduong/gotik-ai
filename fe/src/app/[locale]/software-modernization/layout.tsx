import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Modernization • Legacy System Transformation",
  description: "Modernize legacy systems with our software transformation services. Update outdated applications, migrate to modern architectures, and improve performance while reducing technical debt.",
  keywords: ["software modernization", "legacy system migration", "application modernization", "technical debt reduction", "system transformation", "legacy code refactoring", "platform modernization", "cloud migration"],
  openGraph: {
    title: "Software Modernization • Legacy System Transformation",
    description: "Modernize legacy systems. Update outdated applications, migrate to modern architectures, and reduce technical debt.",
    url: "https://ims-saigon.com/software-modernization",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Modernization • IMS Saigon",
    description: "Modernize legacy systems and transform outdated applications with modern architectures.",
  },
  alternates: {
    canonical: "https://ims-saigon.com/software-modernization",
  },
};

export default function SoftwareModernizationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
