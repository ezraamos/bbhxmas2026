export type Slot = { time: string; title: string; items?: string[]; highlight?: boolean };
export type Day = { date: string; label: string; slots: Slot[] };

export const itinerary: Day[] = [
  {
    date: "Fri, Dec 18",
    label: "Night One",
    slots: [
      {
        time: "3:00–5:00 PM",
        title: "Check-in + recover before the night",
        items: [
          "Check into hotel",
          "Drop bags",
          "Shower",
          "2-hour power nap — important because we're pretending we're 22 again 😂",
        ],
      },
      {
        time: "5:30–7:00 PM",
        title: "Dinner / carbo-loading 🍖",
        items: [
          "Proper dinner before drinking",
          "Don't start getting wasted yet",
          "Keep the night going from here",
        ],
      },
      {
        time: "7:00–9:00 PM",
        title: "Pre-game at the hotel 🍻",
        items: [
          "Music",
          "Drinks",
          "Cards / drinking games",
          "Everyone gets dressed",
          "Christmas playlist",
          'Take the obligatory "boys before disaster" photo',
        ],
      },
      {
        time: "9:00–10:30 PM",
        title: "First bar / warm-up",
        items: [
          "Start with cocktails/beer",
          "Get everyone into the mood",
          "Don't go straight into maximum alcohol consumption 😂",
        ],
      },
      {
        time: "10:30 PM–3:00/4:00 AM",
        title: "🔥 Main event — clubbing",
        highlight: true,
        items: [
          "Go full early-20s mode",
          "Dancing",
          "Shots",
          "Music",
          "Table/bottle if the group is big enough",
          "No responsible-adult behavior tonight",
        ],
      },
      {
        time: "3:00–4:30 AM",
        title: "Late-night food 🍜",
        items: ["Grab something greasy/carby", "Everyone gets water", "Back to hotel"],
      },
      { time: "4:30 AM+", title: "Sleep 🛌" },
    ],
  },
  {
    date: "Sat, Dec 19",
    label: "Christmas Party",
    slots: [
      {
        time: "11:00 AM–12:30 PM",
        title: "Hangover recovery 🫠",
        items: [
          "Wake up",
          "Water/electrolytes",
          "Shower",
          "Coffee",
          "No activities requiring physical or emotional effort",
        ],
      },
      {
        time: "12:30–2:00 PM",
        title: "Hangover brunch/lunch 🍳",
        items: ["Big meal", "Carbs + protein", "Coffee / juice", "Take your time"],
      },
      {
        time: "2:00–5:00 PM",
        title: "The recovery block",
        items: [
          "Back to hotel",
          "Netflix / games",
          "Nap",
          "Talk about last night",
          "Everyone denies doing anything embarrassing",
        ],
      },
      {
        time: "5:00–6:30 PM",
        title: "Get ready for Christmas party 🎄",
        items: ["Shower", "Dress properly", "Prepare exchange gifts", "Photos"],
      },
      {
        time: "6:30–9:00 PM",
        title: "🎄 Christmas dinner",
        highlight: true,
        items: [
          "Proper sit-down dinner",
          "Christmas drinks",
          "Catch up on everyone's year",
          "Group photos",
        ],
      },
      {
        time: "9:00–10:00 PM",
        title: "🎁 Gift exchange",
        highlight: true,
        items: [
          "Secret Santa / random exchange",
          "One person at a time",
          "Explain the story behind the gift",
          "Funny gifts encouraged",
        ],
      },
      {
        time: "10:00 PM–12:00 AM",
        title: "Chill second night 🍺",
        items: [
          "Cocktails / beers",
          "Music",
          "Conversation",
          "Maybe live music",
          "Do NOT attempt Friday 2.0 😂",
        ],
      },
    ],
  },
  {
    date: "Sun, Dec 20",
    label: "Checkout",
    slots: [
      {
        time: "9:00–10:30 AM",
        title: "Breakfast together ☕",
        items: ["Coffee", "Breakfast", "Final conversations"],
      },
      {
        time: "10:30–11:30 AM",
        title: "Pack + clean up",
        items: ["Check drawers", "Chargers", "Wallets", "Gifts"],
      },
      {
        time: "12:00 PM",
        title: "Checkout 🧳",
        items: ["Checkout", "Lunch if needed", "Everyone heads home"],
      },
    ],
  },
];

// ✏️ Fill these in once the hotel is booked. Leave as "TBA" until then.
export const hotel = {
  name: "TBA",
  address: "TBA",
  mapsUrl: "", // e.g. a Google Maps link
  checkIn: "Fri, Dec 18 · 3:00 PM",
  checkOut: "Sun, Dec 20 · 12:00 PM",
  notes: "", // room numbers, who's rooming with who, parking, etc.
};
