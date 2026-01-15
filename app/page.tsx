"use client";

import { useState, useEffect } from "react";
import { Javier } from "@/components/Javier";
import { StatusPanel } from "@/components/StatusPanel";
import { ActionMenu } from "@/components/ActionMenu";
import { PersistentSpeechBubble } from "@/components/PersistentSpeechBubble";
import { ThoughtBubble } from "@/components/ThoughtBubble";
import { HistoryLog } from "@/components/HistoryLog";
import { CareMenu } from "@/components/CareMenu"; // New
import { CareModal } from "@/components/CareModal"; // New
import { generateTip, getRandomMindsetTip } from "@/lib/gameLogic";
import { useJavier } from "@/lib/hooks/useJavier";
import { Refrigerator, Mail } from "lucide-react";

export default function Home() {
  const { health, streak, updateJavier, history, carePackages, sendCarePackage, consumeCarePackage, loading } = useJavier();
  const [currentTip, setCurrentTip] = useState<string | null>(null);
  const [showTip, setShowTip] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  // User State with Local Storage Persistence
  const [currentUser, setCurrentUser] = useState<"Amit" | "Noa">("Amit");
  const [userLoaded, setUserLoaded] = useState(false);

  useEffect(() => {
    // Check local storage on mount
    const saved = localStorage.getItem('javier_user');
    if (saved === "Amit" || saved === "Noa") {
      setCurrentUser(saved);
    }
    setUserLoaded(true);
  }, []);

  const toggleUser = () => {
    const newUser = currentUser === "Amit" ? "Noa" : "Amit";
    setCurrentUser(newUser);
    localStorage.setItem('javier_user', newUser);
  };

  // Care Logic
  const [activePkg, setActivePkg] = useState<any>(null);

  // Check for incoming packages for current user
  const incomingPackage = carePackages.find((p: any) => p.to === currentUser);

  const handleOpenUnknownPackage = () => {
    if (incomingPackage) {
      setActivePkg(incomingPackage);
      // We do NOT consume immediately, only on close (per request "After clicking X... delete")
    }
  };

  const handleClosePackage = () => {
    if (activePkg) {
      consumeCarePackage(activePkg.id);
      setActivePkg(null);
    }
  };

  // Day/Night Logic
  const [isNight, setIsNight] = useState(false);

  useEffect(() => {
    const hour = new Date().getHours();
    setIsNight(hour >= 18 || hour < 6);
  }, []);

  const handleAction = (action: string, tag?: string) => {
    let change = 0;
    if (action === "healthy") change = 5;
    if (action === "workout") change = 15;
    if (action === "treat") change = -5;
    if (action === "water") change = 2;

    updateJavier(change, currentUser);

    const tip = generateTip(action, tag);
    setCurrentTip(tip);
    setShowTip(true);
  };

  const handleThoughtBubble = () => {
    const tip = getRandomMindsetTip();
    setCurrentTip(tip);
    setShowTip(true);
  };

  if (loading) return <div className="flex h-screen items-center justify-center font-pixel text-xl">Loading Javier...</div>;

  return (
    <div className="h-[100dvh] w-full sm:w-auto sm:h-auto sm:min-h-screen bg-neutral-900 flex items-center justify-center p-0 sm:p-4">
      {/* Mobile container - optimized for viewport height */}
      <div className="w-full sm:max-w-[430px] h-full sm:h-[90vh] sm:max-h-[900px] bg-white sm:border-4 border-gray-500 sm:rounded-3xl shadow-[0px_0px_20px_rgba(0,0,0,0.5)] relative overflow-y-auto sm:overflow-hidden flex flex-col font-pixel">

        {/* Background Layer */}
        <div
          className="fixed inset-0 sm:absolute sm:inset-0 z-0 bg-cover bg-center pixelated"
          style={{ backgroundImage: "url('/assets/room-bg.png')" }}
        />

        {/* Day/Night Overlay */}
        {isNight && (
          <div className="fixed inset-0 sm:absolute sm:inset-0 z-0 bg-indigo-900 opacity-40 mix-blend-multiply pointer-events-none transition-all duration-1000" />
        )}

        {/* Content Layer */}
        <div className="relative z-10 flex flex-col min-h-full p-6 pb-32 sm:pb-2">
          {/* Header Row */}
          <div className="flex-none mt-2 flex items-start gap-3">
            {/* Left: Status */}
            <div className="flex flex-col gap-2 flex-1">
              <StatusPanel health={health} streak={streak} />

              {/* Action Buttons Row */}
              <div className="flex gap-2">
                {/* Fridge Button */}
                <button
                  onClick={() => setShowHistory(true)}
                  className="self-start bg-white border-4 border-black p-2 rounded-xl hover:bg-gray-100 active:scale-95 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] flex items-center gap-2"
                >
                  <Refrigerator className="w-5 h-5 text-blue-500" />
                </button>
                {/* Care Menu */}
                <CareMenu
                  currentUser={currentUser}
                  onSend={sendCarePackage}
                  hasSentPackage={carePackages.some((p: any) => p.from === currentUser)}
                />
              </div>
            </div>

            {/* Right Column: User Toggle & Envelope */}
            <div className="flex flex-col items-center gap-4">
              {/* User Toggle */}
              <button
                onClick={toggleUser}
                disabled={!userLoaded}
                className={`flex flex-col items-center justify-center p-2 border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all ${currentUser === "Amit" ? "bg-blue-100" : "bg-pink-100"} text-gray-900`}
              >
                <span className="text-2xl">{currentUser === "Amit" ? "👨🏻‍🦰" : "👩🏻"}</span>
                <span className="text-[10px] uppercase font-bold mt-1">{currentUser}</span>
              </button>

              {/* Floating Envelope (Notification) */}
              {incomingPackage && (
                <button
                  onClick={handleOpenUnknownPackage}
                  className="animate-bounce hover:scale-110 transition-transform w-[64px] h-[64px] flex items-center justify-center p-1"
                >
                  <img src="/assets/letter.png" alt="Care Package" className="w-full h-full pixelated object-contain drop-shadow-xl filter" />
                </button>
              )}
            </div>
          </div>

          {/* Spacer - Flexible but pushes Javier higher up than before */}
          <div className="flex-1 min-h-[40px]" />

          {/* Main Stage (Javier + Bubble) */}
          <div className="flex-none flex flex-col items-center justify-end relative mb-8">
            <PersistentSpeechBubble
              text={currentTip}
              isVisible={showTip}
              onDismiss={() => setShowTip(false)}
            />
            <ThoughtBubble onOpenTip={handleThoughtBubble} />
            <Javier health={health} />
          </div>

          {/* Controls (Fixed Bottom) */}
          <div className="flex-none mb-0">
            <ActionMenu onAction={handleAction} />
          </div>
        </div>

        {/* Modals */}
        <HistoryLog
          history={history}
          isVisible={showHistory}
          onClose={() => setShowHistory(false)}
        />

        <CareModal
          pkg={activePkg}
          onClose={handleClosePackage}
        />
      </div>
    </div>
  );
}
