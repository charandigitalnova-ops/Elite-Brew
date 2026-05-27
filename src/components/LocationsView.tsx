import React, { useState } from "react";
import { Compass, Clock, MapPin, Phone, Send, Check } from "lucide-react";
import { GALLERY_IMAGES } from "../data/menu";

export default function LocationsView() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    party: "1",
    interest: "espresso-class",
    notes: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <div className="py-16 px-6 md:px-12 max-w-7xl mx-auto space-y-24" id="locations-layout">
      
      {/* Studio Header Card + Operating Hours */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="studio-details-grid">
        <div className="lg:col-span-4 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#b08d5b] block">
              Flagship Sanctuary
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#161413]">
              The Sensory Creative Studio
            </h2>
            <div className="w-12 h-0.5 bg-[#b08d5b]" />
            
            <p className="font-sans text-xs text-[#898075] leading-relaxed font-light">
              Step away from the city noise. Our flagship location features natural light, artisan timber structures, and stone basins, offering an intentional, meditative space for tasting.
            </p>
          </div>

          <div className="space-y-4 pt-6 border-t border-[#f7f3ed]">
            {/* Address */}
            <div className="flex items-start space-x-3 text-xs text-[#898075]">
              <MapPin className="w-4 h-4 text-[#b08d5b] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#161413] block uppercase tracking-wider text-[10px]">Flagship Address</span>
                <span>710 E 4th Place, Arts District<br />Los Angeles, CA 90013</span>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start space-x-3 text-xs text-[#898075]">
              <Clock className="w-4 h-4 text-[#b08d5b] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#161413] block uppercase tracking-wider text-[10px]">Our Rhythms</span>
                <span>Mon – Fri: 7:00 AM – 5:00 PM<br />Sat – Sun: 8:00 AM – 6:00 PM</span>
              </div>
            </div>

            {/* Coordinates */}
            <div className="flex items-start space-x-3 text-xs text-[#898075]">
              <Compass className="w-4 h-4 text-[#b08d5b] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#161413] block uppercase tracking-wider text-[10px]">Geographic Point</span>
                <span className="font-mono">34.0456° N, 118.2323° W</span>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-3 text-xs text-[#898075]">
              <Phone className="w-4 h-4 text-[#b08d5b] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#161413] block uppercase tracking-wider text-[10px]">Studio Phone</span>
                <span>(213) 555-0145</span>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Map Render Section as designated by the user */}
        <div className="lg:col-span-8 rounded-xl overflow-hidden border border-[#f7f3ed] shadow-md relative group h-[400px] bg-[#f7f3ed]">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKqn1hwtnZONPUz_vQUV2dPS8jWYurPNzpilyVlHxqaxvsxvuH7KKFcJaHE_ls-Ei6d8Ez6Muj7YeOu1n0wvN5gxnzel_z1u03X3atTAN2PVHKrMdjsHhwefmrW9fup_qyj-jxBgGfwjkRlQw4wUQjLdsFTWWDluEnCZw6TlNcXa6QbNdPeegElCutyECWX3PTbDe25ovlEeE52Tpk9PZENrHMllw_FQDitFDXlrx_aMCZ0Bn99uUk4zfCnziG2_3s3lZ68IVUtFc"
            alt="Arts District Location Map"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 ease-out"
          />
          <div className="absolute bottom-6 left-6 bg-[#fefdfb]/95 backdrop-blur-md px-4 py-3 rounded-md border border-[#f7f3ed] max-w-xs shadow-md">
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#b08d5b] font-bold block mb-1">Live Direction Map</span>
            <p className="text-[11px] text-[#161413] font-sans">
              Located adjacent to core galleries and design architecture showrooms in eastern LA.
            </p>
          </div>
        </div>
      </div>

      {/* Visual Workspace Gallery Section - utilizing 4 specified photo hotlinks */}
      <div className="space-y-8" id="gallery-narrative-module">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs text-[#b08d5b] tracking-[0.25em] font-medium uppercase">Visual Gallery</span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#161413]">Experience Narratives</h2>
          <div className="w-8 h-[1px] bg-[#b08d5b] mx-auto" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((imgUrl, idx) => (
            <div key={idx} className="relative rounded-lg overflow-hidden aspect-square shadow-sm bg-[#f7f3ed] group">
              <img
                src={imgUrl}
                alt={`Studio interior showcase space vignette ${idx + 1}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-[#161413]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-[10px] text-[#fefdfb] uppercase tracking-widest font-semibold">
                  {idx === 0 ? "Tasting Atelier" : idx === 1 ? "Slow brewing" : idx === 2 ? "Aromatic roast" : "Warm timber"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stay Connected Inquiry Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-[#f7f3ed]/40 rounded-xl p-8 md:p-12 border border-[#f7f3ed]" id="reservation-module">
        <div className="space-y-6">
          <span className="text-xs text-[#b08d5b] tracking-[0.25em] uppercase font-semibold">Interactive Studio Clubs</span>
          <h2 className="font-serif text-2xl font-bold text-[#161413]">Atelier Reservations & Classes</h2>
          <p className="font-sans text-xs md:text-sm text-[#898075] font-light leading-relaxed">
            Interested in booking a custom espresso pairing flight, coffee chemistry workshops, or subscribing to the Seasonal Single Origin Club? Leave an inquiry, and our concierge curators will arrange it.
          </p>
          <div className="space-y-3 pt-4 font-sans text-xs text-[#898075]">
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#b08d5b]" />
              <span>Complimentary private-room access for club tiers.</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#b08d5b]" />
              <span>Personalized cupping workbook on entry.</span>
            </div>
          </div>
        </div>

        <div className="bg-[#fefdfb] rounded-lg p-6 md:p-8 border border-[#f7f3ed] shadow-sm">
          {submitted ? (
            <div className="text-center py-10 space-y-4 fade-in">
              <div className="w-12 h-12 bg-[#b08d5b]/10 text-[#b08d5b] rounded-full flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#161413]">Inquiry Logged</h3>
              <p className="font-sans text-xs text-[#898075] max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-[#161413]">{formData.name}</span>. An invitation to our next artisanal cupping session has been sent to <span className="font-mono text-[#161413]">{formData.email}</span>.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: "", email: "", party: "1", interest: "espresso-class", notes: "" });
                }}
                className="text-xs text-[#b08d5b] font-semibold underline uppercase tracking-widest mt-4 hover:text-[#161413]"
              >
                Log another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
              
              <div>
                <label className="block text-[#161413] font-medium uppercase tracking-wider text-[9px] mb-2">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Eleanor Vance"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2.5 bg-[#fefdfb] border border-[#f7f3ed] rounded focus:outline-none focus:border-[#b08d5b] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[#161413] font-medium uppercase tracking-wider text-[9px] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="eleanor@sensory.co"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2.5 bg-[#fefdfb] border border-[#f7f3ed] rounded focus:outline-none focus:border-[#b08d5b] transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#161413] font-medium uppercase tracking-wider text-[9px] mb-2">
                    Party Size
                  </label>
                  <select
                    value={formData.party}
                    onChange={(e) => setFormData({ ...formData, party: e.target.value })}
                    className="w-full px-3 py-2 bg-[#fefdfb] border border-[#f7f3ed] rounded focus:outline-none focus:border-[#b08d5b] transition-colors"
                  >
                    <option value="1">1 Companion</option>
                    <option value="2">2 Companions </option>
                    <option value="4">4 Companions</option>
                    <option value="6">Private Tasting Group (6+)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#161413] font-medium uppercase tracking-wider text-[9px] mb-2">
                    Area of Interest
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-3 py-2 bg-[#fefdfb] border border-[#f7f3ed] rounded focus:outline-none focus:border-[#b08d5b] transition-colors"
                  >
                    <option value="espresso-class">Espresso Micro-Class</option>
                    <option value="chem-brewing">Tea Infusion Mastery</option>
                    <option value="subscription">Seasonal Bean Club</option>
                    <option value="space-rent">Atelier Space Rental</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[#161413] font-medium uppercase tracking-wider text-[9px] mb-2">
                  Special requests
                </label>
                <textarea
                  placeholder="Tell us about your sensory dietary needs or preferences..."
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 bg-[#fefdfb] border border-[#f7f3ed] rounded focus:outline-none focus:border-[#b08d5b] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#161413] hover:bg-[#b08d5b] text-[#fefdfb] uppercase tracking-widest font-semibold py-3 px-4 rounded transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <span>Submit Inquiry</span>
                <Send className="w-3.5 h-3.5" />
              </button>

            </form>
          )}
        </div>
      </div>

    </div>
  );
}
