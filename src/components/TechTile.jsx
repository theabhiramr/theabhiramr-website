import React from "react";
import { icons } from "./TechBadge";

const TechTile = ({ techString }) => {
  const tech = icons[techString];
  const label = tech?.label ?? techString;

  const tile = (
    <div className="group relative">
      <div className="border-border/60 bg-surface text-content/70 hover:border-accent/40 hover:bg-accent/10 hover:text-accent flex h-11 w-11 items-center justify-center rounded-xl border transition-colors duration-200 lg:h-12 lg:w-12">
        {tech?.icon ? (
          React.cloneElement(tech.icon, { size: 18, className: "" })
        ) : (
          <span className="font-geist-mono text-[10px] uppercase">
            {label.slice(0, 2)}
          </span>
        )}
      </div>
      <span className="border-border bg-surface text-content font-geist-mono pointer-events-none absolute -top-2 left-1/2 z-20 -translate-x-1/2 -translate-y-full rounded-md border px-2 py-1 text-[10px] whitespace-nowrap opacity-0 shadow-sm transition-opacity duration-150 group-hover:opacity-100">
        {label}
      </span>
    </div>
  );

  return tech?.url ? (
    <a
      href={tech.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {tile}
    </a>
  ) : (
    tile
  );
};

export default TechTile;
