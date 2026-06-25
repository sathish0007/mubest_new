import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certifications & Awards | Mubest PTE LTD",
  description:
    "View the certifications, accreditations, and awards held by Mubest PTE LTD — reflecting our commitment to quality, safety, and excellence in electrical services across Singapore.",
  openGraph: {
    title: "Certifications & Awards | Mubest PTE LTD",
    description:
      "Mubest PTE LTD holds industry certifications and awards that reflect our commitment to quality electrical services in Singapore.",
    url: "https://www.mubest.com.sg/certifications",
    type: "website",
    siteName: "Mubest PTE LTD",
    images: [
      {
        url: "/images/about-team.jpg",
        width: 1200,
        height: 630,
        alt: "Mubest Certifications & Awards",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Certifications & Awards | Mubest PTE LTD",
    description:
      "Mubest PTE LTD holds industry certifications and awards that reflect our commitment to quality electrical services in Singapore.",
    images: ["/images/about-team.jpg"],
  },
};

export default function CertificationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
