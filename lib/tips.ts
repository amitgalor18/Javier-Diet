export interface Tip {
    id: number;
    category: string;
    keywords: string[];
    text: string;
}

export const tips: Tip[] = [
    { id: 1, category: "Veggie", keywords: ["spinach", "iron", "leafy"], text: "Spinach is great, but pair it with Vitamin C (like lemon) to actually absorb that iron!" },
    { id: 2, category: "Motivation", keywords: ["general", "keep going"], text: "Javier believes in you. Don't let him turn into a pixel ghost." },
    { id: 3, category: "Water", keywords: ["hydrate", "water"], text: "Hydration Check! Javier looks thirsty." },
    { id: 4, category: "Workout", keywords: ["gym", "run"], text: "Gainz! Javier is getting buff." },
    { id: 5, category: "Treat", keywords: ["sugar", "sweet"], text: "Treats are okay in moderation. Javier is watching you though." },
];

export function getTip(action: string): string {
    // Simple logic for now
    if (action === "healthy") return tips[0].text;
    if (action === "workout") return tips[3].text;
    if (action === "water") return tips[2].text;
    if (action === "treat") return tips[4].text;
    return tips[1].text;
}
