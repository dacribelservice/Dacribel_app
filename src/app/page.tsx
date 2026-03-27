import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";
import BottomNav from "@/components/shared/BottomNav";
import HeroBanner from "@/components/ui/HeroBanner";
import SearchBar from "@/components/ui/SearchBar";
import CategoryCircles from "@/components/ui/CategoryCircles";
import CategoryFilter from "@/components/ui/CategoryFilter";
import ProductGrid from "@/components/ui/ProductGrid";
import ProductBottomSheet from "@/components/ui/ProductBottomSheet";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-action selection:text-background">
      {/* Global Framework */}
      <Sidebar />
      <Navbar />

      {/* Main Content Area */}
      <main className="pt-24 pb-32 px-6 max-w-7xl mx-auto lg:ml-64 lg:px-12 transition-all">
        {/* Core Storefront Feed */}
        <section className="flex flex-col w-full">
          <HeroBanner />
          
          <section className="space-y-4">
            <SearchBar />
            <CategoryCircles />
          </section>

          <CategoryFilter />
          <ProductGrid />
          
          {/* Architectural Marker */}
          <div className="flex flex-col items-center gap-4 py-8 text-center mt-4">
            <div className="h-px w-24 bg-white/5 mx-auto"></div>
            <p className="text-inactive font-medium text-[10px] italic tracking-widest uppercase opacity-40">
              Vault System Fully Initialized.
            </p>
          </div>
        </section>
      </main>

      {/* Persistent Global Nav (Mobile) */}
      <BottomNav />

      {/* Contextual Purchase Overlay */}
      <ProductBottomSheet />
    </div>
  );
}
