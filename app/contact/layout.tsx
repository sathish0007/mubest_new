import type { Metadata } from "next";

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
  return <>{children}</>;
}
