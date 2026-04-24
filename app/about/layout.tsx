import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Mubest PTE LTD — Singapore's trusted electrical infrastructure and maintenance company with over 20 years of experience serving HDB, commercial, and industrial clients.",
  openGraph: {
    title: "About Us | Mubest PTE LTD",
    description:
      "Mubest Pte Ltd is Singapore's trusted partner for electrical infrastructure, lighting, and maintenance solutions with over 20 years of experience.",
    url: "https://www.mubest.com.sg/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
