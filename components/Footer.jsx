import { site } from '../data/content';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span className="mono">Designed &amp; built in Next.js</span>
      </div>
    </footer>
  );
}
