import React from "react";

interface SectionHeaderProps {
  eyebrow: string;
  heading: string;
  headingId?: string;
  lead?: string;
  className?: string;
}

const STAR_PATH =
  "M12 0C12 6.6 17.4 12 24 12C17.4 12 12 17.4 12 24C12 17.4 6.6 12 0 12C6.6 12 12 6.6 12 0Z";

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  heading,
  headingId,
  lead,
  className = "",
}) => {
  const words = heading.split(" ");
  const strong = words.pop() ?? "";
  const light = words.join(" ");

  return (
    <header className={`shead ${className}`.trim()}>
      <span className="eyebrow">{eyebrow}</span>
      <span className="ctag ctag-dark" aria-hidden="true">
        &lt;h2&gt;
      </span>
      <h2 id={headingId} className="h2 h2-mix">
        {light && <span className="h2-l">{light} </span>}
        <span className="h2-b">{strong}</span>
        <span className="sp sh-star" aria-hidden="true">
          <svg width="30" height="30" viewBox="0 0 24 24" focusable="false">
            <path d={STAR_PATH} fill="#c9774a" />
          </svg>
        </span>
      </h2>
      <span className="ctag ctag-dark" aria-hidden="true">
        &lt;/h2&gt;
      </span>
      <svg
        className="sh-squig"
        viewBox="0 0 400 24"
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M0 14C40 2 70 24 110 12S180 2 220 13 300 24 340 12 380 4 400 12"
          pathLength="1"
          fill="none"
          stroke="#c9774a"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      {lead && <p className="lead">{lead}</p>}
    </header>
  );
};
