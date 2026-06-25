import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Mubest PTE LTD",
  description:
    "Learn about Mubest PTE LTD — Singapore's trusted electrical infrastructure and maintenance company with over 20 years of experience serving HDB, commercial, and industrial clients.",
  openGraph: {
    title: "About Us | Mubest PTE LTD",
    description:
      "Mubest PTE LTD is Singapore's trusted partner for electrical infrastructure, lighting, and maintenance solutions with over 20 years of experience.",
    url: "https://www.mubest.com.sg/about",
    type: "website",
    siteName: "Mubest PTE LTD",
    images: [
      {
        url: "/images/about-team.jpg",
        width: 1200,
        height: 630,
        alt: "About Mubest PTE LTD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Mubest PTE LTD",
    description:
      "Mubest PTE LTD is Singapore's trusted partner for electrical infrastructure, lighting, and maintenance solutions with over 20 years of experience.",
    images: ["/images/about-team.jpg"],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
