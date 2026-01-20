import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ERP System Solutions • Enterprise Resource Planning Implementation",
  description: "Enterprise Resource Planning (ERP) implementation and integration services. Streamline business processes, improve efficiency, and gain real-time visibility across your organization.",
  keywords: ["ERP systems", "enterprise resource planning", "ERP implementation", "ERP integration", "business process automation", "SAP", "Oracle ERP", "Microsoft Dynamics", "ERP consulting"],
  openGraph: {
    title: "ERP System Solutions • Enterprise Resource Planning Implementation",
    description: "ERP implementation and integration services. Streamline processes and gain real-time business visibility.",
    url: "https://gotik.ai/erp-system",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP System Solutions • Gotik Consulting",
    description: "Enterprise Resource Planning implementation and integration services.",
  },
  alternates: {
    canonical: "https://gotik.ai/erp-system",
  },
};

export default function ERPSystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
