import React from "react";

interface HeroProps {
  type: "menu" | "story" | "locations" | "checkout";
}

export default function Hero({ type }: HeroProps) {
  let backgroundImage = "";
  let title = "";
  let subtitle = "";

  switch (type) {
    case "menu":
      backgroundImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuDVuJAMgjb4e5nU5HJDIZ2ZFdapYY8bX5WZV4sMisTSc3TP6tN6Dg24QlAFcII327NvIAvi_SJ1lFYBZ7bEltbvrcEGbmO-lw2qT5zKIIanBKpg3Sv-mN08DsKzq0zeJoDLwghrRCCfyXEYt4jve661azaWjPoyZZ2Q77Mfm1ykPevOoJ_cKBRUeXmgfIqau9slI85gMk9TALKUCitLnHga4e2FzHCaWjuDHiChPeIl1vXNN-JcudAFzyc4MP-4Er9YG_0E34AuHpA";
      title = "Curated Flavors";
      subtitle = "A Elite journey through artisanal roasting, botanical teas, and the art of slow-baked heritage pastries.";
      break;
    case "story":
      backgroundImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuB_ad9lmBWDbtSyvrGUPMpI8LwxUjjjljGr5_R6VmoX7vA6F5mehoBYREkR8gzbvrlFA4Lhgal-4QGwIzv7QaU5bHopSkqnSX4wj67u7dfcMrK65T2k1RtJ-ZxnxRD5ik2UMtSnJ6C9OVjYulcA35691cs2p7eZoQgyC3QPJH6k5rHzga3WouNbe3eGLt8H4Q4F0HBWKcgMaV5Adyrd8tCN7XB2MFkoH5nK6yxdgTdxThmD09s5vO9DZBzU5Pg2jRJxOl4XkNixmkQ";
      title = "The Ritual of Slow Living";
      subtitle = "Experience the symphony of small-batch roasting and artisanal preparation in every single pour.";
      break;
    case "locations":
      backgroundImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuAQsZ6paOMtrqjxxAZKVwnnV2tGnQuit8cuEa1_0fIaURNy-BP4HY006udnaTcylFfku3ZOKR_9smUN8uU2ghug0oGBgcIpgIMDOwVk5hO2kzaI_r82khk2vrZglnh-QbPPhbmffkuYiVQTMFEoJY-v8mJnQxo4s23HoUIMvqLwUaZX1fIAqw3AFEyjPf3gNsFQ8J4kjKbr_hbHoHWp5N4w52zv3cBDV5UlhzAo8OVQK7tD-eXXst7IXgmt87pHvPibgHaRaRPqPKM";
      title = "A sanctuary for the senses in the heart of the city";
      subtitle = "We invite you to step away from the noise and find stillness in our curated space. Whether it’s the morning light or the afternoon aroma, every visit is a sensory journey.";
      break;
    default:
      backgroundImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuDVuJAMgjb4e5nU5HJDIZ2ZFdapYY8bX5WZV4sMisTSc3TP6tN6Dg24QlAFcII327NvIAvi_SJ1lFYBZ7bEltbvrcEGbmO-lw2qT5zKIIanBKpg3Sv-mN08DsKzq0zeJoDLwghrRCCfyXEYt4jve661azaWjPoyZZ2Q77Mfm1ykPevOoJ_cKBRUeXmgfIqau9slI85gMk9TALKUCitLnHga4e2FzHCaWjuDHiChPeIl1vXNN-JcudAFzyc4MP-4Er9YG_0E34AuHpA";
      title = "Curated Flavors";
      subtitle = "A Elite journey through artisanal roasting, botanical teas, and the art of slow-baked heritage pastries.";
  }

  return (
    <div className="relative w-full h-[55vh] md:h-[65vh] flex items-center justify-center overflow-hidden bg-[#161413]">
      {/* Editorial Vignette backdrop */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_30%,rgba(22,20,19,0.7)_90%] z-10" />
      <div className="absolute inset-0 bg-[#161413]/40 z-10" />
      
      {/* Animated Background Content Container */}
      <div className="absolute inset-0 overflow-hidden w-full h-full pointer-events-none">
        {/* Ken Burns Animated Background Image */}
        <img
          src={backgroundImage}
          alt={title}
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover animate-ken-burns opacity-90"
          id="hero-bg-img"
        />

        {/* Soft Morphing Glowing Hot Steam/Brew Gradient Vector Node */}
        <div className="absolute -right-24 bottom-[-10%] w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full bg-[#b08d5b]/10 blur-[80px] animate-wave-flow opacity-60 mix-blend-screen" />
        <div className="absolute -left-20 top-[-20%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full bg-[#3f5243]/10 blur-[60px] animate-wave-flow opacity-40 mix-blend-screen" style={{ animationDelay: "-5s" }} />

        {/* Slow-Drifting Warm Luminous Steam Particles */}
        <div className="absolute inset-x-0 bottom-0 top-0 overflow-hidden opacity-40">
          <div className="absolute left-[15%] w-2 h-2 rounded-full bg-[#b08d5b] blur-[1px] particle-slow-1" />
          <div className="absolute left-[38%] w-3 h-3 rounded-full bg-[#f7f3ed] blur-[2px] particle-slow-2" />
          <div className="absolute left-[55%] w-1.5 h-1.5 rounded-full bg-[#b08d5b] blur-[0.5px] particle-slow-3" />
          <div className="absolute left-[72%] w-4 h-4 rounded-full bg-[#f7f3ed] blur-[3px] particle-slow-4" />
          <div className="absolute left-[88%] w-2 h-2 rounded-full bg-[#b08d5b] blur-[1.5px] particle-slow-5" />
        </div>
      </div>

      {/* Hero Body Content */}
      <div className="relative z-20 text-center max-w-3xl px-6 fade-in flex flex-col items-center">
        <span className="text-xs tracking-[0.3em] font-medium uppercase text-[#b08d5b] mb-4 drop-shadow-sm">
          Elite Choice
        </span>
        <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-[#fefdfb] leading-tight font-bold mb-6 drop-shadow-md tracking-tight">
          {title}
        </h1>
        <div className="w-12 h-[1px] bg-[#b08d5b] mb-6" />
        <p className="font-sans font-light text-sm md:text-lg text-[#f7f3ed]/90 leading-relaxed max-w-2xl drop-shadow-sm">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
