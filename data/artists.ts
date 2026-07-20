export type Artist = {
  slug: "cachirula" | "loojan";
  name: string;
  titleClass: "titleC" | "titleL";
  photo: string;
  bio: string;
  instagram: string;
  spotify: string;
};

export const artists: Artist[] = [
  {
    slug: "cachirula",
    name: "Cachirula",
    titleClass: "titleC",
    photo: "/assets/cachi.webp",
    bio: "Karla Julieta García, conocida artísticamente como Cachirula, es una productora, compositora, letrista, DJ y cantante originaria de la Ciudad de México. Con más de siete años de trayectoria, ha desarrollado un sonido único que la posiciona como una de las voces más prometedoras del reggaetón y la música urbana en México.",
    instagram: "https://www.instagram.com/cachirulaa/?hl=es-la",
    spotify: "https://open.spotify.com/artist/5vcFoQxKd0ZpA178xDU12G",
  },
  {
    slug: "loojan",
    name: "Loojan",
    titleClass: "titleL",
    photo: "/assets/Loojan.webp",
    bio: "Eder Luján, mejor conocido como Loojan, es un DJ, productor y cantante mexicano oriundo de la Ciudad de México. Su carrera comenzó alrededor de los 17 años cuando se adentró en el mundo de la música electrónica bajo su nombre real, firmando tracks como Rock The Party con el sello EMPO, y destacando al ganar concursos de remix para sellos como Suite Music (de Ricardo Reyna) y Strawberry Made Recordings Loojan Music.",
    instagram: "https://www.instagram.com/loojanmusic/?hl=es-la",
    spotify: "https://open.spotify.com/intl-es/artist/7lXN2zsTNeVB1MM7rIrWnI",
  },
];
