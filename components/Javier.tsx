import { cn } from "@/lib/utils";

interface JavierProps {
    health: number;
}

export function Javier({ health }: JavierProps) {
    // Determine mood based on health
    let mood = "neutral";
    let animation = "animate-bounce";

    if (health > 80) {
        mood = "ecstatic";
        animation = "animate-bounce duration-700";
    } else if (health > 50) {
        mood = "chilling";
        animation = "animate-pulse";
    } else if (health > 20) {
        mood = "meh";
        animation = "";
    } else {
        mood = "sick";
        animation = "grayscale";
    }

    return (
        <div className="relative w-48 h-48 flex items-center justify-center">
            {/* Placeholder Pixel Art Cat (CSS representation) */}
            <div className={cn("w-32 h-32 bg-orange-400 border-4 border-black relative transition-all", animation)}>
                {/* Ears */}
                <div className="absolute -top-4 left-2 w-8 h-8 bg-orange-400 border-4 border-black" />
                <div className="absolute -top-4 right-2 w-8 h-8 bg-orange-400 border-4 border-black" />

                {/* Face */}
                <div className="absolute top-10 left-6 w-4 h-4 bg-black" /> {/* Eye L */}
                <div className="absolute top-10 right-6 w-4 h-4 bg-black" /> {/* Eye R */}
                <div className="absolute top-16 left-12 w-8 h-4 bg-pink-300 border-2 border-black" /> {/* Nose/Mouth */}

                {/* Dynamic Mood Element */}
                {mood === "sick" && <div className="absolute top-8 left-0 w-full text-center text-green-800 font-bold text-xs">Sick...</div>}
                {mood === "ecstatic" && <div className="absolute -top-10 w-full text-center text-xl">✨</div>}
            </div>
        </div>
    );
}
