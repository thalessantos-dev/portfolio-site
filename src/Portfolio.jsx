import { useState, useEffect } from "react";

const C = {
  bg: "#0a0a0a",
  sidebar: "#111111",
  panel: "#181818",
  border: "#2a2a2a",
  accent: "#FFCC00",
  text: "#e2e8f0",
  muted: "#666666",
  comment: "#555555",
  lineNum: "#444444",
};

const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "Sobre", id: "sobre" },
  { label: "Projetos", id: "projetos" },
  { label: "Certificados", id: "certificados" },
  { label: "Contato", id: "contato" },
];

const SKILLS = [
  { name: "React", level: 85 },
  { name: "PHP / Laravel", level: 80 },
  { name: "HTML & CSS", level: 90 },
  { name: "Python", level: 75 },
  { name: "C#", level: 80 },
  { name: "GML", level: 75 },
  { name: "Power BI", level: 50 },
  { name: "Flutter", level: 80 },
];

const PROJECTS = [
  {
    title: "Landing Page - Sol Tortas",
    desc: "Plataforma completa de vendas com painel admin, pagamentos e gestão de estoque em tempo real.",
    tags: ["React", "Node.js", "Stripe"],
    year: "2024",
    banner: "\sol.png",
  },
  {
    title: "Dashboard Analytics",
    desc: "Dashboard interativo com gráficos em tempo real e relatórios personalizáveis por usuário.",
    tags: ["Next.js", "Chart.js", "REST API"],
    year: "2024",
    banner: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    title: "Task Manager",
    desc: "App de produtividade com drag-and-drop, colaboração em tempo real e notificações push.",
    tags: ["React", "MongoDB"],
    year: "2023",
    banner: "\imgflow.png",
  },
  {
    title: "The Cursed Mark",
    desc: "Jogo criado no Game Maker, baseado em Zelda, com foco em exploração e resolução de puzzles.",
    tags: ["Game Maker", "GML"],
    year: "2023",
    banner: "\cursed.gif",
  },
];

const CERTIFICATES = [
  {
    title: "Fortinet Certified Fundamentals in Cybersecurity",
    issuer: "Fortinet",
    date: "2024",
    desc: "Desenvolvimento de habilidades em segurança cibernética, cobrindo fundamentos de redes, ameaças e proteção de sistemas.",
    banner: "\cyber.jpg",
  },
  {
    title: "Fortinet Cloud Security",
    issuer: "Fortinet",
    date: "2024",
    desc: "Conhecimento em segurança em nuvem e habilidades em configuração de segurança em ambientes cloud.",
    banner: "\cloud.jpg",
  },
  {
    title: "Laravel 10 Essencial",
    issuer: "Udemy",
    date: "2024",
    desc: "Desenvolvimento de aplicações em Laravel 10 com padrão MVC e gerenciamento de banco de dados com Migrations.",
    banner: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80",
  },
  {
    title: "Técnico em Desenvolvimento de Sistemas",
    issuer: "Etec Antônio de Pádua Cardoso",
    date: "2022",
    desc: "Formação técnica em desenvolvimento de sistemas com fundamentos de programação, banco de dados e engenharia de software.",
    banner: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&q=80",
  },
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function useIsMobile() {
  const [mob, setMob] = useState(false);
  useEffect(() => {
    const check = () => setMob(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return mob;
}

function useTyping(words, speed) {
  const spd = speed || 90;
  const [displayed, setDisplayed] = useState("");
  const [wi, setWi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const word = words[wi];
    let t;
    if (!del && ci < word.length) t = setTimeout(() => setCi(ci + 1), spd);
    else if (!del && ci === word.length) t = setTimeout(() => setDel(true), 1600);
    else if (del && ci > 0) t = setTimeout(() => setCi(ci - 1), spd / 2);
    else if (del && ci === 0) { setDel(false); setWi((wi + 1) % words.length); }
    setDisplayed(word.slice(0, ci));
    return () => clearTimeout(t);
  }, [ci, del, wi, words, spd]);
  return displayed;
}

function IcoGithub() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}
function IcoLinkedin() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
function IcoWhatsapp() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
function IcoEmail() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
function IcoDownload() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}
function IcoClose() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
function IcoEye() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
function IcoCert() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

function CodeBg() {
  const snippets = [
    "const x = () =>", "import React", "useState(null)",
    "async/await", "<Component />", "npm install",
    "git commit", "border-radius:", "flex: 1",
    "map((item) =>", "return null", ".then(res =>",
    "useEffect([])", "export default", "type Props =",
  ];
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
      {snippets.map((s, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            left: ((i * 7.3 + 3) % 95) + "%",
            top: ((i * 13.7 + 5) % 90) + "%",
            fontFamily: "'Fira Code', monospace",
            fontSize: 11,
            color: "rgba(255,204,0,0.06)",
            whiteSpace: "nowrap",
            animation: "floatCode" + (i % 3) + " " + (8 + (i % 4) * 2) + "s ease-in-out infinite",
            animationDelay: ((i * 0.7) % 5) + "s",
            userSelect: "none",
          }}
        >
          {s}
        </span>
      ))}
    </div>
  );
}

function CertModal({ cert, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 999,
        background: "rgba(0,0,0,0.85)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 24,
        backdropFilter: "blur(6px)",
        animation: "fadeIn 0.2s ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: C.sidebar,
          border: "1px solid " + C.border,
          borderRadius: 12,
          maxWidth: 620, width: "100%",
          overflow: "hidden",
          animation: "slideUp 0.25s ease",
        }}
      >
        <div style={{ position: "relative", height: 280, overflow: "hidden" }}>
          <img src={cert.banner} alt={cert.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 50%, rgba(17,17,17,1) 100%)" }} />
          <button
            onClick={onClose}
            style={{
              position: "absolute", top: 14, right: 14,
              width: 36, height: 36, borderRadius: "50%",
              background: "rgba(0,0,0,0.6)", border: "1px solid " + C.border,
              color: C.text, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,204,0,0.2)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(0,0,0,0.6)"; }}
          >
            <IcoClose />
          </button>
        </div>
        <div style={{ padding: "24px 28px 28px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
            <span style={{
              fontFamily: "'Fira Code', monospace", fontSize: 11,
              background: "rgba(255,204,0,0.12)", color: C.accent,
              padding: "3px 10px", borderRadius: 4,
              border: "1px solid rgba(255,204,0,0.25)",
            }}>{cert.issuer}</span>
            <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 12, color: C.muted }}>{cert.date}</span>
          </div>
          <h3 style={{ fontSize: 20, fontWeight: 700, color: C.text, marginBottom: 10 }}>{cert.title}</h3>
          <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.7 }}>{cert.desc}</p>
        </div>
      </div>
    </div>
  );
}

function Navbar({ active, setActive }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const mob = useIsMobile();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  function handleNav(id) {
    setActive(id);
    scrollToSection(id);
    setMenuOpen(false);
  }

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(10,10,10,0.97)" : C.sidebar,
      borderBottom: "1px solid " + C.border,
      backdropFilter: "blur(8px)",
      transition: "background 0.3s",
    }}>
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: mob ? "0 20px" : "0 48px", height: 48,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "'Fira Code', monospace" }}>
          <span style={{ fontSize: 15, color: C.accent, fontWeight: 700 }}>{"<"}</span>
          <span style={{ fontSize: 14, color: C.text }}>portfolio</span>
          <span style={{ fontSize: 15, color: C.accent, fontWeight: 700 }}>{"/>"}</span>
        </div>

        {mob ? (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "transparent", border: "1px solid " + C.border,
              borderRadius: 6, width: 36, height: 36,
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4,
              cursor: "pointer",
            }}
          >
            <span style={{ width: 16, height: 2, background: menuOpen ? C.accent : C.text, display: "block", transition: "all 0.2s", transform: menuOpen ? "rotate(45deg) translate(0px, 6px)" : "none" }} />
            <span style={{ width: 16, height: 2, background: menuOpen ? C.accent : C.text, display: "block", transition: "all 0.2s", opacity: menuOpen ? 0 : 1 }} />
            <span style={{ width: 16, height: 2, background: menuOpen ? C.accent : C.text, display: "block", transition: "all 0.2s", transform: menuOpen ? "rotate(-45deg) translate(0px, -6px)" : "none" }} />
          </button>
        ) : (
          <div style={{ display: "flex", gap: 2 }}>
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                style={{
                  background: active === link.id ? C.bg : "transparent",
                  border: "none",
                  borderBottom: active === link.id ? "2px solid " + C.accent : "2px solid transparent",
                  color: active === link.id ? C.text : C.muted,
                  padding: "0 18px", height: 48,
                  fontSize: 13, cursor: "pointer",
                  fontFamily: "'Fira Code', monospace",
                  letterSpacing: 0.3,
                  transition: "color 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => { if (active !== link.id) e.currentTarget.style.color = C.text; }}
                onMouseLeave={(e) => { if (active !== link.id) e.currentTarget.style.color = C.muted; }}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {mob && menuOpen && (
        <div style={{ background: "rgba(10,10,10,0.98)", borderTop: "1px solid " + C.border, animation: "fadeIn 0.15s ease" }}>
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              style={{
                display: "block", width: "100%", textAlign: "left",
                padding: "14px 24px", background: "transparent", border: "none",
                borderBottom: "1px solid " + C.border,
                color: active === link.id ? C.accent : C.muted,
                fontFamily: "'Fira Code', monospace", fontSize: 14, cursor: "pointer",
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

function Hero() {
  const mob = useIsMobile();
  const typed = useTyping(["Software Engineer", "Front-end Dev", "Back-end Dev", "Game Developer", "UI Enthusiast"], 85);

  const CODE = [
    { ln: 1, tokens: [{ c: C.accent, v: "const " }, { c: C.text, v: "dev" }, { c: C.muted, v: " = {" }] },
    { ln: 2, tokens: [{ c: C.muted, v: "  name:       " }, { c: C.accent, v: '"Thales Santos"' }, { c: C.muted, v: "," }] },
    { ln: 3, tokens: [{ c: C.muted, v: "  role:       " }, { c: C.accent, v: '"' + (typed || " ") + '"' }, { c: C.muted, v: "," }] },
    { ln: 4, tokens: [{ c: C.muted, v: "  local:      " }, { c: C.accent, v: '"Brasil - SP"' }, { c: C.muted, v: "," }] },
    { ln: 5, tokens: [{ c: C.muted, v: "  openToWork: " }, { c: "#4ec9b0", v: "true" }, { c: C.muted, v: "," }] },
    { ln: 6, tokens: [{ c: C.muted, v: "};" }] },
    { ln: 7, tokens: [] },
    { ln: 8, tokens: [{ c: C.comment, v: "// bora conversar? 👋" }] },
  ];

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh", display: "flex",
        alignItems: "center", justifyContent: "center",
        padding: mob ? "80px 24px 60px" : "80px 60px 60px",
        background: C.bg, position: "relative", overflow: "hidden",
      }}
    >
      <CodeBg />
      <div style={{
        display: "grid",
        gridTemplateColumns: mob ? "1fr" : "1fr 1fr",
        gap: mob ? 40 : 80,
        maxWidth: 1100, width: "100%",
        alignItems: "center", position: "relative", zIndex: 1,
      }}>
        <div>
          <p style={{ fontFamily: "'Fira Code', monospace", fontSize: 13, color: C.comment, marginBottom: 16 }}>
            {"// hello world"}
          </p>
          <h1 style={{
            fontFamily: "'Bebas Neue', cursive",
            fontSize: mob ? "clamp(56px,16vw,80px)" : "clamp(56px,8vw,96px)",
            lineHeight: 0.95, fontWeight: 400,
            background: "linear-gradient(135deg, " + C.text + " 30%, " + C.muted + " 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            marginBottom: 20, userSelect: "none",
          }}>
            THALES<br />SANTOS
          </h1>

          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <span style={{ width: 32, height: 1, background: C.accent }} />
            <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 14, color: C.accent, minWidth: 240 }}>
              {typed}<span style={{ animation: "blink 1s step-end infinite" }}>█</span>
            </span>
            <span style={{ width: 32, height: 1, background: C.accent }} />
          </div>

          <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.8, maxWidth: 420, marginBottom: 40 }}>
            Desenvolvedor apaixonado por criar experiências digitais incríveis usando tecnologias modernas e boas práticas.
          </p>

          <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
            <button
              onClick={() => scrollToSection("contato")}
              style={{
                background: C.accent, color: C.bg, border: "none",
                padding: "11px 28px", fontSize: 14, fontWeight: 700,
                borderRadius: 4, cursor: "pointer",
                fontFamily: "'Fira Code', monospace",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Entre em Contato →
            </button>
            {[
              { icon: <IcoGithub />, href: "https://github.com/thalessantos-dev" },
              { icon: <IcoLinkedin />, href: "https://linkedin.com/in/thalesc-santos" },
              { icon: <IcoEmail />, href: "mailto:thalescsantos14@gmail.com" },
            ].map(({ icon, href }, i) => (
              <a
                key={i} href={href} target="_blank" rel="noreferrer"
                style={{
                  width: 40, height: 40, background: C.panel,
                  border: "1px solid " + C.border, borderRadius: 6,
                  color: C.muted, display: "flex", alignItems: "center", justifyContent: "center",
                  textDecoration: "none", transition: "color 0.2s, border-color 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = C.accent; e.currentTarget.style.borderColor = C.accent; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = C.muted; e.currentTarget.style.borderColor = C.border; }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {!mob && (
          <div style={{
            background: C.sidebar, border: "1px solid " + C.border,
            borderRadius: 8, overflow: "hidden",
            fontFamily: "'Fira Code', monospace",
            boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
          }}>
            <div style={{ background: C.panel, borderBottom: "1px solid " + C.border, display: "flex", alignItems: "center", padding: "0 12px", height: 36 }}>
              <div style={{ display: "flex", gap: 6, marginRight: 16 }}>
                {["#ff5f57", "#ffbd2e", "#28c840"].map((col, i) => (
                  <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: col }} />
                ))}
              </div>
              <span style={{ fontSize: 12, color: C.text, borderTop: "1px solid " + C.accent, padding: "6px 16px 0" }}>
                dev.ts
              </span>
            </div>
            <div style={{ padding: "16px 0 20px" }}>
              {CODE.map(({ ln, tokens }) => (
                <div key={ln} style={{ display: "flex", alignItems: "center", padding: "2px 20px 2px 0", minHeight: 24 }}>
                  <span style={{ width: 40, textAlign: "right", paddingRight: 20, fontSize: 13, color: C.lineNum, userSelect: "none", flexShrink: 0 }}>
                    {ln}
                  </span>
                  <span style={{ fontSize: 14 }}>
                    {tokens.map((tok, j) => (
                      <span key={j} style={{ color: tok.c }}>{tok.v}</span>
                    ))}
                  </span>
                </div>
              ))}
            </div>
            <div style={{ background: C.accent, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 16px", height: 22 }}>
              <span style={{ fontSize: 11, color: C.bg, fontWeight: 700 }}>● main</span>
              <span style={{ fontSize: 11, color: C.bg }}>TypeScript · UTF-8</span>
            </div>
          </div>
        )}
      </div>

      <div style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", zIndex: 1 }}>
        <div style={{ width: 22, height: 36, border: "1.5px solid " + C.border, borderRadius: 12, display: "flex", justifyContent: "center", paddingTop: 6 }}>
          <div style={{ width: 3, height: 8, background: C.accent, borderRadius: 2, animation: "scrollDot 1.5s ease-in-out infinite" }} />
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fira+Code:wght@400;500;600&family=DM+Sans:wght@300;400;500;600&display=swap');
        @keyframes blink      { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes scrollDot  { 0%{transform:translateY(0);opacity:1} 100%{transform:translateY(12px);opacity:0} }
        @keyframes fadeIn     { from{opacity:0} to{opacity:1} }
        @keyframes slideUp    { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes floatCode0 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
        @keyframes floatCode1 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(10px)} }
        @keyframes floatCode2 { 0%,100%{transform:translateY(0) translateX(0)} 50%{transform:translateY(-8px) translateX(6px)} }
      `}</style>
    </section>
  );
}


const SERVICES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "Desenvolvimento Full Stack",
    desc: "Aplicações web e mobile com Flutter, PHP/Laravel, React, Python e C#. Do back ao front, do banco à interface.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Gestão, Dados & Automações",
    desc: "Coordenação de projetos com Jira e Scrum, análise com Power BI e SQL, automações no Salesforce, VBA e Microsoft 365.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: "UI/UX & Prototipagem",
    desc: "Criação de telas e protótipos no Figma com foco em usabilidade, fluxo intuitivo e design funcional.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="14" rx="2" />
        <path d="M6 10h2v4H6z" /><path d="M16 10h.01" /><path d="M18 12h.01" />
        <path d="M16 14h.01" /><path d="M6 6V4" /><path d="M18 6V4" />
      </svg>
    ),
    title: "Desenvolvimento de Jogos",
    desc: "Criação de jogos 2D com Game Maker, GML e Unity.",
  },
];

function ServiceCard({ svc }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? "rgba(255,204,0,0.04)" : C.bg,
        border: "1px solid " + (hov ? "rgba(255,204,0,0.25)" : C.border),
        borderRadius: 10, padding: "24px 22px",
        transition: "all 0.25s ease",
        transform: hov ? "translateY(-4px)" : "none",
        boxShadow: hov ? "0 12px 32px rgba(0,0,0,0.35)" : "none",
        cursor: "default", position: "relative", overflow: "hidden",
      }}
    >
      {hov && (
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 2,
          background: "linear-gradient(90deg, #FFCC00, #ffaa00)",
        }} />
      )}
      <div style={{
        width: 44, height: 44, borderRadius: 10, marginBottom: 18,
        background: hov ? "rgba(255,204,0,0.15)" : "rgba(255,204,0,0.08)",
        border: "1px solid " + (hov ? "rgba(255,204,0,0.35)" : "rgba(255,204,0,0.15)"),
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "#FFCC00", transition: "all 0.25s",
      }}>
        {svc.icon}
      </div>
      <h3 style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 10, lineHeight: 1.4 }}>{svc.title}</h3>
      <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.7 }}>{svc.desc}</p>
    </div>
  );
}

function About() {
  const mob = useIsMobile();
  const CV_URL = "https://drive.google.com/file/d/1-qaWwHUOGpuJdYdBNatcq75fZaJzWWzr/view?usp=sharing";

  return (
    <section id="sobre" style={{ padding: mob ? "60px 24px" : "100px 60px", background: C.sidebar, borderTop: "1px solid " + C.border }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: mob ? "1fr" : "1fr 1fr", gap: mob ? 40 : 80 }}>
        <div>
          <p style={{ fontFamily: "'Fira Code', monospace", fontSize: 15, color: C.comment, marginBottom: 12 }}>{"// sobre mim()"}</p>
          <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: mob ? 40 : 56, fontWeight: 400, color: C.text, lineHeight: 1, marginBottom: 28 }}>
            Quem<br /><span style={{ color: C.accent }}>sou eu?</span>
          </h2>
          <p style={{ color: C.muted, fontSize: 15, lineHeight: 1.9, marginBottom: 16 }}>
            Sou desenvolvedor full-stack com formação em Análise e Desenvolvimento de Sistemas (FATEC Ribeirão Preto) e técnico em Desenvolvimento de Sistemas. Tenho experiência prática com Flutter, PHP/Laravel, Python, Git e muito mais.
          </p>
          <p style={{ color: C.muted, fontSize: 15, lineHeight: 1.9, marginBottom: 32 }}>
            Atuei como Gerente de Projetos na Eversafe, implementando automações no Jira e Salesforce. Hoje trabalho como Designer CAD/CAM no Digital Center Lab, combinando criatividade e precisão técnica.
          </p>
          <a
            href={CV_URL}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "transparent", border: "1px solid " + C.accent,
              color: C.accent, padding: "10px 24px", fontSize: 13,
              fontFamily: "'Fira Code', monospace",
              borderRadius: 4, cursor: "pointer", textDecoration: "none",
              transition: "background 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = C.accent; e.currentTarget.style.color = C.bg; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = C.accent; }}
          >
            <IcoDownload /> download_cv()
          </a>
        </div>

        <div>
          <p style={{ fontFamily: "'Fira Code', monospace", fontSize: 12, color: C.comment, marginBottom: 20 }}>{"// skills[]"}</p>
          {SKILLS.map((skill) => (
            <div key={skill.name} style={{ marginBottom: 18 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 13, color: C.accent }}>{skill.name}</span>
                <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 12, color: C.muted }}>{skill.level}%</span>
              </div>
              <div style={{ height: 4, background: C.panel, borderRadius: 2, border: "1px solid " + C.border }}>
                <div style={{
                  height: "100%", width: skill.level + "%",
                  background: "linear-gradient(90deg, " + C.accent + ", #ffaa00)",
                  borderRadius: 2, transition: "width 1.2s ease",
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── O que eu faço ── */}
      <div style={{ maxWidth: 1100, margin: "48px auto 0" }}>
        <p style={{ fontFamily: "'Fira Code', monospace", fontSize: 12, color: C.comment, marginBottom: 20 }}>{"// o_que_eu_faço[]"}</p>
        <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "repeat(4, 1fr)", gap: 16 }}>
          {SERVICES.map((svc, i) => (
            <ServiceCard key={i} svc={svc} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const mob = useIsMobile();
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projetos" style={{ padding: mob ? "60px 24px" : "100px 60px", background: C.bg, borderTop: "1px solid " + C.border }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p style={{ fontFamily: "'Fira Code', monospace", fontSize: 15, color: C.comment, marginBottom: 12 }}>{"// projetos()"}</p>
        <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: mob ? 40 : 56, fontWeight: 400, color: C.text, lineHeight: 1, marginBottom: 52 }}>
          Projetos em <span style={{ color: C.accent }}>destaque</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "1fr 1fr", gap: 20 }}>
          {PROJECTS.map((proj, i) => (
            <div
              key={proj.title}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: C.sidebar,
                border: "1px solid " + (hovered === i ? C.accent : C.border),
                borderRadius: 8, overflow: "hidden",
                cursor: "pointer", transition: "all 0.25s ease",
                transform: hovered === i ? "translateY(-4px)" : "none",
                boxShadow: hovered === i ? "0 12px 40px rgba(0,0,0,0.4)" : "none",
              }}
            >
              <div style={{ position: "relative", height: 160, overflow: "hidden" }}>
                <img
                  src={proj.banner} alt={proj.title}
                  style={{
                    width: "100%", height: "100%", objectFit: "cover",
                    filter: hovered === i ? "brightness(0.85)" : "brightness(0.45) saturate(0.3)",
                    transition: "filter 0.3s ease",
                  }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 30%, rgba(17,17,17,0.97) 100%)" }} />
                {hovered === i && (
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, " + C.accent + ", #ffaa00)" }} />
                )}
                <span style={{
                  position: "absolute", top: 12, right: 12,
                  fontFamily: "'Fira Code', monospace", fontSize: 11,
                  background: "rgba(0,0,0,0.6)", color: C.muted,
                  padding: "3px 8px", borderRadius: 4, border: "1px solid " + C.border,
                }}>{proj.year}</span>
              </div>
              <div style={{ padding: "20px 22px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                  <h3 style={{ fontSize: 16, fontWeight: 600, color: C.text }}>{proj.title}</h3>
                  <span style={{ color: hovered === i ? C.accent : C.border, fontSize: 18, transition: "all 0.2s", transform: hovered === i ? "translate(2px,-2px)" : "none", display: "inline-block" }}>↗</span>
                </div>
                <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.7, marginBottom: 16 }}>{proj.desc}</p>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {proj.tags.map((tag) => (
                    <span key={tag} style={{
                      fontFamily: "'Fira Code', monospace", fontSize: 11, fontWeight: 500,
                      background: "rgba(255,204,0,0.08)", color: C.accent,
                      padding: "3px 9px", borderRadius: 3,
                      border: "1px solid rgba(255,204,0,0.18)",
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certificates() {
  const mob = useIsMobile();
  const [hovered, setHovered] = useState(null);
  const [modal, setModal] = useState(null);

  return (
    <section id="certificados" style={{ padding: mob ? "60px 24px" : "100px 60px", background: C.sidebar, borderTop: "1px solid " + C.border }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p style={{ fontFamily: "'Fira Code', monospace", fontSize: 15, color: C.comment, marginBottom: 12 }}>{"// certificados()"}</p>
        <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: mob ? 40 : 56, fontWeight: 400, color: C.text, lineHeight: 1, marginBottom: 52 }}>
          Certificados & <span style={{ color: C.accent }}>Formações</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "1fr 1fr", gap: 16 }}>
          {CERTIFICATES.map((cert, i) => (
            <div
              key={cert.title}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: "flex", alignItems: "center", gap: 18,
                background: hovered === i ? "rgba(255,204,0,0.04)" : C.bg,
                border: "1px solid " + (hovered === i ? "rgba(255,204,0,0.25)" : C.border),
                borderRadius: 10, padding: "18px 22px",
                transition: "all 0.25s ease",
                transform: hovered === i ? "translateX(4px)" : "none",
              }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: 8, flexShrink: 0,
                background: "rgba(255,204,0,0.08)",
                border: "1px solid rgba(255,204,0,0.18)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <IcoCert />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: 14, fontWeight: 600, color: C.text, marginBottom: 3, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{cert.title}</p>
                <p style={{ fontFamily: "'Fira Code', monospace", fontSize: 12, color: C.muted }}>{cert.issuer} · {cert.date}</p>
              </div>
              <button
                onClick={() => setModal(cert)}
                style={{
                  display: "flex", alignItems: "center", gap: 6,
                  fontFamily: "'Fira Code', monospace", fontSize: 11,
                  color: hovered === i ? C.accent : "transparent",
                  background: hovered === i ? "rgba(255,204,0,0.1)" : "transparent",
                  border: "1px solid " + (hovered === i ? "rgba(255,204,0,0.3)" : "transparent"),
                  padding: "6px 12px", borderRadius: 4,
                  cursor: "pointer", whiteSpace: "nowrap",
                  transition: "all 0.2s", flexShrink: 0,
                }}
              >
                <IcoEye /> ver cert.
              </button>
            </div>
          ))}
        </div>
      </div>
      {modal && <CertModal cert={modal} onClose={() => setModal(null)} />}
    </section>
  );
}

function Contact() {
  const mob = useIsMobile();
  const CONTACTS = [
    { icon: <IcoWhatsapp />, label: "WhatsApp", desc: "Resposta rápida", href: "https://wa.me/5516999776125", color: "#25D366" },
    { icon: <IcoEmail />, label: "E-mail", desc: "thalescsantos14@gmail.com", href: "mailto:thalescsantos14@gmail.com", color: C.accent },
    { icon: <IcoGithub />, label: "GitHub", desc: "github.com/thalessantos-dev", href: "https://github.com/thalessantos-dev", color: C.text },
    { icon: <IcoLinkedin />, label: "LinkedIn", desc: "linkedin.com/in/thalesc-santos", href: "https://linkedin.com/in/thalesc-santos", color: "#0A66C2" },
  ];

  return (
    <section id="contato" style={{ padding: mob ? "60px 24px" : "100px 60px", background: C.bg, borderTop: "1px solid " + C.border, position: "relative", overflow: "hidden" }}>
      <CodeBg />
      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <p style={{ fontFamily: "'Fira Code', monospace", fontSize: 15, color: C.comment, marginBottom: 12 }}>{"// contato()"}</p>
        <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: mob ? 40 : 56, fontWeight: 400, color: C.text, lineHeight: 1, marginBottom: 16 }}>
          Vamos <span style={{ color: C.accent }}>conversar?</span>
        </h2>
        <p style={{ color: C.muted, fontSize: 15, lineHeight: 1.8, marginBottom: 52, maxWidth: 460 }}>
          Estou aberto a novas oportunidades, projetos freelance e colaborações. Escolha a melhor forma de falar comigo!
        </p>
        <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "repeat(2, 1fr)", gap: 14, maxWidth: 700 }}>
          {CONTACTS.map((item, i) => (
            <a
              key={i} href={item.href} target="_blank" rel="noreferrer"
              style={{
                display: "flex", alignItems: "center", gap: 14,
                padding: "18px 20px",
                background: C.sidebar, border: "1px solid " + C.border,
                borderRadius: 8, textDecoration: "none",
                transition: "all 0.22s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = C.accent;
                e.currentTarget.style.background = "rgba(255,204,0,0.05)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = C.border;
                e.currentTarget.style.background = C.sidebar;
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{
                width: 42, height: 42, borderRadius: 8, flexShrink: 0,
                background: C.panel, border: "1px solid " + C.border,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: item.color,
              }}>{item.icon}</div>
              <div style={{ flex: 1 }}>
                <p style={{ fontFamily: "'Fira Code', monospace", fontSize: 13, fontWeight: 600, color: C.text, marginBottom: 2 }}>{item.label}</p>
                <p style={{ fontSize: 12, color: C.muted }}>{item.desc}</p>
              </div>
              <span style={{ color: C.border, fontSize: 16 }}>→</span>
            </a>
          ))}
        </div>
      </div>
      <div style={{ maxWidth: 1100, margin: "80px auto 0", paddingTop: 28, borderTop: "1px solid " + C.border, position: "relative", zIndex: 1 }}>
        <p style={{ fontFamily: "'Fira Code', monospace", fontSize: 12, color: C.muted }}>
          <span style={{ color: C.comment }}>{"// "}</span>
          <span style={{ color: C.accent }}>made</span>
          {" by "}
          <span style={{ color: C.accent }}>"Thales Santos"</span>
          {" · "}
          <span style={{ color: C.muted }}>{new Date().getFullYear()}</span>
        </p>
      </div>
    </section>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.id);
    const handler = () => {
      let current = "home";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 80) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body, #root { width: 100%; min-height: 100vh; background: #0a0a0a; overflow-x: hidden; }
        body { font-family: 'DM Sans', sans-serif; }
        html { scroll-behavior: smooth; }
      `}</style>
      <Navbar active={active} setActive={setActive} />
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Contact />
    </>
  );
}