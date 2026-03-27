"use client";

import React, { useState } from "react";
import { X, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useProductStore } from "@/store/useProductStore";

export const ProductBottomSheet = () => {
  const { isSheetOpen, closeSheet } = useProductStore();
  const [quantity, setQuantity] = useState(2);

  return (
    <AnimatePresence>
      {isSheetOpen && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4">
          {/* Overlay - Darkened backdrop for contrast */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSheet}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          />

          {/* Bottom Sheet Container - SOLID Background */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full max-w-md bg-[#e9e9e9] rounded-t-[2.5rem] sm:rounded-[2.5rem] flex flex-col max-h-[90vh] shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-gray-300 shrink-0">
              <h2 className="text-xl font-bold text-gray-900 flex-1 text-center pl-8">
                Product
              </h2>
              <button
                onClick={closeSheet}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-500 hover:bg-gray-300 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-8 overflow-y-auto flex-1 no-scrollbar space-y-8">
              {/* Brand & Type */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="bg-white p-2 rounded-xl shadow-sm border border-gray-200">
                    <img
                      alt="PlayStation Logo"
                      className="h-6 w-auto object-contain"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAWpkuCfu_xKdDc2YmHfK-w2W1ve-IPB4ZLqmIIMfM46apHvjgEOXwsziOrYCTceT1nMlzEnoCH-rQM8F0ElPHwAc-RYFSddkychzX_HiHEBrp0tLv_Eu3byBHMyLvocb9FKDh-JpeGJljx_EO1C1Zd-QrWmI1Goqw7J9ebv3fgkKmYC1eMJpJRwvG8t11UrWh0hUZzIqW2dm91G93PPOlqVM9Hy74YckteJ6X713Zth31Ezou__Z-mw0Edz80uhKTxOEKQVWtXeND"
                    />
                  </div>
                  <span className="font-bold text-gray-900 text-xl tracking-tight">
                    PlayStation
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500 font-medium">
                  <span>GiftCard</span>
                  <img
                    alt="USA Flag"
                    className="w-6 h-4 rounded-sm object-cover shadow-sm"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_0m_xL3Qnwj0XtsDpGH4xyBI7A1jAk00P_TZLUpxGVPjSw2Y-OFUt4NXRorI7cHywoqUjS6vkYRPuoXEtuZHd3e2MxdaXc_BkYzGIqhkoCIjEcMjHgZBnYpDSZk7zIwe2wjkEGzPr5gwPtQt-E8iBGQQ2Hj7f5SGP_izKOgQETY07yZoU3s_cyx0WSHJVE2FkWfaoec7KjhA4J30WCLfFj3sMUitx5JrEgghtrde0DyIzHAB5Fkvll97AMo15WYHw4Ia7AER7PnO"
                  />
                </div>
              </div>

              {/* Denominations Carousel */}
              <div className="space-y-3">
                <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
                  {["10us", "25us", "50us", "75us", "100us"].map((denom) => (
                    <button
                      key={denom}
                      className={`px-6 py-2 rounded-full font-bold text-sm transition-all whitespace-nowrap shadow-sm ${
                        denom === "25us"
                          ? "bg-action text-black"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {denom}
                    </button>
                  ))}
                </div>
              </div>

              {/* Availability & Unit Price */}
              <div className="space-y-6">
                <p className="text-gray-900 font-medium">Existencias: <span className="font-bold">10</span></p>

                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Costo unitario:</p>
                    <p className="text-3xl font-black text-gray-900 tracking-tighter">
                      $23.90 <span className="text-base text-gray-600 font-bold">USDT</span>
                    </p>
                  </div>

                  {/* Quantity Selector */}
                  <div className="flex items-center bg-gray-100 rounded-xl overflow-hidden h-12 border border-gray-200">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 h-full flex items-center justify-center hover:bg-gray-200 transition-colors text-gray-600 border-r border-gray-200"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-6 text-xl font-bold text-gray-900 min-w-[3.5rem] text-center">
                      {quantity}
                    </span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 h-full flex items-center justify-center hover:bg-gray-200 transition-colors text-gray-600 border-l border-gray-200"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <p className="text-sm text-gray-500 mb-1">Descripción:</p>
                <p className="text-gray-800 text-sm leading-relaxed">
                  description
                </p>
              </div>
            </div>

            {/* Footer Checkout */}
            <div className="p-8 border-t border-gray-300 flex items-center justify-between shrink-0 bg-white/60 pb-10 sm:pb-8">
              <div className="flex flex-col">
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Total</p>
                <p className="text-2xl font-black text-gray-900 tracking-tighter">
                  ${(23.90 * quantity).toFixed(2)} <span className="text-sm text-gray-600">USDT</span>
                </p>
              </div>
              <button className="bg-action text-black font-black py-3 px-8 rounded-full shadow-lg hover:bg-[#f7be34] active:scale-95 transition-all uppercase tracking-widest text-xs">
                Pagar ahora
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProductBottomSheet;
