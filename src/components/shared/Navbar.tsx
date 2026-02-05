"use client"
import { useAuth } from "@/src/contexts/AuthContexts";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import Popover from "./popover";
import Modal from "./Modal";
import { useState } from "react";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [modalAviso, setModalAviso] = useState(false);
  const [modalSair, setModalSair] = useState(false);

  return (
    <nav className="h-14 border-b border-bgborder bg-darkerbackground text-foreground flex justify-between items-center px-6 fixed top-0 w-full z-10">

      <Image src="/grimorium-horizontal-logo.png" alt="Logo Grimorium"
        width={170}
        height={170} />

      <div className="flex gap-5 items-center">
        {user && (<Popover label={user.name}>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-foreground border-b border-zinc-700 pb-1 mb-1">Minha Conta</p>
            <p>{user.email}</p>
            <p>{user.aplication}</p>
          </div>
          <button
            onClick={() => setModalSair(true)}
            className="mt-2 text-left bg-bginside text-grimorium hover:text-grimorium/50 font-bold"
          >
            Sair
          </button>
        </Popover>)}
        <ThemeToggle />
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