import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { SITE_URL, SITE_NAME } from "@/lib/seo";
import { Analytics } from "@vercel/analytics/next";

export const viewport: Viewport = {
  themeColor: "#0A0A0D",
  width: "device-width",
  initialScale: 1,
};

const DESCRIPTION =
  "Cachirula & Loojan, dúo de reggaetón y música urbana de Ciudad de México. Escucha Sexolandia, sus colaboraciones, shows en vivo y su camino a Coachella 2026.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Reggaetón y música urbana desde CDMX`,
    template: `%s — ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    "Cachirula",
    "Loojan",
    "Cachirula y Loojan",
    "reggaetón mexicano",
    "música urbana México",
    "Sexolandia",
    "perreo",
    "Coachella 2026",
    "dúo reggaetón CDMX",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Music",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: `${SITE_NAME} — Reggaetón y música urbana desde CDMX`,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/assets/preview-cachirula.png",
        width: 1200,
        height: 630,
        alt: "Cachirula & Loojan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Reggaetón y música urbana desde CDMX`,
    description: DESCRIPTION,
    images: ["/assets/preview-cachirula.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/assets/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: SITE_NAME,
    url: SITE_URL,
    genre: ["Reggaetón", "Música urbana", "Perreo"],
    description: DESCRIPTION,
    foundingLocation: {
      "@type": "Place",
      name: "Ciudad de México, México",
    },
    sameAs: [
      "https://www.instagram.com/cachirulaa/",
      "https://www.instagram.com/loojanmusic/",
      "https://open.spotify.com/artist/5vcFoQxKd0ZpA178xDU12G",
      "https://open.spotify.com/intl-es/artist/7lXN2zsTNeVB1MM7rIrWnI",
    ],
    member: [
      {
        "@type": "MusicGroup",
        name: "Cachirula",
      },
      {
        "@type": "MusicGroup",
        name: "Loojan",
      },
    ],
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
              <Analytics />
      </body>
    </html>
  );
}
