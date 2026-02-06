import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data & Analytics Solutions • Business Intelligence & Insights",
  description: "Transform data into actionable insights. Business intelligence, advanced analytics, data visualization, and predictive modeling to drive informed business decisions.",
  keywords: ["data analytics", "business intelligence", "data visualization", "predictive analytics", "data insights", "BI solutions", "analytics platform", "data science"],
  openGraph: {
    title: "Data & Analytics Solutions • Business Intelligence & Insights",
    description: "Transform data into insights. Business intelligence, analytics, and visualization for informed decisions.",
    url: "https://ims-saigon.com/data-and-analytics",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data & Analytics Solutions • IMS Saigon",
    description: "Transform data into actionable insights with business intelligence and analytics.",
  },
  alternates: {
    canonical: "https://ims-saigon.com/data-and-analytics",
  },
};

export default function DataAndAnalyticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
