import Marquee from "./Marquee";

export default function Footer() {
  return (
    <footer className="footer-v2">
      <Marquee
        tone="cyan"
        angle={2.5}
        speed={22}
        items={["CACHIRULA", "LOOJAN", "PERREO CON CLASE", "MÉXICO"]}
      />
      <div className="footer-v2__bottom">
        <span>
          © {new Date().getFullYear()} Todos los derechos pertenecen a sus
          respectivos propietarios.
        </span>
        <a href="#conectar" className="footer-v2__reps">
          Representantes
        </a>
        <a href="https://www.miguelcruz.site/" target="_blank" rel="noopener noreferrer" className="footer-v2__reps">
    Sitio Web
        </a>
      </div>
    </footer>
  );
}
