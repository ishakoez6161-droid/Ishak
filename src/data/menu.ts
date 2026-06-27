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
    id: "schnitzel",
    label: "Hausgemachte Schnitzel",
    intro: "Frisch paniert und nach Hausrezept zubereitet.",
    items: [
      {
        name: "Bratwurst",
        description: "Mit Pommes frites und Salat",
        price: 14.9,
      },
      {
        name: "Currywurst",
        description: "Mit Pommes frites und Salat",
        price: 15.9,
      },
      {
        name: "Wienerschnitzel",
        description: "Schnitzel Wiener Art mit Pommes frites und Salat",
        price: 16.9,
      },
      {
        name: "Zigeunerschnitzel",
        description:
          "Schnitzel in Tomatensauce mit Zwiebel, Paprika, Pommes frites und Salat",
        price: 17.9,
      },
      {
        name: "Monschauer-Senf-Schnitzel",
        description: "Schnitzel in einer Senfrahmsauce mit Pommes frites und Salat",
        price: 19.9,
        tag: "Hausspezialität",
      },
      {
        name: "Pfefferschnitzel",
        description: "Schnitzel in einer Pfefferrahmsauce mit Pommes frites und Salat",
        price: 17.9,
      },
      {
        name: "Cordon Bleu",
        description: "Mit Pommes frites und Salat (Hähnchen)",
        price: 18.9,
      },
      {
        name: "Jägerschnitzel",
        description: "Schnitzel in einer Champignoncream mit Pommes frites und Salat",
        price: 17.9,
      },
    ],
  },
  {
    id: "salate-suppen",
    label: "Salate & Suppen",
    items: [
      {
        name: "Gemischter Salat",
        description: "Mit Gurken, Tomaten und Zwiebeln",
        price: 11.9,
      },
      {
        name: "Stadtkrone Salat",
        description: "Gemischter Salat mit Käse, Schinken, Thunfisch und Zwiebeln",
        price: 15.9,
      },
      {
        name: "Eifeler Salat",
        description: "Gemischter Salat mit Käse, Schinken, Ei und Zwiebeln",
        price: 15.9,
      },
      {
        name: "Hähnchen Salat",
        description: "Gemischter Salat mit Hähnchenstreifen",
        price: 17.9,
      },
      {
        name: "Tomaten Mozzarella",
        description: "Mit Basilikum und Balsamicocreme garniert",
        price: 14.9,
      },
      {
        name: "Kleiner Beilagensalat",
        description: "Mit Gurke, Tomate und Zwiebel",
        price: 6.9,
      },
      { name: "Tomatensuppe", price: 9.5 },
      { name: "Gemüsesuppe", price: 9.9 },
    ],
  },
  {
    id: "pasta-burger",
    label: "Pasta & Burger",
    items: [
      {
        name: "Pomodoro",
        description: "Tomatensauce verfeinert mit nativem Olivenöl und Knoblauch",
        price: 14.9,
      },
      {
        name: "Pesto Verde",
        description:
          "Pesto, Basilikum, nativem Olivenöl, gerösteten Pinienkernen und Knoblauch",
        price: 14.9,
      },
      {
        name: "Carbonara Lachs",
        description: "In cremiger Sauce mit geräuchertem Lachs",
        price: 14.9,
      },
      {
        name: "Crunchy Chicken Burger",
        description: "Mit Pommes",
        price: 14.9,
      },
      { name: "Cheeseburger", description: "Mit Pommes", price: 17.9 },
      { name: "BBQ Bacon Burger", description: "Mit Pommes", price: 18.9 },
      { name: "Cheese Smash Burger", description: "Mit Pommes", price: 15.9 },
      {
        name: "Double Cheese Smash Burger",
        description: "Mit Pommes",
        price: 21.9,
      },
      {
        name: "Stadtkrone Mega Burger",
        description: "Mit Pommes",
        price: 25.9,
        tag: "Für den großen Hunger",
      },
    ],
  },
  {
    id: "kinder",
    label: "Kinderteller",
    items: [
      {
        name: "Kinder Schnitzel",
        description: "Mit Pommes frites, Ketchup und Mayonnaise",
        price: 8.9,
      },
      {
        name: "Kinder Bratwurst",
        description: "Mit Pommes frites, Ketchup und Mayonnaise",
        price: 8.9,
      },
      {
        name: "Pommes Spezial",
        description: "Mit Ketchup, Mayonnaise und Röstzwiebeln",
        price: 8.5,
      },
      {
        name: "Hähnchen Nuggets",
        description: "Mit Pommes frites, Ketchup und Mayonnaise",
        price: 8.9,
      },
    ],
  },
  {
    id: "dessert",
    label: "Dessert",
    items: [
      {
        name: "Apfelstrudel",
        description: "Mit Eis, Sahne, Vanillesauce und Schokosauce",
        price: 9.5,
      },
      {
        name: "Schmelzendes Herz",
        description: "Schokotörtchen-Soufflé mit Eis und Sahne",
        price: 9.5,
        tag: "Hausspezialität",
      },
    ],
  },
  {
    id: "extras",
    label: "Extras",
    items: [
      { name: "Senfsauce", price: 1.5 },
      { name: "Pfeffersauce", price: 1.5 },
      { name: "Mayonnaise", price: 4.5 },
      { name: "Jägersauce", price: 4.5 },
      { name: "Ketchup", price: 4.5 },
      { name: "Pommes", price: 5.5 },
    ],
  },
];

export const drinkCategories = [
  {
    label: "Alkoholfrei",
    items: [
      "Sprudelwasser",
      "Apfelschorle",
      "Cola",
      "Limonade",
      "Orangensaft",
      "Apfelsaft",
      "Bitter Lemon",
      "Sprite",
      "Eistee",
      "Tonic",
    ],
  },
  {
    label: "Warme Getränke",
    items: ["Kännchen Kaffee", "Kännchen Tee", "Glühwein", "Kakao", "Cappuccino"],
  },
  {
    label: "Biere",
    items: [
      "Pils",
      "Radler",
      "Weizenbier",
      "Alkoholfreies Weizen",
      "Altbier",
      "Leffe Blonde",
      "Leffe Brune",
    ],
  },
  { label: "Offene Weine", items: ["Weiß", "Rot", "Lambrusco"] },
  {
    label: "Aperitif",
    items: [
      "Campari",
      "Campari Orange",
      "Campari Soda",
      "Sherry",
      "Porto Rot/Weiß",
      "Martini Rot/Weiß",
      "Kir",
      "Kir Royal",
      "Sekt",
    ],
  },
  {
    label: "Digestif",
    items: ["Sambuca", "Grappa", "Cointreau", "Ramazzotti", "Amaretto", "Doppel Korn"],
  },
];
