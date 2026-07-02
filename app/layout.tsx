import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mubest.com.sg"),
  title: {
    default: "Mubest PTE LTD | Electrical Maintenance & Construction Singapore",
    template: "%s | Mubest PTE LTD",
  },
  description:
    "Mubest PTE LTD is Singapore's trusted electrical maintenance and construction company. Serving HDB town councils, commercial and industrial clients for over 20 years.",
  keywords: [
    "electrical maintenance Singapore",
    "electrical contractor Singapore",
    "electrical construction Singapore",
    "HDB electrical works",
    "commercial electrical services",
    "industrial electrical contractor",
    "Mubest PTE LTD",
    "electrical infrastructure Singapore",
    "lighting installation Singapore",
    "BCA licensed electrician Singapore",
  ],
  authors: [{ name: "Mubest PTE LTD", url: "https://www.mubest.com.sg" }],
  creator: "Mubest PTE LTD",
  publisher: "Mubest PTE LTD",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: "https://www.mubest.com.sg",
    siteName: "Mubest PTE LTD",
    title: "Mubest PTE LTD | Electrical Maintenance & Construction Singapore",
    description:
      "Mubest PTE LTD is Singapore's trusted electrical maintenance and construction company with over 20 years of experience.",
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
      "Singapore's trusted electrical maintenance and construction company serving HDB, commercial & industrial clients.",
    images: ["/images/about-team.jpg"],
  },
  verification: {
    google: "7Lj5wnvUJMcAXlXNCemotFNCGgeaukNniOoCPMrRYjo",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="noise">{children}</body>
    </html>
  );
}
