// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // 1. Pegamos o token que salvamos nos Cookies lá no AuthContext
  const token = request.cookies.get('grimorium_token')?.value;

  // 2. Definimos qual página é o Login
  const isLoginPage = request.nextUrl.pathname === '/login';

  // 3. REGRA 1: Se o usuário NÃO está logado e tenta acessar o Dashboard
  if (!token && !isLoginPage) {
    // Chuta ele de volta para o login
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // 4. REGRA 2: Se o usuário JÁ ESTÁ logado e tenta ir para o Login
  if (token && isLoginPage) {
    // Manda ele direto para o dashboard, ele não precisa logar de novo
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // Se estiver tudo ok, deixa passar
  return NextResponse.next();
}

// 5. CONFIGURAÇÃO: Em quais páginas o porteiro deve trabalhar?
export const config = {
  // Aqui dizemos para ele vigiar o dashboard e a home, mas ignorar arquivos estáticos (imagens, etc)
  matcher: ['/dashboard/:path*', '/'],
};