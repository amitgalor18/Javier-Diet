import { TIPS_DB, Tip, TipCategory } from './tipsDb';

export const MAX_HEALTH = 100;
export const DECAY_AMOUNT = 10;
export const DECAY_INTERVAL = 12 * 60 * 60 * 1000; // 12 hours

// Decay Check Logic
// Decay Check Logic
export function checkDecay(lastCheck: number, lastActionTime: number, currentHealth: number, currentStreak: number): { newHealth: number; newStreak: number; decayed: boolean } {
    const now = Date.now();

    // 1. Health Decay (Time-based from last check)
    let newHealth = currentHealth;
    let decayed = false;

    if (now - lastCheck > DECAY_INTERVAL) {
        const intervalsPassed = Math.floor((now - lastCheck) / DECAY_INTERVAL);
        const damage = intervalsPassed * DECAY_AMOUNT;
        newHealth = Math.max(0, currentHealth - damage);
        decayed = true;
    }

    // 2. Streak Reset (Calendar-based from last ACTION)
    // If we haven't acted in >= 2 calendar days (Day 0=Act, Day 1=Rest, Day 2=Fail), reset.
    const lastActionDate = new Date(lastActionTime || now); // Default to now if fresh start to avoid instability, or 0? 0 resets immediately. Safer: use lastCheck or now if no history.
    // Actually if history is empty, streak is 0 anyway.

    const today = new Date();
    lastActionDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const diffTime = today.getTime() - lastActionDate.getTime();
    const diffDays = Math.round(diffTime / (24 * 60 * 60 * 1000));

    let newStreak = currentStreak;
    if (diffDays >= 2) {
        newStreak = 0;
        if (currentStreak > 0) decayed = true;
    }

    return { newHealth, newStreak, decayed };
}

export function recalculateStreakFromHistory(history: any[]): number {
    if (!history || history.length === 0) return 0;

    // 1. Get unique days (normalized to midnight)
    const uniqueDays = new Set<number>();
    history.forEach(h => {
        const d = new Date(h.timestamp);
        d.setHours(0, 0, 0, 0);
        uniqueDays.add(d.getTime());
    });

    // 2. Sort descending
    const sortedDays = Array.from(uniqueDays).sort((a, b) => b - a);
    if (sortedDays.length === 0) return 0;

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayTime = today.getTime();

    // Check gap from Today to Most Recent
    const mostRecent = sortedDays[0];
    const diffDays = Math.round((todayTime - mostRecent) / (24 * 60 * 60 * 1000));

    // If last action was older than yesterday (gap >= 2), streak is broken
    if (diffDays >= 2) return 0;

    let streak = 1;
    for (let i = 0; i < sortedDays.length - 1; i++) {
        const current = sortedDays[i];
        const next = sortedDays[i + 1];
        const gap = Math.round((current - next) / (24 * 60 * 60 * 1000));

        if (gap === 1) {
            streak++;
        } else {
            break; // Streak broken
        }
    }

    return streak;
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
