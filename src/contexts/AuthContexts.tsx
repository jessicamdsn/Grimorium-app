"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { authService } from "@/src/services/authService";
import { useRouter } from "next/navigation";

// 1. Definimos o que o nosso "Service" global vai guardar
interface AuthContextType {
  user: any; // Depois podemos trocar 'any' por uma Interface de Usuário
  login: (email: string, pass: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

// 2. Criamos o Contexto (é a 'tomada' onde os componentes vão ligar)
const AuthContext = createContext<AuthContextType>({} as AuthContextType);

// 3. O Provider (O 'envelope' que discutimos antes)
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  const login = async (email: string, pass: string) => {
    try {
      const data = await authService.login(email, pass);
      
      // Aqui o dado chega do Service e a gente guarda no 'BehaviorSubject' (useState)
      setUser(data.user);
      
      // Salva o token nos Cookies para o Middleware (Porteiro) ver depois
      document.cookie = `grimorium_token=${data.token}; path=/; max-age=86400`;

      // Jessica logou? Manda ela para o Home!
      router.push("/home");
    } catch (error) {
      alert("Erro ao entrar: Verifique suas credenciais.");
    }
  };

  const logout = () => {
    setUser(null);
    document.cookie = "grimorium_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

// 4. O Hook (A forma fácil de injetar isso nos componentes)
export const useAuth = () => useContext(AuthContext);