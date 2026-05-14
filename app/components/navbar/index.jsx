"use client";

import { useState } from "react";
import { useTheme } from "../../context/ThemeProvider";
import { Sun, Moon, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", target: "home" },
  { label: "Work", target: "projects" },
  { label: "Skills", target: "skills" },
  { label: "Testimonials", target: "recommendations" },
  { label: "Contact", target: "contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto p-6 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold">
            Sim<span className="text-blue-500">ba</span>
          </h1>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex gap-4 items-center">
          {navLinks.map((link) => (
            <a
              key={link.target}
              href={`#${link.target}`}
              className="transition hover:text-blue-500"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="ml-4"
            // suppressHydrationWarning
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        {/* Hamburger button - mobile only */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-6">
          {navLinks.map((link) => (
            <a
              key={link.target}
              href={`#${link.target}`}
              className="transition hover:text-blue-500"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="text-left"
            // suppressHydrationWarning
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      )}
    </nav>
  );
}
