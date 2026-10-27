import React from "react";
import { Chip } from "../common/Chip";

interface StackCardProps {
  dailyStack: string[];
}

export const StackCard: React.FC<StackCardProps> = ({ dailyStack }) => {
  return (
    <article className="card tile t-stack">
      <span className="mono lab">Stack diario</span>
      <div className="chips">
        {dailyStack.map((tech) => (
          <Chip key={tech} label={tech} />
        ))}
      </div>
    </article>
  );
};
