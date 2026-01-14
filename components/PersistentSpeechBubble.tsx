import { X } from "lucide-react";

interface PersistentSpeechBubbleProps {
    text: string | null;
    isVisible: boolean;
    onDismiss: () => void;
}

export function PersistentSpeechBubble({ text, isVisible, onDismiss }: PersistentSpeechBubbleProps) {
    if (!isVisible || !text) return null;

    return (
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 z-20 animate-in zoom-in-95 duration-200">
            {/* Bubble Body */}
            <div className="bg-white border-4 border-black p-4 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] relative">
                <p className="text-xs font-pixel font-bold leading-relaxed text-black mb-4">
                    {text}
                </p>

                {/* Dismiss Button */}
                <button
                    onClick={onDismiss}
                    className="absolute bottom-2 right-2 bg-yellow-300 hover:bg-yellow-400 border-2 border-black px-2 py-1 text-[10px] font-bold uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all"
                >
                    OK
                </button>

                {/* Tail - Moved to right side, pointing left/center */}
                <div className="absolute -bottom-3 right-8 w-4 h-4 bg-white border-r-4 border-b-4 border-black transform rotate-45" />
            </div>
        </div>
    );
}
