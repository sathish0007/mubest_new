
import Header from "@/components/Header";
import ProjectsSection from "@/components/ProjectsSection";
import FooterSection from "@/components/FooterSection";

export default function ProjectsPage() {
  return (
    <main className="bg-[#030712] min-h-screen">
      <Header />

      <section className="relative overflow-hidden py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-mono text-xs text-[#FFC107] tracking-[0.2em] uppercase mb-4">Portfolio</p>
          <h1 className="font-display text-[56px] md:text-[72px] text-white tracking-wider mb-6">All Projects</h1>
          <p className="max-w-3xl mx-auto text-slate-400 text-lg leading-relaxed">
            Browse our complete project portfolio with every completed contract, maintenance package, and electrical upgrade.
            Click any card to view full details and images.
          </p>
        </div>
      </section>

      <ProjectsSection showAll />

      <FooterSection />
    </main>
  );
}
