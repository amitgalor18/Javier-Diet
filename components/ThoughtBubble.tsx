"use client";

import { useState, useEffect } from "react";

interface ThoughtBubbleProps {
    onOpenTip: () => void;
}

export function ThoughtBubble({ onOpenTip }: ThoughtBubbleProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Logic: 30% chance OR > 24h since last visit
        const lastVisit = localStorage.getItem("javier_last_visit");
        const now = Date.now();
        const ONE_DAY = 24 * 60 * 60 * 1000;

        let shouldShow = false;

        if (!lastVisit) {
            shouldShow = true;
        } else {
            const timeDiff = now - parseInt(lastVisit);
            if (timeDiff > ONE_DAY) {
                shouldShow = true;
            } else {
                shouldShow = Math.random() < 0.3;
            }
        }

        setIsVisible(shouldShow);

        // Update last visit
        localStorage.setItem("javier_last_visit", now.toString());
    }, []);

    if (!isVisible) return null;

    return (
        <button
            onClick={() => {
                setIsVisible(false);
                onOpenTip();
            }}
            // Adjusted position slightly to align better with the new larger image
            className="absolute top-1/2 left-2/3 -translate-y-28 translate-x-2 z-20 animate-bounce cursor-pointer hover:scale-110 transition-transform"
            aria-label="Javier has a thought"
        >
            <div className="relative group">
                <img
                    src="/assets/thought-bubble.png"
                    alt="Thought Bubble"
                    className="w-16 h-16 pixelated drop-shadow-md"
                />
            </div>
        </button>
    );
}
