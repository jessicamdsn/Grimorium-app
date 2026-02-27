"use client";

import { useEffect, useState } from "react";

export default function AnimationsSetting() {
  const [isAnimationsEnabled, setIsAnimationsEnabled] = useState(() => {
    if (globalThis.window !== undefined) {
      const saved = localStorage.getItem('grimorium_animations');
      return saved === null ? false : JSON.parse(saved);
    }
    return false;
  });

// ... dentro da sua função onChange ou useEffect de salvar
useEffect(() => {
    localStorage.setItem('grimorium_animations', JSON.stringify(isAnimationsEnabled));
    
    // O GRITO: Avisa que o storage mudou
    window.dispatchEvent(new Event("storage"));
}, [isAnimationsEnabled]);

  return (
    <div className="flex items-center gap-3 p-2">
      <input
        type="checkbox"
        id="animations-toggle"
        checked={isAnimationsEnabled}
        onChange={() => setIsAnimationsEnabled(!isAnimationsEnabled)}
        className="w-5 h-5 cursor-pointer accent-grimorium rounded border-zinc-700 bg-bginside"
      />
      <label 
        htmlFor="animations-toggle" 
        className="text-foreground cursor-pointer select-none hover:text-grimorium transition-colors"
      >
        Habilitar animações
      </label>
    </div>
  );
}