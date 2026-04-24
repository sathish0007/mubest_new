import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certifications & Awards",
  description:
    "View the certifications, accreditations, and awards held by Mubest PTE LTD — reflecting our commitment to quality, safety, and excellence in electrical services across Singapore.",
  openGraph: {
    title: "Certifications & Awards | Mubest PTE LTD",
    description:
      "Mubest PTE LTD holds industry certifications and awards that reflect our commitment to quality electrical services in Singapore.",
    url: "https://www.mubest.com.sg/certifications",
  },
};

export default function CertificationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
