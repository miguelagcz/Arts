"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const LINKS = [
  { href: "#bios", label: "Dúo" },
  { href: "#en-vivo", label: "En Vivo" },
  { href: "#jams", label: "Jams" },
  { href: "#reproducir", label: "Reproducir" },
  { href: "#conectar", label: "Conectar" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  function scrollToTop(e: React.MouseEvent) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleLinkClick() {
    setOpen(false);
  }

  return (
    <>
      <motion.nav
        className={`nav ${scrolled ? "nav--scrolled" : ""}`}
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="nav__logo" onClick={scrollToTop}>
          Cachirula<span> & </span>Loojan
        </div>

        <ul className="nav__links">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        <button
          className="nav__burger"
          data-open={open}
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </motion.nav>

      {open && (
        <motion.div
          className="nav__mobile"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={handleLinkClick}>
              {l.label}
            </a>
          ))}
        </motion.div>
      )}
    </>
  );
}
