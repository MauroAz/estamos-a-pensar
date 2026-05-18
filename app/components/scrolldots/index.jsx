// Each string matches the id="" on the section divs in page.tsx
// Update this array whenever you add or remove sections
"use client";

import { useTheme } from "../../context/ThemeProvider";

const sections = [
  "home",
  "formacoes",
  "skills",
  "video",
  "mission",
  "map",
  "contact",
];

export default function ScrollDots() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
      {sections.map((section) => (
        <a
          key={section}
          href={`#${section}`}
          className="w-3 h-3 rounded-full transition hover:scale-125"
          style={{
            backgroundColor: isLight ? "#8B3A2A" : "#C4A882",
            opacity: 0.6,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.6")}
        />
      ))}
    </div>
  );
}
