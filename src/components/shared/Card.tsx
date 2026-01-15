export default function Card({ titulo, children }: Readonly<{ titulo: string, children: React.ReactNode }>) {
  return (
    <div className="bg-bginside border border-bgborder p-4 rounded-lg">
      <h2 className="color-foreground font-bold mb-2">{titulo}</h2>
      <div className="text-zinc-400">
        {children}
      </div>
    </div>
  );
}