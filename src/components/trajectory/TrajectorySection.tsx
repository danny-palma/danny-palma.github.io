import React from "react";
import { TrajectoryEntry } from "../../types/portfolio";
import { SectionHeader } from "../common/SectionHeader";

interface TrajectorySectionProps {
  trajectory: TrajectoryEntry[];
}

export const TrajectorySection: React.FC<TrajectorySectionProps> = ({
  trajectory,
}) => {
  return (
    <section id="trayectoria" className="sec" aria-labelledby="t-tray">
      <SectionHeader
        eyebrow="Trayectoria"
        heading="Dónde he estado."
        headingId="t-tray"
      />

      <ol
        className="card tlistcard tlist"
        style={{
          marginTop: "var(--s12)",
          display: "grid",
          gap: "var(--s8)",
        }}
      >
        {trajectory.map((item, index) => (
          <li key={index} className="tl">
            <span className="dot" aria-hidden="true"></span>
            <div>
              <p className="tlt">{item.title}</p>
              <p className="p">{item.subtitle}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};
