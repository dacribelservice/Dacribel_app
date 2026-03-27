"use client";

import React from "react";

const collections = [
  {
    name: "PSN",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiTxVt6ySeAnfCpLGKdS27Vppb3aajRDHAEAo6CoHcv1AC4n-Fy8WSv-omjSNGOpnr6z_-CqDr_DD6VYi4sksRmxVxo017NrFnfooq2xYG6mH5hZ9MqJyf6rJFhcVNEMm3YKbdw3i1NfCYgk04aCwwxWtJxhxfluWKXUwF0R3hhpIcgo3SjRM8pv0X6-NfdkauNFzWtWjnMMPz8uyOI9GIqKFSwGhXzljl83sTj0T6xV_p9TwnpX9hycsfOAHp5Pii_-iw7_tpxLMs",
    active: true,
  },
  {
    name: "Xbox",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtGwrArEDEuWWCZT2hTrBXTewRkBrl1d62pUxTA7jvm6CafMelj1YXfljeODZpzcydjozr8KOHB9PfQ54juwSH7dQxe_q_oFbkZu1AMotCxMSksV90boaoMzkvs6nTD1Tc7-8WP0tnaW5CHOarZflm8rLroVR0YPilfy4XJrMUgg-xiVwesTWZaN8Sbywtk8o4s24jTB5ONrXXKFL2oRYLxW48Q_JScRMnbtm1BQo1WLwpqr9HtI9XlSCOAt7H7fF3J7Y98yWyedqD",
  },
  {
    name: "Nintendo",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDs8x_b6xVP6t8lvtHdf9RXupeTnVY3mBeUVq9wOWdjFpvJQqLo4cr90ViI6B4RS3b93-0JP6YpBYMLu6JrP-06TKPuCKa3hedoGW8LZVHocR8-A1ayeZjrSDFHOHaMEa931APToz2mM8ZkKkxwZ-1tS_bhYsB74XfkyvgyJNcSxWp-106sDzDse6f8elNZcAKDDzlitVV6LYOsBf7Rmm4N4k9DYgNEkw1Y_PawlefSJCt2gF32fSPFIgbhd9SF8GgKgMuZZSXBLMJZ",
  },
  {
    name: "Roblox",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAM3FMx2vTaoNam0rubroypijS2V_7xS7T-OpkTe9PoJKooFUEG0W8BHahnEb0bI9TkE73Z22TakNKWvOmMgh9WBQpY_HFXGp1Q0c96ZAjH1juEU0mPpvxZiThNAir3wqbXRYkprrPChtvOHqKN629Iqe_cvtlGWsip_okk7FiVsC0NIJaNysJxDsOIsUIwU2R-azC5uilvyW1pxWFGNzx0skUi2DdEdp7bDCiDZeJGMc7sh8a_IQn2z059ZP0S8yfP8doKK-PPp-Z9",
  },
];

export const CategoryCircles = () => {
  return (
    <section className="mb-12 transition-all">
      <div className="flex flex-col items-center mb-10">
        <span className="text-inactive text-[10px] font-bold tracking-[0.3em] uppercase mb-1 opacity-60">
          Vault Collections
        </span>
        <h3 className="text-2xl font-black text-white tracking-tight">
          Tarjetas de Regalo
        </h3>
      </div>

      <div className="flex gap-6 md:gap-12 overflow-x-auto no-scrollbar pb-4 max-w-4xl mx-auto px-4 justify-start md:justify-center">
        {collections.map((item) => (
          <div
            key={item.name}
            className="flex flex-col items-center group cursor-pointer flex-shrink-0"
          >
            <div
              className={`w-20 h-20 md:w-32 md:h-32 rounded-full flex items-center justify-center mb-4 transition-all duration-500 overflow-hidden backdrop-blur-md border ${
                item.active
                  ? "bg-action/20 border-action shadow-[0_0_30px_rgba(242,185,47,0.2)] ring-2 ring-action/50"
                  : "bg-secondary/40 border-white/5 ring-1 ring-white/5 hover:ring-action/50 hover:shadow-[0_0_30px_rgba(242,185,47,0.15)]"
              }`}
            >
              <img
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src={item.image}
              />
            </div>
            <span
              className={`font-bold text-[10px] md:text-sm tracking-wide transition-colors text-center ${
                item.active ? "text-action" : "text-inactive group-hover:text-action"
              }`}
            >
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryCircles;
