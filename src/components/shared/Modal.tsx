"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  type?: "alert" | "confirm";
  onConfirm?: () => void;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  description,
  type = "alert",
  onConfirm
}: Readonly<ModalProps>) {

  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const soundOpen = globalThis.window === undefined ? null : new Audio('/sounds/open_book.mp3');
  const soundClose = globalThis.window === undefined ? null : new Audio('/sounds/close_book.mp3');

  const syncSettings = () => {
    const saved = localStorage.getItem('grimorium_animations');
    setShouldAnimate(saved === null ? true : JSON.parse(saved));
  };

  useEffect(() => {
    setIsClient(true);
    syncSettings();

    globalThis.addEventListener("storage", syncSettings);
    return () => globalThis.removeEventListener("storage", syncSettings);
  }, []);

  const wasOpen = useRef(isOpen);

  useEffect(() => {
    const somAtivado = localStorage.getItem('grimorium_audio') === 'true';

    if (somAtivado) {
      if (isOpen && !wasOpen.current) {
        if (soundOpen) {
          soundOpen.currentTime = 0;
          soundOpen.play().catch(() => { });
        }
      }
      else if (!isOpen && wasOpen.current) {
        if (soundClose) {
          soundClose.currentTime = 0;
          soundClose.play().catch(() => { });
        }
      }
    }
    wasOpen.current = isOpen;
  }, [isOpen]);

  if (!isClient) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden">
          <motion.div
            initial={shouldAnimate ? { opacity: 0 } : { opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={shouldAnimate ? {
              x: 600,
              opacity: 0,
              scaleX: 1.8,
              skewX: -20,
              borderRadius: "100% 30% 100% 30% / 100% 30% 100% 30%"
            } : {}}
            animate={{
              x: 0,
              opacity: 1,
              scaleX: 1,
              skewX: 0,
              borderRadius: "24px",
            }}
            exit={shouldAnimate ? {
              x: -600,
              opacity: 0,
              skewX: 20
            } : { opacity: 0 }}
            transition={{
              type: "tween",
              ease: "easeOut",
              duration: shouldAnimate ? 0.5 : 0
            }}
            className="relative w-full max-w-md bg-bginside border-2 border-grimorium/40 p-8 shadow-[0_0_50px_-10px_rgba(150,96,180,0.5)]"
          >
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-foreground mb-3">{title}</h2>
              <p className="text-foreground/80 mb-8 leading-relaxed">
                {description}
              </p>

              <div className="flex justify-end gap-3">
                <button onClick={onClose} className="px-4 py-2 text-foreground/50 hover:text-foreground">
                  {type === "confirm" ? "Cancelar" : "Ok"}
                </button>
                {type === "confirm" && (
                  <button onClick={() => { onConfirm?.(); onClose(); }} className="btn-mistic px-6 py-2">
                    Confirmar
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}