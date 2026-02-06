import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Management Services • Governance, Quality & Integration",
  description: "Enterprise data management solutions. Data governance, quality assurance, integration strategies, and master data management to unlock the value of your data.",
  keywords: ["data management", "data governance", "data quality", "data integration", "master data management", "data lifecycle", "data catalog", "metadata management"],
  openGraph: {
    title: "Data Management Services • Governance, Quality & Integration",
    description: "Enterprise data management solutions. Data governance, quality assurance, and integration strategies.",
    url: "https://ims-saigon.com/data-management",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Management Services • IMS Saigon",
    description: "Enterprise data management solutions for governance, quality, and integration.",
  },
  alternates: {
    canonical: "https://ims-saigon.com/data-management",
  },
};

export default function DataManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
