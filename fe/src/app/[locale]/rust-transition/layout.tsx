import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rust Transition Services • Migrate to Rust Programming",
  description: "Transition your systems to Rust for improved performance, memory safety, and reliability. Expert guidance for adopting Rust in enterprise environments.",
  keywords: ["Rust programming", "Rust migration", "Rust adoption", "systems programming", "memory safety", "Rust consulting", "language migration", "performance optimization"],
  openGraph: {
    title: "Rust Transition Services • Migrate to Rust Programming",
    description: "Transition to Rust for improved performance and memory safety. Expert guidance for enterprise Rust adoption.",
    url: "https://ims-saigon.com/rust-transition",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rust Transition Services • IMS Saigon",
    description: "Transition to Rust for improved performance and memory safety in enterprise systems.",
  },
  alternates: {
    canonical: "https://ims-saigon.com/rust-transition",
  },
};

export default function RustTransitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
