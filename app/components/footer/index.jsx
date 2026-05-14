// Same links as the navbar — keeps footer navigation consistent
// Defined outside the component so it's not recreated on every render
const navLinks = [
  { label: "Home", target: "home" },
  { label: "Work", target: "projects" },
  { label: "Skills", target: "skills" },
  { label: "Testimonials", target: "recommendations" },
  { label: "Contact", target: "contact" },
];

export default function Footer() {
  return (
    // Light grey background in light mode, dark grey in dark mode
    // px-6 py-8 gives breathing room, text-center for alignment
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-6 py-8 text-center">
      {/* max-w-6xl mx-auto constrains width on very large screens */}
      <div className="max-w-6xl mx-auto">
        {/* ── TOP ROW — logo + nav links ── */}
        {/* flex-col on mobile, flex-row on medium+ screens */}
        {/* gap-4 adds spacing between logo and links when stacked */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          {/* Logo — matches navbar styling */}
          <div className="text-xl font-bold text-gray-800 dark:text-white">
            Sim<span className="text-blue-500">ba</span>
          </div>

          {/* Navigation links — horizontal row, wraps on small screens */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={`#${link.target}`}
                className="transition hover:text-blue-500"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* ── DIVIDER ── */}
        <hr className="border-gray-300 dark:border-gray-600 mb-6" />

        {/* ── COPYRIGHT ── */}
        {/* new Date().getFullYear() always returns the current year */}
        {/* no need to manually update this every January */}
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Simba. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
