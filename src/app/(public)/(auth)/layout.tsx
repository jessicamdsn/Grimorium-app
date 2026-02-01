import Image from "next/image";
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative min-h-screen w-full">
      <Image
        src="/background-image.png" 
        alt="Background"
        fill
        priority
        className="object-cover -z-10" 
        quality={80}
      />
      <main className="relative z-0">
        {children}
      </main>
    </div>
  );
}