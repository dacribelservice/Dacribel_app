"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, X, Gamepad2, Laptop } from "lucide-react";

interface NotificationDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NotificationDropdown = ({ isOpen, onClose }: NotificationDropdownProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-surface-container-lowest/80 backdrop-blur-2xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-[#11131b]/95 backdrop-blur-3xl rounded-[2.5rem] border border-action/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden"
          >
            {/* Header */}
            <div className="px-8 pt-8 pb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-action/10 flex items-center justify-center">
                  <AlertTriangle className="text-action w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-inactive">Monitor del Sistema</p>
                  <h2 className="tracking-tight text-white text-xl font-bold">Estado de Inventario</h2>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/5 transition-colors group"
              >
                <X className="text-inactive group-hover:text-white w-5 h-5" />
              </button>
            </div>

            {/* List of Low Stock Items */}
            <div className="px-8 pb-10 space-y-4">
              <NotificationItem 
                name="PlayStation $10 usa" 
                stock={3} 
                icon={<Gamepad2 className="w-6 h-6 text-action" />} 
              />
              <NotificationItem 
                name="XBOX $5 usa" 
                stock={5} 
                icon={<Laptop className="w-6 h-6 text-action" />} 
              />
              <NotificationItem 
                name="PlayStation $3 col" 
                stock={1} 
                icon={<Gamepad2 className="w-6 h-6 text-action" />} 
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

interface NotificationItemProps {
  name: string;
  stock: number;
  icon: React.ReactNode;
}

const NotificationItem = ({ name, stock, icon }: NotificationItemProps) => (
  <div className="bg-secondary/40 p-4 rounded-2xl flex items-center justify-between border border-action/20 relative overflow-hidden group">
    {/* Subtle inner glow */}
    <div className="absolute inset-0 bg-gradient-to-r from-action/5 to-transparent opacity-50"></div>
    
    <div className="flex items-center gap-4 relative z-10">
      <div className="w-12 h-12 rounded-lg bg-background flex items-center justify-center border border-white/5">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-white text-sm md:text-base">{name}</h3>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-action animate-pulse shadow-[0_0_10px_#f2b92f]"></span>
          <span className="text-xs text-action font-semibold">Stock bajo</span>
        </div>
      </div>
    </div>
    
    <div className="text-right relative z-10">
      <p className="text-2xl font-black text-red-500">{stock}</p>
      <p className="text-[10px] uppercase tracking-widest font-bold text-inactive">Unidades</p>
    </div>
  </div>
);

export default NotificationDropdown;
