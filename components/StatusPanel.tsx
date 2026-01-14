import { Heart, Flame } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatusPanelProps {
    health: number;
    streak: number;
}

export function StatusPanel({ health, streak }: StatusPanelProps) {
    return (
        <div className="flex w-full justify-between items-center bg-white/80 border-2 border-gray-900 p-2 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center gap-2">
                <Heart className={cn("w-6 h-6 fill-red-500 text-red-500 animate-pulse")} />
                <div className="flex flex-col">
                    <span className="text-[10px] uppercase text-gray-500">Health</span>
                    <span className="text-sm font-bold">{health}%</span>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <div className="flex flex-col items-end">
                    <span className="text-[10px] uppercase text-gray-500">Streak</span>
                    <span className="text-sm font-bold">{streak} Days</span>
                </div>
                <Flame className="w-6 h-6 fill-orange-500 text-orange-500" />
            </div>
        </div>
    );
}
