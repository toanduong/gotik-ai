import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Architecture Design • Modern Data Platforms & Warehouses",
  description: "Expert data architecture design services. Build modern data platforms, data warehouses, and data lakes that scale with your business and enable data-driven decision making.",
  keywords: ["data architecture", "data warehouse design", "data lake architecture", "data platform", "data engineering", "big data architecture", "modern data stack", "data infrastructure"],
  openGraph: {
    title: "Data Architecture Design • Modern Data Platforms & Warehouses",
    description: "Expert data architecture design. Modern data platforms, warehouses, and lakes for data-driven businesses.",
    url: "https://ims-saigon.com/data-architecture",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Architecture Design • IMS",
    description: "Expert data architecture design for modern data platforms and warehouses.",
  },
  alternates: {
    canonical: "https://ims-saigon.com/data-architecture",
  },
};

export default function DataArchitectureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
