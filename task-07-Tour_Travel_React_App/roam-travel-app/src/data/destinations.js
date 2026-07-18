// Hardcoded data source — no API/fetch for this build.
// Each destination carries a "category" used to pick its accent color
// across the app (card stripe, tags, booking form), like a route-map legend.

export const categories = {
  coast: { label: "Coast", color: "var(--teal)" },
  peak: { label: "Peak", color: "var(--gold)" },
  city: { label: "City", color: "var(--coral)" },
  desert: { label: "Desert", color: "var(--rust)" },
  forest: { label: "Forest", color: "var(--moss)" },
};

const destinations = [
  {
    id: "hunza-valley",
    name: "Hunza Valley",
    country: "Pakistan",
    category: "peak",
    code: "HNZ",
    duration: "7 days",
    groupSize: "Max 10",
    price: 640,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1200&auto=format&fit=crop",
    blurb:
      "Terraced apricot orchards below Rakaposhi, with two nights at Attabad Lake.",
  },
  {
    id: "amalfi-coast",
    name: "Amalfi Coast",
    country: "Italy",
    category: "coast",
    code: "AML",
    duration: "5 days",
    groupSize: "Max 12",
    price: 980,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?q=80&w=1200&auto=format&fit=crop",
    blurb: "Cliffside towns, lemon groves, and a boat day to Capri.",
  },
  {
    id: "kyoto",
    name: "Kyoto",
    country: "Japan",
    category: "city",
    code: "KYT",
    duration: "6 days",
    groupSize: "Max 8",
    price: 1120,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop",
    blurb: "Temple mornings, machiya alleys, and a private tea ceremony.",
  },
  {
    id: "wadi-rum",
    name: "Wadi Rum",
    country: "Jordan",
    category: "desert",
    code: "WRM",
    duration: "4 days",
    groupSize: "Max 10",
    price: 560,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?q=80&w=1200&auto=format&fit=crop",
    blurb: "Red-sand camps, star-trail nights, and a sunrise Bedouin breakfast.",
  },
  {
    id: "banff",
    name: "Banff",
    country: "Canada",
    category: "forest",
    code: "BNF",
    duration: "6 days",
    groupSize: "Max 10",
    price: 890,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1609825488888-3a766db05542?q=80&w=1200&auto=format&fit=crop",
    blurb: "Glacier lakes, larch-lined trails, and a wildlife-spotting drive.",
  },
  {
    id: "santorini",
    name: "Santorini",
    country: "Greece",
    category: "coast",
    code: "STR",
    duration: "5 days",
    groupSize: "Max 12",
    price: 940,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=1200&auto=format&fit=crop",
    blurb: "Caldera sunsets, a wine-cave dinner, and a sail past the volcano.",
  },
];

export default destinations;
