import React, { useState } from "react";
import { PortfolioData } from "../../types/portfolio";
import { ContactModal } from "./ContactModal";

interface ContactSectionProps {
  contact: PortfolioData["contact"];
}

export const ContactSection: React.FC<ContactSectionProps> = ({ contact }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="contacto"
      className="sec"
      style={{ paddingBottom: "var(--s24)" }}
      aria-labelledby="t-cont"
    >
      <div className="card cta">
        <span className="eyebrow">{contact.eyebrow}</span>
        <h2 id="t-cont" className="h2">
          {contact.heading}
        </h2>
        <p className="lead">{contact.lead}</p>
        <div
          style={{
            display: "flex",
            gap: "var(--s4)",
            marginTop: "var(--s8)",
            flexWrap: "wrap",
          }}
        >
          <button
            type="button"
            className="btn dk"
            onClick={() => setIsModalOpen(true)}
            aria-label={`Escribir a ${contact.email}`}
          >
            {contact.email}
          </button>
          <a
            className="btn gh"
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="btn gh"
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="btn gh"
            href={contact.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Descargar CV
          </a>
        </div>
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultEmail={contact.email}
      />
    </section>
  );
};
