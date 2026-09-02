import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ClientsSection from "@/components/ClientsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

export const metadata: Metadata = {
  title: "Mubest PTE LTD | Electrical Maintenance & Construction Singapore",
  description:
    "Singapore's trusted electrical maintenance and construction company delivering HDB, commercial, and industrial electrical services with safety and reliability.",
  keywords: [
    "electrical services Singapore",
    "electrical contractor Singapore",
    "electrical maintenance Singapore",
    "HDB electrical works",
    "industrial electrical contractor",
    "lighting installation Singapore",
    "M&E contractor Singapore",
    "CCTV and communication systems",
    "electrical infrastructure Singapore",
  ],
  openGraph: {
    title: "Mubest PTE LTD | Electrical Maintenance & Construction Singapore",
    description:
      "Singapore's trusted electrical maintenance and construction company delivering HDB, commercial, and industrial electrical services with safety and reliability.",
    url: "https://www.mubest.com.sg",
    type: "website",
    siteName: "Mubest PTE LTD",
    images: [
      {
        url: "/images/about-team.jpg",
        width: 1200,
        height: 630,
        alt: "Mubest PTE LTD – Electrical Maintenance & Construction Singapore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mubest PTE LTD | Electrical Maintenance & Construction Singapore",
    description:
      "Singapore's trusted electrical maintenance and construction company delivering HDB, commercial, and industrial electrical services with safety and reliability.",
    images: ["/images/about-team.jpg"],
  },
};

export default function Home() {
  return (
    <main className="bg-[#030712]">
      <Script id="local-business-schema" type="application/ld+json" strategy="afterInteractive">
        {`{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://www.mubest.com.sg",
          "name": "Mubest PTE LTD",
          "url": "https://www.mubest.com.sg",
          "image": "https://www.mubest.com.sg/images/about-team.jpg",
          "description": "Singapore's trusted electrical maintenance and construction company offering HDB, commercial, and industrial electrical services with over 20 years of experience.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Industrial Ave",
            "addressLocality": "Singapore",
            "addressCountry": "SG",
            "postalCode": "123456"
          },
          "telephone": "+65-1234-5678",
          "email": "info@mubest.com",
          "areaServed": ["SG"],
          "sameAs": [],
          "foundingDate": "2006",
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Support",
            "telephone": "+65-1234-5678",
            "email": "info@mubest.com",
            "availableLanguage": "en"
          }
        }`}
      </Script>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ClientsSection />
      {/* <TestimonialsSection /> */}
      <ContactSection />
      <FooterSection />
    </main>
  );
}
