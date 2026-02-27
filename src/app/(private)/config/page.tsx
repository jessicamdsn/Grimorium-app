import Card from "@/src/components/shared/Card";
import SoundSettings from "@/src/components/configurations/sounds";
import AnimationsSettings from "@/src/components/configurations/animations";

import ThemeToggle from "@/src/components/configurations/ThemeToggle";


export default function HomePage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl mb-5 font-bold">Configuração</h1>
      <Card titulo= "Personalização da Experiência">
        <SoundSettings />
        <AnimationsSettings />
      </Card>
      <Card titulo= "Tema modo escuro">
        <ThemeToggle type="toggle" />
      </Card>
      <div className="
      relative 
      w-40 
      bg-bginside 
      border-2 
      border-grimorium/60 
      rounded-2xl 
      p-4 
      cursor-pointer
      
      transition-all 
      duration-500 
      ease-out
      
      hover:border-grimorium/40 
      hover:-translate-y-2 
      hover:scale-[1.02] 
      hover:shadow-mistic
    ">
      <div className="w-full aspect-3/4 rounded-xl mb-4" />
      <h3 className="font-bold text-foreground">O Grimório de Althea</h3>
      <p className="text-sm text-foreground/60">Jéssica Neves</p>
    </div>
    </div>
  );
}
