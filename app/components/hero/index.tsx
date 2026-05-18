"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "../../context/ThemeProvider";

const placeholderColors = ["bg-amber-300", "bg-orange-300", "bg-yellow-300"];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % placeholderColors.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const isLight = theme === "light";

  return (
    <section
      className="relative flex items-center justify-center py-20 px-6 overflow-hidden"
      style={{
        minHeight: "80vh",
        backgroundColor: isLight ? "#C4A882" : "#1a1208",
        backgroundImage: isLight
          ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='5' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='0.25'/%3E%3C/svg%3E")`
          : `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='5' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E")`,
      }}
    >
      {/* Vignette overlay for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isLight
            ? "radial-gradient(ellipse at center, transparent 40%, rgba(100,60,20,0.3) 100%)"
            : "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      {/* Main content */}
      <div className="relative flex flex-col items-center text-center z-10 max-w-3xl w-full">
        {/* Thought bubble with rotating colors */}
        <div className="relative w-full max-w-2xl">
          {/* Rotating background inside thought bubble */}
          <div
            className="absolute rounded-full overflow-hidden transition-all duration-1000"
            style={{
              top: "8%",
              left: "18%",
              width: "62%",
              height: "72%",
            }}
          >
            {placeholderColors.map((color, index) => (
              <div
                key={index}
                className={`absolute inset-0 ${color} transition-opacity duration-1000 ${
                  index === current ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          {/* Logo on top */}
          <Image
            src="/Logo-Transparent-PT.png"
            alt="Estamos a Pensar"
            width={700}
            height={500}
            className="relative z-10 w-full h-auto"
            priority
          />
        </div>

        {/* Tagline */}
        <p
          className="mt-4 text-lg md:text-xl italic"
          style={{
            color: isLight ? "#3B1F0A" : "#D4B896",
            fontFamily: "Georgia, serif",
          }}
        >
          Estórias que criam História... Arte que une...
        </p>

        {/* CTA buttons */}
        <div className="flex gap-4 mt-6 flex-wrap justify-center">
          <a
            href="#contact"
            className="px-6 py-3 rounded-full text-white font-semibold transition hover:opacity-80"
            style={{ backgroundColor: "#8B3A2A" }}
          >
            Contacta-nos
          </a>
          <a
            href="#formacoes"
            className="px-6 py-3 rounded-full font-semibold border-2 transition hover:opacity-80"
            style={{
              borderColor: isLight ? "#3B1F0A" : "#D4B896",
              color: isLight ? "#3B1F0A" : "#D4B896",
            }}
          >
            Ver Formações
          </a>
        </div>
      </div>
    </section>
  );
}
