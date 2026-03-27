"use client";

import React from "react";
import { Filter } from "lucide-react";

const platforms = ["All", "PlayStation", "Xbox", "Nintendo", "Roblox"];
const denominations = ["$5", "$10", "$50", "$100"];
const regions = [
  { flag: "🇺🇸", name: "USA" },
  { flag: "🇨🇴", name: "Colombia" },
  { flag: "🇲🇽", name: "México" },
];

export const CategoryFilter = () => {
  return (
    <section className="mb-12 transition-all">
      {/* Filters Header */}
      <div className="flex items-center gap-2 mb-4">
        <Filter className="w-4 h-4 text-action" />
        <h4 className="text-xs font-bold uppercase tracking-widest text-secondary">
          Filtros Avanzados
        </h4>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Platform Filter */}
        <div className="flex-1 space-y-2">
          <label className="text-[10px] font-bold text-inactive uppercase ml-2 select-none">
            Plataforma
          </label>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
            {platforms.map((platform, i) => (
              <button
                key={platform}
                className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm transition-all backdrop-blur-sm border ${
                  platform === "PlayStation"
                    ? "bg-action text-background font-bold border-action shadow-lg shadow-action/20"
                    : "bg-white/5 border-white/10 text-white hover:border-action/50"
                }`}
              >
                {platform}
              </button>
            ))}
          </div>
        </div>

        {/* Denomination Filter */}
        <div className="flex-1 space-y-2">
          <label className="text-[10px] font-bold text-inactive uppercase ml-2 select-none">
            Denominación
          </label>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
            {denominations.map((denom) => (
              <button
                key={denom}
                className={`flex-shrink-0 px-6 py-2.5 rounded-full text-sm font-bold transition-all backdrop-blur-sm border ${
                  denom === "$10"
                    ? "bg-action text-background border-action shadow-lg shadow-action/20"
                    : "bg-white/5 border-white/10 text-white hover:border-action/50"
                }`}
              >
                {denom}
              </button>
            ))}
          </div>
        </div>

        {/* Region Filter */}
        <div className="flex-1 space-y-2">
          <label className="text-[10px] font-bold text-inactive uppercase ml-2 select-none">
            Región
          </label>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
            {regions.map((region) => (
              <button
                key={region.name}
                className={`flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all backdrop-blur-sm border ${
                  region.name === "USA"
                    ? "bg-action text-background border-action shadow-lg shadow-action/20"
                    : "bg-white/5 border-white/10 text-white hover:border-action/50"
                }`}
              >
                <span className="text-lg">{region.flag}</span>
                {region.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;
