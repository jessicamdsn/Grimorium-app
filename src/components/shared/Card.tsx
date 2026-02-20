export default function Card({ titulo, children }: Readonly<{ titulo: string, children: React.ReactNode }>) {
  return (
    <div className="bg-bginside border border-bgborder p-6 rounded-xl shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between mb-4 border-b border-borderline pb-2">
        <h2 className="text-foreground font-semibold text-lg tracking-tight">
          {titulo}
        </h2>
        <div className="h-2 w-2 rounded-full bg-grimorium shadow-[0_0_8px_var(--color-grimoriumshadow)]" />
      </div>
      <div className="text-foreground/80 leading-relaxed text-sm">
        {children}
      </div>
    </div>
  );
}