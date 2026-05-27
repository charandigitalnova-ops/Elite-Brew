import React, { useState } from "react";
import { CartItem, MenuItem } from "../types";
import { Plus, Minus, X, ArrowRight, CornerDownRight, Check, Sparkles, Utensils, MessageSquare, Clock } from "lucide-react";
import { MENU_ITEMS } from "../data/menu";

interface OrderReviewProps {
  cart: CartItem[];
  setCart: (cart: CartItem[]) => void;
  onUpdateQty: (cartId: string, delta: number) => void;
  onRemoveItem: (cartId: string) => void;
  setCurrentTab: (tab: "menu" | "story" | "locations" | "checkout") => void;
}

export default function OrderReview({
  cart,
  setCart,
  onUpdateQty,
  onRemoveItem,
  setCurrentTab
}: OrderReviewProps) {
  const [tableNumber, setTableNumber] = useState("12");
  const [customerName, setCustomerName] = useState("Eleanor Vance");
  const [customerEmail, setCustomerEmail] = useState("eleanor@sensory.co");
  const [specialInstructions, setSpecialInstructions] = useState("");
  const [isCatering, setIsCatering] = useState(false);
  
  // Checkout success receipt state
  const [receipt, setReceipt] = useState<{
    id: string;
    queueNumber: number;
    subtotal: number;
    tax: number;
    total: number;
    items: { name: string; qty: number; options: string }[];
  } | null>(null);

  // Math variables
  const subtotal = cart.reduce((acc, curr) => acc + curr.totalPrice, 0);
  const taxRate = 0.05; // 5% GST
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  // Checkout handling
  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;

    // Generate random mock receipt
    const mockReceipt = {
      id: "SEN-" + Math.floor(100000 + Math.random() * 900000),
      queueNumber: Math.floor(12 + Math.random() * 88),
      subtotal,
      tax,
      total,
      items: cart.map((c) => ({
        name: c.item.name,
        qty: c.quantity,
        options: Object.entries(c.selectedOptions)
          .map(([k, v]) => `${k}: ${v}`)
          .join(", ")
      }))
    };

    setReceipt(mockReceipt);
    setCart([]); // Clear original cart after order
  };

  // One-click upsell check: check if Cardamom Bun is in current cart
  const hasCardamomBun = cart.some((c) => c.item.id === "m-cardamom-knot");
  const cardamomBun = MENU_ITEMS.find((it) => it.id === "m-cardamom-knot")!;

  const handleAddCardamomUpsell = () => {
    // Add default cardamom bun
    const cardamomId = `m-cardamom-knot-default`;
    
    // Check if default is already present (unlikely if hasCardamomBun is false, but safe)
    const existing = cart.find((c) => c.cartId === cardamomId);
    if (existing) {
      onUpdateQty(cardamomId, 1);
    } else {
      const newItem: CartItem = {
        cartId: cardamomId,
        item: cardamomBun,
        quantity: 1,
        selectedOptions: { "Serving Preference": "Warm / Oven Toasted" },
        unitPrice: cardamomBun.price,
        totalPrice: cardamomBun.price
      };
      setCart([...cart, newItem]);
    }
  };

  if (receipt) {
    return (
      <div className="py-16 px-6 md:px-12 max-w-xl mx-auto fade-in" id="receipt-screen">
        <div className="bg-[#fefdfb] border-2 border-[#161413] rounded-2xl p-8 md:p-10 shadow-xl space-y-10 relative overflow-hidden">
          
          {/* Visual Coffee Dripper background accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#b08d5b]/5 rounded-full blur-2xl -mr-10 -mt-10" />
          
          <div className="text-center space-y-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#b08d5b] font-bold block">
              Selection Confirmed
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#161413] tracking-tight">
              Order Registered
            </h2>
            <div className="font-mono text-[11px] text-[#898075] tracking-wider">
              RECEIPT ID: {receipt.id}
            </div>
            <div className="w-12 h-0.5 bg-[#b08d5b] mx-auto mt-4" />
          </div>

          {/* Large Queue Display */}
          <div className="bg-[#f7f3ed] rounded-xl p-6 text-center border border-[#161413]/5">
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#898075] font-semibold block mb-1">
              Atelier Brewing Queue No.
            </span>
            <div className="font-serif text-5xl md:text-6xl font-bold text-[#161413] tracking-wider my-1">
              #{receipt.queueNumber}
            </div>
            <div className="flex items-center justify-center space-x-1.5 text-[10px] text-[#b08d5b] font-medium uppercase mt-2">
              <Clock className="w-3.5 h-3.5 animate-pulse" />
              <span>Brewing Estimations: 8-12 minutes</span>
            </div>
          </div>

          {/* Details */}
          <div className="border-t border-b border-[#f7f3ed] py-6 space-y-4">
            <h3 className="font-serif font-bold text-[#161413] text-sm uppercase tracking-wider">Selected Creations</h3>
            <ul className="space-y-3">
              {receipt.items.map((item, id) => (
                <li key={id} className="flex justify-between text-xs">
                  <div className="space-y-0.5">
                    <span className="font-medium text-[#161413]">
                      {item.qty}x {item.name}
                    </span>
                    {item.options && (
                      <span className="text-[10px] text-[#898075] block">
                        {item.options}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Metadata */}
          <div className="bg-[#f7f3ed]/40 p-4 rounded-lg space-y-2 text-xs text-[#898075]">
            <div className="flex justify-between">
              <span>Host Customer:</span>
              <span className="font-semibold text-[#161413]">{customerName}</span>
            </div>
            <div className="flex justify-between">
              <span>Co-ordinations:</span>
              <span className="font-mono text-[#161413]">{customerEmail}</span>
            </div>
            <div className="flex justify-between">
              <span>Collection Location:</span>
              <span className="font-semibold text-[#161413]">Atelier Table {tableNumber}</span>
            </div>
            {specialInstructions && (
              <div className="pt-2 border-t border-[#f7f3ed] mt-1">
                <span className="font-semibold text-[#161413] block mb-0.5 uppercase text-[9px] tracking-wider">Special Accommodations:</span>
                <span className="italic block font-light">{specialInstructions}</span>
              </div>
            )}
          </div>

          {/* Pricing Ledger */}
          <div className="space-y-2.5 pt-4 text-xs">
            <div className="flex justify-between text-[#898075]">
              <span>Subtotal</span>
              <span>₹{receipt.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-[#898075]">
              <span>GST (5.00%)</span>
              <span>₹{receipt.tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-base font-bold text-[#161413] pt-2 border-t border-[#f7f3ed]">
              <span>Total Settled</span>
              <span className="font-serif text-lg">₹{receipt.total.toFixed(2)}</span>
            </div>
          </div>

          {/* Reset Action */}
          <div className="text-center pt-4">
            <button
              onClick={() => {
                setReceipt(null);
                setCurrentTab("menu");
              }}
              className="w-full bg-[#161413] hover:bg-[#b08d5b] text-[#fefdfb] text-xs uppercase tracking-widest py-3 px-4 rounded font-semibold transition-colors duration-300"
            >
              Order New Selection
            </button>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="py-16 px-6 md:px-12 max-w-7xl mx-auto" id="order-review-layout">
      
      <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
        <span className="text-xs text-[#b08d5b] tracking-[0.25em] font-medium uppercase">Pre-order Hub</span>
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#161413]">Review Flight Order</h2>
        <div className="w-8 h-[1px] bg-[#b08d5b] mx-auto" />
      </div>

      {cart.length === 0 ? (
        <div className="text-center py-16 space-y-6 bg-[#fefdfb] border border-[#f7f3ed] rounded-2xl max-w-xl mx-auto p-8" id="empty-cart-state">
          <div className="w-12 h-12 bg-[#b08d5b]/10 rounded-full flex items-center justify-center mx-auto text-[#b08d5b]">
            <Utensils className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-xl font-bold text-[#161413]">Bag Unpopulated</h3>
          <p className="font-sans text-xs text-[#898075] max-w-xs mx-auto leading-relaxed">
            There are currently no hand-crafted preparations in your atelier bag. Continue browsing the menu to populate your card.
          </p>
          <button
            onClick={() => setCurrentTab("menu")}
            className="bg-[#161413] hover:bg-[#b08d5b] text-[#fefdfb] text-xs uppercase tracking-widest px-6 py-3 rounded font-medium transition-colors"
          >
            Explore Sensory Menu
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Cart Items table list */}
          <div className="lg:col-span-7 space-y-6" id="cart-items-collection">
            <h3 className="font-serif text-xl font-bold text-[#161413] border-b border-[#f7f3ed] pb-3">
              Selected Creations ({cart.reduce((a,c) => a+c.quantity, 0)})
            </h3>
            
            <div className="divide-y divide-[#f7f3ed]">
              {cart.map((cartItem) => (
                <div
                  key={cartItem.cartId}
                  className="py-6 flex gap-4 md:gap-6 animate-pulse-once"
                  id={`cart-item-${cartItem.cartId}`}
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-[#f7f3ed] rounded-lg overflow-hidden shrink-0">
                    <img
                      src={cartItem.item.imageUrl}
                      alt={cartItem.item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-serif font-bold text-base text-[#161413]">
                          {cartItem.item.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(cartItem.cartId)}
                          className="text-[#898075] hover:text-[#161413] p-1 rounded-full hover:bg-[#f7f3ed] transition-colors"
                          aria-label="Remove item"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Display Selected Customizations */}
                      {Object.keys(cartItem.selectedOptions).length > 0 && (
                        <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1 text-[10px] text-[#898075] font-light">
                          {Object.entries(cartItem.selectedOptions).map(([key, val]) => (
                            <span key={key} className="flex items-center">
                              <CornerDownRight className="w-2.5 h-2.5 mr-1 text-[#b08d5b]" />
                              <span className="font-medium text-[#161413] capitalize mr-0.5">{key}:</span> {val}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="flex justify-between items-center mt-4">
                      {/* Qty increment controls */}
                      <div className="flex items-center border border-[#f7f3ed] bg-[#fefdfb] rounded-sm">
                        <button
                          onClick={() => onUpdateQty(cartItem.cartId, -1)}
                          className="px-2 py-1 text-[#898075] hover:text-[#161413] hover:bg-[#f7f3ed] transition-all"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-xs font-mono font-medium text-[#161413]">
                          {cartItem.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQty(cartItem.cartId, 1)}
                          className="px-2 py-1 text-[#898075] hover:text-[#161413] hover:bg-[#f7f3ed] transition-all"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="text-right text-xs">
                        <span className="text-[#898075] font-light mr-2">
                          {cartItem.quantity} &times; ₹{cartItem.unitPrice.toFixed(2)}
                        </span>
                        <span className="font-serif font-bold text-sm text-[#161413]">
                          ₹{cartItem.totalPrice.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* UPSELL COMPONENT CARD</h3> */}
            {!hasCardamomBun && (
              <div className="bg-[#b08d5b]/5 border border-[#b08d5b]/20 rounded-xl p-5 md:p-6 mt-8 flex flex-col md:flex-row items-center gap-4 justify-between" id="cardamom-upsell">
                <div className="flex items-center gap-4 text-left w-full md:w-auto">
                  <div className="w-16 h-16 rounded-lg bg-[#f7f3ed] overflow-hidden shrink-0">
                    <img
                      src={cardamomBun.imageUrl}
                      alt="Cardamom Bun Knot recommendation"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center space-x-1.5 text-[9px] uppercase tracking-wider text-[#b08d5b] font-bold">
                      <Sparkles className="w-3 h-3" />
                      <span>Curated Pairings</span>
                    </div>
                    <h5 className="font-serif font-bold text-sm text-[#161413]">{cardamomBun.name}</h5>
                    <p className="text-[11px] text-[#898075] line-clamp-1 max-w-sm">
                      Enhance your lattes with freshly ground cardamom knots.
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleAddCardamomUpsell}
                  className="shrink-0 w-full md:w-auto bg-[#161413] hover:bg-[#b08d5b] text-[#fefdfb] text-[10px] uppercase font-bold tracking-widest px-4 py-2.5 rounded transition-all duration-300 shadow-xs"
                >
                  Add to Order +₹480.00
                </button>
              </div>
            )}
          </div>

          {/* Checkout & Customer Details Panel */}
          <div className="lg:col-span-5 bg-[#fefdfb] border border-[#f7f3ed] rounded-xl p-6 md:p-8 shadow-sm">
            <h3 className="font-serif text-lg font-bold text-[#161413] border-b border-[#f7f3ed] pb-3 mb-6">
              Dining & Contact Co-ordinates
            </h3>

            <form onSubmit={handlePlaceOrder} className="space-y-6 font-sans text-xs">
              
              <div>
                <label className="block text-[#161413] font-medium uppercase tracking-wider text-[9px] mb-2">
                  Customer Host Name
                </label>
                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-3 py-2.5 border border-[#f7f3ed] rounded focus:outline-none focus:border-[#b08d5b]"
                />
              </div>

              <div>
                <label className="block text-[#161413] font-medium uppercase tracking-wider text-[9px] mb-2">
                  Notification Email
                </label>
                <input
                  type="email"
                  required
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  className="w-full px-3 py-2.5 border border-[#f7f3ed] rounded focus:outline-none focus:border-[#b08d5b]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#161413] font-medium uppercase tracking-wider text-[9px] mb-2">
                    Collection Mode
                  </label>
                  <select
                    value={tableNumber === "Counter" ? "counter" : "table"}
                    onChange={(e) => {
                      if (e.target.value === "counter") {
                        setTableNumber("Counter");
                      } else {
                        setTableNumber("12");
                      }
                    }}
                    className="w-full px-3 py-2 border border-[#f7f3ed] rounded focus:outline-none"
                  >
                    <option value="table">Atelier Table Dine-In</option>
                    <option value="counter">Atelier Counter Pick-up</option>
                  </select>
                </div>

                {tableNumber !== "Counter" && (
                  <div>
                    <label className="block text-[#161413] font-medium uppercase tracking-wider text-[9px] mb-2">
                      Table / Seat Number
                    </label>
                    <input
                      type="text"
                      required
                      value={tableNumber}
                      onChange={(e) => setTableNumber(e.target.value)}
                      className="w-full px-3 py-2.5 border border-[#f7f3ed] rounded focus:outline-none focus:border-[#b08d5b] font-mono text-center"
                    />
                  </div>
                )}
              </div>

              <div>
                <div className="flex items-center space-x-2 text-[10px] text-[#898075] uppercase font-bold mb-2">
                  <MessageSquare className="w-3.5 h-3.5 text-[#b08d5b]" />
                  <span>Special Requests or Dietary Accommodations</span>
                </div>
                <textarea
                  value={specialInstructions}
                  onChange={(e) => setSpecialInstructions(e.target.value)}
                  placeholder="e.g. Extra hot milk, double espresso shot, no pine seeds under grain bowl, oat milk preferences..."
                  rows={3}
                  className="w-full px-3 py-2.5 border border-[#f7f3ed] rounded focus:outline-none focus:border-[#b08d5b] resize-none"
                />
              </div>

              {/* Pricing breakdown */}
              <div className="border-t border-[#f7f3ed] pt-6 space-y-3 font-sans">
                <div className="flex justify-between text-[#898075]">
                  <span>Atelier Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#898075]">
                  <span>GST (5.00%)</span>
                  <span>₹{tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-[#161413] pt-3 border-t border-[#f7f3ed]">
                 <span>Total Amount</span>
                  <span className="font-serif text-lg text-[#161413]">₹{total.toFixed(2)}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#161413] hover:bg-[#b08d5b] text-[#fefdfb] uppercase tracking-widest font-bold py-3.5 px-4 rounded transition-all duration-300 flex items-center justify-center space-x-2 shadow-xs"
              >
                <span>Authorize & Place Order</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

            </form>
          </div>

        </div>
      )}

    </div>
  );
}
