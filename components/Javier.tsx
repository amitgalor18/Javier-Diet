import { useState, useCallback, useEffect } from "react";

interface JavierProps {
    health: number;
}

type SpriteConfig = {
    url: string;
    frames: number;
};


type Heart = {
    id: number;
    left: number; // percentage
    size: number; // px
    duration: number; // ms
    delay: number; // ms
};

export function Javier({ health }: JavierProps) {
    const [hearts, setHearts] = useState<Heart[]>([]);

    // Configuration for sprites
    const SPRITES: Record<string, SpriteConfig> = {
        ecstatic: { url: "/assets/cat-jump.png", frames: 5 },
        happy: { url: "/assets/cat-idle.png", frames: 4 },
        bored: { url: "/assets/cat-bored.png", frames: 5 },
        sick: { url: "/assets/cat-sick.png", frames: 5 }
    };

    let mood = "happy";
    if (health >= 80) mood = "ecstatic";
    else if (health >= 50) mood = "happy";
    else if (health >= 20) mood = "bored";
    else mood = "sick";

    const config = SPRITES[mood];
    const stepCount = config.frames - 1;

    const handleInteract = useCallback(() => {
        // Optional: Play Sound
        // const audio = new Audio('/assets/purr.mp3');
        // audio.play().catch(() => {}); // catch if no interaction or file missing

        let count = 3;
        let baseSize = 24;
        let duration = 1000;

        // Logic based on mood
        if (mood === "ecstatic") {
            count = 5;
            baseSize = 32;
            duration = 1200;
        } else if (mood === "bored" || mood === "sick") {
            count = 2;
            baseSize = 16;
            duration = 600;
        }

        const newHearts: Heart[] = Array.from({ length: count }).map((_, i) => ({
            id: Date.now() + Math.random(),
            left: 50 + (Math.random() * 60 - 30), // Center +- 30%
            size: baseSize + (Math.random() * 10 - 5),
            duration: duration + (Math.random() * 200),
            delay: i * 50
        }));

        setHearts(prev => [...prev, ...newHearts]);

        // Cleanup
        setTimeout(() => {
            setHearts(prev => prev.filter(h => !newHearts.find(nh => nh.id === h.id)));
        }, duration + 500);
    }, [mood]);

    return (
        <div
            onClick={handleInteract}
            className="relative w-56 h-72 transition-transform duration-500 cursor-pointer active:scale-95 touch-manipulation"
        >
            {/* Visual Feedback: Hearts */}
            {hearts.map(heart => (
                <div
                    key={heart.id}
                    className="absolute bottom-1/3 z-20 pointer-events-none select-none"
                    style={{
                        left: `${heart.left}%`,
                        width: `${heart.size}px`,
                        height: `${heart.size}px`,
                        animation: `floatUp ${heart.duration}ms ease-out forwards`,
                        animationDelay: `${heart.delay}ms`
                    }}
                >
                    <img
                        src="/assets/heart.png"
                        alt="heart"
                        className="w-full h-full pixelated object-contain"
                    />
                </div>
            ))}

            {/* Shadow */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-32 h-6 bg-black/20 rounded-full blur-md" />

            {/* Sprite */}
            <div
                className="w-full h-full pixelated translate-y-4"
                style={{
                    backgroundImage: `url('${config.url}')`,
                    backgroundSize: `${config.frames * 100}% auto`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPositionY: '45%',
                    animation: `sprite-animation 0.8s steps(${stepCount}) infinite`
                }}
            />

            <style jsx>{`
                @keyframes sprite-animation {
                    from { background-position-x: 0; }
                    to { background-position-x: 100%; }
                }
                @keyframes floatUp {
                    0% { transform: translateY(0) scale(0.5); opacity: 1; }
                    50% { opacity: 0.8; }
                    100% { transform: translateY(-100px) scale(1.2); opacity: 0; }
                }
            `}</style>
        </div>
    );
}
