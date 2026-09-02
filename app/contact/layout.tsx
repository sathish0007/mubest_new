import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Contact Us | Mubest PTE LTD",
  description:
    "Get in touch with Mubest PTE LTD for electrical maintenance and construction enquiries in Singapore. Call us or send an email to info@mubest.com.sg.",
  openGraph: {
    title: "Contact Us | Mubest PTE LTD",
    description:
      "Contact Mubest PTE LTD for electrical maintenance and construction services in Singapore.",
    url: "https://www.mubest.com.sg/contact",
    type: "website",
    siteName: "Mubest PTE LTD",
    images: [
      {
        url: "/images/about-team.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Mubest PTE LTD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Mubest PTE LTD",
    description:
      "Contact Mubest PTE LTD for electrical maintenance and construction services in Singapore.",
    images: ["/images/about-team.jpg"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="contact-schema" type="application/ld+json" strategy="afterInteractive">
        {`{
          "@context": "https://schema.org",
          "@type": "ContactPoint",
          "contactType": "Customer Service",
          "contactName": "Mubest PTE LTD",
          "telephone": "+65-1234-5678",
          "email": "info@mubest.com",
          "url": "https://www.mubest.com.sg/contact",
          "areaServed": "SG",
          "availableLanguage": "en"
        }`}
      </Script>
      <Script id="organization-schema" type="application/ld+json" strategy="afterInteractive">
        {`{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Mubest PTE LTD",
          "url": "https://www.mubest.com.sg",
          "logo": "https://www.mubest.com.sg/favicon.png",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Industrial Ave",
            "addressLocality": "Singapore",
            "addressCountry": "SG",
            "postalCode": "123456"
          },
          "foundingDate": "2006",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+65-1234-5678",
            "contactType": "Customer Support"
          }
        }`}
      </Script>
      {children}
    </>
  );
}
