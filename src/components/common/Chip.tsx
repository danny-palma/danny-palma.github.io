import React from "react";

interface ChipProps {
  label: string;
  variant?: "default" | "surface";
  className?: string;
}

export const Chip: React.FC<ChipProps> = ({
  label,
  variant = "default",
  className = "",
}) => {
  const variantClass = variant === "surface" ? "chip g" : "chip";
  return <span className={`${variantClass} ${className}`.trim()}>{label}</span>;
};
