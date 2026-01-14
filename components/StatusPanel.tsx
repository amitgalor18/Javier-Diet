import { Heart, Flame } from "lucide-react";

interface StatusPanelProps {
    health: number;
    streak: number;
}

export function StatusPanel({ health, streak }: StatusPanelProps) {
    return (
        <div className="flex justify-between items-center w-full gap-4 font-pixel">
            {/* Health Bar */}
            <div className="flex-1 bg-white dark:bg-slate-800 border-4 border-gray-900 dark:border-slate-500 rounded-xl p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]">
                <div className="flex items-center gap-2 mb-2">
                    <Heart className="text-red-500 fill-current" size={16} />
                    <span className="text-xs font-bold uppercase dark:text-white">Health</span>
                </div>
                {/* Retro Bar Container */}
                <div className="w-full h-4 border-2 border-gray-900 dark:border-slate-500 p-[2px]">
                    <div
                        className="h-full bg-red-500 transition-all duration-500"
                        style={{ width: `${health}%` }}
                    />
                </div>
            </div>

            {/* Streak Counter */}
            <div className="flex-1 bg-white dark:bg-slate-800 border-4 border-gray-900 dark:border-slate-500 rounded-xl p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]">
                <div className="flex items-center gap-2 mb-2">
                    <Flame className="text-orange-500 fill-current" size={16} />
                    <span className="text-xs font-bold uppercase dark:text-white">Streak</span>
                </div>
                <div className="text-center dark:text-white">
                    <span className="text-lg font-bold">{streak}</span>
                    <span className="text-[10px] text-gray-500 dark:text-gray-400 ml-1">DAYS</span>
                </div>
            </div>
        </div>
    );
}
