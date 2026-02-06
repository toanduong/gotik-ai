import type { Metadata } from "next";
import { ServiceSchema, BreadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Cloud Services • Infrastructure, Migration & Management",
  description: "Comprehensive cloud services for modern enterprises. Cloud infrastructure setup, migration strategies, and ongoing management across AWS, Azure, and Google Cloud.",
  keywords: ["cloud services", "cloud infrastructure", "cloud migration", "cloud management", "AWS", "Azure", "Google Cloud", "cloud consulting", "cloud architecture"],
  openGraph: {
    title: "Cloud Services • Infrastructure, Migration & Management",
    description: "Comprehensive cloud services. Infrastructure setup, migration strategies, and management across AWS, Azure, and Google Cloud.",
    url: "https://ims-saigon.com/cloud-services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Services • IMS Saigon",
    description: "Comprehensive cloud services for infrastructure, migration, and management.",
  },
  alternates: {
    canonical: "https://ims-saigon.com/cloud-services",
  },
};

export default function CloudServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ServiceSchema
        name="Cloud Services"
        description="Comprehensive cloud services for modern enterprises. Cloud infrastructure setup, migration strategies, and ongoing management across AWS, Azure, and Google Cloud."
        url="https://ims-saigon.com/cloud-services"
        serviceType="Cloud Computing Services"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://ims-saigon.com" },
          { name: "Cloud Services", url: "https://ims-saigon.com/cloud-services" }
        ]}
      />
      {children}
    </>
  );
}
