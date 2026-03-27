"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const HeroBanner = () => {
  return (
    <section className="relative group rounded-[2.5rem] overflow-hidden aspect-[4/5] md:aspect-[21/9] mb-8 bg-secondary/10 shadow-2xl transition-all">
      <div className="absolute inset-0 flex transition-transform duration-500 ease-out">
        {/* Main Slide: PlayStation Promotion */}
        <div className="min-w-full h-full relative">
          <img
            alt="PlayStation Promotion"
            className="w-full h-full object-cover opacity-80"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ9liCz5w08cybR5VFCYdsmkm9JzkJUMJW1EQRIQWgdgZQE9rpmPCVShtR__Lv9zaXFoV59iqITc08grjo7SDAbhy-ILjXbnYWs5O8b4d5b53gQZXqyRUKXbTE6PXJP4vW3lEFY5MXr--_YjNQoO4XuPwEGAxtidG9AWRP5cfYx8cuNTGspKN0UbDH-k2V1cjB19zCWzxmTvWRwXUJ14VDupeGeOyvJT8ICiZiNoEB2LEeoXwfI8g6ArL29WsJ-mexqBxJEp7u9lmb"
          />
          {/* Content Overlay with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent flex flex-col justify-center px-8 md:px-16">
            <span className="text-action font-bold tracking-[0.2em] text-[10px] uppercase mb-3">
              Featured Offer
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              UNLEASH THE <br />
              <span className="text-action">POWER OF PLAY</span>
            </h2>
            <p className="text-inactive max-w-sm mb-8 text-sm md:text-base font-medium">
              Top up your PlayStation wallet instantly. Access thousands of
              titles today.
            </p>
            <button className="w-fit bg-action text-background font-bold px-10 py-4 rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-[0_15px_35px_rgba(242,185,47,0.3)] select-none">
              Get Credits
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Navigation Buttons */}
      <button className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/10 transition-colors border border-white/10 opacity-0 group-hover:opacity-100">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/10 transition-colors border border-white/10 opacity-0 group-hover:opacity-100">
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Navigation Indicators (Dots) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        <span className="w-10 h-2 bg-action rounded-full shadow-[0_0_10px_rgba(247,190,52,0.5)]"></span>
        <span className="w-2 h-2 bg-white/20 rounded-full hover:bg-white/40 cursor-pointer transition-colors"></span>
        <span className="w-2 h-2 bg-white/20 rounded-full hover:bg-white/40 cursor-pointer transition-colors"></span>
      </div>
    </section>
  );
};

export default HeroBanner;
