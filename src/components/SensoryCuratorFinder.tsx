import React, { useState } from "react";
import { X, Sparkles, Check, ArrowRight, Heart } from "lucide-react";
import { MenuItem } from "../types";
import { MENU_ITEMS } from "../data/menu";

interface SensoryCuratorFinderProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectItem: (item: MenuItem) => void;
  onQuickAdd: (item: MenuItem) => void;
}

export default function SensoryCuratorFinder({
  isOpen,
  onClose,
  onSelectItem,
  onQuickAdd
}: SensoryCuratorFinderProps) {
  const [step, setStep] = useState(1);
  const [mood, setMood] = useState<string | null>(null);
  const [flavor, setFlavor] = useState<string | null>(null);
  const [energy, setEnergy] = useState<string | null>(null);

  if (!isOpen) return null;

  const moods = [
    { id: "meditative", title: "Meditative & Slow", desc: "For mindful pacing, reflection, and appreciation." },
    { id: "vibrant", title: "Vibrant & Charged", desc: "For creative sprints, high motivation, or crisp focus." },
    { id: "serene", title: "Serene & Calming", desc: "For resting nerves, tranquility, and warm comfort." },
    { id: "curious", title: "Experimental & Curious", desc: "To explore complex notes and unusual pairings." }
  ];

  const flavors = [
    { id: "citrus", title: "Citrusy & Floral", note: "茉莉/Orange blossom, jasmine notes, and acidity." },
    { id: "chocolate", title: "Decadent & Cocoa", note: "Cacao butter, roasted pecans, and maple." },
    { id: "spice", title: "Smoked & Spiced", note: "Cardamom pods, Grade-A maple syrup, smoked sea salt." },
    { id: "herbal", title: "Herbal & Pine", note: "Locally foraged sage, pine needles, deep rose profiles." }
  ];

  const energies = [
    { id: "calm", title: "Restorative Calm (Zero Cafe)", desc: "Herbal, caffeine-free wellness blends." },
    { id: "balanced", title: "Balanced (Gentle Awakening)", desc: "Soft green tea lattes or single-shot ristrettos." },
    { id: "charge", title: "High Focus (Robust Spark)", desc: "Double-shot cold brews and strong espresso." }
  ];

  // Scoring function to match selection against MENU_ITEMS
  const getRecommendation = (): { matches: { item: MenuItem; percent: number; explanation: string }[] } => {
    // Basic heuristics to determine top coffee, tea or dessert matching candidate
    const results: { item: MenuItem; percent: number; explanation: string }[] = [];

    MENU_ITEMS.forEach((item) => {
      let score = 50; // Base score
      let expl = "";

      // Energy check
      if (energy === "calm") {
        if (item.tags?.includes("Caffeine-Free")) {
          score += 45;
          expl = "This formulation contains zero caffeine, fitting your calm profile perfectly.";
        } else if (item.category === "tea") {
          score += 20;
          expl = "A soft tea session containing very gentle caffeine levels.";
        } else {
          score -= 30;
        }
      } else if (energy === "balanced") {
        if (item.category === "tea" || item.id === "m-velvet-oat") {
          score += 40;
          expl = "Whisked traditional matchas and lattes provide a balanced, sustained wave.";
        } else if (item.category === "pastries") {
          score += 20;
        }
      } else if (energy === "charge") {
        if (item.id === "m-amber-cold-brew" || item.id === "m-smoked-maple" || item.id === "m-velvet-oat") {
          score += 45;
          expl = "A robust roasted double ristretto or 18-hour cold brew matching your high-focus need.";
        } else {
          score -= 15;
        }
      }

      // Flavor alignment
      if (flavor === "citrus") {
        if (item.id === "m-amber-cold-brew") {
          score += 20;
          expl += " Features prominent notes of clean jasmine and yellow citrus.";
        } else if (item.id === "m-jasmine-pearl") {
          score += 25;
          expl += " Layered green tea pearls infused under the moon for maximal perfume.";
        }
      } else if (flavor === "chocolate") {
        if (item.id === "m-velvet-oat") {
          score += 20;
          expl += " Blended Madagascar organic vanilla sweet elements.";
        } else if (item.category === "pastries") {
          score += 15;
        }
      } else if (flavor === "spice") {
        if (item.id === "m-smoked-maple" || item.id === "m-cardamom-knot") {
          score += 30;
          expl += " High-craft cardamoms and Grade-A smoked maple syrup align beautifully with your spice preference.";
        }
      } else if (flavor === "herbal") {
        if (item.id === "m-wild-rose-sage") {
          score += 35;
          expl += " Locally harvested sage and red rose petals match your botanical search.";
        }
      }

      // Mood refinement
      if (mood === "meditative") {
        if (item.id === "m-amber-cold-brew" || item.id === "m-jasmine-pearl") {
          score += 15;
          expl += " Ideal for slow sipping over minutes of deep meditation.";
        }
      } else if (mood === "vibrant") {
        if (item.id === "m-velvet-oat" || item.category === "brunch") {
          score += 15;
          expl += " Restores active nutrition for a productive rhythm.";
        }
      }

      // Caps
      score = Math.min(99, Math.max(30, score));

      results.push({
        item,
        percent: score,
        explanation: expl || "A wonderful accompaniment representing true craftsmanship."
      });
    });

    // Sort by highest percentage matching
    results.sort((a, b) => b.percent - a.percent);
    return { matches: results.slice(0, 2) };
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleRestart = () => {
    setMood(null);
    setFlavor(null);
    setEnergy(null);
    setStep(1);
  };

  const recommendations = getRecommendation();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-[#161413]/80 backdrop-blur-sm animate-fade-in">
      
      <div className="relative bg-[#fefdfb] w-full max-w-xl rounded-2xl border border-[#f7f3ed] p-6 md:p-8 shadow-2xl flex flex-col max-h-[90vh] overflow-y-auto font-sans">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#898075] hover:text-[#161413] p-1.5 rounded-full hover:bg-[#f7f3ed] transition-all"
          aria-label="Close matchmaker"
          id="close-curator-finder"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Progress & Title Header */}
        <div className="border-b border-[#f7f3ed] pb-5 mb-6 text-left">
          <div className="flex items-center space-x-1.5 text-[9px] uppercase tracking-[0.25em] text-[#b08d5b] font-bold mb-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Sensory Matchmaker</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-[#161413]">
            {step === 4 ? "Your Sensory Recommendations" : "Discover Your Flavor Formula"}
          </h2>
          {step < 4 && (
            <div className="flex items-center space-x-2 mt-4 text-[10px] tracking-wider uppercase text-[#898075]">
              <span className={`w-2 h-2 rounded-full ${step >= 1 ? "bg-[#b08d5b]" : "bg-[#f7f3ed]"}`} />
              <span>Step {step} of 3</span>
              <span className="font-mono text-xs text-[#b08d5b] ml-auto">
                {step === 1 ? "Present Mood" : step === 2 ? "preferred Notes" : "Energy Level"}
              </span>
            </div>
          )}
        </div>

        {/* Dynamic Multi-Step Contents */}
        <div className="flex-1 space-y-6 text-left">
          
          {/* STEP 1: MOODS */}
          {step === 1 && (
            <div className="space-y-4 fade-in">
              <p className="text-xs text-[#898075] font-light italic leading-relaxed mb-4">
                "We begin by identifying your immediate presence. Select the emotion defining your current rhythm:"
              </p>
              <div className="grid grid-cols-1 gap-3">
                {moods.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setMood(m.id)}
                    className={`p-4 rounded-xl border text-left transition-all duration-300 ${
                      mood === m.id
                        ? "border-[#161413] bg-[#161413] text-[#fefdfb]"
                        : "border-[#f7f3ed] hover:border-[#b08d5b] hover:bg-[#f7f3ed]/35"
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-serif text-sm font-bold uppercase tracking-wider">{m.title}</span>
                      {mood === m.id && <Check className="w-4 h-4 text-[#b08d5b]" />}
                    </div>
                    <p className={`text-xs leading-relaxed font-light ${mood === m.id ? "text-[#f7f3ed]/80" : "text-[#898075]"}`}>
                      {m.desc}
                    </p>
                  </button>
                ))}
              </div>

              <div className="pt-6 flex justify-end">
                <button
                  disabled={!mood}
                  onClick={handleNext}
                  className="bg-[#161413] hover:bg-[#b08d5b] text-[#fefdfb] disabled:opacity-30 disabled:hover:bg-[#161413] px-6 py-2.5 rounded uppercase tracking-widest text-[10px] font-bold transition-all duration-300 flex items-center space-x-1.5"
                >
                  <span>Select Notes</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: FLAVORS */}
          {step === 2 && (
            <div className="space-y-4 fade-in">
              <p className="text-xs text-[#898075] font-light italic leading-relaxed mb-4">
                "What sensory olfactory notes are you pulled towards presently? Let your senses decide:"
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {flavors.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setFlavor(f.id)}
                    className={`p-4 rounded-xl border text-left flex flex-col justify-between transition-all duration-300 h-28 ${
                      flavor === f.id
                        ? "border-[#161413] bg-[#161413] text-[#fefdfb]"
                        : "border-[#f7f3ed] hover:border-[#b08d5b] hover:bg-[#f7f3ed]/35"
                    }`}
                  >
                    <div className="flex justify-between items-start w-full">
                      <span className="font-serif text-sm font-bold uppercase tracking-wider">{f.title}</span>
                      {flavor === f.id && <Check className="w-4 h-4 text-[#b08d5b]" />}
                    </div>
                    <span className={`text-[10px] leading-relaxed block font-light ${flavor === f.id ? "text-[#b08d5b]" : "text-[#898075]"}`}>
                      {f.note}
                    </span>
                  </button>
                ))}
              </div>

              <div className="pt-6 flex justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="text-[#898075] hover:text-[#161413] text-xs uppercase font-bold tracking-widest"
                >
                  Back
                </button>
                <button
                  disabled={!flavor}
                  onClick={handleNext}
                  className="bg-[#161413] hover:bg-[#b08d5b] text-[#fefdfb] disabled:opacity-30 disabled:hover:bg-[#161413] px-6 py-2.5 rounded uppercase tracking-widest text-[10px] font-bold transition-all duration-300 flex items-center space-x-1.5"
                >
                  <span>Select Caffeine</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: CAFFEINE ENERGIES */}
          {step === 3 && (
            <div className="space-y-4 fade-in">
              <p className="text-xs text-[#898075] font-light italic leading-relaxed mb-4">
                "Lastly, calibrate your physiological energy resonance requirement for coffee or botanical roots:"
              </p>
              <div className="grid grid-cols-1 gap-3">
                {energies.map((e) => (
                  <button
                    key={e.id}
                    onClick={() => setEnergy(e.id)}
                    className={`p-4 rounded-xl border text-left transition-all duration-300 ${
                      energy === e.id
                        ? "border-[#161413] bg-[#161413] text-[#fefdfb]"
                        : "border-[#f7f3ed] hover:border-[#b08d5b] hover:bg-[#f7f3ed]/35"
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-serif text-sm font-bold uppercase tracking-wider">{e.title}</span>
                      {energy === e.id && <Check className="w-4 h-4 text-[#b08d5b]" />}
                    </div>
                    <p className={`text-xs leading-relaxed font-light ${energy === e.id ? "text-[#f7f3ed]/80" : "text-[#898075]"}`}>
                      {e.desc}
                    </p>
                  </button>
                ))}
              </div>

              <div className="pt-6 flex justify-between">
                <button
                  onClick={() => setStep(2)}
                  className="text-[#898075] hover:text-[#161413] text-xs uppercase font-bold tracking-widest"
                >
                  Back
                </button>
                <button
                  disabled={!energy}
                  onClick={handleNext}
                  className="bg-[#b08d5b] hover:bg-[#161413] text-[#fefdfb] disabled:opacity-30 px-6 py-2.5 rounded uppercase tracking-widest text-[10px] font-bold transition-all duration-300 flex items-center space-x-1.5"
                >
                  <span>Find My Match</span>
                  <Sparkles className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* RESULTS: RECOMMEND_PAGE */}
          {step === 4 && (
            <div className="space-y-6 fade-in" id="recommendation-results">
              <p className="text-xs text-[#898075] font-light italic leading-relaxed">
                "Our sensory algorithms have cross-referenced our hand-crafted menu with your current presence. Here is your perfect sensory recipe pairing:"
              </p>

              <div className="space-y-4">
                {recommendations.matches.map(({ item, percent, explanation }, idx) => (
                  <div
                    key={item.id}
                    className={`border rounded-xl p-5 flex flex-col md:flex-row gap-4 items-center justify-between transition-all ${
                      idx === 0
                        ? "border-[#b08d5b] bg-[#b08d5b]/10"
                        : "border-[#f7f3ed] bg-[#fefdfb]"
                    }`}
                  >
                    <div className="flex items-center gap-4 text-left w-full md:w-auto">
                      <div className="w-16 h-16 rounded-lg bg-[#f7f3ed] overflow-hidden shrink-0">
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-serif font-bold text-sm text-[#161413]">{item.name}</span>
                          <span className="bg-[#b08d5b]/20 text-[#b08d5b] text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded">
                            {percent}% Match
                          </span>
                        </div>
                        <p className="text-[11px] text-[#898075] line-clamp-2 mt-1 leading-relaxed font-light">
                          <span className="font-semibold text-[#161413]">Why them:</span> {explanation}
                        </p>
                      </div>
                    </div>

                    <div className="flex space-x-2 w-full md:w-auto shrink-0 mt-3 md:mt-0">
                      {item.customizable ? (
                        <button
                          onClick={() => {
                            onSelectItem(item);
                            onClose();
                          }}
                          className="flex-1 md:flex-none text-center bg-[#161413] hover:bg-[#b08d5b] text-[#fefdfb] uppercase tracking-widest text-[9px] font-bold px-3 py-2 rounded transition-colors"
                        >
                          Personalize
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            onQuickAdd(item);
                            onClose();
                          }}
                          className="flex-1 md:flex-none text-center bg-[#161413] hover:bg-[#b08d5b] text-[#fefdfb] uppercase tracking-widest text-[9px] font-bold px-3 py-2 rounded transition-colors"
                        >
                          Quick Add
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-[#f7f3ed] flex justify-between">
                <button
                  onClick={handleRestart}
                  className="text-[#898075] hover:text-[#161413] text-xs uppercase font-bold tracking-widest"
                >
                  Match Again
                </button>
                <button
                  onClick={onClose}
                  className="bg-[#161413] hover:bg-[#b08d5b] text-[#fefdfb] px-6 py-2 rounded uppercase tracking-widest text-[9px] font-bold transition-all duration-300"
                >
                  Return to Menu
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
