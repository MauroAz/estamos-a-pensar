"use client";

import { useState } from "react";
import { useTheme } from "../../context/ThemeProvider";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { label: "Home", target: "home" },
  { label: "Work", target: "projects" },
  { label: "Skills", target: "skills" },
  { label: "Testimonials", target: "recommendations" },
  { label: "Contact", target: "contact" },
];

const languages = [
  { code: "pt", label: "🇵🇹" },
  { code: "en", label: "🇬🇧" },
  { code: "es", label: "🇪🇸" },
  { code: "gl", label: null },
];

function FlagIcon({ code, size = 24 }: { code: string; size?: number }) {
  if (code === "gl") {
    return (
      <span
        style={{
          width: size,
          height: size,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src="/flag-gl.png"
          alt="Galician"
          width={size}
          height={size}
          style={{ width: size, height: size, objectFit: "cover" }}
          className="rounded-sm"
        />
      </span>
    );
  }
  const lang = languages.find((l) => l.code === code);
  return (
    <span
      style={{
        width: size,
        height: size,
        fontSize: size,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {lang?.label}
    </span>
  );
}

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = pathname.split("/")[1] || "pt";

  const switchLanguage = (code: string) => {
    const segments = pathname.split("/");
    segments[1] = code;
    router.push(segments.join("/"));
    setLangOpen(false);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto p-6 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold">
            Estamos a <span className="text-blue-500">Pensar</span>
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

          {/* Language switcher */}
          <div className="relative ml-4">
            <button
              onClick={() => setLangOpen((prev) => !prev)}
              className="hover:opacity-75 transition flex items-center"
            >
              <FlagIcon code={currentLocale} size={24} />
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 bg-white dark:bg-gray-700 shadow-lg rounded-md overflow-hidden">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => switchLanguage(lang.code)}
                    className={`flex items-center gap-2 w-full px-4 py-2 hover:bg-blue-500 hover:text-white transition ${
                      currentLocale === lang.code ? "opacity-50" : ""
                    }`}
                  >
                    <FlagIcon code={lang.code} size={20} />
                  </button>
                ))}
              </div>
            )}
          </div>

          <button onClick={toggleTheme} className="ml-2">
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

          {/* Language switcher mobile */}
          <div className="flex gap-3 items-center">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => switchLanguage(lang.code)}
                className={`transition ${
                  currentLocale === lang.code
                    ? "opacity-50"
                    : "hover:opacity-75"
                }`}
              >
                <FlagIcon code={lang.code} size={24} />
              </button>
            ))}
          </div>

          <button onClick={toggleTheme} className="text-left">
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      )}
    </nav>
  );
}
