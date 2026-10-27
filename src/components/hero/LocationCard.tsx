import React from "react";
import { PortfolioData } from "../../types/portfolio";

interface LocationCardProps {
  locationInfo: PortfolioData["profile"]["locationInfo"];
}

export const LocationCard: React.FC<LocationCardProps> = ({ locationInfo }) => {
  return (
    <article className="card tile t-loc">
      <span className="mono lab">Base</span>
      <div>
        <div className="big2">{locationInfo.city}</div>
        <div
          className="mono"
          style={{ color: "var(--muted)", fontSize: "12px" }}
        >
          {locationInfo.coordinates}
        </div>
      </div>
      <svg
        className="rings"
        width="96"
        height="96"
        viewBox="0 0 96 96"
        fill="none"
        stroke="currentColor"
        aria-hidden="true"
      >
        <circle cx="48" cy="48" r="6" fill="currentColor"></circle>
        <circle cx="48" cy="48" r="20" opacity=".5"></circle>
        <circle cx="48" cy="48" r="34" opacity=".25"></circle>
      </svg>
    </article>
  );
};
