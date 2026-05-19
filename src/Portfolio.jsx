import { useState, useEffect, useRef } from "react";

const phrases = [
  "clean web experiences.",
  "full-stack solutions.",
  "things people love.",
  "pixel-perfect UIs.",
  "smart, scalable apps.",
];

const projects = [
  {
    tag: "E-Commerce",
    title: "Gmax Electronics Service Center Shopify Webstore",
    desc: "A fully customized Shopify storefront built for company use. Includes theme customization, product catalog setup, collections, and optimized checkout flow for a seamless shopping experience.",
    stack: ["Shopify", "Liquid"],
    link: "#",
  },
  {
    tag: "Capstone Project",
    title: "Innovative Resource Tracking",
    desc: "A QR code-based equipment management system for academic departments. Features request workflows, real-time status tracking, and multi-department user roles.",
    stack: ["PHP", "MySQL", "JavaScript", "CSS", "QR Code API"],
    link: "https://github.com/MoisesVeloso/Innovative-Resource-Tracking",
  },
  {
    tag: "Government System",
    title: "LibertyTrack",
    desc: "A prisoner management system with descriptive analytics and facial recognition for Moriones Police Station (PS2). Built with Python's face_recognition library and a PHP backend.",
    stack: ["PHP", "Python", "Tailwind CSS", "MySQL", "face_recognition"],
    link: "https://github.com/MoisesVeloso/LibertyTrack",
  },
  {
    tag: "Web Tool",
    title: "Tax Calculator",
    desc: "A clean, browser-based VAT and net-of-VAT calculator for quick tax computations — simple, fast, and accessible.",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/MoisesVeloso/Tax-Calculator-",
  },
  {
    tag: "Utility Tool",
    title: "Price Code Converter",
    desc: "Converts price codes from text format to numeric values, useful for retail and inventory management workflows.",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/MoisesVeloso/PriceCodeConverter",
  },
  {
    tag: "PHP App",
    title: "Loyalty Program",
    desc: "A PHP-based customer loyalty system handling point tracking and reward management for retail businesses.",
    stack: ["PHP", "MySQL", "HTML", "CSS"],
    link: "https://github.com/MoisesVeloso/Loyalty-Program",
  },
  {
    tag: "Personal",
    title: "MoiDev",
    desc: "Personal dev workspace and project sandbox — a JavaScript playground for experiments and prototypes.",
    stack: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/MoisesVeloso/MoiDev",
  },
];

const experiences = [
  {
    year: "Apr 2025 – Present",
    role: "Sales & IT Support",
    company: "Gmax Electronics Service Center",
    desc: "Provides basic IT support and troubleshooting for office systems. Processes sales, performs daily sales auditing, encodes and maintains sales records, and assists with general administrative tasks.",
  },
  {
    year: "Apr – Aug 2024",
    role: "Full Stack Developer",
    company: "Freelance",
    desc: "Implemented custom features using PHP and Python. Integrated a machine learning model (Random Forest) to classify learning styles with limited data. Worked closely with clients to deliver tailored solutions and leveraged AI tools to streamline development.",
  },
  {
    year: "Feb – Jun 2024",
    role: "IT Intern",
    company: "GRPC Access Computer Trading",
    desc: "Assembled computers, installed operating systems, programs, and drivers. Tested assembled units and assisted customers with inquiries.",
  },
  {
    year: "May 2021 – Jun 2022",
    role: "Freelance Computer Technician",
    company: "Freelance",
    desc: "Handled basic repairs, troubleshooting, and hardware upgrades for client system units.",
  },
  {
    year: "Feb 2020",
    role: "IT Intern",
    company: "Computer Village.com",
    desc: "Assembled and tested system units, installed OS and software, managed item inventory, and assisted customers.",
  },
];

const skillCategories = [
  { name: "Frontend", items: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript"] },
  { name: "Backend", items: ["PHP", "Python", "MySQL"] },
  { name: "Tools & Design", items: ["Figma", "Adobe Premiere Pro", "Git & GitHub", "Microsoft Office"] },
  { name: "Other Skills", items: ["IT Troubleshooting", "Computer Servicing", "Basic Accounting", "Customer Service"] },
];

function SkBar({ w, h, dark, style = {}, radius = 6 }) {
  return (
    <div style={{ width: w, height: h, borderRadius: radius, background: dark ? "#2a2a27" : "#e0deda", position: "relative", overflow: "hidden", flexShrink: 0, ...style }}>
      <div style={{ position: "absolute", inset: 0, background: `linear-gradient(90deg, transparent 25%, ${dark ? "#333330" : "#f0eeeb"} 50%, transparent 75%)`, backgroundSize: "200% 100%", animation: "shimmer 1.4s infinite" }} />
    </div>
  );
}

function Skeleton({ dark }) {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 999, background: dark ? "#111210" : "#f5f4f0", display: "flex", flexDirection: "column" }}>
      <div style={{ height: 56, background: dark ? "#222220" : "#fff", borderBottom: `0.5px solid ${dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.09)"}`, display: "flex", alignItems: "center", padding: "0 1.25rem", gap: "2rem" }}>
        <SkBar w={80} h={20} dark={dark} /><div style={{ flex: 1 }} />
        <SkBar w={40} h={14} dark={dark} /><SkBar w={60} h={14} dark={dark} /><SkBar w={50} h={14} dark={dark} />
      </div>
      <div style={{ flex: 1, padding: "6rem 1.25rem", maxWidth: 860, margin: "0 auto", width: "100%" }}>
        <SkBar w={80} h={14} dark={dark} style={{ marginBottom: 20 }} />
        <SkBar w="70%" h={56} dark={dark} style={{ marginBottom: 16 }} />
        <SkBar w="50%" h={40} dark={dark} style={{ marginBottom: 20 }} />
        <SkBar w="85%" h={12} dark={dark} style={{ marginBottom: 8 }} />
        <SkBar w="85%" h={12} dark={dark} style={{ marginBottom: 8 }} />
        <SkBar w="65%" h={12} dark={dark} style={{ marginBottom: 28 }} />
        <div style={{ display: "flex", gap: 12 }}>
          <SkBar w={120} h={38} dark={dark} radius={100} />
          <SkBar w={120} h={38} dark={dark} radius={100} />
        </div>
      </div>
    </div>
  );
}

function TypedText() {
  const [text, setText] = useState("");
  const [pi, setPi] = useState(0);
  const [ci, setCi] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const phrase = phrases[pi];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(phrase.slice(0, ci + 1));
        if (ci + 1 === phrase.length) { setTimeout(() => setDeleting(true), 1800); } else { setCi((c) => c + 1); }
      } else {
        setText(phrase.slice(0, ci - 1));
        if (ci - 1 === 0) { setDeleting(false); setPi((p) => (p + 1) % phrases.length); setCi(0); } else { setCi((c) => c - 1); }
      }
    }, deleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [ci, deleting, pi]);
  return <span>{text}</span>;
}

function Reveal({ children, style = {} }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(24px)", transition: "opacity 0.7s ease, transform 0.7s ease", ...style }}>
      {children}
    </div>
  );
}

export default function Portfolio() {
  const [dark, setDark] = useState(false);
  const [loading, setLoading] = useState(true);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [hoveredExp, setHoveredExp] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => { const t = setTimeout(() => setLoading(false), 900); return () => clearTimeout(t); }, []);

  const c = {
    bg: dark ? "#111210" : "#f5f4f0",
    bg2: dark ? "#1a1916" : "#edecea",
    surface: dark ? "#222220" : "#ffffff",
    border: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.09)",
    text: dark ? "#f0efe9" : "#1a1916",
    muted: dark ? "#8a897f" : "#6b6a65",
    accent: dark ? "#5aaa7e" : "#2a5c45",
    accent2: dark ? "#1a2e21" : "#e8f3ee",
    tagText: dark ? "#7dd4a8" : "#1a3d2b",
  };

  // Full-width section wrapper — background spans edge to edge
  const sectionOuter = { width: "100%" };
  // Centered inner content container
  const inner = { maxWidth: 900, margin: "0 auto", padding: "5rem 2rem" };
  const sectionLabel = { fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: c.accent, fontWeight: 500, marginBottom: "2rem", display: "flex", alignItems: "center", gap: 8 };
  const divider = <span style={{ flex: 1, height: "0.5px", background: c.border, maxWidth: 200 }} />;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body, #root { width: 100%; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: 'DM Sans', sans-serif; }
        a { text-decoration: none; }
        @keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

        /* ── Responsive helpers ── */
        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: start; }
        .projects-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; }
        .hero-buttons { display: flex; gap: 12px; flex-wrap: wrap; }
        .hero-links { margin-top: 3rem; display: flex; gap: 1rem; align-items: center; }
        .exp-row { display: grid; grid-template-columns: 140px 1fr; gap: 2rem; }
        .nav-links { display: flex; align-items: center; gap: 1.5rem; }
        .hamburger { display: none; }
        .mobile-menu { display: none; }

        @media (max-width: 640px) {
          .about-grid { grid-template-columns: 1fr; gap: 1.5rem; }
          .projects-grid { grid-template-columns: 1fr; }
          .exp-row { grid-template-columns: 1fr; gap: 0.25rem; }
          .hero-links { flex-wrap: wrap; gap: 0.75rem; }
          .nav-links { display: none; }
          .hamburger { display: flex; }
          .mobile-menu.open {
            display: flex;
            flex-direction: column;
            position: fixed;
            top: 56px;
            left: 0; right: 0;
            z-index: 99;
            padding: 1.25rem 1.5rem;
            gap: 1.25rem;
          }
        }
      `}</style>

      {loading && <Skeleton dark={dark} />}

      <div style={{ background: c.bg, color: c.text, minHeight: "100vh", width: "100%", fontFamily: "'DM Sans', sans-serif", transition: "background 0.3s, color 0.3s" }}>

        {/* ── NAV ── */}
        <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: dark ? "rgba(17,18,16,0.9)" : "rgba(245,244,240,0.85)", backdropFilter: "blur(12px)", borderBottom: `0.5px solid ${c.border}`, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 1.25rem", height: 56, transition: "background 0.3s" }}>
          <a href="#home" style={{ fontFamily: "'DM Serif Display', serif", fontSize: 20, color: c.text, letterSpacing: -0.5 }}>CM.</a>

          {/* Desktop nav */}
          <div className="nav-links">
            {["about", "projects", "experience", "skills"].map((s) => (
              <a key={s} href={`#${s}`} style={{ fontSize: 13, color: c.muted, fontWeight: 400 }}>{s.charAt(0).toUpperCase() + s.slice(1)}</a>
            ))}
            <button onClick={() => setDark((d) => !d)} style={{ width: 32, height: 32, borderRadius: "50%", border: `0.5px solid ${c.border}`, background: c.surface, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15 }} aria-label="Toggle theme">
              {dark ? "🌙" : "☀️"}
            </button>
          </div>

          {/* Mobile: theme + hamburger */}
          <div className="hamburger" style={{ alignItems: "center", gap: 10 }}>
            <button onClick={() => setDark((d) => !d)} style={{ width: 32, height: 32, borderRadius: "50%", border: `0.5px solid ${c.border}`, background: c.surface, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15 }} aria-label="Toggle theme">
              {dark ? "🌙" : "☀️"}
            </button>
            <button onClick={() => setMenuOpen((o) => !o)} style={{ width: 32, height: 32, borderRadius: 6, border: `0.5px solid ${c.border}`, background: c.surface, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, color: c.text }} aria-label="Open menu">
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </nav>

        {/* Mobile dropdown menu */}
        <div className={`mobile-menu${menuOpen ? " open" : ""}`} style={{ background: dark ? "rgba(17,18,16,0.97)" : "rgba(245,244,240,0.97)", backdropFilter: "blur(12px)", borderBottom: `0.5px solid ${c.border}` }}>
          {["about", "projects", "experience", "skills"].map((s) => (
            <a key={s} href={`#${s}`} onClick={() => setMenuOpen(false)} style={{ fontSize: 15, color: c.text, fontWeight: 400, padding: "0.25rem 0" }}>{s.charAt(0).toUpperCase() + s.slice(1)}</a>
          ))}
        </div>

        {/* ── HERO ── */}
        <section id="home" style={{ width: "100%", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "5rem 2rem 3rem", width: "100%" }}>
          <p style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: c.accent, fontWeight: 500, marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ display: "block", width: 24, height: 1, background: c.accent }} /> Frontend Developer
          </p>
          <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2rem, 6vw, 4rem)", lineHeight: 1.08, letterSpacing: -1.5, color: c.text, marginBottom: "1.5rem", maxWidth: 700 }}>
            Hi, I'm <span style={{ color: c.accent }}>Carl Moises Veloso</span><br />
            I build <TypedText />
            <span style={{ display: "inline-block", width: 3, height: "1em", background: c.accent, verticalAlign: "text-bottom", marginLeft: 2, animation: "blink 1s step-end infinite" }} />
          </h1>
          <p style={{ fontSize: 15, color: c.muted, maxWidth: 500, lineHeight: 1.7, marginBottom: "2.5rem" }}>
            A developer who loves building practical systems — from QR-based resource trackers to AI-powered management platforms. I bridge code and real-world problem-solving.
          </p>
          <div className="hero-buttons">
            <a href="#projects" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 22px", borderRadius: 100, fontSize: 13, fontWeight: 500, background: c.accent, color: "#fff" }}>View my work ↓</a>
            <a href="mailto:dev.moises09@gmail.com" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 22px", borderRadius: 100, fontSize: 13, fontWeight: 500, background: "transparent", color: c.text, border: `0.5px solid ${c.border}` }}>Get in touch</a>
          </div>
          <div className="hero-links">
            {[["GitHub", "https://github.com/MoisesVeloso"], ["LinkedIn", "https://www.linkedin.com/in/moisesv09/"], ["Email", "mailto:dev.moises09@gmail.com"]].map(([label, href], i) => (
              <span key={label} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                {i > 0 && <span style={{ width: 1, height: 12, background: c.border, display: "inline-block" }} />}
                <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" style={{ fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", color: c.muted, fontWeight: 500 }}>{label}</a>
              </span>
            ))}
          </div>
        </div>
        </section>

        {/* ── ABOUT ── */}
        <Reveal style={sectionOuter}>
          <section id="about" style={{ width: "100%" }}>
            <div style={inner}>
            <p style={sectionLabel}>About me {divider}</p>
            <div className="about-grid">
              <div>
                <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.75rem", letterSpacing: -0.5, marginBottom: "1rem", color: c.text }}>Building systems that solve real problems</h2>
                <p style={{ fontSize: 15, color: c.muted, lineHeight: 1.8, marginBottom: "1rem" }}>I'm Carl Moises Veloso — a developer who loves turning complex requirements into practical, working systems. From capstone projects to freelance ML integrations, I bring ideas to life through code.</p>
                <p style={{ fontSize: 15, color: c.muted, lineHeight: 1.8, marginBottom: "1.5rem" }}>I also bring hands-on IT experience in troubleshooting, hardware, and system maintenance — making me comfortable on both the technical and operational side of tech.</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {["PHP", "Python", "HTML/CSS", "Tailwind CSS", "MySQL", "Figma", "JavaScript"].map((s) => (
                    <span key={s} style={{ padding: "5px 14px", borderRadius: 100, fontSize: 12, fontWeight: 500, background: c.accent2, color: c.tagText }}>{s}</span>
                  ))}
                </div>
              </div>
              <div style={{ background: c.surface, border: `0.5px solid ${c.border}`, borderRadius: 16, padding: "1.5rem" }}>
                {[["7+", "Projects built"], ["2+", "Years in tech roles"], ["1", "ML-powered project shipped"]].map(([num, label], i, arr) => (
                  <div key={label} style={{ marginBottom: i < arr.length - 1 ? "1.25rem" : 0, paddingBottom: i < arr.length - 1 ? "1.25rem" : 0, borderBottom: i < arr.length - 1 ? `0.5px solid ${c.border}` : "none" }}>
                    <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "2rem", color: c.text }}>{num}</div>
                    <div style={{ fontSize: 12, color: c.muted }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
            </div>
          </section>
        </Reveal>

        {/* ── PROJECTS ── */}
        <Reveal style={sectionOuter}>
          <section id="projects" style={{ width: "100%" }}>
            <div style={inner}>
            <p style={sectionLabel}>Projects {divider}</p>
            <div className="projects-grid">
              {projects.map((p, i) => (
                <div key={p.title}
                  onMouseEnter={() => setHoveredProject(i)}
                  onMouseLeave={() => setHoveredProject(null)}
                  style={{ background: c.surface, border: `0.5px solid ${c.border}`, borderRadius: 16, padding: "1.5rem", transition: "transform 0.2s, box-shadow 0.2s", transform: hoveredProject === i ? "translateY(-3px)" : "none", boxShadow: hoveredProject === i ? "0 8px 24px rgba(0,0,0,0.1)" : "0 1px 4px rgba(0,0,0,0.07)", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: c.accent, transform: hoveredProject === i ? "scaleX(1)" : "scaleX(0)", transformOrigin: "left", transition: "transform 0.3s ease" }} />
                  <p style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: c.accent, fontWeight: 500, marginBottom: "0.5rem" }}>{p.tag}</p>
                  <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.15rem", marginBottom: "0.5rem", color: c.text }}>{p.title}</h3>
                  <p style={{ fontSize: 13, color: c.muted, lineHeight: 1.7, marginBottom: "1rem" }}>{p.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: "0.75rem" }}>
                    {p.stack.map((t) => (<span key={t} style={{ fontSize: 11, padding: "3px 10px", borderRadius: 100, background: c.bg2, color: c.muted, border: `0.5px solid ${c.border}` }}>{t}</span>))}
                  </div>
                  {p.link !== "#"
                    ? <a href={p.link} target="_blank" rel="noreferrer" style={{ fontSize: 12, color: c.accent, fontWeight: 500 }}>View on GitHub →</a>
                    : <span style={{ fontSize: 12, color: c.muted, fontStyle: "italic" }}>Private / Company project</span>
                  }
                </div>
              ))}
            </div>
            </div>
          </section>
        </Reveal>

        {/* ── EXPERIENCE ── */}
        <Reveal style={sectionOuter}>
          <section id="experience" style={{ width: "100%" }}>
            <div style={inner}>
            <p style={sectionLabel}>Experience {divider}</p>
            <div>
              {experiences.map((e, i) => (
                <div key={e.role + i}
                  onMouseEnter={() => setHoveredExp(i)}
                  onMouseLeave={() => setHoveredExp(null)}
                  className="exp-row"
                  style={{ padding: "2rem 0", borderBottom: `0.5px solid ${c.border}`, paddingLeft: hoveredExp === i ? 8 : 0, transition: "padding-left 0.2s" }}>
                  <span style={{ fontSize: 12, color: c.muted, paddingTop: 2, lineHeight: 1.5 }}>{e.year}</span>
                  <div>
                    <p style={{ fontSize: 16, fontWeight: 500, color: c.text, marginBottom: 2 }}>{e.role}</p>
                    <p style={{ fontSize: 13, color: c.accent, marginBottom: "0.5rem" }}>{e.company}</p>
                    <p style={{ fontSize: 13, color: c.muted, lineHeight: 1.7 }}>{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </section>
        </Reveal>

        {/* ── SKILLS ── */}
        <Reveal style={sectionOuter}>
          <section id="skills" style={{ width: "100%" }}>
            <div style={inner}>
            <p style={sectionLabel}>Skills {divider}</p>
            <div className="skills-grid">
              {skillCategories.map((cat) => (
                <div key={cat.name} style={{ background: c.surface, border: `0.5px solid ${c.border}`, borderRadius: 12, padding: "1.25rem" }}>
                  <p style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: c.accent, fontWeight: 500, marginBottom: "0.75rem" }}>{cat.name}</p>
                  {cat.items.map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: c.text, marginBottom: 6 }}>
                      <span style={{ width: 4, height: 4, borderRadius: "50%", background: c.accent, flexShrink: 0 }} />{item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            </div>
          </section>
        </Reveal>

        {/* ── FOOTER ── */}
        <footer style={{ borderTop: `0.5px solid ${c.border}`, padding: "2rem 1.25rem", textAlign: "center" }}>
          <p style={{ fontSize: 13, color: c.muted }}>
            Designed & built by <span style={{ color: c.accent, fontWeight: 500 }}>Carl Moises Veloso</span> · {new Date().getFullYear()}
          </p>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1.5rem", marginTop: "1rem" }}>
            {[["GitHub", "https://github.com/MoisesVeloso"], ["LinkedIn", "https://www.linkedin.com/in/moisesv09/"], ["Email", "mailto:dev.moises09@gmail.com"]].map(([label, href]) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" style={{ fontSize: 12, color: c.muted, letterSpacing: "0.06em", textTransform: "uppercase" }}>{label}</a>
            ))}
          </div>
        </footer>

      </div>
    </>
  );
}