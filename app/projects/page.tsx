import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import ProjectsSection from "@/components/ProjectsSection";
import FooterSection from "@/components/FooterSection";

export const metadata: Metadata = {
  title: "Our Projects | Mubest PTE LTD",
  description:
    "Browse over 50 completed electrical projects by Mubest PTE LTD across Singapore — including HDB town councils, commercial buildings, and industrial facilities.",
  openGraph: {
    title: "Our Projects | Mubest PTE LTD",
    description:
      "Browse over 50 completed electrical projects by Mubest PTE LTD across Singapore.",
    url: "https://www.mubest.com.sg/projects",
    type: "website",
    siteName: "Mubest PTE LTD",
    images: [
      {
        url: "/images/about-team.jpg",
        width: 1200,
        height: 630,
        alt: "Mubest PTE LTD Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Projects | Mubest PTE LTD",
    description:
      "Browse over 50 completed electrical projects by Mubest PTE LTD across Singapore.",
    images: ["/images/about-team.jpg"],
  },
};

export default function ProjectsPage() {
  return (
    <main className="bg-[#030712] min-h-screen">
      <Script id="projects-schema" type="application/ld+json" strategy="afterInteractive">
        {`{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mubest.com.sg"},
            {"@type": "ListItem", "position": 2, "name": "Projects", "item": "https://www.mubest.com.sg/projects"}
          ]
        }`}
      </Script>
      <Script id="portfolio-schema" type="application/ld+json" strategy="afterInteractive">
        {`{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Mubest PTE LTD Project Portfolio",
          "description": "Browse over 50 completed electrical projects by Mubest PTE LTD across Singapore - HDB, commercial, and industrial facilities.",
          "url": "https://www.mubest.com.sg/projects",
          "publisher": {
            "@type": "Organization",
            "name": "Mubest PTE LTD",
            "url": "https://www.mubest.com.sg"
          }
        }`}
      </Script>
      <Header />
      <ProjectsSection showAll />

      <FooterSection />
    </main>
  );
}
