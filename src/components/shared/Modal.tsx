"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // 1. Importações necessárias

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

  // 1. Função que lê a verdade do Storage
  const syncSettings = () => {
    const saved = localStorage.getItem('grimorium_animations');
    setShouldAnimate(saved === null ? true : JSON.parse(saved));
  };

  useEffect(() => {
    setIsClient(true);
    syncSettings();

    // 2. Fica ouvindo o "grito" do outro componente
    globalThis.addEventListener("storage", syncSettings);
    return () => globalThis.removeEventListener("storage", syncSettings);
  }, []);

  // 3. Som e re-checagem ao abrir
  useEffect(() => {
    if (isOpen) {
      syncSettings();
      if (localStorage.getItem('grimorium_audio') === 'true') {
        new Audio('/sounds/open_book.mp3').play().catch(() => {});
      }
    }
  }, [isOpen]);

  if (!isClient) return null;

  // Variantes para deixar o código limpo e sem erro de lógica
  const variants = {
    hidden: shouldAnimate ? { x: 600, opacity: 0, scaleX: 1.5, skewX: -15 } : { x: 0, opacity: 1 },
    visible: { x: 0, opacity: 1, scaleX: 1, skewX: 0 },
    exit: shouldAnimate ? { x: -600, opacity: 0, skewX: 15 } : { opacity: 0 }
  };
  
  return (
   <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden">
          <motion.div
            initial={shouldAnimate ?{ opacity: 0 }:{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={shouldAnimate ?{ 
              x: 600,         // Vem da direita, mas não tão longe
              opacity: 0, 
              scaleX: 1.8,    // Ainda estica para parecer fluido
              skewX: -20,     // Inclinação de onda
              borderRadius: "100% 30% 100% 30% / 100% 30% 100% 30%" 
            }:{}}
            animate={{ 
              x: 0, 
              opacity: 1, 
              scaleX: 1, 
              skewX: 0,
              borderRadius: "24px",
            }}
            exit={shouldAnimate ?{ 
              x: -600,        // Sai pela esquerda direto
              opacity: 0,
              skewX: 20
            }:{ opacity: 0 }}
            transition={{ 
              // Trocamos 'spring' por 'easeOut' para ele não quicar/voltar
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