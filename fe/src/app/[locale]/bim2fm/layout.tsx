import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BIM2FM Solutions • Building Information to Facilities Management",
  description: "Bridge the gap between design and operations with BIM2FM solutions. Transform Building Information Modeling data into actionable facilities management systems.",
  keywords: ["BIM2FM", "building information modeling", "facilities management", "digital twin", "construction technology", "facility operations", "BIM data integration", "smart buildings"],
  openGraph: {
    title: "BIM2FM Solutions • Building Information to Facilities Management",
    description: "Bridge design and operations with BIM2FM. Transform BIM data into facilities management systems.",
    url: "https://ims-saigon.com/bim2fm",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BIM2FM Solutions • IMS",
    description: "Transform Building Information Modeling into facilities management systems.",
  },
  alternates: {
    canonical: "https://ims-saigon.com/bim2fm",
  },
};

export default function BIM2FMLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
