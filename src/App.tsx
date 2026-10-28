import React from "react";
import { portfolioData } from "./data/portfolio";
import { SkipLink } from "./components/navigation/SkipLink";
import { RailNav } from "./components/navigation/RailNav";
import { HeroSection } from "./components/hero/HeroSection";
import { ProjectsSection } from "./components/projects/ProjectsSection";
import { ServicesSection } from "./components/services/ServicesSection";
import { StackSection } from "./components/stack/StackSection";
import { TrajectorySection } from "./components/trajectory/TrajectorySection";
import { ContactSection } from "./components/contact/ContactSection";

const App: React.FC = () => {
  return (
    <div style={{ position: "relative", width: "100%", minHeight: "100vh", background: "var(--bg)" }}>
      <SkipLink targetId="#main" />
      <RailNav items={portfolioData.navigation} />

      <main id="main" tabIndex={-1} style={{ outline: "none" }}>
        <HeroSection profile={portfolioData.profile} />
        <div className="themewrap">
        <ProjectsSection projects={portfolioData.projects} />
        <ServicesSection
          services={portfolioData.services}
          convictions={portfolioData.convictions}
        />
        <StackSection stack={portfolioData.stack} />
        <TrajectorySection trajectory={portfolioData.trajectory} />
        <ContactSection contact={portfolioData.contact} />
        </div>
      </main>
    </div>
  );
};

export default App;
