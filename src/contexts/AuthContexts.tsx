"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { authService } from "@/src/services/authService";
import { useRouter } from "next/navigation";
import Modal from "../components/shared/Modal";
interface AuthContextType {
  user: any;
  login: (email: string, pass: string) => Promise<void>;
  logout: () => void;
  signup: (name: string, email: string, pass: string) => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [errorModal, setErrorModal] = useState({
    isOpen: false,
    message: ""
  });
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
        } catch (error: any) {
          setErrorModal({
            isOpen: true,
            message: error.message || "Sessão invalida"
          });
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
    } catch (error: any) {
      setErrorModal({
        isOpen: true,
        message: error.message || "E-mail ou senha incorretos."
      });
    }
  };

  const logout = () => {
    setUser(null);
    document.cookie = "grimorium_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    router.push("/login");
  };

  const signup = async (name: string, email: string, pass: string) => {
    try {
      const data = await authService.signup(name, email, pass);
      setUser(data);
      document.cookie = `grimorium_token=${data.access_token}; path=/; max-age=86400`;
      router.push("/home");
    } catch (error: any) {
      setErrorModal({
        isOpen: true,
        message: error.message || "Credenciais invalidas."
      });
    }
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, signup, isAuthenticated: !!user }}>
      {children}
      <Modal
        isOpen={errorModal.isOpen}
        onClose={() => setErrorModal({ ...errorModal, isOpen: false })}
        title="Erro na Autenticação"
        description={errorModal.message}
      />
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);