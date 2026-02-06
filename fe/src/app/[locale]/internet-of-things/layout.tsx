import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IoT Solutions • Internet of Things Development & Integration",
  description: "End-to-end IoT solutions for connected devices and smart systems. From sensor integration to data analytics, build scalable Internet of Things applications.",
  keywords: ["IoT solutions", "internet of things", "IoT development", "connected devices", "sensor integration", "IoT platform", "smart devices", "industrial IoT", "IoT analytics"],
  openGraph: {
    title: "IoT Solutions • Internet of Things Development & Integration",
    description: "End-to-end IoT solutions for connected devices. Sensor integration to analytics for scalable IoT applications.",
    url: "https://ims-saigon.com/internet-of-things",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IoT Solutions • IMS Saigon",
    description: "End-to-end Internet of Things solutions for connected devices and smart systems.",
  },
  alternates: {
    canonical: "https://ims-saigon.com/internet-of-things",
  },
};

export default function InternetOfThingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
