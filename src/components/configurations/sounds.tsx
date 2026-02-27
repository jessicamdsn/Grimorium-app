"use client";

import { useEffect, useRef, useState } from "react";

export default function SoundSetting() {
  const [isAudioEnabled, setIsAudioEnabled] = useState(() => {
    if (globalThis.window !== undefined) {
      const saved = localStorage.getItem('grimorium_audio');
      return saved === null ? false : JSON.parse(saved);
    }
    return false;
  });

  const audioRef = useRef<HTMLAudioElement | null>(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      audioRef.current = new Audio('/sounds/open_book.mp3');
      audioRef.current.load();
    }
  }, []);
  
 useEffect(() => {
      localStorage.setItem('grimorium_audio', JSON.stringify(isAudioEnabled));
  }, [isAudioEnabled]);

  return (
    <div className="flex items-center gap-3 p-2">
      <input
        type="checkbox"
        id="audio-toggle"
        checked={isAudioEnabled}
        onChange={() => setIsAudioEnabled(!isAudioEnabled)}
        className="w-5 h-5 cursor-pointer accent-grimorium rounded border-zinc-700 bg-bginside"
      />
      <label 
        htmlFor="audio-toggle" 
        className="text-foreground cursor-pointer select-none hover:text-grimorium transition-colors"
      >
        Habilitar Efeitos Sonoros
      </label>
    </div>
  );
}