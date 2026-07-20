"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Platform } from "@/data/platforms";

const TONE_CLASS: Record<Platform["id"], string> = {
  spotify: "listen__tile--spotify",
  amazon: "listen__tile--amazon",
  apple: "listen__tile--apple",
};

export default function ListenNow({ platforms }: { platforms: Platform[] }) {
  return (
    <section className="listen" id="reproducir">
      <div className="wrap">
        <span className="eyebrow">Escucha el catálogo completo</span>
        <h2 className="section-heading">Reproducir</h2>

        <div className="listen__grid">
          {platforms.map((p, i) => (
            <motion.div
              key={p.id}
              className={`listen__tile ${TONE_CLASS[p.id]}`}
              onClick={() => window.open(p.link, "_blank")}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Image
                src={p.image}
                alt={p.name}
                width={56}
                height={56}
                className="listen__tile-icon"
              />
              <div className="listen__tile-name">{p.name}</div>
              <div className="listen__tile-cta">Escuchar ahora →</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
