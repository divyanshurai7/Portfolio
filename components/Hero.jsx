'use client';

import { useEffect, useRef, useState } from 'react';
import { engineer, artist } from '../data/content';

// Cursor position across the hero drives a value r from -1 (engineer) to 1 (artist).
// The value eases toward the target each frame and is written to CSS variables,
// which control the blur, opacity and background photo of each side.
export default function Hero() {
  const sectionRef = useRef(null);
  const target = useRef(0);
  const current = useRef(0);
  const frame = useRef(0);
  const [focus, setFocus] = useState('none'); // for the buttons' pressed state

  useEffect(() => {
    const el = sectionRef.current;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const apply = (r) => {
      const eng = Math.min(1, Math.max(0, -r * 1.6));
      const art = Math.min(1, Math.max(0, r * 1.6));
      el.style.setProperty('--eng', eng.toFixed(3));
      el.style.setProperty('--art', art.toFixed(3));
    };

    const tick = () => {
      const diff = target.current - current.current;
      current.current = reduce ? target.current : current.current + diff * 0.12;
      apply(current.current);
      if (Math.abs(diff) > 0.001 && !reduce) {
        frame.current = requestAnimationFrame(tick);
      } else {
        current.current = target.current;
        apply(current.current);
        frame.current = 0;
      }
    };

    el.__setTarget = (r) => {
      target.current = Math.max(-1, Math.min(1, r));
      setFocus(r < -0.3 ? 'engineer' : r > 0.3 ? 'artist' : 'none');
      if (!frame.current) frame.current = requestAnimationFrame(tick);
    };

    apply(0);
    return () => cancelAnimationFrame(frame.current);
  }, []);

  const setTarget = (r) => sectionRef.current && sectionRef.current.__setTarget(r);

  const onPointerMove = (e) => {
    if (e.pointerType === 'touch') return;
    const box = sectionRef.current.getBoundingClientRect();
    setTarget(((e.clientX - box.left) / box.width - 0.5) * 2);
  };

  const onPointerLeave = (e) => {
    if (e.pointerType === 'touch') return;
    setTarget(0);
  };

  return (
    <section
      id="top"
      ref={sectionRef}
      className="hero"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      aria-label="Introduction: the engineer and the artist"
    >
      {/* Engineer side */}
      <div className="hero__side hero__side--eng" onClick={() => setTarget(-1)}>
        <div className="hero__photo hero__photo--eng" aria-hidden="true" />
        <div className="hero__content hero__content--eng">
          <p className="hero__eyebrow mono">{engineer.eyebrow}</p>
          <h2 className="hero__title hero__title--eng">
            {engineer.headline[0]}
            <br />
            {engineer.headline[1]}
          </h2>
          <p className="hero__intro">{engineer.intro}</p>
          <ul className="eng-list">
            {engineer.items.map((item) => (
              <li key={item.label}>
                <span>{item.label}</span>
                <span className={`eng-list__status eng-list__status--${item.tone}`}>{item.status}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Artist side */}
      <div className="hero__side hero__side--art" onClick={() => setTarget(1)}>
        <div className="hero__photo hero__photo--art" aria-hidden="true" />
        <div className="hero__content hero__content--art">
          <p className="hero__eyebrow serif-italic">{artist.eyebrow}</p>
          <h2 className="hero__title hero__title--art">
            {artist.headline[0]}
            <br />
            <em>{artist.headline[1]}</em>
          </h2>
          <p className="hero__intro">{artist.intro}</p>
          <div className="art-tiles">
            <div className="art-tile art-tile--tall">
              <img src={artist.tiles.poster.src} alt={artist.tiles.poster.alt} loading="eager" />
            </div>
            <div className="art-tile">
              <video
                src={artist.tiles.video.src}
                poster={artist.tiles.video.poster}
                autoPlay
                muted
                loop
                playsInline
                aria-label={artist.tiles.video.alt}
              />
            </div>
            <div className="art-tile">
              <img src={artist.tiles.social.src} alt={artist.tiles.social.alt} />
            </div>
          </div>
        </div>
      </div>

      {/* Portrait, always sharp */}
      <div className="hero__portrait">
        <div className="hero__switch" role="group" aria-label="Focus a side">
          <button type="button" aria-pressed={focus === 'engineer'} onClick={() => setTarget(focus === 'engineer' ? 0 : -1)}>
            ← engineer
          </button>
          <span aria-hidden="true">·</span>
          <button type="button" aria-pressed={focus === 'artist'} onClick={() => setTarget(focus === 'artist' ? 0 : 1)}>
            artist →
          </button>
        </div>
        <div className="hero__figure">
          <span className="hero__glow" aria-hidden="true" />
          <img src="/media/portrait.webp" alt="Divyanshu Rai" fetchPriority="high" />
        </div>
      </div>
    </section>
  );
}
