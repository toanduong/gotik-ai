import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gen AI Data Solutions • RAG & AI-Powered Data Systems",
  description: "Next-generation AI data solutions. Retrieval-Augmented Generation (RAG), vector databases, and AI-powered data systems for intelligent applications.",
  keywords: ["Gen AI data solutions", "RAG", "retrieval augmented generation", "vector databases", "AI data systems", "LLM data integration", "embeddings", "semantic search"],
  openGraph: {
    title: "Gen AI Data Solutions • RAG & AI-Powered Data Systems",
    description: "Next-generation AI data solutions. RAG, vector databases, and AI-powered data systems.",
    url: "https://ims-saigon.com/data-solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gen AI Data Solutions • IMS",
    description: "Next-generation AI data solutions with RAG and vector databases.",
  },
  alternates: {
    canonical: "https://ims-saigon.com/data-solutions",
  },
};

export default function DataSolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
