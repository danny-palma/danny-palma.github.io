import React from "react";

interface SkipLinkProps {
  targetId?: string;
  label?: string;
}

export const SkipLink: React.FC<SkipLinkProps> = ({
  targetId = "#proyectos",
  label = "Saltar al contenido",
}) => {
  return (
    <a className="skip" href={targetId}>
      {label}
    </a>
  );
};
