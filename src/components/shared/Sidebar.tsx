export default function Sidebar(){
  return(
    <aside className="w-48 border-r border-bgborder bg-darkerbackground text-foreground h-screen fixed left-0 top-14 p-4">
      <ul className="space-y-4">
        <li className="hover:text-grimorium cursor-pointer">Dashboard</li>
        <li className="hover:text-grimorium cursor-pointer">Projetos</li>
        <li className="hover:text-grimorium cursor-pointer">Configurações</li>
      </ul>
    </aside>
  );
}