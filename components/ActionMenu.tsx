import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { getKeywordsByCategory, TipCategory } from "@/lib/tipsDb";

interface ActionMenuProps {
    onAction: (action: string, tag?: string) => void;
}

const ACTIONS = [
    { id: "healthy", label: "Healthy Meal", emoji: "🥗", color: "bg-green-100 hover:bg-green-200", category: "Nutrition" },
    { id: "workout", label: "Workout", emoji: "💪", color: "bg-blue-100 hover:bg-blue-200", category: "Workout" },
    { id: "water", label: "Water", emoji: "💧", color: "bg-cyan-100 hover:bg-cyan-200", category: "Hydration" },
    { id: "treat", label: "Treat", emoji: "🍦", color: "bg-pink-100 hover:bg-pink-200", category: "Damage Control" },
];

export function ActionMenu({ onAction }: ActionMenuProps) {
    const [selectedAction, setSelectedAction] = useState<string | null>(null);
    const [subOptions, setSubOptions] = useState<string[]>([]);

    const handleMainClick = (actionId: string, category: string) => {
        // Hydration is instant
        if (category === "Hydration") {
            onAction(actionId, "general");
            return;
        }

        // Get keywords for others
        const keywords = getKeywordsByCategory(category as TipCategory);
        // Add "General" and maybe slice correctly?
        // We'll just show the keywords.
        // Also limit to maybe 6 to fit grid?
        const displayKeywords = keywords.slice(0, 5); // Take top 5

        setSubOptions(displayKeywords);
        setSelectedAction(actionId);
    };

    const handleSubClick = (tag: string) => {
        if (selectedAction) {
            onAction(selectedAction, tag);
            setSelectedAction(null); // Reset
            setSubOptions([]);
        }
    };

    if (selectedAction) {
        return (
            <div className="flex flex-col gap-3 w-full animate-in fade-in slide-in-from-bottom-4 duration-300 font-pixel">
                <button
                    onClick={() => setSelectedAction(null)}
                    className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-2 font-bold uppercase tracking-wide px-1"
                >
                    <ChevronLeft size={12} /> Back
                </button>
                <div className="grid grid-cols-2 gap-3">
                    {subOptions.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => handleSubClick(tag)}
                            className="bg-white dark:bg-slate-800 border-4 border-gray-900 dark:border-slate-500 rounded-xl p-3 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all"
                        >
                            <span className="text-[10px] font-bold uppercase tracking-wide dark:text-white">{tag}</span>
                        </button>
                    ))}
                    {/* Always add "Other/General" */}
                    <button
                        onClick={() => handleSubClick("general")}
                        className="bg-gray-100 dark:bg-slate-700 border-4 border-gray-900 dark:border-slate-500 rounded-xl p-3 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all"
                    >
                        <span className="text-[10px] font-bold uppercase tracking-wide dark:text-white">Other / Random</span>
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-2 gap-3 w-full font-pixel">
            {ACTIONS.map((action) => (
                <button
                    key={action.id}
                    onClick={() => handleMainClick(action.id, action.category)}
                    className={`${action.color} border-4 border-gray-900 dark:border-gray-900 rounded-xl p-3 flex flex-col items-center justify-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all group`}
                >
                    <span className="text-2xl contrast-125 group-hover:scale-110 transition-transform duration-200">{action.emoji}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wide text-gray-900">{action.label}</span>
                </button>
            ))}
        </div>
    );
}
