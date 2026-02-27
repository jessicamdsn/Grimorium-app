"use client";
import { useState, useRef, useEffect } from "react";

interface PopoverProps {
  label: string;
  children: React.ReactNode;
  align?: 'left' | 'right';
}

export default function Popover({ label, children, align = 'right' }: Readonly<PopoverProps>) {
  const [show, setShow] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const alignClasses = {
    left: '-left-32',
    right: '-right-18'
  };

  // Fecha o bloquinho se você clicar fora dele
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShow(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={containerRef}>
      <button 
        onClick={() => setShow(!show)}
        className="text-foreground hover:text-grimorium transition-colors font-medium cursor-pointer"
      >
        {label}
      </button>

      {show && (
        <div className={`absolute ${alignClasses[align]} mt-2 w-48 p-3 rounded-md shadow-lg 
                        bg-background border border-bgborder z-50
                        animate-in fade-in slide-in-from-top-1 duration-200`}>
          <div className="text-sm text-foreground">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}