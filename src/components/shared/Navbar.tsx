"use client";

import React, { useState } from "react";
import { Menu, Bell } from "lucide-react";
import { cn } from "@/lib/utils";
import ProfileMenu from "@/components/ui/ProfileMenu";
import NotificationDropdown from "@/components/ui/NotificationDropdown";

export const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-[12px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] lg:pl-64 transition-all">
      <div className="flex justify-between items-center px-6 h-16 w-full">
        {/* Brand & Mobile Menu */}
        <div className="flex items-center gap-4">
          <button className="lg:hidden text-action hover:opacity-80 transition-opacity">
            <Menu className="w-6 h-6" />
          </button>
          <span className="text-xl font-black text-action tracking-tighter select-none">
            DACRIBEL
          </span>
        </div>

        {/* Action Icons & Profile */}
        <div className="flex items-center gap-4 relative">
          {/* Notifications */}
          <div 
            onClick={() => setIsNotificationOpen(true)}
            className="relative text-inactive hover:text-action transition-all cursor-pointer"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-action rounded-full border-2 border-background animate-pulse shadow-[0_0_10px_#f2b92f]"></span>
          </div>

          {/* Profile Avatar Container */}
          <div 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className={cn(
              "flex items-center gap-2 bg-secondary/30 px-3 py-1.5 rounded-full border transition-all group cursor-pointer",
              isProfileOpen ? "border-action bg-secondary/60 ring-4 ring-action/10" : "border-white/5 hover:bg-secondary/50"
            )}
          >
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-action to-action/60 overflow-hidden ring-1 ring-white/10 group-hover:ring-action/40 transition-all">
              <img
                alt="User Avatar"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8cBfjZhhzQzpkZcgbPpV-tfWj3wuDBwMWwgx1nUvf7ZrARA7Q6CW5IPZE8ml9HMvPzZGo75mnbA5JBbUf6oPIwzpg3weQ58y_N82VStN_50SGkwor6KpnR2NKr72URg24G8GK3pkjjN1q26QbvkDdLSc3f4WeKd4oX0Rl9lI0u2HXRfm1cOua7Oi30jk0c2Jrlf1brxl-2pD8oFeOzEN8WybutrvwSY88anhq0D61LHy2xG3HZTPFON5XdJIcSoSIyj4TXXeK31xi4"
              />
            </div>
          </div>

          {/* Perspective Dropdowns */}
          <ProfileMenu isOpen={isProfileOpen} />
          <NotificationDropdown 
            isOpen={isNotificationOpen} 
            onClose={() => setIsNotificationOpen(false)} 
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
