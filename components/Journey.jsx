import { journey } from '../data/content';
import Reveal from './Reveal';

export default function Journey() {
  return (
    <section id="journey" className="journey">
      <div className="container">
        <Reveal className="journey__head">
          <p className="eyebrow">Journey</p>
          <h2 className="section-title">Nepal → India → United States</h2>
        </Reveal>
        <ol className="timeline">
          {journey.map((j, i) => (
            <Reveal as="li" key={j.org} className="timeline__item" delay={i * 90}>
              <span className="timeline__dot" aria-hidden="true" />
              {j.logo ? (
                <img className="timeline__logo" src={j.logo} alt={`${j.org} logo`} loading="lazy" />
              ) : (
                <span className="timeline__logo timeline__logo--text" aria-hidden="true">
                  {j.logoText}
                </span>
              )}
              <span className="timeline__when mono">{j.when}</span>
              <span className="timeline__org">{j.org}</span>
              <span className="timeline__role">{j.role}</span>
              <span className="timeline__note">{j.note}</span>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
