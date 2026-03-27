"use client";

import React from "react";
import { Search, ChevronLeft, ChevronRight, Receipt } from "lucide-react";

const orders = [
  { id: "#88241", product: "Netflix Gift Card", amount: "50.00", method: "USDT (TRC20)", date: "12 Oct 2023, 14:30", status: "Completed", referral: "DA2491" },
  { id: "#88239", product: "Amazon Balance", amount: "100.00", method: "USDT (TRC20)", date: "11 Oct 2023, 09:15", status: "Pending", referral: "DA2491" },
  { id: "#88235", product: "Apple Store Card", amount: "25.00", method: "LTC", date: "10 Oct 2023, 18:45", status: "Completed", referral: "DA2491" },
  { id: "#88230", product: "Steam Wallet", amount: "10.00", method: "BTC", date: "08 Oct 2023, 21:05", status: "Completed", referral: "DA2491" },
  { id: "#88228", product: "PlayStation Plus 12M", amount: "60.00", method: "USDT (ERC20)", date: "05 Oct 2023, 11:20", status: "Completed", referral: "DA2491" },
];

export const OrderHistoryList = () => {
  return (
    <div className="max-w-6xl mx-auto pb-20">
      {/* Header Section */}
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-inactive block mb-2">Transacciones</span>
          <h2 className="text-4xl font-black tracking-tight text-white">Historial de Órdenes</h2>
        </div>
        
        {/* Search Bar */}
        <div className="relative group w-full md:w-80">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-inactive w-5 h-5 group-focus-within:text-action transition-colors" />
          <input
            className="w-full bg-secondary/40 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-sm text-white focus:ring-2 focus:ring-action/20 placeholder:text-inactive/50 transition-all outline-none shadow-inner"
            placeholder="Buscar por número o producto..."
            type="text"
          />
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {[
          { label: "Total Gastado", value: "$2,450.00", color: "border-action" },
          { label: "Completados", value: "24", color: "border-emerald-500" },
          { label: "Pendientes", value: "02", color: "border-[#f2b92f]" }, // mapped to action
          { label: "Puntos Vault", value: "840", color: "border-inactive" },
        ].map((stat, i) => (
          <div key={i} className={`bg-secondary/40 p-5 rounded-3xl border-l-4 ${stat.color} shadow-xl backdrop-blur-sm`}>
            <p className="text-[10px] text-inactive uppercase tracking-wider font-bold mb-1">{stat.label}</p>
            <p className="text-2xl font-black text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Mobile Card List */}
      <div className="md:hidden flex flex-col gap-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-secondary/40 rounded-[2rem] p-6 shadow-xl border border-white/5 backdrop-blur-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-[10px] text-inactive font-bold uppercase tracking-widest mb-1">ID: {order.id}</p>
                <h3 className="text-xl font-bold text-white">{order.product}</h3>
                <p className="text-[10px] text-action/60 font-mono mt-1">Ref: {order.referral}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                order.status === "Completed" ? "bg-emerald-500/10 text-emerald-400" : "bg-action/10 text-action"
              }`}>
                {order.status}
              </span>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-[10px] text-inactive mb-1">{order.date}</p>
                <p className="text-2xl font-black text-action">${order.amount}</p>
              </div>
              <button className="bg-action text-black text-[10px] font-black px-5 py-3 rounded-xl active:scale-95 transition-all shadow-lg shadow-action/20">
                VER CÓDIGOS
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-hidden bg-secondary/20 rounded-[2.5rem] shadow-2xl border border-white/5 backdrop-blur-md">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-secondary/40 border-b border-white/5">
              {["Order #", "Producto", "Monto", "Método", "Fecha", "Referido", "Estado", "Acción"].map((head) => (
                <th key={head} className="px-6 py-6 text-[10px] font-black text-inactive uppercase tracking-[0.2em]">{head}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-white/5 transition-colors group">
                <td className="px-6 py-6 text-sm font-mono text-inactive">{order.id}</td>
                <td className="px-6 py-6 font-bold text-white">{order.product}</td>
                <td className="px-6 py-6 font-black text-action">${order.amount}</td>
                <td className="px-6 py-6 text-xs text-inactive font-medium">{order.method}</td>
                <td className="px-6 py-6 text-xs text-inactive font-medium">{order.date}</td>
                <td className="px-6 py-6 text-xs text-action font-mono font-bold">{order.referral}</td>
                <td className="px-6 py-6">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                    order.status === "Completed" ? "bg-emerald-500/10 text-emerald-400" : "bg-action/10 text-action"
                  }`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-6 text-right">
                  <button className="text-action text-[10px] font-black hover:underline tracking-widest flex items-center gap-2 group ml-auto transition-all">
                    VER CÓDIGOS
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {/* Pagination */}
        <div className="px-8 py-6 bg-black/10 flex justify-between items-center">
          <p className="text-[10px] text-inactive font-bold">Mostrando 5 de 26 transacciones</p>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-xl bg-secondary/40 flex items-center justify-center text-inactive hover:text-white transition-all border border-white/5">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-10 h-10 rounded-xl bg-action text-black font-black text-xs shadow-lg shadow-action/20">1</button>
            <button className="w-10 h-10 rounded-xl bg-secondary/40 flex items-center justify-center text-inactive text-xs hover:text-white transition-all border border-white/5 font-bold">2</button>
            <button className="w-10 h-10 rounded-xl bg-secondary/40 flex items-center justify-center text-inactive text-xs hover:text-white transition-all border border-white/5 font-bold">3</button>
            <button className="w-10 h-10 rounded-xl bg-secondary/40 flex items-center justify-center text-inactive hover:text-white transition-all border border-white/5">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistoryList;
