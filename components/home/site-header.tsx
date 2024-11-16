import Link from "next/link";
import { Laptop, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SiteHeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export function SiteHeader({ darkMode, toggleDarkMode }: SiteHeaderProps) {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center justify-between border-b">
      <Link className="flex items-center justify-center" href="#">
        <Laptop className="h-6 w-6" />
        <span className="ml-2 text-2xl font-bold">Dctro</span>
      </Link>
      <nav className="flex items-center gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#services"
        >
          Services
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#about"
        >
          About
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#contact"
        >
          Contact
        </Link>
        <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
          {darkMode ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>
      </nav>
    </header>
  );
}
