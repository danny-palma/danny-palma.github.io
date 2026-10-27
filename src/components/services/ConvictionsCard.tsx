import React from "react";
import { ConvictionItem } from "../../types/portfolio";

interface ConvictionsCardProps {
  convictions: ConvictionItem[];
}

export const ConvictionsCard: React.FC<ConvictionsCardProps> = ({
  convictions,
}) => {
  return (
    <article className="card tile w4">
      <span className="mono lab">Cómo trabajo</span>
      <ol className="conv">
        {convictions.map((c) => (
          <li key={c.num}>
            <span className="bnum">{c.num}</span>
            <h3 className="h3" style={{ fontSize: "20px" }}>
              {c.title}
            </h3>
            <p className="p">{c.description}</p>
          </li>
        ))}
      </ol>
    </article>
  );
};
