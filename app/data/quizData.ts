export type PersonalityType = "Night Owl" | "Zen Minimalist" | "Artisan Snob";

export interface Answer {
  text: string;
  icon: string;
  personality: PersonalityType;
}

export interface Question {
  question: string;
  image: string;
  answers: Answer[];
}

export interface Personality {
  name: PersonalityType;
  coffee: string;
  tagline: string;
}

export const questions: Question[] = [
  {
    question: "What's your ideal weekend morning?",
    image: "/images/q1.jpg",
    answers: [
      { text: "Sleeping in until noon, no alarm allowed", icon: "\u{1F319}", personality: "Night Owl" },
      { text: "Up early for a quiet ritual with a good book", icon: "\u{1F9D8}", personality: "Zen Minimalist" },
      { text: "Hitting up the best new brunch spot in town", icon: "\u{1F5FA}\uFE0F", personality: "Artisan Snob" },
    ],
  },
  {
    question: "How do you pick a restaurant?",
    image: "/images/q2.jpg",
    answers: [
      { text: "Whatever's open late and close by", icon: "\u{1F4F1}", personality: "Night Owl" },
      { text: "Somewhere simple with fresh, quality ingredients", icon: "\u{1F343}", personality: "Zen Minimalist" },
      { text: "Only places with great reviews and a unique menu", icon: "\u2B50", personality: "Artisan Snob" },
    ],
  },
  {
    question: "What's your travel style?",
    image: "/images/q3.jpg",
    answers: [
      { text: "City nightlife, rooftop bars, no bedtime", icon: "\u{1F303}", personality: "Night Owl" },
      { text: "A quiet cabin, no Wi-Fi, just nature", icon: "\u{1F3D4}\uFE0F", personality: "Zen Minimalist" },
      { text: "Boutique hotels and hidden local gems", icon: "\u{1F3A8}", personality: "Artisan Snob" },
    ],
  },
  {
    question: "Your friend asks for a music recommendation. You suggest...",
    image: "/images/q4.jpg",
    answers: [
      { text: "That underground artist you found at 2am", icon: "\u{1F3A7}", personality: "Night Owl" },
      { text: "Something acoustic and chill", icon: "\u{1F3B5}", personality: "Zen Minimalist" },
      { text: "A curated vinyl you discovered at a record shop", icon: "\u{1F3B6}", personality: "Artisan Snob" },
    ],
  },
  {
    question: "How's your phone home screen organized?",
    image: "/images/q5.jpg",
    answers: [
      { text: "Honestly? It's chaos. I'll find the app when I need it", icon: "\u{1F50B}", personality: "Night Owl" },
      { text: "Clean and minimal \u2014 only the essentials", icon: "\u2728", personality: "Zen Minimalist" },
      { text: "Custom icons, aesthetic wallpaper, perfectly arranged", icon: "\u{1F4D0}", personality: "Artisan Snob" },
    ],
  },
];

export const personalities: Personality[] = [
  {
    name: "Night Owl",
    coffee: "Red Eye (coffee + espresso shot)",
    tagline: "Sleep is optional",
  },
  {
    name: "Zen Minimalist",
    coffee: "Black Coffee, Single Origin",
    tagline: "Simple. Clean. Perfect.",
  },
  {
    name: "Artisan Snob",
    coffee: "Pour-Over, Single Origin",
    tagline: "You know what you like",
  },
];
