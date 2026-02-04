"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
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
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => { //oninit
    async function reidratarUsuario() {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("grimorium_token="))
        ?.split("=")[1];

      if (token) {
        try {
          const userData = await authService.getMe(token);
          setUser(userData); 
        } catch (error) {
          console.error("Sessão inválida", error);
          // Se o token expirou, limpamos o cookie
          document.cookie = "grimorium_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
        }
      }
      setLoading(false); 
    }

    reidratarUsuario();
  }, []);

  const login = async (email: string, pass: string) => {
    try {
      const data = await authService.login(email, pass);
      setUser(data);
      document.cookie = `grimorium_token=${data.access_token}; path=/; max-age=86400`;
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