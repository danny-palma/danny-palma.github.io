import React, { useEffect, useRef } from "react";
import { ProjectItem } from "../../types/portfolio";
import { Chip } from "../common/Chip";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;

    const modalEl = modalRef.current;
    const focusableElements = modalEl?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements?.[0];
    const lastElement = focusableElements?.[focusableElements.length - 1];

    // Focus first element on open
    firstElement?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement?.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement?.focus();
            e.preventDefault();
          }
        }
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        backgroundColor: "rgba(10, 16, 13, 0.8)",
        backdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "var(--s4)",
      }}
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="card forest"
        style={{
          maxWidth: "680px",
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          position: "relative",
          borderRadius: "var(--r-xl)",
          padding: "var(--s8)",
          boxShadow: "0 24px 48px rgba(0, 0, 0, 0.5)",
          border: "1px solid var(--border-2)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "var(--s4)",
          }}
        >
          <div>
            <span className="bnum" style={{ fontSize: "16px" }}>
              {project.num}
            </span>
            <Chip
              label={project.category}
              style={{ marginLeft: "var(--s3)" } as React.CSSProperties}
            />
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar modal"
            style={{
              background: "var(--surface-2)",
              border: "1px solid var(--border-2)",
              color: "var(--strong)",
              borderRadius: "var(--r-md)",
              width: "36px",
              height: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
        </div>

        <h3
          id="modal-project-title"
          className="h3"
          style={{ fontSize: "28px", marginTop: "var(--s2)" }}
        >
          {project.title}
        </h3>

        <p
          className="p"
          style={{
            fontSize: "17px",
            lineHeight: 1.6,
            marginTop: "var(--s4)",
            color: "var(--strong)",
          }}
        >
          {project.longDescription || project.description}
        </p>

        {project.tags && project.tags.length > 0 && (
          <div style={{ marginTop: "var(--s6)" }}>
            <span
              className="mono lab"
              style={{ display: "block", marginBottom: "var(--s2)" }}
            >
              Tecnologías y enfoque
            </span>
            <div className="chips">
              {project.tags.map((t) => (
                <Chip key={t} label={t} variant="surface" />
              ))}
            </div>
          </div>
        )}

        <div
          style={{
            display: "flex",
            gap: "var(--s4)",
            marginTop: "var(--s8)",
            flexWrap: "wrap",
          }}
        >
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn pri"
            >
              Ver en GitHub ↗
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn sec2"
            >
              Demo en Vivo ↗
            </a>
          )}
          <button type="button" onClick={onClose} className="btn sec2">
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
