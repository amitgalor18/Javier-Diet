
"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface CarePackage {
    id: string;
    type: string;
    from: string;
    to: string;
}

interface CareModalProps {
    pkg: CarePackage | null;
    onClose: () => void;
}

export function CareModal({ pkg, onClose }: CareModalProps) {
    const [text, setText] = useState("");
    const [hearts, setHearts] = useState<{ id: number; left: number; delay: number }[]>([]);

    useEffect(() => {
        if (!pkg) {
            setHearts([]); // Reset on close
            return;
        }

        // Reset hearts by default
        setHearts([]);

        // Generate Text
        let msg = "";
        if (pkg.type === "water") {
            const msgs = pkg.to === "Noa"
                ? [
                    "Amit reminds you to drink water to reduce stress!",
                    "Stay hydrated, Noa! 💧",
                    "Hydrate or diedrate! Love, Amit."
                ]
                : [
                    "Noa reminds you to drink water, avoid those kidney stones!",
                    "Drink up, Amit! 💧",
                    "Water break time! Love, Noa."
                ];
            msg = msgs[Math.floor(Math.random() * msgs.length)];
        } else if (pkg.type === "support") {
            const msgs = [
                "You're doing great, I believe in you! 💪",
                "Keep going my love! 🌟",
                "You got this! 🤗",
                "Sending you strength! 🔥"
            ];
            msg = msgs[Math.floor(Math.random() * msgs.length)];
        } else if (pkg.type === "love") {
            msg = "I Love You! ❤️";
            // Trigger hearts
            const newHearts = Array.from({ length: 20 }).map((_, i) => ({
                id: i,
                left: Math.random() * 100,
                delay: Math.random() * 2000
            }));
            setHearts(newHearts);
        }
        setText(msg);

    }, [pkg]);

    if (!pkg) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 font-pixel">
            {/* Falling Hearts Layer */}
            {hearts.map((h) => (
                <div
                    key={h.id}
                    className="fixed -top-10 z-[70] pointer-events-none"
                    style={{
                        left: `${h.left}%`,
                        width: "32px", // Consistent size
                        height: "32px",
                        animation: `fall 3s linear forwards`,
                        animationDelay: `${h.delay}ms`
                    }}
                >
                    <img src="/assets/heart.png" className="w-full h-full pixelated object-contain" />
                </div>
            ))}

            <div className="bg-[#fdf6e3] text-black w-full max-w-sm rounded overflow-hidden shadow-[10px_10px_0px_0px_rgba(0,0,0,0.5)] animate-in zoom-in-95 duration-300 relative border-4 border-black">
                {/* Envelope Lines / Paper Style */}
                <div className="h-6 bg-red-500/20 border-b-4 border-red-500/30 flex items-center px-2">
                    <div className="w-full h-[2px] bg-red-300"></div>
                </div>

                <div className="p-8 flex flex-col items-center text-center gap-6 min-h-[300px] justify-center relative">
                    {/* Stamp */}
                    <div className="absolute top-4 right-4 w-12 h-14 border-4 border-red-800 rotate-12 flex items-center justify-center opacity-50">
                        <span className="text-2xl">❤️</span>
                    </div>

                    <div className="text-4xl animate-bounce">
                        {pkg.type === "water" && "💧"}
                        {pkg.type === "love" && "❤️"}
                        {pkg.type === "support" && "🤗"}
                    </div>

                    <div className="text-xl font-bold leading-relaxed text-gray-800 font-pixel">
                        {text}
                    </div>

                    {/* Removed 'From [User]' per request, kept it cleaner */}
                </div>

                <button
                    onClick={onClose}
                    className="absolute top-2 left-2 p-2 hover:bg-black/10 rounded-full transition-colors"
                >
                    <X size={24} className="text-gray-600" />
                </button>
            </div>

            <style jsx>{`
                @keyframes fall {
                    0% { transform: translateY(-10vh) rotate(0deg); opacity: 1; }
                    100% { transform: translateY(110dvh) rotate(360deg); opacity: 0; }
                }
            `}</style>
        </div>
    );
}
