import ThemeToggle from "./ThemeToggle";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="h-14 border-b border-bgborder bg-darkerbackground text-foreground flex justify-between items-center px-6 fixed top-0 w-full z-10">
      <Image src="/grimorium-horizontal-logo.png" alt="Logo Grimorium"
      width={170}
      height={170} />
      <ThemeToggle />
    </nav>
  );
}