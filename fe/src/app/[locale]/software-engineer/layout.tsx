import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Engineering Services • Custom Development & Architecture",
  description: "Expert software engineering services for enterprise solutions. Custom software development, system architecture, and engineering best practices to build scalable, maintainable applications.",
  keywords: ["software engineering", "custom software development", "software architecture", "application development", "enterprise software", "software design", "engineering services", "full-stack development"],
  openGraph: {
    title: "Software Engineering Services • Custom Development & Architecture",
    description: "Expert software engineering services. Custom development, system architecture, and engineering best practices for enterprise solutions.",
    url: "https://ims-saigon.com/software-engineer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Engineering Services • IMS",
    description: "Expert software engineering services. Custom development and system architecture for enterprise solutions.",
  },
  alternates: {
    canonical: "https://ims-saigon.com/software-engineer",
  },
};

export default function SoftwareEngineerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
