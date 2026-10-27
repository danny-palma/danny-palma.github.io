import React from "react";

interface SectionHeaderProps {
  eyebrow: string;
  heading: string;
  headingId?: string;
  lead?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  heading,
  headingId,
  lead,
  className = "",
}) => {
  return (
    <header className={className}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 id={headingId} className="h2">
        {heading}
      </h2>
      {lead && <p className="lead">{lead}</p>}
    </header>
  );
};
