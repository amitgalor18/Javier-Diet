import { TIPS_DB, Tip, TipCategory } from './tipsDb';

export const MAX_HEALTH = 100;
export const DECAY_AMOUNT = 5;

// Decay Check Logic
export function checkDecay(lastCheck: number, currentHealth: number, currentStreak: number): { newHealth: number; newStreak: number; decayed: boolean } {
    const now = Date.now();
    const ONE_DAY = 24 * 60 * 60 * 1000;

    if (now - lastCheck > ONE_DAY) {
        const daysPassed = Math.floor((now - lastCheck) / ONE_DAY);
        const damage = daysPassed * DECAY_AMOUNT;
        // If decayed (missed 24h), streak resets
        return {
            newHealth: Math.max(0, currentHealth - damage),
            newStreak: 0,
            decayed: true
        };
    }
    return { newHealth: currentHealth, newStreak: currentStreak, decayed: false };
}

export function calculateStreak(currentStreak: number, lastCheck: number): number {
    const lastDate = new Date(lastCheck);
    const today = new Date();

    // Normalize to midnight to compare calendar days
    lastDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const diffTime = today.getTime() - lastDate.getTime();
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24)); // Round to handle DST/slight drifts if any

    if (diffDays === 0) return currentStreak;
    if (diffDays === 1) return currentStreak + 1;
    return 1; // Gap > 1 day, reset to 1
}

export function calculateHealth(current: number, change: number): number {
    return Math.min(MAX_HEALTH, Math.max(0, current + change));
}

export function generateTip(actionId: string, tag?: string): string {
    // 1. Specific Tag Match
    if (tag && tag !== "general") {
        const specificMatch = TIPS_DB.find(t =>
            t.keywords.some(k => k.toLowerCase() === tag.toLowerCase())
        );
        if (specificMatch) return specificMatch.text;
    }

    // 2. Category Fallback
    let targetCategory: TipCategory = "Mindset";

    if (actionId === "healthy") targetCategory = "Nutrition";
    if (actionId === "workout") targetCategory = "Workout";
    if (actionId === "water") targetCategory = "Hydration";
    if (actionId === "treat") targetCategory = "Damage Control";

    // Filter by category
    const categoryTips = TIPS_DB.filter(t => t.category === targetCategory);

    // Fallback to Mindset if no tips found in category (shouldn't happen)
    const pool = categoryTips.length > 0 ? categoryTips : TIPS_DB.filter(t => t.category === "Mindset");

    // Pick random
    const randomTip = pool[Math.floor(Math.random() * pool.length)];
    return randomTip.text;
}

export function getRandomMindsetTip(): string {
    const mindsetTips = TIPS_DB.filter(t => t.category === "Mindset");
    if (mindsetTips.length === 0) return "Stay positive!";
    return mindsetTips[Math.floor(Math.random() * mindsetTips.length)].text;
}
