# Cachirula & Loojan — Next.js

Sitio del dúo migrado a Next.js 14 (App Router) + TypeScript, con una
presentación rediseñada usando **Lenis** (smooth scroll) y **Framer Motion**
(animaciones), lista para desplegar en Vercel.

## 1. Instalar dependencias

```bash
npm install
```

## 2. ⚠️ Copiar tus assets (paso obligatorio)

Copia tu carpeta `assets` completa dentro de `public/`, quedando:

```
public/
└── assets/
    ├── cachi.webp
    ├── Loojan.webp
    ├── webp/        (fotos del carrusel "En Vivo")
    ├── loojan/       (fotos de la discografía de Loojan)
    ├── colaboraciones/ (fotos de Jams)
    └── Musica/         (íconos Spotify / Amazon Music / Apple Music)
```

### Nombres de archivo que renombré (tenían espacios/typos)

| Nombre original      | Nuevo nombre         |
|-----------------------|------------------------|
| `baobao .jpg`          | `baobao.jpg`             |
| `quien .jpg`            | `quien.jpg`                |
| `rikachu .webp`          | `rikachu.webp`               |
| `-hate.jpg`               | `hate.jpg`                     |
| `pretextos .webp`          | `pretextos.webp`                |
| `amazon misic.webp`          | `amazon-music.webp`               |

## 3. Correr en local

```bash
npm run dev
```

## 4. Subir a Vercel

**Con GitHub (recomendada):** sube el repo a GitHub → [vercel.com](https://vercel.com)
→ **Add New Project** → importa el repo → Deploy. Cada push a `main`
despliega automático.

**Desde terminal:**
```bash
npm install -g vercel
vercel
```

---

## La nueva presentación

**Dirección de diseño — "Flyer de antro con clase":**
- **Color**: negro cálido `#0A0A0D`, superficies `#16141A` / `#1F1B24`,
  acento magenta `#FF2469` y cian `#45E0E6`.
- **Tipografía**: `Anton` para titulares (poster/flyer), `Space Mono` para
  etiquetas tipo "pase de backstage", `Poppins` para texto de cuerpo.
- **Firma visual**: cinta *marquee* rotada con su propio tagline y logros
  reales del dúo, usada como divisor de secciones en vez de una línea
  genérica.
- **Motion**: Lenis para scroll suavizado en toda la página; Framer Motion
  para el stagger del hero, los reveals split-screen de las bios, el efecto
  tilt 3D de las tarjetas de colabs y las animaciones de scroll-into-view.
  Todo respeta `prefers-reduced-motion`.
- **100% responsive**: los carruseles ahora son **rieles horizontales**
  (`scroll-snap` nativo) que se deslizan con el dedo en móvil sin ninguna
  librería extra de drag, y tipografía fluida con `clamp()` en todos los
  tamaños de pantalla.

## Estructura del proyecto

```
app/
├── layout.tsx        → metadata SEO/OG + envuelve todo en <SmoothScroll>
├── page.tsx            → ensambla la página completa
├── globals.css           → sistema de diseño (tokens, tipografía, componentes)
components/
├── SmoothScroll.tsx   → inicializa Lenis (respeta prefers-reduced-motion)
├── Marquee.tsx           → cinta firma, reutilizada como divisor de secciones
├── Navbar.tsx              → nav con blur-on-scroll (useScroll de Framer Motion)
├── Hero.tsx                 → titulares con stagger + marquee
├── ArtistBio.tsx              → bio split-screen con reveal al hacer scroll
├── Rail.tsx                     → carrusel horizontal con scroll-snap + progreso
├── CollabSlider.tsx               → grid de colaboraciones con tilt 3D
├── ListenNow.tsx                    → 3 tiles Spotify / Amazon / Apple Music
├── Contact.tsx                        → lista tipográfica de bookings/representantes
├── Footer.tsx                           → marquee + derechos reservados + botón representantes
data/
├── artists.ts, experience.ts, experience2.ts, collabs.ts, platforms.ts
    (mismo contenido de antes — solo cambió la presentación)
```

## SEO (nuevo)

⚠️ **Antes de desplegar**, edita `lib/seo.ts` y pon tu dominio real en
`SITE_URL` (o defínelo en Vercel como variable de entorno
`NEXT_PUBLIC_SITE_URL` en *Project Settings → Environment Variables*).
Todo el SEO depende de ese valor: canonical, Open Graph, `sitemap.xml`,
`robots.txt` y los datos estructurados.

Lo que se agregó:

- **Metadata completa** (`app/layout.tsx`): título con template (cada página
  puede tener su propio título sin perder "— Cachirula & Loojan"),
  descripción, keywords, autor, categoría, canonical.
- **Open Graph + Twitter Cards**: para que se vea bien al compartir el link
  en WhatsApp, Instagram, X, Facebook, etc. Usa `/assets/preview-cachirula.png`
  (súbela junto al resto de tus assets — idealmente 1200×630px).
- **Datos estructurados JSON-LD** (`schema.org/MusicGroup`): le dice a Google
  explícitamente que el sitio es de un dúo musical, su género y sus redes
  (`sameAs`). Esto es lo que habilita resultados enriquecidos y el panel de
  conocimiento de Google para artistas.
- **`sitemap.xml`** (`app/sitemap.ts`) y **`robots.txt`** (`app/robots.ts`):
  generados automáticamente por Next.js, apuntando a tu dominio.
- **`site.webmanifest`**: para ícono/nombre si alguien "instala" el sitio
  desde el navegador móvil. Necesita `icon-192.png` e `icon-512.png` en
  `public/assets/` (los agrego cuando me pases tus assets, o puedes generarlos
  tú con cualquier favicon generator a partir de su logo).
- **Un solo `<h1>` por página** (el del Hero) y `<h2>` en cada sección — la
  jerarquía de encabezados que Google prefiere para entender la estructura.
- `theme-color` para que la barra del navegador en móvil combine con el
  fondo negro del sitio.

### Después de desplegar

1. Verifica `tudominio.com/sitemap.xml` y `tudominio.com/robots.txt` cargan bien.
2. Da de alta el sitio en [Google Search Console](https://search.google.com/search-console)
   y envía el sitemap ahí.
3. Prueba cómo se ve el link compartido con la
   [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
   o la vista previa de X/WhatsApp.

## Qué cambió respecto a la versión anterior

- Los carruseles automáticos (stack con `appendChild`) se volvieron **rieles
  deslizables por el usuario**, más acordes a un sitio moderno y con mejor
  soporte táctil real.
- El grid de colaboraciones ahora tiene **tilt 3D** al mover el mouse
  (desktop) y toggle al tocar (móvil).
- Toda la animación pasó de jQuery/vanilla JS a **Framer Motion**, con
  `whileInView` para los reveals (más eficiente que el listener de scroll
  original).
- El scroll de toda la página está suavizado con **Lenis**.
- Nuevo sistema tipográfico (Anton + Space Mono + Poppins) y paleta más
  saturada, manteniendo el ADN rosa/cian del sitio original.
