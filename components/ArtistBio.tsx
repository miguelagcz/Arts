"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Artist } from "@/data/artists";

export default function ArtistBio({
  artist,
  reverse = false,
}: {
  artist: Artist;
  reverse?: boolean;
}) {
  return (
    <div className={`bio bio--${artist.slug} ${reverse ? "bio--reverse" : ""}`}>
      <div className="wrap">
        <div className="bio__grid">
          <motion.div
            className="bio__media"
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src={artist.photo}
              alt={`Foto de ${artist.name}`}
              fill
              sizes="(max-width: 860px) 100vw, 40vw"
            />
            <span className="bio__tag">Artista · MX</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            <h2 className="bio__name">{artist.name}</h2>
            <p className="bio__text">{artist.bio}</p>
            <div className="bio__links">
              <a
                href={artist.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bio__link"
              >
                Instagram
              </a>
              <a
                href={artist.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="bio__link"
              >
                Spotify
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
