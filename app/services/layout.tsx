import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Mubest PTE LTD provides comprehensive electrical services in Singapore — including electrical infrastructure, lighting systems, maintenance, power supply installations, and more.",
  openGraph: {
    title: "Our Services | Mubest PTE LTD",
    description:
      "Comprehensive electrical services in Singapore — infrastructure, lighting, maintenance, power supply, and industrial installations.",
    url: "https://www.mubest.com.sg/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
