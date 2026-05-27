import React, { useState } from "react";
import { MenuItem, CartItem } from "./types";
import { MENU_ITEMS } from "./data/menu";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MenuView from "./components/MenuView";
import StoryView from "./components/StoryView";
import LocationsView from "./components/LocationsView";
import OrderReview from "./components/OrderReview";
import ItemCustomizeModal from "./components/ItemCustomizeModal";
import SensoryCuratorFinder from "./components/SensoryCuratorFinder";
import { Clock, MapPin, Compass, Instagram } from "lucide-react";

export default function App() {
  const [currentTab, setCurrentTab] = useState<"menu" | "story" | "locations" | "checkout">("menu");
  
  // Pre-seed cart matching initial design screen precisely, so client gets true benchmark items on mounting
  const [cart, setCart] = useState<CartItem[]>([
    {
      cartId: "initial-latte-design",
      item: {
        ...MENU_ITEMS[0],
        name: "Signature Oat Latte", // Matches exact screenshot caption name
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYPucBWHeG1SKJkgYxtMXGbA17CdtSk_vfFRFRuEGIDDK9tncM5qTUKWWZUYaCzGs5dXxD3i1_uHOWrrwUABKnvZv1EtVYFJRwAZKIFYgCcA0TYuJDeBTsaPmVM-qnL9_Q_CPZhDISK5EBo6-FuAg6fiIsKZBnJij4o30yPYgn2Wptb0wfSdFYN6_c6S1HzzwBpa9ZgKj-hMrM_Jjdjz_Gaw72OyGfChQrUFmCqS0s6jjS87Ied25leemPVNb2-nCUhJL7YXYJE1I"
      },
      quantity: 1,
      selectedOptions: {
        "Size": "Medium Standard (12oz)",
        "Milk": "House Oat Milk",
        "Sweetness": "Subtle Standard"
      },
      unitPrice: 6.50,
      totalPrice: 6.50
    },
    {
      cartId: "initial-avocado-design",
      item: {
        ...MENU_ITEMS[8] || MENU_ITEMS[MENU_ITEMS.length - 2],
        name: "Avocado & Radish Tartine", // Matches exact screenshot caption name
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA83UeIp1KsnInPVuCq6wr21bUVE1ZQAb65r2SG_v1VLgCN5nzgQ4fctpvBIuFFWPJRDut0d85AffM1LNrhhmVsEvOp0uMsXepVpJOMBnXtdfI3Fx696w9Tyoz9Gu4qxjSm0RpNIlJiKo8mf9HE-FSOEQdDn55cTUXnXkFOZoNO_zPzxVi-n4G047da6K3kK2_HbbowYyU7Pja5_g3TZ8qn64hJkvq8cvLvLd5ywjCzNDqNGN_u0bhvM2E_vYahSovCle9MvUtoALg"
      },
      quantity: 1,
      selectedOptions: {
        "Egg Preparation": "Soft Poached Egg",
        "Gluten Option": "House Sourdough Toast"
      },
      unitPrice: 16.00,
      totalPrice: 16.00
    }
  ]);

  const [selectedItemForCustomize, setSelectedItemForCustomize] = useState<MenuItem | null>(null);
  const [isCuratorOpen, setIsCuratorOpen] = useState(false);

  // Cart action managers
  const handleAddCartItem = (newCartItem: CartItem) => {
    setCart((prevCart) => {
      const idx = prevCart.findIndex((i) => i.cartId === newCartItem.cartId);
      if (idx > -1) {
        // Increment quantity if identical customization match
        const clone = [...prevCart];
        clone[idx].quantity += newCartItem.quantity;
        clone[idx].totalPrice = clone[idx].quantity * clone[idx].unitPrice;
        return clone;
      }
      return [...prevCart, newCartItem];
    });
  };

  const handleQuickAdd = (item: MenuItem) => {
    // Generate default item and push
    const defaultCartItem: CartItem = {
      cartId: `${item.id}-default`,
      item,
      quantity: 1,
      selectedOptions: {},
      unitPrice: item.price,
      totalPrice: item.price
    };
    handleAddCartItem(defaultCartItem);
  };

  const handleUpdateQty = (cartId: string, delta: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.cartId === cartId) {
            const nextQty = Math.max(1, item.quantity + delta);
            return {
              ...item,
              quantity: nextQty,
              totalPrice: nextQty * item.unitPrice
            };
          }
          return item;
        })
    );
  };

  const handleRemoveItem = (cartId: string) => {
    setCart((prevCart) => prevCart.filter((i) => i.cartId !== cartId));
  };

  const cartItemCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen bg-[#fefdfb] flex flex-col justify-between selection:bg-[#b08d5b]/30">
      <div>
        {/* Navigation Control */}
        <Navbar
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          cartItemCount={cartItemCount}
          openSensoryCurator={() => setIsCuratorOpen(true)}
        />

        {/* Cinematic Backdrop Hero Banner (not showing on Checkout page to highlight receipts) */}
        {currentTab !== "checkout" && <Hero type={currentTab} />}

        {/* View Switch Dispatcher */}
        <main className="fade-in">
          {currentTab === "menu" && (
            <MenuView
              onSelectItem={setSelectedItemForCustomize}
              onQuickAdd={handleQuickAdd}
            />
          )}

          {currentTab === "story" && (
            <StoryView
              onSelectItem={setSelectedItemForCustomize}
              setCurrentTab={setCurrentTab}
            />
          )}

          {currentTab === "locations" && <LocationsView />}

          {currentTab === "checkout" && (
            <OrderReview
              cart={cart}
              setCart={setCart}
              onUpdateQty={handleUpdateQty}
              onRemoveItem={handleRemoveItem}
              setCurrentTab={setCurrentTab}
            />
          )}
        </main>
      </div>

      {/* Exquisite Slate Editorial Footer */}
      <footer className="bg-[#161413] text-[#f7f3ed] border-t border-[#161413] pt-16 pb-12 mt-20 font-sans text-xs">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="space-y-4">
            <span className="font-serif text-md tracking-wider font-bold block text-white uppercase">
              ELITE BREW
            </span>
            <p className="text-[#898075] text-[11px] leading-relaxed max-w-xs font-light">
              Designing slow, meditative environments centering micro-batch roasting, estate botanical leaves, and traditional water extraction frameworks.
            </p>
          </div>

          <div className="space-y-3">
            <span className="font-semibold uppercase text-white text-[10px] tracking-widest block">Sensory Spaces</span>
            <ul className="space-y-2 text-[#898075] font-light">
              <li className="flex items-center space-x-1.5 hover:text-[#b08d5b] transition-colors cursor-pointer" onClick={() => setCurrentTab("locations")}>
                <MapPin className="w-3.5 h-3.5" />
                <span>Arts District flagship Studio</span>
              </li>
              <li className="flex items-center space-x-1.5">
                <Compass className="w-3.5 h-3.5" />
                <span>Cupping classes & pairings</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="font-semibold uppercase text-white text-[10px] tracking-widest block">Atelier Hours</span>
            <ul className="space-y-2 text-[#898075] font-light">
              <li className="flex items-center space-x-1.5">
                <Clock className="w-3.5 h-3.5 text-[#b08d5b]" />
                <span>Weekdays: 7:00 AM – 5:00 PM</span>
              </li>
              <li className="flex items-center space-x-1.5">
                <Clock className="w-3.5 h-3.5 text-[#b08d5b]" />
                <span>Weekends: 8:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="font-semibold uppercase text-white text-[10px] tracking-widest block">Keep Dialogues Open</span>
            <p className="text-[#898075] text-[11px] font-light leading-relaxed">
              We periodically send micro-harvest announcements and invitations to pour rituals.
            </p>
            <div className="flex items-center space-x-2 text-[#b08d5b]">
              <Instagram className="w-4 h-4" />
              <span className="font-mono tracking-wider">@elitebrew</span>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 pt-6 border-t border-[#f7f3ed]/10 text-center text-[10px] text-[#898075] font-light flex flex-col sm:flex-row justify-between gap-4">
          <span>&copy; {new Date().getFullYear()} Elite Brew. All rights reserved. Made for Slow Living.</span>
          <div className="flex justify-center space-x-4">
            <span className="hover:text-white transition-colors cursor-pointer" onClick={() => setCurrentTab("menu")}>Menu</span>
            <span className="hover:text-white transition-colors cursor-pointer" onClick={() => setCurrentTab("story")}>About Us</span>
            <span className="hover:text-white transition-colors cursor-pointer" onClick={() => setCurrentTab("locations")}>Contact</span>
          </div>
        </div>
      </footer>

      {/* Modal and Finder Overlays */}
      <ItemCustomizeModal
        item={selectedItemForCustomize}
        onClose={() => setSelectedItemForCustomize(null)}
        onAddCartItem={handleAddCartItem}
      />

      <SensoryCuratorFinder
        isOpen={isCuratorOpen}
        onClose={() => setIsCuratorOpen(false)}
        onSelectItem={setSelectedItemForCustomize}
        onQuickAdd={handleQuickAdd}
      />
    </div>
  );
}
