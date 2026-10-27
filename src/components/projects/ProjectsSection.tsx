import React, { useState, Suspense, lazy } from "react";
import { ProjectItem } from "../../types/portfolio";
import { SectionHeader } from "../common/SectionHeader";
import { ProjectCard } from "./ProjectCard";

const ProjectModal = lazy(() => import("./ProjectModal"));

interface ProjectsSectionProps {
  projects: ProjectItem[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
}) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );

  return (
    <section id="proyectos" className="sec" aria-labelledby="t-proy">
      <SectionHeader
        eyebrow="Proyectos"
        heading="Lo que he construido."
        headingId="t-proy"
      />

      <ul className="pbento" style={{ marginTop: "var(--s12)" }}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={(proj) => setSelectedProject(proj)}
          />
        ))}
      </ul>

      {selectedProject && (
        <Suspense fallback={null}>
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        </Suspense>
      )}
    </section>
  );
};
