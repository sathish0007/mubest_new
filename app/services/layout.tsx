import type { Metadata } from "next";

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
  return <>{children}</>;
}
