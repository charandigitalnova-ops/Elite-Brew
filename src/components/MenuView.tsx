import React, { useState } from "react";
import { MenuItem } from "../types";
import { MENU_ITEMS } from "../data/menu";
import { Sparkles, ArrowRight, Heart } from "lucide-react";

interface MenuViewProps {
  onSelectItem: (item: MenuItem) => void;
  onQuickAdd: (item: MenuItem) => void;
}

export default function MenuView({ onSelectItem, onQuickAdd }: MenuViewProps) {
  const [activeCategory, setActiveCategory] = useState<"all" | "coffee" | "tea" | "pastries" | "brunch">("all");

  const categories = [
    { id: "all", label: "Journal All" },
    { id: "coffee", label: "Signature Coffee" },
    { id: "tea", label: "Botanical Tea" },
    { id: "pastries", label: "Dawn Pastries" },
    { id: "brunch", label: "All-Day Brunch" }
  ];

  const categoryIntros = {
    coffee: {
      title: "Signature Coffee Roasting Program",
      description: "Our beans are sourced from small-batch sustainable farms and roasted locally in small rotating drums to preserve the delicate, volatile oil and aromatic profiles of each origin."
    },
    tea: {
      title: "Botanical Tea Selection",
      description: "Hand-blended green tea, wellness infusions, and stone-ground matcha prepared traditionally or paired with house-made milk to enhance the botanical experience."
    },
    pastries: {
      title: "Naturally Fermented Pastries",
      description: "Baked at dawn. Our sourdough-based pastry program features wild fermentation cultures, ancient heritage flours, and grass-fed butter for multi-layered wood-fired depth."
    },
    brunch: {
      title: "Sensory All-Day Brunch Artistry",
      description: "Crafted with locally sowed herbs, cold-pressed raw seed oils, and farm-gathered ingredients tailored for restorative nourishment."
    }
  };

  const filteredItems = activeCategory === "all"
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  // Group items by category to render themed sections when "all" is active
  const menuSections = activeCategory === "all"
    ? (["coffee", "tea", "pastries", "brunch"] as const)
    : [activeCategory];

  return (
    <div className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
      
      {/* Category Navigation Bar */}
      <div className="flex flex-wrap justify-center gap-2 mb-16 border-b border-[#f7f3ed] pb-6">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id as any)}
            className={`px-5 py-2 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 rounded-full ${
              activeCategory === cat.id
                ? "bg-[#161413] text-[#fefdfb] shadow-sm"
                : "text-[#898075] hover:text-[#161413] hover:bg-[#f7f3ed]"
            }`}
            id={`filter-btn-${cat.id}`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Render Categorized Sections */}
      <div className="space-y-24">
        {menuSections.map((sectionCategory) => {
          const sectionItems = MENU_ITEMS.filter((i) => i.category === sectionCategory);
          const intro = categoryIntros[sectionCategory];

          return (
            <div key={sectionCategory} className="fade-in scroll-mt-24" id={`section-${sectionCategory}`}>
              {/* Category Editorial Intro header */}
              <div className="max-w-3xl mb-12 border-l-2 border-[#b08d5b] pl-6">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#b08d5b] font-semibold block mb-2">
                  Category Showcase
                </span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#161413] mb-3 capitalize">
                  {intro.title}
                </h2>
                <p className="font-sans text-xs md:text-sm text-[#898075] leading-relaxed font-light">
                  {intro.description}
                </p>
              </div>

              {/* Special Tea Highlight Feature with the teapot picture as seen in references */}
              {sectionCategory === "tea" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 bg-[#f7f3ed]/60 rounded-xl p-6 md:p-8 border border-[#f7f3ed]">
                  <div className="lg:col-span-4 rounded-lg overflow-hidden h-64 lg:h-auto min-h-[220px]">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk7W_D-0TLUzUZcgtkNAHrmow56_5NlmQm-fzSdPX40uS9KlAkOwXlPreH_0xZRVEu9fsRAnIsSmq-_qDi6aeBanJDdkvsmW1fY0Yya6iJFiAXxR64rwwDI29kAHADTcVt_hrwq_B5BM7XqeXCGzpXNdDIeJ8Ynbh-m1DjW-F7IDVOK-DJq6-FEFSegdeM92hgOs2JMH9zw32fAUFo3W8l9TapZyznTjUR0O4IMOh-qASlICf3boIezWrriFMyYnAl8DtUJ3x61Uw"
                      alt="Botanical Teapot Service"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="lg:col-span-8 flex flex-col justify-center">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#b08d5b] font-bold mb-1">Steeped Narrative</span>
                    <h3 className="font-serif text-xl font-bold text-[#161413] mb-3">
                      Midnight Jasmine Pearl Service
                    </h3>
                    <p className="font-sans text-xs text-[#898075] leading-relaxed max-w-xl mb-4 font-light">
                      Hand-rolled green tea pearls infused with the deep aroma of fresh evening-picked jasmine blossoms. Our tea program integrates premium loose estate harvests poured into hand-thrown stone ceramic teapots, calibrated to exactly ninety degrees for full floral extraction.
                    </p>
                    <div className="flex items-center space-x-4">
                      <span className="font-serif font-semibold text-sm text-[#161413]">₹680.00 per table service</span>
                      <button
                        onClick={() => {
                          const item = MENU_ITEMS.find(it => it.id === "m-jasmine-pearl");
                          if (item) onSelectItem(item);
                        }}
                        className="bg-[#161413] hover:bg-[#b08d5b] text-[#fefdfb] text-xs uppercase tracking-widest px-4 py-2 font-medium rounded transition-colors duration-300"
                      >
                        Order Tea Service
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Grid of Standard items */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sectionItems.map((item) => (
                  <div
                    key={item.id}
                    className="group bg-[#fefdfb] rounded-lg border border-[#f7f3ed] overflow-hidden flex flex-col justify-between hover:shadow-lg hover:border-[#b08d5b]/30 transition-all duration-300 transform hover:-translate-y-1"
                    id={`menu-card-${item.id}`}
                  >
                    {/* Item Image Container */}
                    <div>
                      <div className="relative aspect-[4/3] bg-[#f7f3ed] overflow-hidden">
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-[#161413]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Dynamic category badge */}
                        <span className="absolute top-3 left-3 bg-[#fefdfb]/95 backdrop-blur-sm px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-[#161413] rounded shadow-xs">
                          {item.category === "coffee" ? "Slow roast" : item.category === "tea" ? "Estate" : item.category === "pastries" ? "Dawn Bake" : "All-Day"}
                        </span>
                      </div>

                      {/* Content Section */}
                      <div className="p-6">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 className="font-serif text-lg font-bold text-[#161413] cursor-pointer hover:text-[#b08d5b] transition-colors" onClick={() => onSelectItem(item)}>
                            {item.name}
                          </h3>
                          <span className="font-serif font-semibold text-md text-[#161413] shrink-0">
                            ₹{item.price.toFixed(2)}
                          </span>
                        </div>

                        {/* Tag badges */}
                        {item.tags && item.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[9px] uppercase tracking-wider font-medium text-[#b08d5b] bg-[#b08d5b]/5 border border-[#b08d5b]/10 px-1.5 py-0.5 rounded-sm"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        <p className="font-sans text-xs text-[#898075] leading-relaxed font-light line-clamp-3">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Trigger Buttons */}
                    <div className="p-6 pt-0 border-t border-[#fefdfb] mt-auto">
                      <div className="flex items-center space-x-2 pt-4">
                        {item.customizable ? (
                          <button
                            onClick={() => onSelectItem(item)}
                            className="w-full flex items-center justify-center space-x-2 bg-transparent hover:bg-[#161413] text-[#161413] hover:text-[#fefdfb] text-xs uppercase tracking-widest py-2.5 px-4 border border-[#161413] rounded font-medium transition-all duration-300"
                            id={`btn-customize-${item.id}`}
                          >
                            <span>Personalize</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        ) : (
                          <button
                            onClick={() => onQuickAdd(item)}
                            className="w-full bg-[#161413] hover:bg-[#b08d5b] text-[#fefdfb] text-xs uppercase tracking-widest py-2.5 px-4 rounded font-medium transition-colors duration-300"
                            id={`btn-add-${item.id}`}
                          >
                            Add to Order
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
