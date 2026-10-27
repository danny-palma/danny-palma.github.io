import React from "react";
import { ProjectItem } from "../../types/portfolio";
import { Chip } from "../common/Chip";

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelect,
}) => {
  return (
    <li className={project.className}>
      <a
        className="card tile plink"
        href={`#${project.id}`}
        onClick={(e) => {
          e.preventDefault();
          onSelect(project);
        }}
      >
        <span className="bnum">{project.num}</span>
        <span>
          <Chip label={project.category} />
          <h3 className="h3">{project.title}</h3>
          <span className="p" style={{ display: "block" }}>
            {project.description}
          </span>
        </span>
        <span className="go">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M7 17L17 7M8 7h9v9"></path>
          </svg>
          <span className="sr">Ver caso</span>
        </span>
      </a>
    </li>
  );
};
