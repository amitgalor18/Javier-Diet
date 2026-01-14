import { X } from "lucide-react";

interface TipModalProps {
    isVisible: boolean;
    text: string | null;
    onClose: () => void;
}

export function TipModal({ isVisible, text, onClose }: TipModalProps) {
    if (!isVisible || !text) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 max-w-sm w-full rounded-2xl relative animate-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold uppercase tracking-wide">Tip!</h3>
                    <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded">
                        <X size={24} />
                    </button>
                </div>

                {/* Content */}
                <div className="bg-blue-50 border-2 border-gray-900 p-4 rounded-xl mb-6">
                    <p className="text-lg leading-relaxed font-medium">{text}</p>
                </div>

                {/* Action */}
                <button
                    onClick={onClose}
                    className="w-full bg-yellow-300 hover:bg-yellow-400 border-4 border-gray-900 text-gray-900 font-bold py-3 px-6 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all uppercase text-lg"
                >
                    Got it!
                </button>
            </div>
        </div>
    );
}
