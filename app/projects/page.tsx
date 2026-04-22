
import Header from "@/components/Header";
import ProjectsSection from "@/components/ProjectsSection";
import FooterSection from "@/components/FooterSection";

export default function ProjectsPage() {
  return (
    <main className="bg-[#030712] min-h-screen">
      <Header />
      <ProjectsSection showAll />

      <FooterSection />
    </main>
  );
}
