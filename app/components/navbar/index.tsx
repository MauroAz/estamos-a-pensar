"use client";

import { useState } from "react";
import { useTheme } from "../../context/ThemeProvider";
import { Sun, Moon, Menu, X, Home } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { label: "home-icon", target: "home" }, // 🏠 icon — scrolls to hero
  { label: "Formações", target: "formacoes" }, // workshops section
  { label: "Competências", target: "skills" }, // skills section
  { label: "Vídeo", target: "video" }, // video section
  { label: "Missão", target: "mission" }, // about/mission section
  { label: "Áreas de Intervenção", target: "map" },
  { label: "Contacto", target: "contact" }, // contact + newsletter
];

const languages = [
  { code: "pt", label: "🇵🇹" },
  { code: "en", label: "🇬🇧" },
  { code: "es", label: "🇪🇸" },
  { code: "gl", label: null },
  { code: "mwl", label: null }, // Mirandês — uses custom image flag-mwl.png
];

function FlagIcon({ code, size = 24 }: { code: string; size?: number }) {
  // Custom image flags for languages without emoji flags
  if (code === "gl" || code === "mwl") {
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
          src={code === "gl" ? "/flag-gl.png" : "/flag-mwl.png"}
          alt={code === "gl" ? "Galician" : "Mirandês"}
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
  const isLight = theme === "light";

  const switchLanguage = (code: string) => {
    const segments = pathname.split("/");
    segments[1] = code;
    router.push(segments.join("/"));
    setLangOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 shadow-md"
      style={{
        backgroundColor: isLight ? "#8B6340" : "#1a1208",
        borderBottom: `1px solid ${isLight ? "#6B4423" : "#3a2a10"}`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / brand */}
        <div>
          <span
            className="text-lg font-bold italic"
            style={{
              color: isLight ? "#FDF6E3" : "#C4A882",
              fontFamily: "Georgia, serif",
            }}
          >
            Estamos a Pensar...
          </span>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.target}
              href={`#${link.target}`}
              className="transition font-medium"
              style={{
                color: isLight ? "#FDF6E3" : "#C4A882",
                fontFamily: "Georgia, serif",
                fontSize: "0.95rem",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#D4845A")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = isLight ? "#FDF6E3" : "#C4A882")
              }
            >
              {link.label === "home-icon" ? <Home size={20} /> : link.label}
            </a>
          ))}

          {/* Language switcher */}
          <div className="relative ml-2">
            <button
              onClick={() => setLangOpen((prev) => !prev)}
              className="hover:opacity-75 transition flex items-center"
            >
              <FlagIcon code={currentLocale} size={24} />
            </button>
            {langOpen && (
              <div
                className="absolute right-0 mt-2 shadow-lg rounded-md overflow-hidden"
                style={{ backgroundColor: isLight ? "#8B6340" : "#2a1f0e" }}
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => switchLanguage(lang.code)}
                    className={`flex items-center gap-2 w-full px-4 py-2 transition ${
                      currentLocale === lang.code
                        ? "opacity-50"
                        : "hover:opacity-75"
                    }`}
                  >
                    <FlagIcon code={lang.code} size={20} />
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={toggleTheme}
            className="ml-1 hover:opacity-75 transition"
            style={{ color: isLight ? "#FDF6E3" : "#C4A882" }}
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        {/* Hamburger button - mobile only */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          style={{ color: isLight ? "#FDF6E3" : "#C4A882" }}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden flex flex-col gap-4 px-6 pb-6"
          style={{ backgroundColor: isLight ? "#8B6340" : "#1a1208" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.target}
              href={`#${link.target}`}
              className="transition font-medium"
              style={{
                color: isLight ? "#FDF6E3" : "#C4A882",
                fontFamily: "Georgia, serif",
              }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label === "home-icon" ? <Home size={20} /> : link.label}
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

          <button
            onClick={toggleTheme}
            className="text-left hover:opacity-75 transition"
            style={{ color: isLight ? "#FDF6E3" : "#C4A882" }}
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      )}
    </nav>
  );
}
