"use client";

interface ToastProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

export default function Toast({ message, type, onClose }: ToastProps) {
  return (
    <div className="toast-mistic animate-toast">
      <div className={`w-2 h-2 rounded-full ${type === 'success' ? 'bg-green-400' : 'bg-red-400'}`} />
      <span className="text-sm font-medium text-foreground">{message}</span>
      <button onClick={onClose} className="ml-4 text-zinc-500 hover:text-white">×</button>
    </div>
  );
}