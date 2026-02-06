import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Azure Cloud Solutions • Enterprise Cloud Architecture",
  description: "Specialized Azure cloud solutions for enterprises. From cloud-native application development to hybrid cloud strategies, leverage Microsoft Azure for digital transformation.",
  keywords: ["Azure solutions", "Azure cloud services", "Microsoft Azure", "Azure architecture", "cloud-native development", "Azure migration", "hybrid cloud", "Azure consulting"],
  openGraph: {
    title: "Azure Cloud Solutions • Enterprise Cloud Architecture",
    description: "Specialized Azure cloud solutions. Cloud-native development and hybrid cloud strategies on Microsoft Azure.",
    url: "https://ims-saigon.com/cloud-solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Azure Cloud Solutions • IMS Saigon",
    description: "Specialized Azure cloud solutions for enterprise digital transformation.",
  },
  alternates: {
    canonical: "https://ims-saigon.com/cloud-solutions",
  },
};

export default function CloudSolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
