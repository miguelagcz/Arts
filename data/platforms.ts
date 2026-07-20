export type Platform = {
  id: "spotify" | "amazon" | "apple";
  name: string;
  image: string;
  link: string;
};

export const platforms: Platform[] = [
  {
    id: "spotify",
    name: "Spotify",
    image: "/assets/Musica/spotify.webp",
    link: "https://open.spotify.com/intl-es/album/34q8BcQiDWmbD2MFFy4nPy",
  },
  {
    id: "amazon",
    name: "Amazon Music",
    image: "/assets/Musica/amazonmisic.webp",
    link: "https://music.amazon.com/albums/B0DSCMTWGX",
  },
  {
    id: "apple",
    name: "Apple Music",
    image: "/assets/Musica/deezer.webp",
    link: "https://music.apple.com/mx/artist/cachirula/1533347288",
  },
];

export type ContactLink = {
  label: string;
  highlight: string;
  rest: string;
  link: string;
};

export const contactLinks: ContactLink[] = [
  {
    label: "booking",
    highlight: "Booking",
    rest: "AgentInfo",
    link: "https://bookingagentinfo.com/celebrity/cachirula/?utm_source=chatgpt.com",
  },
  {
    label: "insomniac",
    highlight: "Insomniac",
    rest: "Events",
    link: "https://www.insomniac.com/music/artists/loojan/?utm_source=chatgpt.com",
  },
];
