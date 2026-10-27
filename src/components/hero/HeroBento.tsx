import React from "react";
import { PortfolioData } from "../../types/portfolio";
import { TerminalCard } from "./TerminalCard";
import { LocationCard } from "./LocationCard";
import { StackCard } from "./StackCard";
import { PipelineCard } from "./PipelineCard";

interface HeroBentoProps {
  profile: PortfolioData["profile"];
}

export const HeroBento: React.FC<HeroBentoProps> = ({ profile }) => {
  return (
    <div className="bento4">
      <TerminalCard terminal={profile.terminal} />
      <LocationCard locationInfo={profile.locationInfo} />
      <StackCard dailyStack={profile.dailyStack} />
      <PipelineCard pipeline={profile.pipeline} />
    </div>
  );
};
