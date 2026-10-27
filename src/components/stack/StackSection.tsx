import React from "react";
import { StackCategory } from "../../types/portfolio";
import { SectionHeader } from "../common/SectionHeader";
import { StackCard } from "./StackCard";

interface StackSectionProps {
  stack: StackCategory[];
}

export const StackSection: React.FC<StackSectionProps> = ({ stack }) => {
  return (
    <section id="stack" className="sec" aria-labelledby="t-stack">
      <SectionHeader
        eyebrow="Stack"
        heading="Con qué trabajo."
        headingId="t-stack"
      />

      <div className="sbento" style={{ marginTop: "var(--s12)" }}>
        {stack.map((category) => (
          <StackCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};
