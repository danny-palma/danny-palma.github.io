import React from "react";

interface PipelineCardProps {
  pipeline: string[];
}

export const PipelineCard: React.FC<PipelineCardProps> = ({ pipeline }) => {
  return (
    <article className="card tile t-pipe">
      <span className="mono lab">{"// sistemas que se conectan solos"}</span>
      <ol className="pipe" aria-label="Flujo de ejemplo">
        {pipeline.map((step, index) => {
          const isHighlight = step.includes("Agente IA");
          return (
            <React.Fragment key={step}>
              <li className={`node ${isHighlight ? "hl" : ""}`.trim()}>
                {step}
              </li>
              {index < pipeline.length - 1 && (
                <li className="arr" aria-hidden="true">
                  →
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ol>
    </article>
  );
};
