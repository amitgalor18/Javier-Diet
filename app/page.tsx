"use client";

import { useState } from "react";
import { Javier } from "@/components/Javier";
import { StatusPanel } from "@/components/StatusPanel";
import { ActionMenu } from "@/components/ActionMenu";
import { SpeechBubble } from "@/components/SpeechBubble";
import { generateTip } from "@/lib/gameLogic";
import { useJavier } from "@/lib/hooks/useJavier";

export default function Home() {
  const { health, streak, updateJavier, loading } = useJavier();
  const [currentTip, setCurrentTip] = useState<string | null>(null);
  const [showTip, setShowTip] = useState(false);

  const handleAction = (action: string) => {
    // Calculate healthy change
    let change = 0;
    if (action === "healthy") change = 5;
    if (action === "workout") change = 15;
    if (action === "treat") change = -5;
    if (action === "water") change = 2;

    updateJavier(change);

    // Generate and show tip
    const tip = generateTip(action);
    setCurrentTip(tip);
    setShowTip(true);

    // Hide tip after 3 seconds
    setTimeout(() => setShowTip(false), 3000);
  };

  if (loading) return <div className="flex h-screen items-center justify-center font-pixel">Loading Javier...</div>;

  return (
    <div className="min-h-screen bg-javier-bg flex items-center justify-center p-4">
      {/* Mobile container */}
      <div className="w-full max-w-[430px] h-full min-h-[800px] bg-white border-4 border-gray-900 rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden flex flex-col">
        {/* Living Room Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/grid.svg')] bg-center" />

        {/* Content Layer */}
        <div className="relative z-10 flex flex-col h-full p-6 gap-6">
          {/* Header */}
          <StatusPanel health={health} streak={streak} />

          {/* Main Stage */}
          <div className="flex-1 flex flex-col items-center justify-center relative">
            <SpeechBubble text={currentTip} isVisible={showTip} />
            <Javier health={health} />
          </div>

          {/* Controls */}
          <div className="mb-4">
            <ActionMenu onAction={handleAction} />
          </div>
        </div>
      </div>
    </div>
  );
}
