"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import type { CarouselItem } from "@/data/experience";

export default function Rail({
  items,
  sectionId,
  title,
  eyebrow,
}: {
  items: CarouselItem[];
  sectionId: string;
  title: string;
  eyebrow: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headRef, { once: true, amount: 0.4 });
  const [progress, setProgress] = useState(0);

  function updateProgress() {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? (el.scrollLeft / max) * 100 : 0);
  }

  function scrollBy(dir: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;
    const cardWidth = el.querySelector(".rail__card")?.clientWidth ?? 320;
    el.scrollBy({ left: dir * (cardWidth + 20), behavior: "smooth" });
  }

  return (
    <section className="rail-section" id={sectionId}>
      <div className="wrap">
        <div className="rail-section__head" ref={headRef}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="section-heading">{title}</h2>
          </motion.div>

          <div className="rail__arrows">
            <button
              className="rail__arrow"
              onClick={() => scrollBy(-1)}
              aria-label="Anterior"
            >
              ←
            </button>
            <button
              className="rail__arrow"
              onClick={() => scrollBy(1)}
              aria-label="Siguiente"
            >
              →
            </button>
          </div>
        </div>

        <div className="rail-section__progress">
          <div
            className="rail-section__progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="rail" ref={trackRef} onScroll={updateProgress}>
        {items.map((item, i) => (
          <div
            key={item.name + i}
            className="rail__card"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="rail__card-body">
              <div className="rail__card-name">{item.name}</div>
              <div className="rail__card-desc">{item.description}</div>
              <button
                className="rail__card-btn"
                onClick={() => window.open(item.link, "_blank")}
              >
                Saber más
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
