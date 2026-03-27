"use client";

import React from "react";
import { ShoppingBag } from "lucide-react";
import { useProductStore } from "@/store/useProductStore";

const products = [
  {
    id: 1,
    name: "PlayStation Store Gift Card (USA)",
    denomination: "$10.00",
    price: "9.3",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiTxVt6ySeAnfCpLGKdS27Vppb3aajRDHAEAo6CoHcv1AC4n-Fy8WSv-omjSNGOpnr6z_-CqDr_DD6VYi4sksRmxVxo017NrFnfooq2xYG6mH5hZ9MqJyf6rJFhcVNEMm3YKbdw3i1NfCYgk04aCwwxWtJxhxfluWKXUwF0R3hhpIcgo3SjRM8pv0X6-NfdkauNFzWtWjnMMPz8uyOI9GIqKFSwGhXzljl83sTj0T6xV_p9TwnpX9hycsfOAHp5Pii_-iw7_tpxLMs",
  },
  {
    id: 2,
    name: "PlayStation Store Gift Card (USA)",
    denomination: "$3.00",
    price: "2.8",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiTxVt6ySeAnfCpLGKdS27Vppb3aajRDHAEAo6CoHcv1AC4n-Fy8WSv-omjSNGOpnr6z_-CqDr_DD6VYi4sksRmxVxo017NrFnfooq2xYG6mH5hZ9MqJyf6rJFhcVNEMm3YKbdw3i1NfCYgk04aCwwxWtJxhxfluWKXUwF0R3hhpIcgo3SjRM8pv0X6-NfdkauNFzWtWjnMMPz8uyOI9GIqKFSwGhXzljl83sTj0T6xV_p9TwnpX9hycsfOAHp5Pii_-iw7_tpxLMs",
  },
  {
    id: 3,
    name: "Xbox Store Gift Card (USA)",
    denomination: "$25.00",
    price: "24.5",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtGwrArEDEuWWCZT2hTrBXTewRkBrl1d62pUxTA7jvm6CafMelj1YXfljeODZpzcydjozr8KOHB9PfQ54juwSH7dQxe_q_oFbkZu1AMotCxMSksV90boaoMzkvs6nTD1Tc7-8WP0tnaW5CHOarZflm8rLroVR0YPilfy4XJrMUgg-xiVwesTWZaN8Sbywtk8o4s24jTB5ONrXXKFL2oRYLxW48Q_JScRMnbtm1BQo1WLwpqr9HtI9XlSCOAt7H7fF3J7Y98yWyedqD",
  }
];

export const ProductGrid = () => {
  const openSheet = useProductStore((state) => state.openSheet);

  return (
    <section className="mb-12 transition-all">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-black text-white tracking-tight">
          Resultados de Búsqueda
        </h3>
        <div className="h-px flex-1 bg-white/10 mx-6"></div>
        <button className="text-action text-xs font-bold uppercase tracking-widest hover:opacity-80 transition-opacity">
          Ver Todos
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={openSheet}
            className="bg-secondary/40 p-6 rounded-[2rem] border border-white/5 hover:border-action/40 transition-all group cursor-pointer backdrop-blur-sm shadow-xl hover:shadow-action/5"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-secondary/60 rounded-2xl flex items-center justify-center p-2 border border-white/5">
                <img
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  src={product.image}
                />
              </div>
              <div>
                <h4 className="font-bold text-lg text-white group-hover:text-action transition-colors">
                  {product.name}
                </h4>
                <p className="text-inactive text-xs font-medium uppercase tracking-wider mt-1">
                  Denominación: {product.denomination}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-action uppercase tracking-widest mb-1">
                  Precio
                </span>
                <span className="text-2xl font-black text-white">
                  ${product.price} <span className="text-sm font-bold text-action">USDT</span>
                </span>
              </div>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  openSheet();
                }}
                className="bg-action/10 text-action p-4 rounded-2xl group-hover:bg-action group-hover:text-background transition-all shadow-lg shadow-black/20 active:scale-95 hover:rotate-6"
              >
                <ShoppingBag className="w-6 h-6" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;

