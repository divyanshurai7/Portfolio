'use client';

import { useEffect, useRef, useState } from 'react';
import { work } from '../data/content';
import Reveal from './Reveal';

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'design', label: 'Graphic Design' },
  { id: 'video', label: 'Video & Motion' },
];

const ytThumb = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

function PlayIcon() {
  return (
    <span className="card__play" aria-hidden="true">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
        <path d="M8 5v14l11-7z" />
      </svg>
    </span>
  );
}

function Card({ item, onOpen, index }) {
  const videoRef = useRef(null);
  const thumb = item.thumb || (item.youtube ? ytThumb(item.youtube) : '');
  const isLink = item.open === 'link';

  const playPreview = () => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    const p = v.play();
    if (p && p.catch) p.catch(() => {});
  };
  const stopPreview = () => videoRef.current && videoRef.current.pause();

  const media = (
    <div className="card__media" onMouseEnter={playPreview} onMouseLeave={stopPreview}>
      <img src={thumb} alt="" loading="lazy" style={item.thumbPosition ? { objectPosition: item.thumbPosition } : undefined} />
      {item.preview && <video ref={videoRef} className="card__preview" src={item.preview} muted loop playsInline preload="none" aria-hidden="true" />}
      {item.overlayTitle && <span className="card__overlay-title">“{item.title}”</span>}
      {item.open === 'youtube' && <PlayIcon />}
      {item.result && <span className="card__badge">{item.result}</span>}
    </div>
  );

  return (
    <Reveal as="article" className="card" delay={(index % 3) * 70}>
      {isLink ? (
        <a className="card__hit" href={item.href} target="_blank" rel="noopener noreferrer" aria-label={`${item.title} (opens article in a new tab)`}>
          {media}
        </a>
      ) : (
        <button type="button" className="card__hit" onClick={() => onOpen(item)} aria-label={`Open ${item.title}`}>
          {media}
        </button>
      )}
      <div className="card__body">
        <span className="card__meta">
          {item.category} · {item.client}
        </span>
        <h3 className="card__title">
          {isLink ? (
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          ) : (
            <button type="button" className="link-btn" onClick={() => onOpen(item)}>
              {item.title}
            </button>
          )}
        </h3>
        {isLink ? (
          <a className="card__more" href={item.href} target="_blank" rel="noopener noreferrer">
            Read the story ↗
          </a>
        ) : (
          <button type="button" className="card__more link-btn" onClick={() => onOpen(item)}>
            {item.open === 'youtube' ? 'Watch ▸' : 'View project ↗'}
          </button>
        )}
      </div>
    </Reveal>
  );
}

function ProjectModal({ item, onClose }) {
  const ref = useRef(null);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (item) {
      setSlide(0);
      if (!d.open) d.showModal();
      document.body.style.overflow = 'hidden';
    } else if (d.open) {
      d.close();
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [item]);

  useEffect(() => {
    if (!item || item.open !== 'gallery') return;
    const onKey = (e) => {
      const n = item.gallery.length;
      if (e.key === 'ArrowRight') setSlide((s) => (s + 1) % n);
      if (e.key === 'ArrowLeft') setSlide((s) => (s - 1 + n) % n);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [item]);

  const n = item && item.gallery ? item.gallery.length : 0;

  return (
    <dialog
      ref={ref}
      className="modal"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
      aria-labelledby="modal-title"
    >
      {item && (
        <div className="modal__panel">
          <button type="button" className="icon-btn modal__close" onClick={onClose} aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          <div className="modal__media">
            {item.open === 'youtube' && (
              <div className="modal__video">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${item.youtube}?autoplay=1&rel=0`}
                  title={item.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
            {item.open === 'gallery' && (
              <div className="modal__gallery">
                <img key={item.gallery[slide]} src={item.gallery[slide]} alt={`${item.title}, image ${slide + 1} of ${n}`} />
                {n > 1 && (
                  <>
                    <button type="button" className="icon-btn modal__nav modal__nav--prev" onClick={() => setSlide((s) => (s - 1 + n) % n)} aria-label="Previous image">
                      ‹
                    </button>
                    <button type="button" className="icon-btn modal__nav modal__nav--next" onClick={() => setSlide((s) => (s + 1) % n)} aria-label="Next image">
                      ›
                    </button>
                    <div className="modal__dots" aria-hidden="true">
                      {item.gallery.map((src, i) => (
                        <span key={src} className={i === slide ? 'is-active' : ''} />
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}
          </div>

          <div className="modal__text">
            <span className="card__meta">
              {item.category} · {item.client}
            </span>
            <h3 id="modal-title" className="modal__title">
              {item.title}
            </h3>
            {item.result && <span className="card__badge card__badge--inline">{item.result}</span>}
            {item.summary && <p>{item.summary}</p>}
            {item.youtube && (
              <a className="card__more" href={`https://youtu.be/${item.youtube}`} target="_blank" rel="noopener noreferrer">
                Watch on YouTube ↗
              </a>
            )}
          </div>
        </div>
      )}
    </dialog>
  );
}

export default function Work() {
  const [filter, setFilter] = useState('all');
  const [open, setOpen] = useState(null);
  const shown = work.filter((w) => filter === 'all' || w.kind === filter);

  return (
    <section id="work" className="work container">
      <div className="section-head">
        <Reveal>
          <p className="eyebrow">Selected work</p>
          <h2 className="section-title">Things I&apos;ve made</h2>
        </Reveal>
        <div className="filters" role="group" aria-label="Filter work">
          {FILTERS.map((f) => (
            <button key={f.id} type="button" className="filter" aria-pressed={filter === f.id} onClick={() => setFilter(f.id)}>
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="work__grid">
        {shown.map((item, i) => (
          <Card key={item.id} item={item} index={i} onOpen={setOpen} />
        ))}
      </div>

      <ProjectModal item={open} onClose={() => setOpen(null)} />
    </section>
  );
}
