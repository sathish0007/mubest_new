import Header from "@/components/Header";
import ProjectsSection from "@/components/ProjectsSection";

export default function ProjectsPage() {
  return (
    <main className="bg-background bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 min-h-screen">
      <Header />

      <section className="relative overflow-hidden py-28 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-mono text-xs text-primary tracking-[0.2em] uppercase mb-4">Portfolio</p>
          <h1 className="font-display text-[56px] md:text-[72px] text-heading tracking-wider mb-6">All Projects</h1>
          <p className="max-w-3xl mx-auto text-body text-lg leading-relaxed">
            Browse our complete project portfolio with every completed contract, maintenance package, and electrical upgrade.
            Click any card to view full details and images.
          </p>
        </div>
      </section>

      <ProjectsSection showAll />

      <section className="py-16 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-body text-body text-sm max-w-3xl mx-auto">
            This page lists all projects in our portfolio for easy browsing. Select a project card to view additional details and image previews.
          </p>
        </div>
      </section>

      <footer className="border-t border-primary/10 py-8 bg-background">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-2xl tracking-widest text-primary">VOLTEX</div>
          <p className="font-body text-xs text-body">
            © {new Date().getFullYear()} Voltex Engineering Pte Ltd. All rights reserved. | UEN: 200901234A
          </p>
          <div className="flex items-center gap-4 text-body">
            <span className="font-mono text-xs">EMA Licensed</span>
            <span className="w-1 h-1 rounded-full bg-primary" />
            <span className="font-mono text-xs">BCA Registered</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
