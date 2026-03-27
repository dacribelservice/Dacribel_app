import React from "react";
import { OrderHistoryList } from "@/components/ui/OrderHistoryList";
import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";
import BottomNav from "@/components/shared/BottomNav";
import ProductBottomSheet from "@/components/ui/ProductBottomSheet";

export const metadata = {
  title: "Order History | Dacribel",
  description: "View your purchase history and gift card codes.",
};

export default function OrdersPage() {
  return (
    <div className="min-h-screen bg-background text-white select-none transition-all duration-500">
      {/* Global Framework */}
      <Sidebar />
      <Navbar />

      {/* Main Content Area */}
      <main className="pt-24 pb-32 px-6 max-w-7xl mx-auto lg:ml-64 lg:px-12 transition-all">
        <OrderHistoryList />
      </main>

      {/* Persistent Global Nav (Mobile) */}
      <BottomNav />

      {/* Contextual Purchase Overlay */}
      <ProductBottomSheet />
    </div>
  );
}
