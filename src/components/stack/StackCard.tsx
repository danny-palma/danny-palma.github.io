import React from "react";
import { StackCategory } from "../../types/portfolio";
import { Chip } from "../common/Chip";

interface StackCardProps {
  category: StackCategory;
}

export const StackCard: React.FC<StackCardProps> = ({ category }) => {
  return (
    <div className={`card tile ${category.className}`}>
      <span className="mono lab">{category.label}</span>
      {category.heading && <div className="big2">{category.heading}</div>}
      <div className="chips">
        {category.chips.map((chip) => (
          <Chip key={chip} label={chip} variant="surface" />
        ))}
      </div>
    </div>
  );
};
