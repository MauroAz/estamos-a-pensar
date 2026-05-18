"use client";

import Navbar from "../components/navbar";
import ScrollDots from "../components/scrolldots";
import Hero from "../components/hero";
import ProjectSection from "../components/projectsection";
import SkillsExperience from "../components/skillsexperience";
import Contact from "../components/contact";
import Footer from "../components/footer";
import ThemeProvider from "../context/ThemeProvider";

export default function Home() {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <ScrollDots />
        <div id="home">
          <Hero />
        </div>
        <div id="formacoes">
          <ProjectSection />
        </div>
        <div id="skills">
          <SkillsExperience />
        </div>
        <div id="video">
          <VideoSection />
        </div>
        <div id="mission">
          <MissionSection />
        </div>
        <div id="map">
          <MapSection />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

function VideoSection() {
  return (
    <section
      className="py-20 px-6 text-center"
      style={{ backgroundColor: "#1a1208" }}
    >
      <h2
        className="text-lg italic mb-1"
        style={{ color: "#C4A882", fontFamily: "Georgia, serif" }}
      >
        O nosso trabalho em ação
      </h2>
      <h3
        className="text-3xl font-bold mb-10"
        style={{ color: "#D4B896", fontFamily: "Georgia, serif" }}
      >
        Vídeo
      </h3>
      <div className="max-w-3xl mx-auto rounded-xl overflow-hidden shadow-2xl">
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/nXYA7FWBHBQ"
            title="Estamos a Pensar"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

function MissionSection() {
  const paragraphs = [
    'A "Estamos a Pensar – Associação Cultural" desenvolve atividades artísticas, educativas e lúdicas em torno das histórias, da literatura, da narração oral, da criação visual, do jogo e da experimentação criativa.',
    "Acreditamos na arte e na cultura como ferramentas de expressão, aprendizagem e construção de comunidade, promovendo o encontro entre diferentes gerações, linguagens e formas de conhecimento.",
    "Trabalhamos com crianças, jovens, famílias, escolas, bibliotecas e comunidades, criando experiências que cruzam tradição e contemporaneidade através da palavra, da imagem, do som, do objeto e das novas formas de expressão artística.",
    "Valorizamos a curiosidade, a partilha, a criatividade e o pensamento crítico, procurando desenvolver projetos que reforcem o sentido de pertença, a literacia cultural e a participação ativa na vida social e cultural.",
  ];

  return (
    <section
      id="mission"
      className="py-20 px-6 scroll-mt-24"
      style={{ backgroundColor: "#C4A882" }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2
          className="text-lg italic mb-1"
          style={{ color: "#3B1F0A", fontFamily: "Georgia, serif" }}
        >
          🌱 Quem Somos
        </h2>
        <h3
          className="text-3xl font-bold mb-10"
          style={{ color: "#3B1F0A", fontFamily: "Georgia, serif" }}
        >
          Missão
        </h3>
        <div className="space-y-6">
          {paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-base md:text-lg leading-relaxed text-left"
              style={{ color: "#2C1810", fontFamily: "Georgia, serif" }}
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
function MapSection() {
  const locations = [
    { name: "Lisboa, Oeiras", emoji: "🏛️", desc: "Grande Lisboa" },
    { name: "Porto, Bonfim", emoji: "🎨", desc: "Grande Porto" },
    { name: "Açores, Terceira", emoji: "🌊", desc: "Atlântico" },
    { name: "EuroCidade Chaves–Verín", emoji: "🌉", desc: "Fronteira PT/ES" },
    { name: "Canárias, Las Palmas", emoji: "☀️", desc: "Espanha" },
    { name: "Miranda do Douro, Picote", emoji: "🏞️", desc: "Trás-os-Montes" },
  ];

  return (
    <section
      id="map"
      className="scroll-mt-24 py-20 px-6"
      style={{ backgroundColor: "#2C1810" }}
    >
      <div className="text-center mb-12">
        <h2
          className="text-lg italic mb-1"
          style={{ color: "#C4A882", fontFamily: "Georgia, serif" }}
        >
          Onde contamos histórias
        </h2>
        <h3
          className="text-3xl font-bold"
          style={{ color: "#D4B896", fontFamily: "Georgia, serif" }}
        >
          A nossa presença
        </h3>
        <p
          className="mt-3 text-sm italic"
          style={{ color: "#A08060", fontFamily: "Georgia, serif" }}
        >
          Percorremos a Península Ibérica e as ilhas — levamos histórias a
          qualquer lugar.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">
        {/* LEFT — Embedded map of Iberian Peninsula */}
        <div
          className="rounded-2xl overflow-hidden shadow-2xl"
          style={{ height: "450px" }}
        >
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5000000!2d-7.5!3d39.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt!2spt!4v1700000000000!5m2!1spt!2spt"
          />
        </div>

        {/* RIGHT — Location cards + language block */}
        <div className="flex flex-col gap-4">
          {/* Location cards grid — 2 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {locations.map((loc) => (
              <div
                key={loc.name}
                className="p-4 rounded-xl flex items-start gap-3 transition hover:scale-105"
                style={{
                  backgroundColor: "#2a1f0e",
                  border: "1px solid #5a3f20",
                }}
              >
                <span className="text-2xl">{loc.emoji}</span>
                <div>
                  <p
                    className="font-semibold text-sm"
                    style={{ color: "#D4B896", fontFamily: "Georgia, serif" }}
                  >
                    {loc.name}
                  </p>
                  <p
                    className="text-xs mt-1"
                    style={{ color: "#A08060", fontFamily: "Georgia, serif" }}
                  >
                    {loc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Language affinity block */}
          {/* Teaching note 🎓: this block celebrates the languages of our communities.
              It's purely visual for now — no logic, just a styled card with
              flag images and emoji rendered inside pill-shaped divs */}
          <div
            className="p-6 rounded-xl"
            style={{ backgroundColor: "#2a1f0e", border: "1px solid #5a3f20" }}
          >
            <p
              className="font-semibold mb-3 text-sm"
              style={{ color: "#D4B896", fontFamily: "Georgia, serif" }}
            >
              🗣️ Línguas que habitamos
            </p>
            <p
              className="text-xs leading-relaxed mb-4"
              style={{ color: "#A08060", fontFamily: "Georgia, serif" }}
            >
              As histórias não têm fronteiras. Este site existe em português,
              inglês, espanhol, galego e mirandês — línguas das comunidades com
              quem trabalhamos e que reconhecemos como parte do nosso mundo.
            </p>

            {/* Language pills — flex wrap so they flow naturally */}
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Português", emoji: "🇵🇹" },
                { label: "Español", emoji: "🇪🇸" },
                { label: "Galego", flag: "/flag-gl.png" },
                { label: "Mirandês", flag: "/flag-mwl.png" },
                { label: "English", emoji: "🇬🇧" },
              ].map((lang) => (
                <div
                  key={lang.label}
                  className="flex items-center gap-2 px-3 py-1 rounded-full text-xs"
                  style={{
                    backgroundColor: "#3a2a10",
                    color: "#C4A882",
                    fontFamily: "Georgia, serif",
                    border: "1px solid #5a3f20",
                  }}
                >
                  {/* If lang has a flag image use it, otherwise use emoji */}
                  {lang.flag ? (
                    <img
                      src={lang.flag}
                      alt={lang.label}
                      style={{
                        width: 16,
                        height: 16,
                        objectFit: "cover",
                        borderRadius: 2,
                      }}
                    />
                  ) : (
                    <span>{lang.emoji}</span>
                  )}
                  {lang.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
