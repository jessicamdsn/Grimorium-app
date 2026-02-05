"use client";

import { useState } from "react";
import { useAuth } from "@/src/contexts/AuthContexts";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Evita que a página recarregue (padrão SPA)
    await login(email, password);
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 space-y-6 border bg-background border-zinc-800 rounded-2xl shadow-2xl"
      >
        <Image src="/grimorium-logo.png" alt="Grimorium" width={120} height={120} className="mx-auto my-0" />
        <p className="text-zinc-400 text-center text-sm">Entre para acessar seu Grimório</p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-4 py-2 bg-zinc-800 border border-zinc-700 text-white rounded-lg focus:ring-2 focus:ring-grimorium outline-none transition-all"
              placeholder="seu@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground">Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-2 bg-zinc-800 border border-zinc-700 text-white rounded-lg focus:ring-2 focus:ring-grimorium outline-none transition-all"
              placeholder="••••••••"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 font-bold btn-mistic active:scale-95"
        >
          Entrar na plataforma
        </button>
        <p className="text-zinc-400 text-sm text-center">
          Não possui uma conta?{" "}
          <Link
            href="/signup"
            className="text-grimorium hover:text-grimoriumhover font-semibold transition-colors"
          >
            Clique aqui
          </Link>
        </p>
      </form>
    </div>
  );
}