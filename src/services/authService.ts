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
        const errorData = await response.json();
        throw new Error(errorData.message || "Erro ao fazer login");
      }

      return await response.json();
    } catch (error) {
      console.error("Erro no Service de Auth:", error);
      throw error;
    }
  },

  getMe: async (token: string) => {
   try {
    const url = new URL(`${API_AUTH_URL}/users/authorization`);

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${token}`, 
      },
    });

    if (!response.ok) {
      throw new Error("Sessão expirada ou parâmetros inválidos");
    }

    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar dados do usuário:", error);
    throw error;
  }
  },

};