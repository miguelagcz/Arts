"use client";

import { motion } from "framer-motion";
import type { ContactLink } from "@/data/platforms";

export default function Contact({ links }: { links: ContactLink[] }) {
  return (
    <section className="contact-v2" id="conectar">
      <div className="wrap">
        <span className="eyebrow">Bookings y prensa</span>
        <h2 className="section-heading">Conectar</h2>

        <div className="contact-v2__list">
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.link}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-v2__row"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="contact-v2__row-label">
                {l.highlight}
                {l.rest}
              </span>
              <span className="contact-v2__row-arrow">↗</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
