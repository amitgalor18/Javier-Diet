import { X } from "lucide-react";

interface HistoryLogProps {
    history: any[];
    isVisible: boolean;
    onClose: () => void;
}

const ACTION_ICONS: Record<string, string> = {
    "Healthy Meal": "🥗",
    "Workout": "💪",
    "Water": "💧",
    "Treat": "🍦",
};

export function HistoryLog({ history, isVisible, onClose }: HistoryLogProps) {
    if (!isVisible) return null;

    // Sort by newest first
    const sortedHistory = [...(history || [])].sort((a, b) => b.timestamp - a.timestamp);

    return (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="w-[90%] max-h-[70%] bg-zinc-100 dark:bg-slate-800 border-4 border-black dark:border-slate-500 p-4 rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)] flex flex-col font-pixel">
                <div className="flex justify-between items-center mb-4 border-b-4 border-gray-300 dark:border-slate-600 pb-2">
                    <h2 className="text-lg font-bold text-black dark:text-white">Fridge Log</h2>
                    <button onClick={onClose} className="hover:bg-gray-200 dark:hover:bg-slate-700 p-1 rounded transition-colors text-black dark:text-white">
                        <X size={24} />
                    </button>
                </div>

                <div className="overflow-y-auto flex-1 space-y-3 pr-2">
                    {sortedHistory.length === 0 ? (
                        <p className="text-center text-gray-500 dark:text-gray-400 py-8">The fridge is empty...</p>
                    ) : (
                        sortedHistory.map((entry, i) => {
                            const date = new Date(entry.timestamp);
                            const timeStr = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                            const icon = ACTION_ICONS[entry.action] || "📝";
                            // Default to ? if no user logged (legacy)
                            const userIcon = entry.user === "Noa" ? "👩🏻" : (entry.user === "Amit" ? "👨🏻‍🦰" : "👤");

                            return (
                                <div key={i} className="flex justify-between items-center bg-white dark:bg-slate-700 p-3 rounded-lg border-2 border-gray-200 dark:border-slate-600 shadow-sm">
                                    <div className="flex items-center gap-3">
                                        {/* User Icon */}
                                        <span className="text-xl bg-gray-100 dark:bg-slate-600 rounded-full p-1 w-8 h-8 flex items-center justify-center border border-gray-300 dark:border-slate-500" title={entry.user}>{userIcon}</span>

                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-gray-500 dark:text-gray-400 font-bold">{timeStr}</span>
                                            <span className="font-bold text-sm text-gray-800 dark:text-gray-200 flex items-center gap-2">
                                                <span>{icon}</span> {entry.action}
                                            </span>
                                        </div>
                                    </div>
                                    <span className={`text-sm font-bold ${entry.change > 0 ? "text-green-600 dark:text-green-400" : "text-red-500 dark:text-red-400"}`}>
                                        {entry.change > 0 ? "+" : ""}{entry.change}
                                    </span>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        </div>
    );
}
