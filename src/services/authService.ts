const API_AUTH_URL = process.env.NEXT_PUBLIC_AUTH_API_URL;
const application = "grimorio-api";

export const authService = {
  login: async (email: string, password: string) => {
    try {
      const response = await fetch(`${API_AUTH_URL}/auth/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, application }),
      });

      if (!response.ok) {
        // Se a API der erro (ex: senha errada), lançamos uma exceção
        const errorData = await response.json();
        throw new Error(errorData.message || "Erro ao fazer login");
      }

      // Retorna os dados (geralmente { user: {...}, token: "..." })
      return await response.json();
    } catch (error) {
      console.error("Erro no Service de Auth:", error);
      throw error;
    }
  },

};