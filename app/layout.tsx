import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mubest PTE LTD | Electrical Maintenance & Construction",
  description: "Professional electrical maintenance and construction services. Powering infrastructure with precision and reliability.",
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
