"use client";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  type?: "alert" | "confirm"; // Define se tem 1 ou 2 botões
  onConfirm?: () => void;      // Função para o botão "Sim"
}

export default function Modal({ 
  isOpen, 
  onClose, 
  title, 
  description, 
  type = "alert", 
  onConfirm 
}: ModalProps) {
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300" 
        onClick={onClose} 
      />

      <div className="relative w-full max-auto max-w-md bg-bginside border border-bgborder p-6 rounded-2xl shadow-2xl animate-in zoom-in-95 duration-200">
        
        <h2 className="text-xl font-bold text-foreground mb-2">{title}</h2>
        <p className="text-zinc-400 mb-6 leading-relaxed">
          {description}
        </p>

        <div className="flex justify-end gap-3">
          <button 
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-white/5 transition-colors"
          >
            {type === "confirm" ? "Cancelar" : "ok"}
          </button>

          {type === "confirm" && (
            <button 
              onClick={() => {
                onConfirm?.();
                onClose();
              }}
              className="btn-mistic px-4 py-2 !text-sm"
            >
              Confirmar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}