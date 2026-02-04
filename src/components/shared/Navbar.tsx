"use client"
import { useAuth } from "@/src/contexts/AuthContexts";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";

export default function Navbar() {
  const { user, logout } = useAuth();
  
  return (
    <nav className="h-14 border-b border-bgborder bg-darkerbackground text-foreground flex justify-between items-center px-6 fixed top-0 w-full z-10">
      <Image src="/grimorium-horizontal-logo.png" alt="Logo Grimorium"
      width={170}
      height={170} />
      <div className="flex gap-2 items-center">
        {user && (
          <p className="text-sm font-medium text-foreground">{user.name}
          </p>
        )}
        <ThemeToggle />
        <button
          onClick={logout}
          className=" px-3 py-1.5 bg-bginside text-foreground font-bold rounded-lg hover:ring-2 ring-grimorium transition-all"
        >
          Sair
        </button>
      </div>
    </nav>
  );
}