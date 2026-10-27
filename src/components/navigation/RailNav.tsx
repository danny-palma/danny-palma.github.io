import React, { useEffect, useState } from "react";
import { NavItem } from "../../types/portfolio";

interface RailNavProps {
  items: NavItem[];
}

export const RailNav: React.FC<RailNavProps> = ({ items }) => {
  const [activeSection, setActiveSection] = useState<string>("inicio");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = items.length - 1; i >= 0; i--) {
        const item = items[i];
        const section = document.getElementById(item.id);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            return;
          }
        }
      }
      setActiveSection("inicio");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [items]);

  const renderIcon = (type: NavItem["icon"]) => {
    switch (type) {
      case "inicio":
        return <b className="mk">DP</b>;
      case "proyectos":
        return (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M4 7h16v12H4z"></path>
            <path d="M9 7V4h6v3"></path>
          </svg>
        );
      case "servicios":
        return (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            focusable="false"
          >
            <rect x="3" y="3" width="7" height="7" rx="2"></rect>
            <rect x="14" y="3" width="7" height="7" rx="2"></rect>
            <rect x="3" y="14" width="7" height="7" rx="2"></rect>
            <rect x="14" y="14" width="7" height="7" rx="2"></rect>
          </svg>
        );
      case "stack":
        return (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M12 3l9 5-9 5-9-5z"></path>
            <path d="M3 13l9 5 9-5"></path>
          </svg>
        );
      case "trayectoria":
        return (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            focusable="false"
          >
            <circle cx="12" cy="12" r="9"></circle>
            <path d="M12 7v5l3 2"></path>
          </svg>
        );
      case "contacto":
        return (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            focusable="false"
          >
            <rect x="3" y="5" width="18" height="14" rx="3"></rect>
            <path d="M3 8l9 6 9-6"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <nav className="rail" aria-label="Secciones">
      {items.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-label={item.label}
            className={isActive ? "on" : ""}
            aria-current={isActive ? "true" : undefined}
          >
            {renderIcon(item.icon)}
            <span className="tip" aria-hidden="true">
              {item.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
};
