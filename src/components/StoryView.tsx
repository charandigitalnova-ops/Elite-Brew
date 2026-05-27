import React from "react";
import { MenuItem } from "../types";
import { MENU_ITEMS } from "../data/menu";
import { Coffee, ArrowRight, Compass } from "lucide-react";

interface StoryViewProps {
  onSelectItem: (item: MenuItem) => void;
  setCurrentTab: (tab: "menu" | "story" | "locations" | "checkout") => void;
}

export default function StoryView({ onSelectItem, setCurrentTab }: StoryViewProps) {
  // Try to bind seasonal order clicks to equivalent menu actions
  const orderSourdough = () => {
    const item = MENU_ITEMS.find((i) => i.id === "m-sourdough-croissant") || MENU_ITEMS[4];
    onSelectItem(item);
  };

  const orderPourOver = () => {
    const item = MENU_ITEMS.find((i) => i.id === "m-amber-cold-brew") || MENU_ITEMS[1];
    onSelectItem(item);
  };

  const orderGrainToast = () => {
    const item = MENU_ITEMS.find((i) => i.id === "m-avocado-toast") || MENU_ITEMS[6];
    onSelectItem(item);
  };

  return (
    <div className="py-16 px-6 md:px-12 max-w-7xl mx-auto space-y-24">
      
      {/* Sourcing Creed Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="story-creed-module">
        <div className="lg:col-span-7 rounded-xl overflow-hidden shadow-md aspect-[16/10] bg-[#f7f3ed]">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2u_Q5CYPSadP2lG-qTgkGTbCwnIvVu3O8EmpdinIENIpMOw0vphL1-iP2o3TJWgEkIqAqccYZtzh2Een3jlCvCfAT2xeucQmMj1xwhlrWTlbzhXzf-l4JQObPT6KYGPHCVY-qM9sfkVOPs2OzfKYrpmry-vB9oFlLB0bmZFL3wYFGormqz_RrJVvqv54UmNcJskv3CxmSLIxQIhJKdmvJk5t_Zj6PPsOAl8L3eki-IF9f8P07fL-xuyeDab2iJnf1e4Uan_dP-Y0"
            alt="Estate Coffee Processing Sunbelt"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transform hover:scale-[1.03] transition-transform duration-700 ease-out"
          />
        </div>
        
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center space-x-2 text-[#b08d5b]">
            <Compass className="w-4 h-4" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold">Artisanal Creed</span>
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#161413] tracking-tight leading-tight">
            Beyond the Bean: <br />
            <span className="text-[#b08d5b] italic">A Sacred Origin</span>
          </h2>
          
          <p className="font-sans text-sm text-[#898075] font-light leading-relaxed">
            We believe that coffee is a dialogue between the earth and the artisan. Each batch we select is the result of thousands of hours of sun, rain, and careful cultivation by family-owned estates.
          </p>
          
          <p className="font-sans text-sm text-[#898075] font-light leading-relaxed">
            Our roasting process is intentional and meditative. We listen for the <span className="text-[#161413] font-medium">&quot;first crack,&quot;</span> a signal that the bean&apos;s inherent sweetness has reached its peak, ensuring that every cup tells the story of its landscape.
          </p>

          <div className="pt-4 border-t border-[#f7f3ed] flex items-center space-x-4">
            <button
              onClick={() => setCurrentTab("menu")}
              className="flex items-center space-x-2 bg-[#161413] hover:bg-[#b08d5b] text-[#fefdfb] text-xs uppercase tracking-widest px-5 py-3 rounded font-medium transition-colors"
            >
              <span>Explore Sensory Menu</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Seasonal Menu Curated Row Showcase */}
      <div className="space-y-12" id="story-seasonal-showcase">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs tracking-[0.3em] font-semibold text-[#b08d5b] uppercase block">
            Rotating Exclusives
          </span>
          <h2 className="font-serif text-2xl md:text-3.5xl font-bold text-[#161413]">
            The Seasonal Menu
          </h2>
          <div className="w-8 h-[1.5px] bg-[#b08d5b] mx-auto" />
          <p className="font-sans text-xs text-[#898075] font-light">
            Our micro-batches rotate with the natural cycles. Taste-test our latest botanical pairings available for immediate pick-up.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Artisan Croissant */}
          <div className="group bg-[#fefdfb] border border-[#f7f3ed] rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="relative aspect-[4/3] bg-[#f7f3ed] overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCC8Ia75A2TvrTLwHGR8L9T7dduTF7jrAw6djLupbvg-gAUaymUONgneeydjbQP65P5-kq0kBH5Cxy9_2VI1zIuRVU8kjB3FOILvCwkXxy7AZOeceu-vzjXVJMda07I1bfT04jHGvIhrRVhwkrW483P8Jj2HxH0sB1K7kE7igkLkClfYKBiYTX-meeL0uCBefWKAf_PqIyQIjf6GaxkiWtdaEgHyC4bOysqMNap3JW9ASPt39SlrxVk6912-uiAo45RjaTO7omlPU"
                alt="Artisan Sourdough Lamination"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute bottom-3 right-3 bg-[#161413] text-[#fefdfb] font-serif text-xs px-2.5 py-1 rounded font-semibold shadow-xs">
                ₹520.00
              </span>
            </div>
            <div className="p-6 space-y-2">
              <h3 className="font-serif text-lg font-bold text-[#161413] group-hover:text-[#b08d5b] transition-colors">
                Artisan Sourdough Croissant
              </h3>
              <p className="font-sans text-xs text-[#898075] font-light leading-relaxed">
                48-hour fermented dough, hand-laminated with grass-fed cultured butter for ultimate flakiness and buttery crunch.
              </p>
              <button
                onClick={orderSourdough}
                className="pt-2 text-[#161413] hover:text-[#b08d5b] text-xs uppercase tracking-widest font-semibold flex items-center space-x-1 transition-colors"
              >
                <span>Select & Customize</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Pour Over */}
          <div className="group bg-[#fefdfb] border border-[#f7f3ed] rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="relative aspect-[4/3] bg-[#f7f3ed] overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx1ksnsCP0xr-RlTcDJ4oNI89VxrAjNkZ6H6foMcYVjHmhIcK4owgrCk6TkrzHEe1bxNj2pSxcUC7U5AviWzQHsRcueas6AtZxA84Pde8ReIgjlPH3nCBjL50if98SeS1jyLjpHy4LFNJQiSrpzraZzqkowhRjwqL7nNiLmFMLtLvxH10dTkF2UjiOxrj2FNIc-JEqzbhNLQ-YfUDXz_AolH7OuIjtg7bfZqdQ7BhneZ7yRE0uwM3vaWNfkd1Mmfb5j-tZgibAtvE"
                alt="Single Origin Pour Over"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute bottom-3 right-3 bg-[#161413] text-[#fefdfb] font-serif text-xs px-2.5 py-1 rounded font-semibold shadow-xs">
                ₹560.00
              </span>
            </div>
            <div className="p-6 space-y-2">
              <h3 className="font-serif text-lg font-bold text-[#161413] group-hover:text-[#b08d5b] transition-colors">
                Single Origin Pour Over
              </h3>
              <p className="font-sans text-xs text-[#898075] font-light leading-relaxed">
                Slow-brewed through fine Japanese bleached flax-paper, unlocking notes of lavender honey and stone apricots.
              </p>
              <button
                onClick={orderPourOver}
                className="pt-2 text-[#161413] hover:text-[#b08d5b] text-xs uppercase tracking-widest font-semibold flex items-center space-x-1 transition-colors"
              >
                <span>Select & Customize</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Heirloom Grain Toast */}
          <div className="group bg-[#fefdfb] border border-[#f7f3ed] rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="relative aspect-[4/3] bg-[#f7f3ed] overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj8vyuUyN-UTanpa2m28fprTAhMlHx2ZtdnM4SNkp4Zsd5lRwrI-ouKUS9HTbAVP0daA_eCk_rvm7kD5Z-vy6LJ2ZS8j_GSD6oet98kAgKWbrw2bKSgJJTy_rJ9obmtKnG1w0ASYdDi25BsqYlF_MtCRr_UvG6oWkQuWnib5IzonmrvlhDuGvDz7skUiVQTv8XSVJoOnHtt7Rp3EM82rpDL6Dmp3NexbbJ8zkwE3VwF-IEj_M_6iCLdzK8_KlKzVrcuI74FFV-vRI"
                alt="Heirloom seed slice"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute bottom-3 right-3 bg-[#161413] text-[#fefdfb] font-serif text-xs px-2.5 py-1 rounded font-semibold shadow-xs">
                ₹1120.00
              </span>
            </div>
            <div className="p-6 space-y-2">
              <h3 className="font-serif text-lg font-bold text-[#161413] group-hover:text-[#b08d5b] transition-colors">
                Heirloom Grain Toast
              </h3>
              <p className="font-sans text-xs text-[#898075] font-light leading-relaxed">
                Slices of naturally charred einkorn & spelt sourdough topped with organic wild mountain butter and honeycomb.
              </p>
              <button
                onClick={orderGrainToast}
                className="pt-2 text-[#161413] hover:text-[#b08d5b] text-xs uppercase tracking-widest font-semibold flex items-center space-x-1 transition-colors"
              >
                <span>Select & Customize</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
