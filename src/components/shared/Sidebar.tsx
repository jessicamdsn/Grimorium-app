import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-48 border-r border-bgborder bg-darkerbackground text-foreground h-screen fixed left-0 top-14 p-4">
      <div className=" h-[calc(100vh-80px)] flex flex-col justify-between">
        <ul className="space-y-4">
          <li >
            <Link href="/home" className="hover:text-grimorium cursor-pointer block transition-colors">
              Home
            </Link>
          </li>
          <li >
            <Link href="/dashboard" className="hover:text-grimorium cursor-pointer block transition-colors">
              Dashboard
            </Link>
          </li>
          <li className="hover:text-grimorium cursor-pointer">Projetos</li>
        </ul>
        <ul className="space-y-4 mb-10">
          <li >
            <Link href="/config" className="hover:text-grimorium cursor-pointer block transition-colors">
              Configuração
            </Link>
          </li>
        </ul>
      </div>

    </aside>
  );
}