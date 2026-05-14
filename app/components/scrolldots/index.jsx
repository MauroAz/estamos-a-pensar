// Each string matches the id="" on the section divs in page.tsx
// Update this array whenever you add or remove sections
const sections = ['home', 'projects', 'skills', 'recommendations', 'contact'];

export default function ScrollDots() {
    return (
        // Fixed to right side, vertically centered, always on top
        <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
            {sections.map((section) => (
                <a
                    key={section}
                    href={`#${section}`}
                    // Each dot: small circle, grey by default, blue on hover
                    className="w-3 h-3 rounded-full bg-gray-400 hover:bg-blue-500 transition"
                />
            ))}
        </div>
    );
}