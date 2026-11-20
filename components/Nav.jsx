import Monogram from './Monogram';
import ThemeToggle from './ThemeToggle';
import { site } from '../data/content';

export default function Nav() {
  return (
    <header className="nav">
      <nav className="nav__inner container" aria-label="Main">
        <a href="#top" className="nav__mark" aria-label={`${site.name}, back to top`}>
          <Monogram size={44} />
        </a>
        <div className="nav__links">
          <a href="#work">Work</a>
          <a href="#journey">Journey</a>
          <a href="#contact">Contact</a>
          <ThemeToggle />
          <a className="btn btn--accent btn--sm" href={site.resume} download>
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
