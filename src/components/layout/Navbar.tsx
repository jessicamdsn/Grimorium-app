"use client";
import { useAuth } from "@/src/contexts/AuthContexts";
import ThemeToggle from "../configurations/ThemeToggle";
import Image from "next/image";
import Popover from "../shared/popover";
import Modal from "../shared/Modal";
import { useState } from "react";
import Link from "next/link";
import { User } from "lucide-react";

export default function Navbar() {
  const { user, logout, loading } = useAuth();
  const [modalSair, setModalSair] = useState(false);

  return (
    <nav className="h-14   bg-darkerbackground text-foreground flex justify-between items-center px-6 fixed top-0 w-full z-10">
      
      <Image 
        src="/grimorium-horizontal-logo.png" 
        alt="Logo Grimorium"
        width={170} 
        height={170} 
      />

      <div className="flex gap-2.5 items-center">
        {!loading && (
          <>
            {user ? (
              <>
            <User size={18} className="text-grimorium" />
            <Popover label={user.name} align="left">
              <div className="flex flex-col gap-2">
                <p className="font-bold text-foreground border-b border-zinc-700 pb-1 mb-1">
                  Minha Conta
                </p>
                <p>{user.email}</p>
                <p>{user.aplication}</p>
              </div>
              <button
                onClick={() => setModalSair(true)}
                className="mt-2 text-left text-grimorium hover:text-grimorium/50 font-bold cursor-pointer"
              >
                Sair
              </button>
            </Popover>
          </>
        ) : (
          <div className="flex gap-3 items-center">
            <Link 
              href="/login" 
              className="text-sm font-medium hover:text-grimorium transition-colors"
            >
              Sign In
            </Link>
            <Link 
              href="/signup" 
              className="bg-grimorium text-white px-4 py-1.5 rounded-md text-sm font-bold hover:bg-grimorium/80 transition-all"
            >
              Sign Up
            </Link>
          </div>
        )}
        </>
        )}
      </div>

      <Modal
        isOpen={modalSair}
        onClose={() => setModalSair(false)}
        onConfirm={logout}
        type="confirm"
        title="Tem certeza disso?"
        description="Você se desconectará do Grimorium"
      />
    </nav>
  );
}