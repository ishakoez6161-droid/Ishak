export type Testimonial = {
  name: string;
  detail: string;
  rating: number;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Julia K.",
    detail: "Google Rezension",
    rating: 5,
    quote:
      "Mitten in der Monschauer Altstadt und trotzdem ein ruhiger Rückzugsort. Das Monschauer-Senf-Schnitzel war eines der besten, die ich je hatte.",
  },
  {
    name: "Marco S.",
    detail: "Google Rezension",
    rating: 5,
    quote:
      "Herzlicher Service, hausgemachte Küche und eine Terrasse mit Blick auf den Markt. Der Apfelstrudel ist Pflicht.",
  },
  {
    name: "Anne-Sophie B.",
    detail: "Google Rezension",
    rating: 4,
    quote:
      "Schöne Fachwerk-Atmosphäre, faire Preise und freundliches Personal. Wir kommen bei jedem Monschau-Besuch wieder.",
  },
  {
    name: "Thomas R.",
    detail: "Google Rezension",
    rating: 5,
    quote:
      "Das Cordon Bleu war perfekt und die Kinder waren mit dem Kinderteller und den Pommes restlos begeistert.",
  },
];
