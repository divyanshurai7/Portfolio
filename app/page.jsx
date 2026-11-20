import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Work from '../components/Work';
import Journey from '../components/Journey';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import { site, pitch } from '../data/content';

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#work">Skip to work</a>
      <Nav />
      <main>
        <Hero />

        <section className="pitch container">
          <Reveal>
            <h1 className="pitch__name">{site.name}</h1>
          </Reveal>
          <Reveal delay={80}>
            <p className="pitch__text">{pitch}</p>
          </Reveal>
          <Reveal delay={160} className="pitch__actions">
            <a className="btn btn--accent" href="#work">See my work</a>
            <a className="btn btn--ghost" href="#contact">Get in touch</a>
          </Reveal>
        </section>

        <Stats />
        <Work />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
