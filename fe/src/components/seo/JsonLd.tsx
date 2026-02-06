import Script from 'next/script';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

interface JsonLdProps {
  data: Record<string, any>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <Script
      id={`json-ld-${data['@type']}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Organization Schema
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "IMS Saigon",
    "alternateName": "IMS Saigon",
    "url": SITE_URL,
    "description": "Expert software consulting, cloud migration, AI solutions, and digital transformation services. Transform your business with scalable, modern technology solutions.",
    "email": "support@ims-saigon.com",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.linkedin.com/company/ims-saigon",
      "https://twitter.com/imssaigon",
      "https://github.com/ims-saigon"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "support@ims-saigon.com",
      "availableLanguage": ["English"]
    },
    "areaServed": {
      "@type": "Country",
      "name": "Worldwide"
    },
    "serviceType": [
      "Software Consulting",
      "AI Consulting",
      "Cloud Services",
      "Data Solutions",
      "Software Engineering",
      "Digital Transformation",
      "Odoo Integration",
      "Salesforce Integration",
      "Software Modernization",
      "Software Architecture",
      "Mobile & Web Apps",
      "Internet of Things",
      "Data Management",
      "Data Architecture",
      "Data & Analytics",
      "BIM2FM",
    ]
  };

  return <JsonLd data={schema} />;
}

// Website Schema
export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "IMS Saigon",
    "url": SITE_URL,
    "description": "Expert guidance for your digital transformation journey. From cloud migration to custom development, we turn your vision into reality.",
    "publisher": {
      "@type": "Organization",
      "name": "IMS Saigon"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${SITE_URL}/?s={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return <JsonLd data={schema} />;
}

// Service Schema Generator
interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  areaServed?: string;
  provider?: {
    name: string;
    url: string;
  };
}

export function ServiceSchema({
  name,
  description,
  url,
  serviceType,
  areaServed = "Worldwide",
  provider = {
    name: "IMS Saigon",
    url: SITE_URL
  }
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "url": url,
    "serviceType": serviceType,
    "provider": {
      "@type": "Organization",
      "name": provider.name,
      "url": provider.url
    },
    "areaServed": {
      "@type": "Place",
      "name": areaServed
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": name,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": name
          }
        }
      ]
    }
  };

  return <JsonLd data={schema} />;
}

// Breadcrumb Schema Generator
interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return <JsonLd data={schema} />;
}

// FAQ Schema Generator
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return <JsonLd data={schema} />;
}
