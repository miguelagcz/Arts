import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ArtistBio from "@/components/ArtistBio";
import Rail from "@/components/Rail";
import CollabSlider from "@/components/CollabSlider";
import ListenNow from "@/components/ListenNow";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";

import { artists } from "@/data/artists";
import { experienceItems } from "@/data/experience";
import { experience2Items } from "@/data/experience2";
import { collabs } from "@/data/collabs";
import { platforms, contactLinks } from "@/data/platforms";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <div id="bios">
        {artists.map((artist, i) => (
          <ArtistBio key={artist.slug} artist={artist} reverse={i % 2 === 1} />
        ))}
      </div>

      <Marquee
        tone="cyan"
        angle={2}
        speed={24}
        items={["ROLLING STONE", "COACHELLA 2026", "AUDITORIO BB", "SEXOLANDIA II"]}
      />

      <Rail
        items={experienceItems}
        sectionId="en-vivo"
        eyebrow="Shows, prensa y lanzamientos"
        title="En Vivo"
      />

      <Rail
        items={experience2Items}
        sectionId="loojan-tracks"
        eyebrow="Catálogo"
        title="Discografía"
      />

      <CollabSlider collabs={collabs} />

      <Marquee
        tone="magenta"
        angle={-2}
        speed={20}
        items={["ESCUCHA AHORA", "SPOTIFY", "AMAZON MUSIC", "APPLE MUSIC"]}
      />

      <ListenNow platforms={platforms} />

      <Contact links={contactLinks} />

      <Footer />
    </>
  );
}
