export type MenuItem = {
  name: string;
  description?: string;
  price?: number;
  tag?: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  intro?: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "vorspeisen",
    label: "Vorspeisen",
    intro: "Frisch zubereitet und ideal zum Teilen.",
    items: [
      {
        name: "Gemischter Vorspeisenteller",
        description:
          "Scharfe Paste, Auberginenpüree, Möhrenpüree, Joghurt mit Minze, Hummus, Kisir, dazu Brot (klein oder groß)",
        price: 15.0,
      },
      {
        name: "Sigara Böregi",
        description: "4 Stück türkische Blätterteigröllchen mit Schafskäse gefüllt",
        price: 7.5,
      },
      {
        name: "Saksuka",
        description: "Verschiedenes Gemüse frisch in der Pfanne zubereitet und in Tomatensauce serviert",
        price: 8.5,
      },
    ],
  },
  {
    id: "suppen",
    label: "Suppen",
    items: [
      { name: "Tomatensuppe", price: 5.5 },
      { name: "Türkische Linsensuppe", price: 6.0 },
      { name: "Hähnchensuppe", price: 6.5 },
    ],
  },
  {
    id: "pommes-beilagen",
    label: "Pommes & Beilagen",
    items: [
      { name: "Pommes klein", price: 3.0 },
      { name: "Pommes groß", price: 4.0 },
      { name: "Portion Reis", price: 4.0 },
      { name: "Ketchup/Mayo", price: 1.0 },
      { name: "Cacik", description: "Joghurt-Knoblauch-Soße", price: 1.5 },
    ],
  },
  {
    id: "falafel",
    label: "Falafel",
    items: [
      { name: "Falafel Brot", description: "Mit Falafel, Soße, Salat im Brot", price: 7.0 },
      { name: "Falafel Box", description: "Mit Falafel, Pommes und Soße", price: 7.5 },
      { name: "Falafel Dürüm", description: "Mit Falafel, Salat und Soße im Wrap", price: 7.5 },
      { name: "Falafelteller", description: "Dazu Reis oder Pommes und Salat", price: 15.0 },
    ],
  },
  {
    id: "salate",
    label: "Salate",
    items: [
      { name: "Gemischter Salat", price: 13.0 },
      { name: "Bauernsalat", price: 11.0 },
      { name: "Hähnchensalat", price: 16.5 },
      { name: "Thunfischsalat", price: 13.0 },
    ],
  },
  {
    id: "pide",
    label: "Pide – Türk. Teigschiffchen",
    items: [
      { name: "Pide mit Schafskäse", price: 11.0 },
      { name: "Pide mit Gouda", price: 11.0 },
      { name: "Pide mit Gehacktem", price: 12.0 },
      { name: "Pide mit Spinat & Schafskäse", price: 12.0 },
      { name: "Pide mit Sucuk", price: 12.0 },
    ],
  },
  {
    id: "lahmacun",
    label: "Lahmacun – Türk. Hackfleischpizza",
    items: [
      { name: "Lahmacun ohne Alles", price: 3.5 },
      { name: "Lahmacun mit Salat", price: 5.0 },
      { name: "Lahmacun mit Drehspießfleisch", price: 12.0 },
    ],
  },
  {
    id: "pizza",
    label: "Pizza",
    intro: "Mit Tomatensauce, Käse und Oregano belegt.",
    items: [
      { name: "Margherita", price: 10.0 },
      { name: "Salami", price: 12.0 },
      { name: "Tonno", description: "Mit Thunfisch", price: 14.0 },
      { name: "Funghi", description: "Mit Champignons", price: 12.0 },
      { name: "Schinken", price: 12.0 },
      { name: "Sucuk", price: 13.0 },
      { name: "Vegetarisch", price: 13.0 },
      { name: "Spinat", price: 12.0 },
      { name: "Drehspieß", description: "Mit Drehspießfleisch und Zwiebeln", price: 14.0 },
      { name: "Broccoli", price: 12.0 },
      { name: "Hawaii", description: "Mit Schinken und Ananas", price: 13.0 },
    ],
  },
  {
    id: "drehspiess",
    label: "Drehspieß (Döner)",
    items: [
      { name: "Drehspieß-Tasche", description: "Mit Drehspießfleisch, Salat und Soße, im Brot", price: 7.0 },
      { name: "Drehspieß-Dürüm", description: "Mit Drehspießfleisch, Salat und Soße, im Wrap", price: 7.5 },
      { name: "Pomm-Drehspieß", description: "Mit Drehspießfleisch und Soße", price: 6.0 },
      { name: "Drehspießteller Komplett", description: "Mit Pommes oder Reis und Salat", price: 16.5 },
      { name: "Drehspieß überbacken", description: "Mit Pommes oder Reis und Salat", price: 17.5 },
      {
        name: "Drehspieß Iskender Art",
        description:
          "Auf geröstetem Fladenbrot mit Knoblauchjoghurt, pikanter Tomatensauce und zerlassener Butter",
        price: 18.0,
        tag: "Hausspezialität",
      },
    ],
  },
  {
    id: "pfannengerichte",
    label: "Pfannengerichte",
    items: [
      {
        name: "Lammpfanne",
        description: "Lammgeschnetzeltes, Paprika, Tomaten und Zwiebeln, dazu Reis oder Pommes und Salat",
        price: 21.0,
      },
      {
        name: "Hähnchenpfanne",
        description: "Hähnchengeschnetzeltes, Paprika, Tomaten und Zwiebeln, dazu Reis oder Pommes und Salat",
        price: 19.0,
      },
      { name: "Güvec Vegetarisch", description: "Mit Gemüse, dazu Reis oder Pommes und Salat", price: 17.0 },
      { name: "Güvec Lamm", description: "Mit Lammfleisch, dazu Reis oder Pommes und Salat", price: 20.0 },
    ],
  },
  {
    id: "fisch",
    label: "Fisch",
    items: [
      { name: "Dorade überbacken", description: "Dazu Reis oder Pommes und Salat", price: 23.0 },
    ],
  },
  {
    id: "nudeln",
    label: "Nudeln",
    items: [
      { name: "Penne Napoli", description: "Mit Tomatensoße", price: 12.0 },
      { name: "Penne Hähnchen", description: "Mit Tomatensoße", price: 15.0 },
      { name: "Penne Drehspieß", description: "Mit Tomatensoße", price: 14.0 },
      { name: "Penne Gemüse", description: "Mit Tomatensoße", price: 13.0 },
    ],
  },
  {
    id: "schnitzel",
    label: "Schnitzel",
    intro: "Alle Schnitzel werden mit Pommes und Salat serviert.",
    items: [
      { name: "Wiener Art Schnitzel", price: 15.0 },
      { name: "Champignonrahm Schnitzel", price: 17.0 },
      { name: "Rahmschnitzel", price: 17.0 },
    ],
  },
  {
    id: "fruehstueck",
    label: "Frühstück",
    items: [
      {
        name: "Frühstücksteller Türkischer Art",
        description: "Mit Eiern, Honig, Marmelade, Oliven, Tomaten, Paprika, Käse, Mozzarella, dazu 1 Kaffee oder Tee",
        price: 15.0,
      },
      { name: "Menemen – Türk. Eierspeise", price: 7.0 },
      { name: "Sucuklu Menemen", description: "Mit Sucuk", price: 8.5 },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    items: [
      { name: "Baklava Portion", price: 7.0 },
      { name: "Milchreis Türk. Art", price: 6.5 },
    ],
  },
];

export const drinkCategories = [
  {
    label: "Kalte Getränke",
    items: [
      "Cola, Cola Zero – 2,80 €",
      "Fanta, Sprite – 2,80 €",
      "Orangensaft – 2,80 €",
      "Eistee – 2,80 €",
      "Ayran – 3,00 €",
      "Apfelschorle",
      "Wasser (Uludag)",
      "Redbull – 3,00 €",
    ],
  },
  {
    label: "Warme Getränke",
    items: [
      "Kaffee – 3,00 €",
      "Espresso – 2,80 €",
      "Cappuccino – 4,50 €",
      "Latte Macchiato – 4,50 €",
      "Tee – 2,00 €",
      "Türk. Kaffee – 3,00 €",
    ],
  },
  {
    label: "Bier",
    items: [
      "Pils 0,2l/0,4l – 2,50 €",
      "Radler 0,2l/0,4l – 2,50 €",
      "Weißbier 0,5l – 4,50 €",
      "Weißbier alkoholfrei 0,5l – 4,50 €",
      "Pils Bitburger 0,3l – 3,00 €",
      "Pils 0,4l – 4,00 €",
      "Weizen – 4,00 €",
      "Weizen alkoholfrei – 4,00 €",
    ],
  },
  {
    label: "Wein",
    items: [
      "Glühwein 0,2l – 4,00 €",
      "Rotwein 0,2l – 7,90 €",
      "Weißwein 0,2l – 7,90 €",
      "Rosé Wein 0,2l – 7,90 €",
      "Weißwein 0,25l – 4,90 €",
      "Rotwein 0,25l – 4,90 €",
      "Rosé 0,25l – 4,90 €",
    ],
  },
  {
    label: "Spirituosen",
    items: ["Whiskey 4cl – 7,50 €", "Wodka 4cl – 6,90 €", "Raki 4cl – 6,90 €"],
  },
];
