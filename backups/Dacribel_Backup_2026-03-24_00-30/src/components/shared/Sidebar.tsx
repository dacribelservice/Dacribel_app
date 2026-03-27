"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, 
  Receipt, 
  ShieldCheck, 
  User 
} from "lucide-react";
import { cn } from "@/lib/utils";

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:left-0 lg:top-0 lg:h-full z-40 bg-background border-r border-white/5 transition-all">
      {/* Brand Header */}
      <div className="p-8">
        <h1 className="text-action font-black text-2xl tracking-tighter select-none">
          DACRIBEL
        </h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 space-y-2">
        <Link
          href="/"
          className={cn(
            "flex items-center gap-4 px-6 py-4 rounded-2xl transition-all font-bold",
            pathname === "/" 
              ? "bg-action/10 text-white border border-action/20 shadow-lg shadow-action/5" 
              : "text-inactive hover:text-white hover:bg-white/5"
          )}
        >
          <Home className={cn("w-5 h-5", pathname === "/" ? "text-action" : "")} />
          <span className="text-sm tracking-tight">Tienda</span>
        </Link>

        <Link
          href="/orders"
          className={cn(
            "flex items-center gap-4 px-6 py-4 rounded-2xl transition-all font-medium",
            pathname === "/orders" 
              ? "bg-action/10 text-white border border-action/20 shadow-lg shadow-action/5 font-bold" 
              : "text-inactive hover:text-white hover:bg-white/5"
          )}
        >
          <Receipt className={cn("w-5 h-5", pathname === "/orders" ? "text-action" : "")} />
          <span className="text-sm tracking-tight">Historial</span>
        </Link>

        <a
          href="#"
          className="flex items-center gap-4 px-6 py-4 text-inactive hover:text-white hover:bg-white/5 rounded-2xl transition-all group"
        >
          <ShieldCheck className="w-5 h-5 group-hover:text-action transition-colors" />
          <span className="text-sm font-medium tracking-tight">Seguridad</span>
        </a>
      </nav>

      {/* User Footer Profile Card */}
      <div className="p-6 mt-auto">
        <div className="flex items-center space-x-3 p-3 rounded-2xl bg-secondary/10 border border-white/5 hover:bg-secondary/20 transition-all cursor-pointer group">
          <div className="w-10 h-10 rounded-full bg-action/10 flex items-center justify-center border border-action/20 group-hover:border-action/40 transition-colors">
            <User className="w-5 h-5 text-action" />
          </div>
          <div>
            <p className="text-sm font-bold text-white">Vault Access</p>
            <p className="text-[10px] text-inactive font-medium">Verified Member</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
