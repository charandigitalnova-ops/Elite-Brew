import React from "react";
import { ShoppingBag, Sparkles } from "lucide-react";

interface NavbarProps {
  currentTab: "menu" | "story" | "locations" | "checkout";
  setCurrentTab: (tab: "menu" | "story" | "locations" | "checkout") => void;
  cartItemCount: number;
  openSensoryCurator: () => void;
}

export default function Navbar({
  currentTab,
  setCurrentTab,
  cartItemCount,
  openSensoryCurator
}: NavbarProps) {
  return (
    <nav className="sticky top-0 z-40 bg-[#fefdfb]/90 backdrop-blur-md border-b border-[#f7f3ed] py-4 px-6 md:px-12transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <button
          onClick={() => setCurrentTab("menu")}
          className="flex flex-col items-start group select-none text-left"
          id="nav-logo"
        >
          <span className="font-serif text-lg md:text-xl tracking-wider font-bold uppercase text-[#161413] group-hover:text-[#b08d5b] transition-colors duration-200">
            ELITE BREW
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#898075] -mt-0.5">
            Artisanal Roasting & Botanical Studio
          </span>
        </button>

        {/* Nav Links */}
        <div className="hidden md:flex items-center space-x-10 text-xs tracking-[0.15em] uppercase font-medium">
          <button
            onClick={() => setCurrentTab("menu")}
            className={`transition-all duration-200 relative py-1 ${
              currentTab === "menu"
                ? "text-[#161413] font-semibold"
                : "text-[#898075] hover:text-[#161413]"
            }`}
            id="nav-btn-menu"
          >
            Menu
            {currentTab === "menu" && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#b08d5b] fade-in" />
            )}
          </button>

          <button
            onClick={() => setCurrentTab("story")}
            className={`transition-all duration-200 relative py-1 ${
              currentTab === "story"
                ? "text-[#161413] font-semibold"
                : "text-[#898075] hover:text-[#161413]"
            }`}
            id="nav-btn-story"
          >
            About Us
            {currentTab === "story" && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#b08d5b] fade-in" />
            )}
          </button>

          <button
            onClick={() => setCurrentTab("locations")}
            className={`transition-all duration-200 relative py-1 ${
              currentTab === "locations"
                ? "text-[#161413] font-semibold"
                : "text-[#898075] hover:text-[#161413]"
            }`}
            id="nav-btn-locations"
          >
            Contact
            {currentTab === "locations" && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#b08d5b] fade-in" />
            )}
          </button>
        </div>

        {/* Right side controls: Interactive Matchmaker tool + Shopping Bag */}
        <div className="flex items-center space-x-5">
          {/* Elegant Prompt Finder Hook */}
          <button
            onClick={openSensoryCurator}
            className="flex items-center space-x-2 bg-[#b08d5b]/10 hover:bg-[#b08d5b]/20 px-3 py-1.5 md:px-4 md:py-2 text-xs tracking-wider uppercase font-medium text-[#b08d5b] border border-[#b08d5b]/20 rounded-full transition-all duration-300"
            id="nav-btn-curator"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Flavor Finder</span>
          </button>

          {/* Checkout Shopping Bag */}
          <button
            onClick={() => setCurrentTab("checkout")}
            className={`relative p-2 rounded-full border transition-all duration-300 ${
              currentTab === "checkout"
                ? "border-[#161413] bg-[#161413] text-[#fefdfb]"
                : "border-[#f7f3ed] bg-[#f7f3ed] text-[#161413] hover:border-[#b08d5b] hover:text-[#b08d5b]"
            }`}
            aria-label="View Order checkout"
            id="nav-btn-bag"
          >
            <ShoppingBag className="w-[18px] h-[18px]" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#b08d5b] text-[#fefdfb] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-[#fefdfb]" id="nav-bag-badge">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Helper bar */}
      <div className="md:hidden flex items-center justify-around mt-4 pt-3 border-t border-[#f7f3ed] text-[10px] tracking-[0.15em] uppercase text-[#898075] font-medium">
        <button
          onClick={() => setCurrentTab("menu")}
          className={currentTab === "menu" ? "text-[#161413] font-bold" : ""}
          id="mobile-nav-menu"
        >
          Menu
        </button>
        <button
          onClick={() => setCurrentTab("story")}
          className={currentTab === "story" ? "text-[#161413] font-bold" : ""}
          id="mobile-nav-story"
        >
          About Us
        </button>
        <button
          onClick={() => setCurrentTab("locations")}
          className={currentTab === "locations" ? "text-[#161413] font-bold" : ""}
          id="mobile-nav-locations"
        >
          Contact
        </button>
      </div>
    </nav>
  );
}
