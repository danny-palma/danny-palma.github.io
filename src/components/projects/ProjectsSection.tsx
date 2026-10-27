import React, { useState } from "react";
import { ProjectItem } from "../../types/portfolio";
import { SectionHeader } from "../common/SectionHeader";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

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

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
