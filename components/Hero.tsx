"use client";

import { motion } from "framer-motion";
import Marquee from "./Marquee";

const lineVariants = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: "0%",
    transition: { duration: 0.9, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__grain" />

      <motion.div
        className="hero__eyebrow-row"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        <span className="hero__dot" />
        <span className="eyebrow">Cero filtros · Puro fuego</span>
      </motion.div>

      <h1 className="hero__title">
        <span className="line">
          <motion.span
            style={{ display: "block" }}
            variants={lineVariants}
            initial="hidden"
            animate="show"
            custom={0}
          >
            Cachirula
          </motion.span>
        </span>
        <span className="line">
          <motion.span
            style={{ display: "block" }}
            variants={lineVariants}
            initial="hidden"
            animate="show"
            custom={1}
          >
            <span className="amp">&amp;</span>{" "}
            <span className="stroke">Loojan</span>
          </motion.span>
        </span>
      </h1>

      <motion.p
        className="hero__sub"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.7 }}
      >
        Bienvenidx al perreo con clase. El dúo mexicano detrás de Sexolandia,
        rumbo a Coachella 2026.
      </motion.p>

      <div className="hero__marquee-wrap">
        <Marquee
          tone="magenta"
          angle={-2.5}
          items={["CERO FILTROS", "PURO FUEGO", "COACHELLA 2026", "SEXOLANDIA"]}
        />
      </div>
    </section>
  );
}
