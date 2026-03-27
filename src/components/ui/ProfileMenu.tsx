"use client";

import React from "react";
import { 
  User, 
  ShieldCheck, 
  CreditCard, 
  Send, 
  FileText, 
  Info, 
  Trash2, 
  LogOut 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProfileMenuProps {
  isOpen: boolean;
}

export const ProfileMenu = ({ isOpen }: ProfileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute right-0 top-full mt-3 w-56 sm:w-64 md:w-72 bg-secondary/95 backdrop-blur-xl text-white rounded-[1.5rem] md:rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.6)] flex flex-col font-inter z-[100] border border-white/10 max-h-[calc(100vh-120px)] overflow-y-auto no-scrollbar"
        >
          {/* Header Section: Profile */}
          <div className="px-5 md:px-6 pt-5 md:pt-6 pb-3 md:pb-4 flex flex-col items-start gap-1">
            <div className="w-11 h-11 md:w-14 md:h-14 rounded-full overflow-hidden mb-2 md:mb-3 bg-background ring-2 ring-action/20">
              <img
                alt="User Profile Picture"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpvdosY8hXR9RcE-AlZ6LYfaccSRjHhhfArF6dJqIfH3op9RoqWHH6MvnDylbgMGnM9UyUjd-R1tXBQWsA0wx69orgeUqgk9IUjg1tjr1774Yzgn6S5zXzkTRhrlIF9KkBpaezh61xMqIkHQTssjjpqu9_4bQE4FzFkBHoqPKFz_CfORnjqqaddZ9i0aJZY-Lx9e-Vba1A0VowKb2Tkb94Pyqw4bXPhvlWSvF2oletob-NnR06Y1Fc1mKNQGFocI-2IfJz20MT8LK0"
              />
            </div>
            <h2 className="text-lg md:text-xl font-black tracking-tight leading-tight">Ereogan Aysel</h2>
            <p className="text-[10px] md:text-xs font-medium text-inactive truncate w-full">cangel2800@gmail.com</p>
            <div className="mt-1.5 px-2 py-0.5 md:py-1 bg-action text-background rounded-md text-[9px] md:text-[10px] font-bold uppercase tracking-wider inline-block">
              admin
            </div>
          </div>

          {/* Menu Items List */}
          <nav className="flex flex-col px-2 md:px-3 py-2 md:py-3 space-y-0.5 md:space-y-1">
            <MenuItem icon={<User className="w-3.5 h-3.5 md:w-4 h-4" />} label="My profile" />
            <MenuItem icon={<ShieldCheck className="w-3.5 h-3.5 md:w-4 h-4" />} label="Admin" />
            <MenuItem icon={<CreditCard className="w-3.5 h-3.5 md:w-4 h-4" />} label="Affiliate program" />
            <MenuItem icon={<Send className="w-3.5 h-3.5 md:w-4 h-4" />} label="Telegram" />
            <MenuItem icon={<FileText className="w-3.5 h-3.5 md:w-4 h-4" />} label="Terminos" />
            <MenuItem icon={<Info className="w-3.5 h-3.5 md:w-4 h-4" />} label="Sobre nosotros" />
            
            <div className="h-[1px] bg-white/5 my-2 mx-4"></div>
            
            <MenuItem 
              icon={<Trash2 className="w-3.5 h-3.5 md:w-4 h-4 text-red-500" />} 
              label="Eliminar Cuenta" 
              className="text-red-400/80 hover:text-red-400"
            />
            <MenuItem icon={<LogOut className="w-3.5 h-3.5 md:w-4 h-4" />} label="Cerrar Sesion" />
          </nav>

          {/* Footer Section: Language Selector */}
          <div className="px-5 md:px-6 py-4 md:py-5 border-t border-white/5 flex flex-col gap-2 md:gap-3 bg-white/[0.02]">
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] text-inactive">Idioma</span>
            <div className="flex gap-2">
              <button className="flex-1 py-1.5 md:py-2 px-3 md:px-4 rounded-lg md:rounded-xl bg-white/5 text-white text-[10px] md:text-xs font-bold hover:bg-white/10 transition-all active:scale-95">
                EN
              </button>
              <button className="flex-1 py-1.5 md:py-2 px-3 md:px-4 rounded-lg md:rounded-xl bg-action text-background text-[10px] md:text-xs font-bold shadow-lg shadow-action/20 active:scale-95 transition-all">
                ES
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  className?: string;
}

const MenuItem = ({ icon, label, className }: MenuItemProps) => (
  <button className={`w-full flex items-center gap-3 py-1.5 md:py-2 px-3 rounded-lg md:rounded-xl text-white font-semibold hover:bg-white/5 transition-all active:opacity-80 group ${className}`}>
    <span className="text-action group-hover:scale-110 transition-transform">{icon}</span>
    <span className="text-[11px] md:text-sm font-bold tracking-tight">{label}</span>
  </button>
);

export default ProfileMenu;
