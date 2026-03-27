"use client";

import React from "react";
import { Search } from "lucide-react";

export const SearchBar = () => {
  return (
    <section className="mb-8 max-w-2xl mx-auto w-full transition-all">
      <div className="relative group">
        {/* Search Icon Container */}
        <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
          <Search className="w-5 h-5 text-inactive group-focus-within:text-action transition-colors" />
        </div>

        {/* Search Input Field */}
        <input
          className="w-full bg-secondary border-none outline-none ring-1 ring-white/5 focus:ring-action/40 rounded-full py-5 pl-14 pr-6 text-white placeholder:text-inactive/50 transition-all backdrop-blur-md shadow-inner font-medium text-sm"
          placeholder="Search gift cards, games, subscriptions..."
          type="text"
        />
      </div>
    </section>
  );
};

export default SearchBar;
