import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Our Services | Mubest PTE LTD",
  description:
    "Mubest PTE LTD provides comprehensive electrical services in Singapore, including infrastructure, lighting systems, maintenance, power supply installations, and more.",
  openGraph: {
    title: "Our Services | Mubest PTE LTD",
    description:
      "Comprehensive electrical services in Singapore — infrastructure, lighting, maintenance, power supply, and industrial installations.",
    url: "https://www.mubest.com.sg/services",
    type: "website",
    siteName: "Mubest PTE LTD",
    images: [
      {
        url: "/images/about-team.jpg",
        width: 1200,
        height: 630,
        alt: "Mubest PTE LTD Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Mubest PTE LTD",
    description:
      "Comprehensive electrical services in Singapore — infrastructure, lighting, maintenance, power supply, and industrial installations.",
    images: ["/images/about-team.jpg"],
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="services-schema" type="application/ld+json" strategy="afterInteractive">
        {`{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mubest.com.sg"},
            {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.mubest.com.sg/services"}
          ]
        }`}
      </Script>
      <Script id="services-list-schema" type="application/ld+json" strategy="afterInteractive">
        {`{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Mubest PTE LTD Electrical Services",
          "description": "Comprehensive electrical services including infrastructure, lighting, maintenance, and installations.",
          "hasOfferingDescription": [
            {"@type": "Service", "name": "Electrical Infrastructure", "description": "Complete electrification systems for residential, commercial and industrial projects"},
            {"@type": "Service", "name": "Lighting & Energy Efficiency", "description": "Energy-efficient lighting solutions for public spaces, buildings and infrastructure"},
            {"@type": "Service", "name": "Mechanical and Electrical (M&E)", "description": "Ongoing M&E contracts and emergency electrical services"},
            {"@type": "Service", "name": "Building & External Infrastructure Works", "description": "General building works, external infrastructure construction"}
          ],
          "provider": {
            "@type": "LocalBusiness",
            "name": "Mubest PTE LTD",
            "url": "https://www.mubest.com.sg"
          }
        }`}
      </Script>
      {children}
    </>
  );
}
