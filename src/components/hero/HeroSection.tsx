import React from "react";
import { PortfolioData } from "../../types/portfolio";
import { HeroCard } from "./HeroCard";
import { HeroBento } from "./HeroBento";

interface HeroSectionProps {
  profile: PortfolioData["profile"];
}

export const HeroSection: React.FC<HeroSectionProps> = ({ profile }) => {
  return (
    <div className="herowrap">
      <div className="dots" aria-hidden="true"></div>
      <div className="glow" aria-hidden="true"></div>
      <section
        id="inicio"
        className="sec"
        style={{
          maxWidth: "1240px",
          paddingTop: "var(--s12)",
          paddingBottom: "var(--s24)",
          position: "relative",
        }}
        aria-labelledby="t-hero"
      >
        <HeroCard profile={profile} />
        <HeroBento profile={profile} />

        <a className="cue" href="#proyectos" aria-label="Ir a sección de proyectos">
          <span>Explora</span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 5v14M5 12l7 7 7-7"></path>
          </svg>
        </a>
      </section>
    </div>
  );
};
