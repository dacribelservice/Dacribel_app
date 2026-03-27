"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, History } from "lucide-react";
import { cn } from "@/lib/utils";

export const BottomNav = () => {
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <nav className="fixed bottom-6 left-0 right-0 flex justify-center items-center z-50 px-4 transition-all">
        <div className="bg-background/80 backdrop-blur-[12px] flex justify-around items-center w-[200px] rounded-full p-2 outline outline-1 outline-white/15 shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
          {/* Tienda Link */}
          <Link
            href="/"
            className={cn(
              "rounded-full p-3 flex flex-col items-center transition-all hover:scale-110 active:scale-95",
              pathname === "/" ? "text-action bg-action/10 shadow-inner" : "text-inactive"
            )}
          >
            <Home className="w-6 h-6" />
          </Link>
          
          {/* Historial Link */}
          <Link
            href="/orders"
            className={cn(
              "rounded-full p-3 flex flex-col items-center transition-all hover:scale-110 active:scale-95",
              pathname === "/orders" ? "text-action bg-action/10 shadow-inner" : "text-inactive"
            )}
          >
            <History className="w-6 h-6" />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default BottomNav;
