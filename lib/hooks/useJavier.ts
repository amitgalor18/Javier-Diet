import { useState, useEffect } from "react";
import { doc, onSnapshot, setDoc, updateDoc, getDoc, arrayUnion } from "firebase/firestore";
import { db } from "../firebase";
import { calculateHealth, checkDecay } from "../gameLogic";

const DOC_ID = "couples_state/our_apartment";

export function useJavier() {
    const [health, setHealth] = useState(75); // Default
    const [streak, setStreak] = useState(0);
    const [history, setHistory] = useState<any[]>([]);
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
                setHistory(data.history || []);

                // Check for decay on load/update
                const { newHealth, decayed } = checkDecay(data.last_check || Date.now(), data.health);
                if (decayed) {
                    updateJavierState(newHealth, data.streak);
                }
            } else {
                // Init doc if missing
                setDoc(doc(db, DOC_ID), {
                    health: 75,
                    streak: 0,
                    last_check: Date.now(),
                    history: []
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

        if (!process.env.NEXT_PUBLIC_FIREBASE_API_KEY) {
            setHealth(newHealth);
            return;
        }

        try {
            const ref = doc(db, DOC_ID);
            await updateDoc(ref, {
                health: newHealth,
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
        }
    };

    const updateJavierState = async (h: number, s: number) => {
        if (!process.env.NEXT_PUBLIC_FIREBASE_API_KEY) return;
        const ref = doc(db, DOC_ID);
        await updateDoc(ref, { health: h, streak: s, last_check: Date.now() });
    };

    return { health, streak, updateJavier, history: history || [], loading };
}
