import type { Metadata } from "next";
import Header from "@/components/Header";
import ProjectsSection from "@/components/ProjectsSection";
import FooterSection from "@/components/FooterSection";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Browse over 50 completed electrical projects by Mubest PTE LTD across Singapore — including HDB town councils, commercial buildings, and industrial facilities.",
  openGraph: {
    title: "Our Projects | Mubest PTE LTD",
    description:
      "Browse over 50 completed electrical projects by Mubest PTE LTD across Singapore.",
    url: "https://www.mubest.com.sg/projects",
  },
};

export default function ProjectsPage() {
  return (
    <main className="bg-[#030712] min-h-screen">
      <Header />
      <ProjectsSection showAll />

      <FooterSection />
    </main>
  );
}
