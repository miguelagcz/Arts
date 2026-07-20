"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { Collab } from "@/data/collabs";

function CollabCard({ collab }: { collab: Collab }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(y, [0, 1], [8, -8]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [0, 1], [-8, 8]), {
    stiffness: 200,
    damping: 20,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  }

  function resetTilt() {
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      className={`collab__card ${active ? "collab__card--active" : ""}`}
      style={{
        backgroundImage: `url(${collab.image})`,
        rotateX,
        rotateY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      onClick={() => setActive((v) => !v)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <span className="collab__card-name">{collab.name}</span>
      <span className="collab__card-desc">{collab.description}</span>
      <button
        className="collab__card-btn"
        onClick={(e) => {
          e.stopPropagation();
          window.open(collab.link, "_blank");
        }}
      >
        Escuchar
      </button>
    </motion.div>
  );
}

export default function CollabSlider({ collabs }: { collabs: Collab[] }) {
  return (
    <section className="collab" id="jams">
      <div className="wrap">
        <span className="eyebrow">Con quién ha sonado el dúo</span>
        <h2 className="section-heading">Jams</h2>
        <div className="collab__grid">
          {collabs.map((c) => (
            <CollabCard key={c.id} collab={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
