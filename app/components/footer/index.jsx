"use client";

import { useTheme } from "../../context/ThemeProvider";

// react-icons/fa has Facebook, YouTube, Rumble (not available), X
// react-icons/fa6 has the newer X (Twitter) icon and others
// We mix both packages to get the best version of each icon
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiRumble } from "react-icons/si";

// Same links as navbar — keep in sync when adding/removing sections
// Teaching note 🎓: defined outside component so array isn't recreated on every render
const navLinks = [
  { label: "Formações", target: "formacoes" },
  { label: "Manual & Digital", target: "skills" },
  { label: "Vídeo", target: "video" },
  { label: "Missão", target: "mission" },
  { label: "Onde Estamos", target: "map" },
  { label: "Contacto", target: "contact" },
];

// Social links with their brand icons and original brand colors
// Teaching note 🎓: storing icon as JSX and color as a string lets us
// render them dynamically in the map below without repeating code
const socialLinks = [
  {
    label: "Instagram",
    url: "https://instagram.com",
    icon: <FaInstagram size={24} />,
    color: "#E1306C",
  },
  {
    label: "Facebook",
    url: "https://facebook.com",
    icon: <FaFacebook size={24} />,
    color: "#1877F2",
  },
  {
    label: "YouTube",
    url: "https://youtube.com",
    icon: <FaYoutube size={24} />,
    color: "#FF0000",
  },
  {
    label: "Rumble",
    url: "https://rumble.com",
    icon: <SiRumble size={24} />,
    color: "#85C742",
  },
  {
    label: "X",
    url: "https://x.com",
    icon: <FaXTwitter size={24} />,
    color: "#ffffff",
  },
];

export default function Footer() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <footer
      className="px-6 py-12 text-center"
      style={{ backgroundColor: isLight ? "#6B4423" : "#0f0a03" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* ── TOP ROW — brand + nav links ── */}
        {/* flex-col on mobile, flex-row on medium+ screens */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          {/* Brand name — italic serif matches navbar */}
          <div
            className="text-xl font-bold italic"
            style={{ color: "#FDF6E3", fontFamily: "Georgia, serif" }}
          >
            Estamos a Pensar...
          </div>

          {/* Navigation links — mirror the navbar for bottom-of-page navigation */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={`#${link.target}`}
                className="transition hover:opacity-75"
                style={{ color: "#C4A882", fontFamily: "Georgia, serif" }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* ── SOCIAL ICONS ── */}
        {/* Each icon uses its original brand color for instant recognition */}
        {/* target="_blank" opens in new tab */}
        {/* rel="noopener noreferrer" is a security best practice for external links */}
        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="transition hover:scale-125 hover:opacity-90"
              style={{ color: social.color }}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* ── DIVIDER ── */}
        <hr style={{ borderColor: "#5a3f20", marginBottom: "1.5rem" }} />

        {/* ── TAGLINE ── */}
        <p
          className="text-sm italic mb-3"
          style={{ color: "#A08060", fontFamily: "Georgia, serif" }}
        >
          "As histórias não têm fronteiras."
        </p>

        {/* ── COPYRIGHT ── */}
        {/* new Date().getFullYear() always returns the current year automatically */}
        <p
          className="text-xs"
          style={{ color: "#A08060", fontFamily: "Georgia, serif" }}
        >
          © {new Date().getFullYear()} Estamos a Pensar – Associação Cultural.
          Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
