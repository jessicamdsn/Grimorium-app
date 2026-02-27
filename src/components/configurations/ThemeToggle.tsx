"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

interface ThemetoggleProps {
  type: "button" | "toggle",
}

export default function ThemeToggle({
  type = "toggle",
}: Readonly<ThemetoggleProps>) {

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div>
      {type === "button" ? (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-lg bg-background ring-2 ring-neutral-800 hover:ring-2 hover:ring-grimorium transition-all"
        >
          {theme === "dark" ? (
            <Sun className="text-yellow-400 w-5 h-5" />
          ) : (
            <Moon className="text-zinc-700 w-5 h-5" />
          )}
        </button>
      ) : (
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="sr-only peer"
          />

          <div className="w-11 h-6 bg-zinc-400/50 rounded-full peer 
          peer-checked:bg-grimorium after:content-[''] after:absolute after:top-0.5 
          after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full 
          after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full">
          </div>
          
          <span className="ml-3">
            {theme == "dark" ? (
              <p>Ativado</p>
            ) : (
              <p>Desativado</p>
            )}
          </span>
        </label>
      )}
    </div>
  );
}