import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Mubest PTE LTD team in Singapore. We are looking for skilled electricians, engineers, and operations staff to help power Singapore's infrastructure.",
  openGraph: {
    title: "Careers | Mubest PTE LTD",
    description:
      "Join Mubest PTE LTD — Singapore's leading electrical maintenance and construction company. View current job openings.",
    url: "https://www.mubest.com.sg/careers",
  },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
