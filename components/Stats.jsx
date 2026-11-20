'use client';

import { useEffect, useRef, useState } from 'react';
import { stats } from '../data/content';

// Counts every number inside a value like "200–300%" or "100K+" up from zero
// when the stats strip scrolls into view.
function CountUp({ value, start }) {
  const [display, setDisplay] = useState(value.replace(/\d+/g, '0'));

  useEffect(() => {
    if (!start) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setDisplay(value);
      return;
    }
    const duration = 1400;
    let raf = 0;
    const t0 = performance.now();
    const step = (now) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(value.replace(/\d+/g, (n) => String(Math.round(Number(n) * eased))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [start, value]);

  return (
    <span className="stat__value" aria-hidden="true">
      {display}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (typeof IntersectionObserver === 'undefined') {
      setStart(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="stats container" aria-label="Highlights">
      <div ref={ref} className="stats__grid">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <span className="visually-hidden">{`${s.value} ${s.label}`}</span>
            <CountUp value={s.value} start={start} />
            <span className="stat__label" aria-hidden="true">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
