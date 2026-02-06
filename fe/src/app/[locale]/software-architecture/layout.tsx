import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Architecture Design • Enterprise System Architecture",
  description: "Expert software architecture design services. From microservices to event-driven architectures, we design scalable, resilient systems that support your business growth.",
  keywords: ["software architecture", "system architecture design", "microservices architecture", "enterprise architecture", "solution architecture", "cloud architecture", "distributed systems", "scalable architecture"],
  openGraph: {
    title: "Software Architecture Design • Enterprise System Architecture",
    description: "Expert software architecture design. Microservices, event-driven architectures, and scalable system design.",
    url: "https://ims-saigon.com/software-architecture",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Architecture Design • IMS Saigon",
    description: "Expert software architecture design for scalable, resilient enterprise systems.",
  },
  alternates: {
    canonical: "https://ims-saigon.com/software-architecture",
  },
};

export default function SoftwareArchitectureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
