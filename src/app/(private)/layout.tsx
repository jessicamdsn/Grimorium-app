import Navbar from "@/src/components/shared/Navbar";
import Sidebar from "@/src/components/shared/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 ml-48 pt-16 p-6 bg-background text-foreground min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
}