import type { Metadata } from "next";
import { ServiceSchema, BreadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "AI Consulting Services • Strategy, Implementation & AI Agents",
  description: "Transform your business with expert AI consulting. From AI strategy development to custom AI agent implementation, we help enterprises harness the power of artificial intelligence.",
  keywords: ["AI consulting", "artificial intelligence strategy", "AI agents", "machine learning consulting", "AI implementation", "enterprise AI", "AI transformation", "intelligent automation"],
  openGraph: {
    title: "AI Consulting Services • Strategy, Implementation & AI Agents",
    description: "Transform your business with expert AI consulting. Custom AI agent development, strategy, and implementation services for enterprises.",
    url: "https://ims-saigon.com/ai-consulting",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Consulting Services • IMS Saigon",
    description: "Transform your business with expert AI consulting. Custom AI agent development, strategy, and implementation services.",
  },
  alternates: {
    canonical: "https://ims-saigon.com/ai-consulting",
  },
};

export default function AIConsultingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ServiceSchema
        name="AI Consulting Services"
        description="Transform your business with expert AI consulting. From AI strategy development to custom AI agent implementation, we help enterprises harness the power of artificial intelligence."
        url="https://ims-saigon.com/ai-consulting"
        serviceType="AI Consulting"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://ims-saigon.com" },
          { name: "AI Consulting", url: "https://ims-saigon.com/ai-consulting" }
        ]}
      />
      {children}
    </>
  );
}
