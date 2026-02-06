import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Strategy Consulting • Roadmap & Governance Framework",
  description: "Strategic data consulting services. Develop comprehensive data strategies, roadmaps, and governance frameworks that align data initiatives with business objectives.",
  keywords: ["data strategy", "data strategy consulting", "data roadmap", "data governance framework", "data transformation", "data maturity", "chief data officer", "data-driven strategy"],
  openGraph: {
    title: "Data Strategy Consulting • Roadmap & Governance Framework",
    description: "Strategic data consulting. Comprehensive data strategies and governance frameworks aligned with business objectives.",
    url: "https://ims-saigon.com/data-strategy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Strategy Consulting • IMS Saigon",
    description: "Strategic data consulting for comprehensive data strategies and governance.",
  },
  alternates: {
    canonical: "https://ims-saigon.com/data-strategy",
  },
};

export default function DataStrategyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
