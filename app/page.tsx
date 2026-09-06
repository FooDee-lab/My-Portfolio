"use client";

import {
  ArrowUpRight,
  AtSign,
  BriefcaseBusiness,
  Code2,
  Coffee,
  Download,
  House,
  Mail,
  Moon,
  Sparkles,
  Sun,
  UserRound,
} from "lucide-react";
import { useState } from "react";

const navigation = [
  { label: "Home", icon: House, href: "#home" },
  { label: "About", icon: UserRound, href: "#about" },
  { label: "Work", icon: BriefcaseBusiness, href: "#work" },
  { label: "Contact", icon: Mail, href: "#contact" },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`portfolio-shell ${darkMode ? "theme-dark" : ""}`}>
      <aside className="sidebar">
        <div className="profile-block">
          <div className="profile-mark" aria-label="Alex Morgan portrait placeholder">
            AM
          </div>
          <h1>Alex Morgan</h1>
          <p>Product-minded developer</p>
          <div className="social-links">
            <a href="#contact" aria-label="Professional profile"><AtSign size={16} /></a>
            <a href="#work" aria-label="Code projects"><Code2 size={16} /></a>
            <a href="#contact" aria-label="Email"><Mail size={16} /></a>
          </div>
        </div>

        <nav className="side-nav" aria-label="Primary navigation">
          {navigation.map(({ label, icon: Icon, href }, index) => (
            <a className={index === 0 ? "active" : ""} href={href} key={label}>
              <Icon size={17} strokeWidth={1.8} />
              <span>{label}</span>
            </a>
          ))}
          <a href="#contact"><Download size={17} strokeWidth={1.8} /><span>Download CV</span></a>
        </nav>

        <div className="sidebar-footer">
          <p>Available for select projects</p>
          <span><i /> Based in Toronto, Canada</span>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <span className="eyebrow"><Sparkles size={14} /> Portfolio / 2024</span>
          <button className="theme-toggle" onClick={() => setDarkMode((value) => !value)} aria-label="Toggle color theme">
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            <span>{darkMode ? "Light" : "Night"}</span>
          </button>
        </header>

        <section className="hero" id="home">
          <div className="hero-glow glow-one" />
          <div className="hero-glow glow-two" />
          <div className="hero-copy">
            <p className="kicker">Hello, I&apos;m Alex <span className="wave">✦</span></p>
            <h2>Building digital<br /><em>experiences</em> with care.</h2>
            <p className="hero-description">I&apos;m a full-stack developer who turns complex ideas into clear, useful, and memorable products.</p>
            <div className="hero-actions">
              <a className="primary-button" href="#work">Explore my work <ArrowUpRight size={17} /></a>
              <a className="text-button" href="#contact">Let&apos;s talk <span>↗</span></a>
            </div>
          </div>
          <div className="hero-note"><span>01</span><p>Curious by nature.<br />Precise by practice.</p></div>
          <div className="scroll-cue"><span /> Scroll to explore</div>
        </section>

        <section className="intro-section" id="about">
          <div className="section-label">A little about me</div>
          <div className="intro-content"><h3>Good work lives<br />at the intersection of <span>curiosity</span> and craft.</h3><p>With 6+ years across startups and studios, I help teams find the simplest path from a rough idea to something people genuinely enjoy using.</p></div>
        </section>

        <section className="work-section" id="work">
          <div className="section-heading"><div className="section-label">Selected work</div><a href="#contact">View all projects <ArrowUpRight size={16} /></a></div>
          <div className="project-grid"><article><div className="project-visual visual-coral"><span>01</span><strong>Folio</strong></div><h4>Folio — personal finance, made human</h4><p>Product design · Development</p></article><article><div className="project-visual visual-lime"><span>02</span><strong>Field Notes</strong></div><h4>Field Notes — a slower way to plan</h4><p>Branding · Web design</p></article></div>
        </section>

        <section className="contact-section" id="contact"><div><div className="section-label">Have a project in mind?</div><h3>Let&apos;s make something<br /><span>worth remembering.</span></h3></div><a className="contact-button" href="mailto:hello@alexmorgan.dev"><Mail size={18} /> Get in touch</a></section>
        <footer><span>© 2024 Alex Morgan</span><span>Made with intention <Coffee size={14} /></span></footer>
      </main>
    </div>
  );
}
