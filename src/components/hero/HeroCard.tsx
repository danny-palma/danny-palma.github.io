import React from "react";
import { PortfolioData } from "../../types/portfolio";

interface HeroCardProps {
  profile: PortfolioData["profile"];
}

export const HeroCard: React.FC<HeroCardProps> = ({ profile }) => {
  return (
    <article className="card hcard rise" style={{ "--d": "0ms" } as React.CSSProperties}>
      {/* Decorative Star 1 */}
      <span className="sp s1" aria-hidden="true">
        <svg
          className="star"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M12 0C12 6.6 17.4 12 24 12C17.4 12 12 17.4 12 24C12 17.4 6.6 12 0 12C6.6 12 12 6.6 12 0Z"
            fill="#23483a"
          ></path>
        </svg>
      </span>

      {/* Header bar */}
      <header className="hbar">
        <span className="mono tagline">{profile.tagline}</span>
        <span className="chip live">
          <i className="pulse" aria-hidden="true"></i>
          {profile.availability}
        </span>
      </header>

      {/* Grid content */}
      <div className="hgrid">
        <div className="htext">
          <span className="ctag" aria-hidden="true">
            &lt;h1&gt;
          </span>
          <h1 id="t-hero">
            <span className="l1 rise" style={{ "--d": "120ms" } as React.CSSProperties}>
              {profile.heroH1.l1Prefix}
              <em>{profile.heroH1.l1Highlight}</em>,
            </span>
            <span className="l2 rise" style={{ "--d": "240ms" } as React.CSSProperties}>
              {profile.heroH1.l2}
              <span className="sp s2" aria-hidden="true">
                <svg
                  className="star"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="M12 0C12 6.6 17.4 12 24 12C17.4 12 12 17.4 12 24C12 17.4 6.6 12 0 12C6.6 12 12 6.6 12 0Z"
                    fill="#c9774a"
                  ></path>
                </svg>
              </span>
            </span>
          </h1>
          <span className="ctag" aria-hidden="true">
            &lt;/h1&gt;
          </span>

          <p className="hlead rise" style={{ "--d": "360ms" } as React.CSSProperties}>
            {profile.lead}
          </p>

          <p className="script rise" style={{ "--d": "440ms" } as React.CSSProperties}>
            {profile.scriptIntro}
          </p>

          <ul className="three rise" style={{ "--d": "500ms" } as React.CSSProperties}>
            {profile.threePoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          <div className="cta2 rise" style={{ "--d": "600ms" } as React.CSSProperties}>
            <a className="c1" href="#proyectos">
              Ver
              <br />
              proyectos
            </a>
            <a className="c2" href="#contacto">
              Hablemos
            </a>
          </div>
        </div>

        {/* Professional ID / Monogram badge */}
        <div className="hphoto rise" style={{ "--d": "300ms" } as React.CSSProperties}>
          <div className="ph2">
            <div className="ring">
              <span>{profile.initials}</span>
            </div>
            <div className="id-badge">
              <span className="id-name">{profile.name}</span>
              <span className="id-role mono">TECH LEAD · ARCHITECT</span>
              <span className="id-status">
                <span className="dot-live" aria-hidden="true" />
                <span>Perfil Verificado</span>
              </span>
            </div>
          </div>

          <div className="badge">
            <span className="av">{profile.initials}</span>
            <span>
              <b>{profile.badge.since}</b>
              <small>{profile.badge.clientInfo}</small>
            </span>
          </div>

          <span className="sticker mono">{profile.locationSticker}</span>
        </div>
      </div>

      {/* Squiggly line SVG */}
      <svg
        className="squig"
        viewBox="0 0 1000 120"
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M0 70C90 10 170 130 270 70S430 0 520 60 640 120 730 60 880 10 1000 70"
          pathLength="1"
          fill="none"
          stroke="#c9774a"
          strokeWidth="2.5"
          strokeLinecap="round"
        ></path>
      </svg>

      {/* Footer copyright */}
      <footer className="hfoot">
        <span className="copy">{profile.copyrightYear}</span>
        <span className="mono">{profile.footerFocus}</span>
      </footer>
    </article>
  );
};
