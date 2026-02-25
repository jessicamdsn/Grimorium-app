import Card from "@/src/components/shared/Card";
import SoundSettings from "@/src/components/shared/sounds";
import AnimationsSettings from "@/src/components/shared/animations";

import ThemeToggle from "@/src/components/shared/ThemeToggle";


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
    </div>
  );
}
