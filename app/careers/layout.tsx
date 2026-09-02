import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Careers | Mubest PTE LTD",
  description:
    "Join the Mubest PTE LTD team in Singapore. We are looking for skilled electricians, engineers, and operations staff to help power Singapore's infrastructure.",
  openGraph: {
    title: "Careers | Mubest PTE LTD",
    description:
      "Join Mubest PTE LTD — Singapore's leading electrical maintenance and construction company. View current job openings.",
    url: "https://www.mubest.com.sg/careers",
    type: "website",
    siteName: "Mubest PTE LTD",
    images: [
      {
        url: "/images/about-team.jpg",
        width: 1200,
        height: 630,
        alt: "Mubest PTE LTD Careers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | Mubest PTE LTD",
    description:
      "Join Mubest PTE LTD — Singapore's leading electrical maintenance and construction company. View current job openings.",
    images: ["/images/about-team.jpg"],
  },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="careers-schema" type="application/ld+json" strategy="afterInteractive">
        {`{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mubest.com.sg"},
            {"@type": "ListItem", "position": 2, "name": "Careers", "item": "https://www.mubest.com.sg/careers"}
          ]
        }`}
      </Script>
      <Script id="organization-careers-schema" type="application/ld+json" strategy="afterInteractive">
        {`{
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://www.mubest.com.sg",
          "name": "Mubest PTE LTD",
          "url": "https://www.mubest.com.sg",
          "logo": "https://www.mubest.com.sg/favicon.png",
          "description": "Singapore's leading electrical maintenance and construction company hiring skilled electricians, engineers, and operations staff.",
          "hiringOrganization": {
            "@type": "Organization",
            "name": "Mubest PTE LTD",
            "sameAs": "https://www.mubest.com.sg"
          }
        }`}
      </Script>
      {children}
    </>
  );
}
