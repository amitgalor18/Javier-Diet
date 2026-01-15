
"use client";

import { useState } from "react";
import { Mail } from "lucide-react";

interface CareMenuProps {
    currentUser: "Amit" | "Noa";
    onSend: (type: string, from: string, to: string) => void;
}

export function CareMenu({ currentUser, onSend, hasSentPackage }: CareMenuProps & { hasSentPackage: boolean }) {
    const [isOpen, setIsOpen] = useState(false);
    const [sending, setSending] = useState(false);

    const handleSend = async (type: string) => {
        setSending(true);
        const toUser = currentUser === "Amit" ? "Noa" : "Amit";
        await onSend(type, currentUser, toUser);
        setSending(false);
        setIsOpen(false);
    };

    // Close on click outside handling is simpler: just a wrapper or native details/summary, 
    // but for now a simple toggle state

    return (
        <div className="relative font-pixel">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`border-4 border-black p-2 rounded-xl transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] flex items-center justify-center ${hasSentPackage ? 'bg-gray-200' : 'bg-white hover:bg-gray-100 active:scale-95'}`}
            >
                <Mail className={`w-5 h-5 ${hasSentPackage ? 'text-gray-400' : 'text-pink-500'}`} />
            </button>

            {isOpen && (
                <div className="absolute top-12 left-0 z-50 bg-white border-4 border-black rounded-xl p-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)] flex flex-col gap-2 w-32 animate-in slide-in-from-top-2">
                    <button
                        onClick={() => handleSend("water")}
                        disabled={sending}
                        className="flex items-center gap-2 p-2 hover:bg-blue-100 rounded text-left active:translate-y-1"
                    >
                        <span className="text-xl">💧</span>
                        <span className="text-xs font-bold uppercase">Water</span>
                    </button>
                    <button
                        onClick={() => handleSend("love")}
                        disabled={sending}
                        className="flex items-center gap-2 p-2 hover:bg-pink-100 rounded text-left active:translate-y-1"
                    >
                        <span className="text-xl">❤️</span>
                        <span className="text-xs font-bold uppercase">Love</span>
                    </button>
                    <button
                        onClick={() => handleSend("support")}
                        disabled={sending}
                        className="flex items-center gap-2 p-2 hover:bg-yellow-100 rounded text-left active:translate-y-1"
                    >
                        <span className="text-xl">💪</span>
                        <span className="text-xs font-bold uppercase">Support</span>
                    </button>
                </div>
            )}
        </div>
    );
}
