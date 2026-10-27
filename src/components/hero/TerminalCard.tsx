import React from "react";
import { PortfolioData } from "../../types/portfolio";

interface TerminalCardProps {
  terminal: PortfolioData["profile"]["terminal"];
}

export const TerminalCard: React.FC<TerminalCardProps> = ({ terminal }) => {
  return (
    <article className="card tile t-term">
      <div
        style={{ display: "flex", gap: "var(--s2)", marginBottom: "var(--s4)" }}
        aria-hidden="true"
      >
        <span
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "99px",
            background: "#e06b5a",
          }}
        ></span>
        <span
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "99px",
            background: "#e3b05a",
          }}
        ></span>
        <span
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "99px",
            background: "var(--accent)",
          }}
        ></span>
      </div>
      <div className="mono" style={{ lineHeight: 2 }}>
        <div style={{ color: "var(--accent)" }}>$ whoami</div>
        <div style={{ color: "var(--strong)" }}>{terminal.user}</div>
        <div style={{ color: "var(--accent)", marginTop: "var(--s2)" }}>
          $ cat perfil.txt
        </div>
        <div>rol&nbsp;&nbsp;&nbsp;&nbsp;→ {terminal.catProfile.rol}</div>
        <div>base&nbsp;&nbsp;&nbsp;→ {terminal.catProfile.base}</div>
        <div>clientes → {terminal.catProfile.clientes}</div>
        <div>foco&nbsp;&nbsp;&nbsp;→ {terminal.catProfile.foco}</div>
        <div style={{ color: "var(--accent)", marginTop: "var(--s2)" }}>
          ${" "}
          <span className="cur" aria-hidden="true"></span>
        </div>
      </div>
    </article>
  );
};
