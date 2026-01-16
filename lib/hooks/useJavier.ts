import { useState, useEffect } from "react";
import { doc, onSnapshot, setDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../firebase";
import { calculateHealth, checkDecay, recalculateStreakFromHistory } from "../gameLogic";

const DOC_ID = "couples_state/our_apartment";

export function useJavier() {
    const [health, setHealth] = useState(75); // Default
    const [streak, setStreak] = useState(0);
    const [lastCheck, setLastCheck] = useState(Date.now());
    const [history, setHistory] = useState<any[]>([]);
    const [carePackages, setCarePackages] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    // Sync with Firestore
    useEffect(() => {
        // If no API key, fallback to local state (for demo/dev without keys)
        if (!process.env.NEXT_PUBLIC_FIREBASE_API_KEY) {
            console.warn("No Firebase Config Found. Using local state.");
            setLoading(false);
            return;
        }

        const unsub = onSnapshot(doc(db, DOC_ID), (docSnap) => {
            if (docSnap.exists()) {
                const data = docSnap.data();
                setHealth(data.health);
                setStreak(data.streak || 0);
                setLastCheck(data.last_check || Date.now());
                setHistory(data.history || []);
                setCarePackages(data.care_packages || []);

                // Get last action time for streak logic (but use recalculate for true streak)
                const historyArr = data.history || [];
                const lastActionTime = historyArr.length > 0 ? historyArr[historyArr.length - 1].timestamp : Date.now();

                // Recalculate streak from history source of truth
                const trueStreak = recalculateStreakFromHistory(historyArr);
                setStreak(trueStreak);

                // Check for decay on load/update
                // We ignore checkDecay's streak return now as we use trueStreak
                const { newHealth, decayed } = checkDecay(data.last_check || Date.now(), lastActionTime, data.health, trueStreak);
                if (decayed) {
                    updateJavierState(newHealth, trueStreak);
                }
            } else {
                // Init doc if missing
                setDoc(doc(db, DOC_ID), {
                    health: 75,
                    streak: 0,
                    last_check: Date.now(),
                    history: [],
                    care_packages: []
                });
            }
            setLoading(false);
        }, (err) => {
            console.error("Firestore sync error:", err);
            // Fallback or handle error
            setLoading(false);
        });

        return () => unsub();
    }, []);

    const updateJavier = async (change: number, user: string = "Unknown") => {
        const newHealth = calculateHealth(health, change);

        // Calculate new streak based on PREDICTED history
        const simulatedHistory = [...history, { timestamp: Date.now() }];
        const newStreak = recalculateStreakFromHistory(simulatedHistory);

        if (!process.env.NEXT_PUBLIC_FIREBASE_API_KEY) {
            setHealth(newHealth);
            setStreak(newStreak);
            return;
        }

        try {
            const ref = doc(db, DOC_ID);
            await updateDoc(ref, {
                health: newHealth,
                streak: newStreak,
                last_check: Date.now(),
                // Append to history
                history: arrayUnion({
                    timestamp: Date.now(),
                    user: user,
                    action: change > 0 ? (change === 2 ? "Water" : (change === 15 ? "Workout" : "Healthy Meal")) : "Treat",
                    change: change
                })
            });
        } catch (e) {
            console.error("Update failed:", e);
            setHealth(newHealth); // Optimistic update
            setStreak(newStreak);
        }
    };

    const updateJavierState = async (h: number, s: number) => {
        if (!process.env.NEXT_PUBLIC_FIREBASE_API_KEY) return;
        const ref = doc(db, DOC_ID);
        await updateDoc(ref, { health: h, streak: s, last_check: Date.now() });
    };

    const sendCarePackage = async (type: string, fromUser: string, toUser: string) => {
        if (!process.env.NEXT_PUBLIC_FIREBASE_API_KEY) return;
        const ref = doc(db, DOC_ID);
        await updateDoc(ref, {
            care_packages: arrayUnion({
                id: Date.now().toString(),
                timestamp: Date.now(),
                type,
                from: fromUser,
                to: toUser
            })
        });
    };

    const consumeCarePackage = async (packageId: string) => {
        if (!process.env.NEXT_PUBLIC_FIREBASE_API_KEY) return;
        const newPackages = carePackages.filter(p => p.id !== packageId);
        const ref = doc(db, DOC_ID);
        await updateDoc(ref, { care_packages: newPackages });
    };

    return { health, streak, updateJavier, history: history || [], carePackages: carePackages || [], sendCarePackage, consumeCarePackage, loading };
}
