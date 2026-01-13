import Script from 'next/script';

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
    "name": "Gotik Consulting",
    "alternateName": "Gotik AI",
    "url": "https://gotik.ai",
    "logo": "https://gotik.ai/logo_footer.png",
    "description": "Expert software consulting, cloud migration, AI solutions, and digital transformation services. Transform your business with scalable, modern technology solutions.",
    "email": "contact@gotik.ai",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.linkedin.com/company/gotik-consulting",
      "https://twitter.com/gotikAI",
      "https://github.com/gotik-consulting"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "contact@gotik.ai",
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
      "Digital Transformation"
    ]
  };

  return <JsonLd data={schema} />;
}

// Website Schema
export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Gotik Consulting",
    "url": "https://gotik.ai",
    "description": "Expert guidance for your digital transformation journey. From cloud migration to custom development, we turn your vision into reality.",
    "publisher": {
      "@type": "Organization",
      "name": "Gotik Consulting"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://gotik.ai/?s={search_term_string}",
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
    name: "Gotik Consulting",
    url: "https://gotik.ai"
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
