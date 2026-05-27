import { MenuItem, LocationInfo } from "../types";

export const MENU_ITEMS: MenuItem[] = [
  // COFFEE CATEGORY
  {
    id: "m-velvet-oat",
    name: "Velvet Oat Latte",
    category: "coffee",
    price: 520.00,
    description: "Double shot of single-origin espresso, house-pressed oat milk, and a delicate touch of organic infusion.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtJK5fRLAQVzybiRPHZdLndf53hQfhvBYDPhua2H6Mz8jOeO2r1RpDVtc3XcLPQ8cohDnGiDW9_TgzqA4J4ccDSRNBT7gxXtxz0_FbND3bF9kwUtNQxPLjOTOiZ_b7AmgHiU5pTXt7txO1VQ_OvSXl4ptdRDTEOrv_GRQzTqFiNh27WzHbUzhsMbbmiAmcCKhdMGL8R-lN45-9MZkW-0WTY8DmsACDkwcpLAKfnAahvk9NSBydADEsBh8N3C7btdsz4uBXcO7OW44",
    tags: ["Hot / Iced", "Signature", "House Oat Milk"],
    customizable: true,
    options: [
      {
        name: "Size",
        choices: ["Standard (12oz)", "Large (16oz)"],
        priceAdjustments: { "Large (16oz)": 60.00 }
      },
      {
        name: "Milk",
        choices: ["House Oat Milk", "Organic Whole Milk", "Almond Milk"],
        priceAdjustments: { "Almond Milk": 40.00 }
      },
      {
        name: "Sweetness",
        choices: ["None", "Subtle (Half)", "Standard", "Extra"]
      }
    ]
  },
  {
    id: "m-amber-cold-brew",
    name: "Amber Cold Brew",
    category: "coffee",
    price: 560.00,
    description: "18-hour slow drip Ethiopian Yirgacheffe, yielding notes of bright clean citrus and delicate white jasmine.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB840G_KSnQ-zL9LQlpm3BToyE-qtOUczCGp7KOTZxh3WwaMEVqJK2xUakQUxNj_tV5cER2MlKmfri_vciHBkDn7r6t3hdOV485bYK0L97j1u6_9ALeuysGZXXjDst0hMuEEcHBXX8IdjHkrjiMeZWAkXEvN-ZoWzEbkXIVc8WCMqwUlZch809TF8Nf0uOTf8aWxYJ76pmtb9EP8B-Z7UmMgvDeQZQ4dVOr3cPZlbmJCxgwPrLZFV4kCLX0lsgxtrckrYrakEPn3D0",
    tags: ["Slow Drip", "Citrus Notes", "Single Origin"],
    customizable: true,
    options: [
      {
        name: "Serve Style",
        choices: ["Over Block Ice", "Straight Up / Neat"]
      },
      {
        name: "Vanilla Cold Foam",
        choices: ["Without Cold Foam", "With Sea Salt Foam", "With Sweet Cream Foam"],
        priceAdjustments: { "With Sea Salt Foam": 80.00, "With Sweet Cream Foam": 80.00 }
      }
    ]
  },
  {
    id: "m-smoked-maple",
    name: "Smoked Maple Flat White",
    category: "coffee",
    price: 540.00,
    description: "Rich espresso ristretto shots paired with Grade-A maple syrup, smooth microfoam, and a pinch of hand-crystallized smoked sea salt.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0Jbju-ST9YGXY45hT8HPE1_i56pnPF020dfxG9dDSvtYERchZ6BpCWHeuZDlecbGTpTJ7SrD5Q1QAB7BvyAL-1ZbXOFg-DyPPZfS19W5vonZDqw1CGTIOUBD4XOsCX6lNwF1XE4yJaUh1w7GOiZdE1-G6WqWKKHgbsgZVeXyj-tVfatfckokiYiA1G74fZnFlVduRuXbBXwGnEi6FyEd7sC1I6JjO6w02u5Ku2GbiDq9Uh-GvLUffRdFRT8HZI_JVlZKinBhMpYA",
    tags: ["Warm", "Flavored", "Sea Salt Accent"],
    customizable: true,
    options: [
      {
        name: "Base Shot",
        choices: ["Ristretto (Traditional)", "Double Shot Standard", "Decaf Standard"]
      },
      {
        name: "Milk",
        choices: ["Organic Whole Milk", "House Oat Milk", "Almond Milk"]
      },
      {
        name: "Maple Intensity",
        choices: ["Balanced", "Subtle Maple", "Intense Maple"]
      }
    ]
  },

  // TEA CATEGORY
  {
    id: "m-jasmine-pearl",
    name: "Midnight Jasmine Pearl",
    category: "tea",
    price: 680.00,
    description: "Premium hand-rolled green tea pearls layered with organic midnight-blooming jasmine blossoms. Balanced, delicate, and deeply floral.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZC19yDUkVIWFje61qocRnjlWSd5-2mChsER9Zn5HuHS45U5IPol1rlhUiY5h_4QI_gfEifH-pqAwL-H_w3k_e4LAM4MVSHCWDVw_ZJwql577QAv9WqYCIoe0w84BvMui74jA-OvgrwdAPT1CvoQ3_HG0WbGM154DAgR9tkZCUaP0zefUFdFqrE1-jnsuPBVmjq-yaWIQDtP_VxW-28-Dj8VDEsy9q8T41cKqriigxdBE8ZU5-kR4AzjH_C6aHOzTRXw6wI66Rz0k",
    tags: ["Floral", "Green Tea", "Slow Hand-rolled"],
    customizable: false
  },
  {
    id: "m-wild-rose-sage",
    name: "Wild Rose & Sage",
    category: "tea",
    price: 480.00,
    description: "An incredibly calming herbal infusion of locally gathered piney sage leaves and organically cultivated crimson rose petals.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAk7W_D-0TLUzUZcgtkNAHrmow56_5NlmQm-fzSdPX40uS9KlAkOwXlPreH_0xZRVEu9fsRAnIsSmq-_qDi6aeBanJDdkvsmW1fY0Yya6iJFiAXxR64rwwDI29kAHADTcVt_hrwq_B5BM7XqeXCGzpXNdDIeJ8Ynbh-m1DjW-F7IDVOK-DJq6-FEFSegdeM92hgOs2JMH9zw32fAUFo3W8l9TapZyznTjUR0O4IMOh-qASlICf3boIezWrriFMyYnAl8DtUJ3x61Uw",
    tags: ["Caffeine-Free", "Herbal", "Pine & Rose"],
    customizable: false
  },
  {
    id: "m-uji-matcha",
    name: "Uji Ceremonial Matcha",
    category: "tea",
    price: 600.00,
    description: "Stone-ground ceremonial green tea leaves sourced directly from Kyoto's historic Uji region, traditionally prepared or served over ice.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAx1ksnsCP0xr-RlTcDJ4oNI89VxrAjNkZ6H6foMcYVjHmhIcK4owgrCk6TkrzHEe1bxNj2pSxcUC7U5AviWzQHsRcueas6AtZxA84Pde8ReIgjlPH3nCBjL50if98SeS1jyLjpHy4LFNJQiSrpzraZzqkowhRjwqL7nNiLmFMLtLvxH10dTkF2UjiOxrj2FNIc-JEqzbhNLQ-YfUDXz_AolH7OuIjtg7bfZqdQ7BhneZ7yRE0uwM3vaWNfkd1Mmfb5j-tZgibAtvE",
    tags: ["Rich", "Ceremonial Grade", "Kyoto Sourced"],
    customizable: true,
    options: [
      {
        name: "Preparation",
        choices: ["Traditional Whisk (Hot Water)", "Matcha Latte (Hot / House Oat)", "Matcha Latte (Iced / House Oat)"],
        priceAdjustments: { "Matcha Latte (Hot / House Oat)": 80.00, "Matcha Latte (Iced / House Oat)": 80.00 }
      },
      {
        name: "Sweetness",
        choices: ["Unsweetened", "Subtle Sweetener", "Sweetened"]
      }
    ]
  },

  // PASTRIES CATEGORY
  {
    id: "m-sourdough-croissant",
    name: "Sourdough Croissant",
    category: "pastries",
    price: 440.00,
    description: "72-hour naturally fermented flour program laminated with deep, high-butterfat cultured milk. High crispness with a rich honeycombed center.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQY590beYM9TjfbcWZBv9o4yVu_e_S6HeMpZ9xmLnxp0ODY_hdK56Mtrp2q7lNVU9DoquN2k675R8SARzds9BsdSxM2mfIF4M7pHaouRXCzP_lbfC2QQrN2ojYUrAVXudISJCeRvfSdDzioYBooVXJ_AZ2dIot7v3iyaP3DsRL_cREm2CXLpQZr5TEWeTWKM_Xlp-cK37s_tE3c7NookRX1sFiw1aSefKL-L1Piu02aXiyJjYGfdGI3AYngCgj2zqq-NzM8A9W-7c",
    tags: ["Baked Daily", "72-Hr Ferm", "Cultured Butter"],
    customizable: true,
    options: [
      {
        name: "Serving Preference",
        choices: ["Warm / Oven Toasted", "As Is / Room Temp"]
      }
    ]
  },
  {
    id: "m-cardamom-knot",
    name: "Cardamom Bun Knot",
    category: "pastries",
    price: 480.00,
    description: "Swedish grain twisted heritage dough seasoned with freshly-crushed forest green cardamom pods, baked glaze, and rough white pearl sugar.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0rCHEy1xVntmbO_sP_VNmZCWb05Kw1T3tnIdE1x4clIDksCAzn2FmI19VUn6qsKFl1_6uL5LVfyjFYcsKZdCwuQydHU0iO5rMt6at70VGy9gnmvx6WUqrfh5P16_t9wW9IbPHsRFXIXb3ELWzUaEQ2ioxnS1vBH-vODJww5UTN6ps4t4ykRplptR5FBD7UfNdk-_Pkjd1JM-Bji7HCIaJyxg49yfExxugDjlvL-KPB91KxNbvhVWQr7Pi8rtpJtOjTZzeicxeaEc",
    tags: ["Aromatic", "Swedish Recipe", "Pearl Sugar"],
    customizable: true,
    options: [
      {
        name: "Serving Preference",
        choices: ["Warm / Oven Toasted", "As Is / Room Temp"]
      }
    ]
  },

  // BRUNCH CATEGORY
  {
    id: "m-avocado-toast",
    name: "Heirloom Avocado Toast",
    category: "brunch",
    price: 1280.00,
    description: "Plump mashed Hass avocados, purple watermelon radishes, sour sumac dust, and a organic poached farm egg sitting on a thick crust of local sourdough toast.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEC_Jn-x1M0l3cVRpdeHlyeANNFyzRL6QOpoqzThu5jxatCILwrahVtcIX-coLAs2rrFO976n3P1Nk1WqYtyd8jICe56HM-6avlfC0Pz4ZfyeUW12nQpEJU4LjzkXxZEBbBbRC9Zd-_29bUKOpVnF2Y_AKmsh72NmkNxVU8AdZzx8k84cwY_LH_rXSQPrVgJVs4qPECFt_po0G1yVJPhvUw_ZwVaF4ECLMJsm9k2jw1tkZQqdPl3q2jtG3U55G-KUyf3T5eg4sCm0",
    tags: ["All-Day", "Sourdough Base", "Farm Egg"],
    customizable: true,
    options: [
      {
        name: "Egg Preparation",
        choices: ["Soft Poached Egg", "Medium-Hard Poached", "No Egg / Vegan Preference"],
        priceAdjustments: { "No Egg / Vegan Preference": -120.00 }
      },
      {
        name: "Gluten Option",
        choices: ["House Sourdough", "Gluten-Free Seed Toast"],
        priceAdjustments: { "Gluten-Free Seed Toast": 120.00 }
      }
    ]
  },
  {
    id: "m-wild-berry-hotcakes",
    name: "Wild Berry Hotcakes",
    category: "brunch",
    price: 1160.00,
    description: "Fluffy buttermilk griddle hotcakes served with warm hand-reduces seasonal blue and blackberries, hand-whisked lemon zest farm cream, and toasted organic pecans.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDh_NPGywgo3keMtqJJE_2Da43PSiTJXSMSlU69TTN8kXemZrmva9CaIY4L43_7JbBrAt5vC4O2nKH2UoYjlj1rF59XmU8E61OlgD8FxlOhbdlijdYrPzhYzCtFIDtvjoHqW-CI6zRRt69-Was0sn69ZuP9of7hqxzTUQYLPjHnGJz_rTTp31S_--QZjQGe2lniQjz3OhR5vaFF9IxgbXzeynNwQC2OZ4Vxk_0jel3_tSaK-HSgw7l2gaR43MF3I7Q6abe1_FvUlPY",
    tags: ["Sweet", "Griddle Pastures", "Lemon Zest Cream"],
    customizable: false
  },
  {
    id: "m-botanist-bowl",
    name: "Botanist Grain Bowl",
    category: "brunch",
    price: 1240.00,
    description: "Steaming organic golden quinoa, flash-wilted lacinato kale, oven-roasted kabocha pumpkin chunks, rich Japanese miso-tahini glaze, and crunchy toasted seeds.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnkNQ3emk8mDkQxfiDla-sWfy3Xcwx4y2lck0vGHRcuEPy0TUq0_i3uV3p0UGHOGAlp6zsVVVV3fIGyIjjU4tMirfMFqNoz_FYQxMHI4QHIjHyZunCjPbMVLLhZCgrUHAwJu5c0gIPJoFFwuCb_WAPyF6qliNWDNQ0EhHmCx_Sv5yDtZpYMKGf7mjUdUzDOkaMf6F0TT9oVkjUsCEFm6x4oCjfq-mN46aDj0IQCWPnf61FnKWWZSXD9v7tIIaKqj1uEwH_BDoMZeg",
    tags: ["Healthy", "Gluten-Free", "Warm Grains"],
    customizable: true,
    options: [
      {
        name: "Add On Proteine",
        choices: ["No Extra Protein", "Add Hard Poached Egg", "Add Crispy Smoked Tempeh"],
        priceAdjustments: { "Add Hard Poached Egg": 120.00, "Add Crispy Smoked Tempeh": 200.00 }
      }
    ]
  },
  {
    id: "m-truffle-omelette",
    name: "Truffle Forest Omelette",
    category: "brunch",
    price: 1400.00,
    description: "Classic French three-egg folded omelette studded with roasted local wild chanterelle mushrooms, white truffle oil, fine chives, and premium aged Gruyère cheese.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlPsfJKDRJ8OJwMQdx6pkD8nD_w45XwD6BSGn0lDQD_z4rAIS5snVguHhjoAfb3LMk6Je-LITE84QMVt1D9IYZEEwCVi7lisXizDetKHxU7qnC3wjmt6N1qhXV-PzLSo8HHc3S_NxPuWkQd2s_vMp7K2rsrIlESaf-kEiGul8v9LkZCi6pUszufOIX8mqZeozUhvqfWArrkvEfB1tWbCirp6fg6t2YzdNkA-JTMQRgR6g1Lt-fGHcuN8Cs7bbPiDra7fZSm8mFnOI",
    tags: ["Rich Aroma", "Wild Mushrooms", "French Fold"],
    customizable: false
  }
];

export const LOCATIONS: LocationInfo[] = [
  {
    id: "loc-arts",
    name: "The Sensory Creative Studio",
    address: "710 E 4th Place, Arts District, Los Angeles, CA 90013",
    hours: [
      "Monday - Friday: 7:00 AM - 5:00 PM",
      "Saturday - Sunday: 8:00 AM - 6:00 PM"
    ],
    phone: "(213) 555-0145",
    coordinates: "34.0456° N, 118.2323° W",
    mapUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKqn1hwtnZONPUz_vQUV2dPS8jWYurPNzpilyVlHxqaxvsxvuH7KKFcJaHE_ls-Ei6d8Ez6Muj7YeOu1n0wvN5gxnzel_z1u03X3atTAN2PVHKrMdjsHhwefmrW9fup_qyj-jxBgGfwjkRlQw4wUQjLdsFTWWDluEnCZw6TlNcXa6QbNdPeegElCutyECWX3PTbDe25ovlEeE52Tpk9PZENrHMllw_FQDitFDXlrx_aMCZ0Bn99uUk4zfCnziG2_3s3lZ68IVUtFc"
  }
];

export const GALLERY_IMAGES = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAaeJuQTFovx33ryhwFhW66c6Ld7mbLBuvFKDrJN2UHRBoXgya0dkbmiYoDzA1OUG0tlG3uNLpRn74hL-2pFtCVAnPRmURdzQmd7eFjh3TUn_I_UYY4lkBV6v5QiBUHu_V_goBmvMoIs9q5SWVkkCJVD8KYRnApdG97_zM3uJaH6hK8XCzspAXe3Lir6-nHy1RpLIfU1cCY11PW48PqagELLtq-wPO5Zvd_du55wJfDYRcl_EHUxTUsl3bmlM2bjYQl5M84kptMgBM",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuHhabQKL8IzO9TNbwku5bZ_JDY91nvBqvvLG6oilmHEdw-hw5C3hbo1RNVffLA8LYm27-Qkh_naGL0tJ3VTAafOhyTB03StgI2B-eNWCFidQka2ECGxxxCop2KYgW_5_pzB_Lopq5zYngpxxFT8OYQIVT4MLwAi0Z76whXdYzlOoSyidNF0zKhIRkwyHvZZAVhGJ8a17T5CeOmf7Rm5WwZRGi7ByKo2gmbOdlv8SbzZPcWslmemcihRUwXSndA54E3KDPBppvWoydM",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCVqEktmiq9h8v-GUWI3Xshm33sV_juoLmkmHuD3bBwl1i0IOC1RCn8r_VssREfmS_InKx7jVCzK5rQyJSa8ry1I7vNMQYEeFlWeQL_pT3jB07xO9rXq0lluZ99X0vbWzp_kCSu0SLKZUiGQ9_JgzCRbXYEtgv0wmPUrn-mGI8bYqlydgvmcHsQ49nE4ziR_AzMOeX6Uc3fvxUomVD47A3AeVGP0_5hsIfEpbfO616_6KmHQqRYFHDHqdc-cEpmfOcvdiDHLYaljp4",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBFFlnfMrvMujlk071QjggdAQRFjsMCTkBOswvVC7cqBuz1Cc1tJsY5vBCLhlaHfOdmTHpNJHaO6wzLQ2zFkcQH-1Hd3BdeTL00xkAJD0Mrevse1j_ciWTB-yfUz6hFVKCNQnpvVM5YViV9LzIV2S5MjnnRNvBMx6G_FPORTophLN9MDch_sWNazTQIzzwEb-Ny_bYYTsdqym-RJzOvOivEX__T-P8obm924kbpkR8Fkbg_dzYSA1Npmd4ljD0BeAORvROiGyBMc2Q"
];
