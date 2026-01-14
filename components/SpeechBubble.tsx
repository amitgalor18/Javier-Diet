import { cn } from "@/lib/utils";

interface SpeechBubbleProps {
    text: string | null;
    isVisible: boolean;
}

export function SpeechBubble({ text, isVisible }: SpeechBubbleProps) {
    if (!isVisible || !text) return null;

    return (
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-4/5 z-20 animate-in fade-in zoom-in duration-300">
            <div className="bg-white border-2 border-black p-4 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative">
                <p className="text-xs font-bold text-center leading-relaxed font-pixel text-gray-800">
                    {text}
                </p>
                {/* Tail */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-r-2 border-b-2 border-black rotate-45" />
            </div>
        </div>
    );
}
