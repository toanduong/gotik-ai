import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Solutions & Ecosystem • End-to-End AI Implementation",
  description: "Comprehensive AI solutions for modern enterprises. From AI ecosystem design to implementation, we deliver scalable artificial intelligence systems tailored to your business needs.",
  keywords: ["AI solutions", "AI ecosystem", "enterprise AI platform", "AI implementation", "artificial intelligence systems", "AI architecture", "scalable AI", "AI integration"],
  openGraph: {
    title: "AI Solutions & Ecosystem • End-to-End AI Implementation",
    description: "Comprehensive AI solutions for modern enterprises. From AI ecosystem design to implementation, we deliver scalable AI systems.",
    url: "https://gotik.ai/ai-solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Solutions & Ecosystem • Gotik Consulting",
    description: "Comprehensive AI solutions for modern enterprises. Scalable AI systems and ecosystem design.",
  },
  alternates: {
    canonical: "https://gotik.ai/ai-solutions",
  },
};

export default function AISolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
