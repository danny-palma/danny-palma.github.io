import React from "react";
import { ServiceItem, ConvictionItem } from "../../types/portfolio";
import { SectionHeader } from "../common/SectionHeader";
import { ServiceCard } from "./ServiceCard";
import { ConvictionsCard } from "./ConvictionsCard";

interface ServicesSectionProps {
  services: ServiceItem[];
  convictions: ConvictionItem[];
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
  convictions,
}) => {
  return (
    <section id="servicios" className="sec" aria-labelledby="t-serv">
      <SectionHeader
        eyebrow="Qué hago y cómo trabajo"
        heading="Tres frentes, tres convicciones."
        headingId="t-serv"
      />

      <div className="wbento" style={{ marginTop: "var(--s12)" }}>
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
        <ConvictionsCard convictions={convictions} />
      </div>
    </section>
  );
};
