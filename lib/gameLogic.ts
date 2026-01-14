import { tips, getTip, Tip } from './tips';

export const MAX_HEALTH = 100;
export const DECAY_AMOUNT = 5;

// Decay Check Logic
export function checkDecay(lastCheck: number, currentHealth: number): { newHealth: number; decayed: boolean } {
    const now = Date.now();
    const ONE_DAY = 24 * 60 * 60 * 1000;

    if (now - lastCheck > ONE_DAY) {
        const daysPassed = Math.floor((now - lastCheck) / ONE_DAY);
        const damage = daysPassed * DECAY_AMOUNT;
        return {
            newHealth: Math.max(0, currentHealth - damage),
            decayed: true
        };
    }
    return { newHealth: currentHealth, decayed: false };
}

export function calculateHealth(current: number, change: number): number {
    return Math.min(MAX_HEALTH, Math.max(0, current + change));
}

export function generateTip(actionId: string): string {
    return getTip(actionId);
}
