import React, { useState, useEffect } from "react";
import { MenuItem, CartItem } from "../types";
import { X, Check, ShoppingBag, Info } from "lucide-react";

interface ItemCustomizeModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddCartItem: (cartItem: CartItem) => void;
}

export default function ItemCustomizeModal({
  item,
  onClose,
  onAddCartItem
}: ItemCustomizeModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [customInstructions, setCustomInstructions] = useState("");
  const [currentPrice, setCurrentPrice] = useState(0);

  // Reset states on item change
  useEffect(() => {
    if (!item) return;

    // Initialize with default/first choices
    const initialOps: Record<string, string> = {};
    if (item.options) {
      item.options.forEach((opt) => {
        initialOps[opt.name] = opt.choices[0];
      });
    }

    setSelectedOptions(initialOps);
    setQuantity(1);
    setCustomInstructions("");
  }, [item]);

  // Recalculate price dynamically whenever selections or quantity changes
  useEffect(() => {
    if (!item) return;

    let base = item.price;
    if (item.options) {
      item.options.forEach((opt) => {
        const chosen = selectedOptions[opt.name];
        if (chosen && opt.priceAdjustments?.[chosen]) {
          base += opt.priceAdjustments[chosen];
        }
      });
    }

    setCurrentPrice(base);
  }, [item, selectedOptions]);

  if (!item) return null;

  const handleOptionChange = (optName: string, choiceName: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [optName]: choiceName
    }));
  };

  const handleAddToCart = () => {
    // Generate unique Cartesian product cart ID to bundle equivalent customizations
    const opsStr = Object.entries(selectedOptions)
      .map(([k, v]) => `${k}:${v}`)
      .join("|");
    const cartId = `${item.id}-${opsStr || "default"}`;

    const newCartItem: CartItem = {
      cartId,
      item,
      quantity,
      selectedOptions,
      customInstructions: customInstructions.trim() || undefined,
      unitPrice: currentPrice,
      totalPrice: currentPrice * quantity
    };

    onAddCartItem(newCartItem);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-[#161413]/70 backdrop-blur-sm animate-fade-in">
      
      {/* Container Card */}
      <div className="relative bg-[#fefdfb] w-full max-w-lg rounded-2xl overflow-hidden border border-[#f7f3ed] shadow-2xl flex flex-col max-h-[90vh]">
        
        {/* Header bar */}
        <div className="sticky top-0 bg-[#fefdfb] border-b border-[#f7f3ed] p-5 flex items-center justify-between z-10">
          <div className="text-left">
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#b08d5b] font-bold block mb-0.5">
              Customize Atelier Recipe
            </span>
            <h3 className="font-serif text-lg font-bold text-[#161413]">
              {item.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-[#898075] hover:text-[#161413] p-1.5 rounded-full hover:bg-[#f7f3ed] transition-colors"
            aria-label="Close dialog"
            id="close-customize-modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Form Body content */}
        <div className="overflow-y-auto p-6 space-y-6 text-left">
          
          {/* Main Photo Banner */}
          <div className="rounded-xl overflow-hidden aspect-[16/10] bg-[#f7f3ed] shadow-inner mb-4">
            <img
              src={item.imageUrl}
              alt={item.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Description Block */}
          <div className="space-y-2">
            <p className="font-sans text-xs md:text-sm text-[#898075] font-light leading-relaxed">
              {item.description}
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {item.tags?.map((tag) => (
                <span key={tag} className="text-[9px] uppercase tracking-wider text-[#b08d5b] bg-[#b08d5b]/5 border border-[#b08d5b]/10 px-2 py-0.5 rounded-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Options Selectors */}
          {item.options && item.options.length > 0 && (
            <div className="space-y-6 pt-4 border-t border-[#f7f3ed]">
              {item.options.map((option) => {
                const activeVal = selectedOptions[option.name];
                return (
                  <div key={option.name} className="space-y-3" id={`option-group-${option.name}`}>
                    <label className="block text-[#161413] font-bold uppercase tracking-wider text-[10px]">
                      {option.name}
                    </label>

                    <div className="grid grid-cols-2 gap-3">
                      {option.choices.map((choice) => {
                        const adj = option.priceAdjustments?.[choice];
                        const isChosen = activeVal === choice;
                        return (
                          <button
                            key={choice}
                            type="button"
                            onClick={() => handleOptionChange(option.name, choice)}
                            className={`p-3 relative rounded-lg border text-xs text-left transition-all duration-200 ${
                              isChosen
                                ? "border-[#161413] bg-[#161413] text-[#fefdfb]"
                                : "border-[#f7f3ed] hover:border-[#b08d5b] bg-[#fefdfb]"
                            }`}
                          >
                            <span className="block font-medium">{choice}</span>
                            {adj && adj !== 0 && (
                              <span className={`block text-[9px] mt-0.5 ${isChosen ? "text-[#b08d5b]" : "text-[#898075]"}`}>
                                {adj > 0 ? `+₹${adj.toFixed(2)}` : `-₹${Math.abs(adj).toFixed(2)}`}
                              </span>
                            )}
                            {isChosen && (
                              <Check className="absolute top-2 right-2 w-3.5 h-3.5 text-[#b08d5b]" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Special notes */}
          <div className="space-y-2 pt-4 border-t border-[#f7f3ed]">
            <label className="block text-[#161413] font-bold uppercase tracking-wider text-[10px]">
              Special accommodations
            </label>
            <input
              type="text"
              placeholder="e.g. extra maple syrup, no ice, decaf shot, light toast..."
              value={customInstructions}
              onChange={(e) => setCustomInstructions(e.target.value)}
              className="w-full px-3 py-2.5 bg-transparent border border-[#f7f3ed] rounded text-xs focus:outline-none focus:border-[#b08d5b] transition-colors"
            />
          </div>

        </div>

        {/* Footer actions bar */}
        <div className="sticky bottom-0 bg-[#fefdfb] border-t border-[#f7f3ed] p-5 flex items-center justify-between z-10">
          
          {/* Quantity selector */}
          <div className="flex items-center border border-[#f7f3ed] bg-transparent rounded">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="p-2 text-[#898075] hover:text-[#161413] transition-colors"
              aria-label="Decrease quantity"
            >
              <X className="w-3 h-3 rotate-45" /> {/* Simple minus represented cleanly or plain X */}
            </button>
            <span className="px-3 text-xs font-mono font-medium text-[#161413]" id="customize-quantity-display">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="p-2 text-[#898075] hover:text-[#161413] transition-colors"
              aria-label="Increase quantity"
            >
              <Check className="w-3 h-3 scale-75 opacity-0 absolute" /> {/* Placeholder */}
              <span className="font-semibold text-xs font-sans px-1">+</span>
            </button>
          </div>

          {/* Add Cart Button */}
          <button
            onClick={handleAddToCart}
            className="flex items-center space-x-2 bg-[#161413] hover:bg-[#b08d5b] text-[#fefdfb] text-xs uppercase tracking-widest font-semibold py-3 px-6 rounded transition-colors duration-300"
            id="add-customized-to-order"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Add &bull; ₹{(currentPrice * quantity).toFixed(2)}</span>
          </button>

        </div>

      </div>
    </div>
  );
}
