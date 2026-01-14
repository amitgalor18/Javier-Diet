import { Plus } from "lucide-react";

interface ActionMenuProps {
    onAction: (action: string) => void;
}

export function ActionMenu({ onAction }: ActionMenuProps) {
    const actions = [
        { id: "healthy", label: "Healthy Meal", emoji: "🥗", color: "bg-green-100 hover:bg-green-200" },
        { id: "workout", label: "Workout", emoji: "💪", color: "bg-blue-100 hover:bg-blue-200" },
        { id: "water", label: "Water", emoji: "💧", color: "bg-cyan-100 hover:bg-cyan-200" },
        { id: "treat", label: "Treat", emoji: "🍦", color: "bg-pink-100 hover:bg-pink-200" },
    ];

    return (
        <div className="grid grid-cols-2 gap-3 w-full">
            {actions.map((action) => (
                <button
                    key={action.id}
                    onClick={() => onAction(action.id)}
                    className={`${action.color} border-2 border-gray-900 rounded-xl p-3 flex flex-col items-center justify-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all`}
                >
                    <span className="text-2xl">{action.emoji}</span>
                    <span className="text-xs font-bold uppercase tracking-wide">{action.label}</span>
                </button>
            ))}
        </div>
    );
}
