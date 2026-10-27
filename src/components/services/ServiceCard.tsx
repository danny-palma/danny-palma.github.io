import React from "react";
import { ServiceItem } from "../../types/portfolio";
import { Chip } from "../common/Chip";

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <article className={`card tile ${service.className}`}>
      <div>
        <h3 className="h3">{service.title}</h3>
        <p className="p">{service.description}</p>
      </div>
      {service.chips && service.chips.length > 0 && (
        <div className="chips">
          {service.chips.map((chip) => (
            <Chip key={chip} label={chip} />
          ))}
        </div>
      )}
    </article>
  );
};
