'use client';

import { useState } from 'react';
import { site } from '../data/content';
import Reveal from './Reveal';

const KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '');
    const email = String(data.get('email') || '');
    const message = String(data.get('message') || '');

    // Without a Web3Forms key, open the visitor's email app with the message filled in.
    if (!KEY) {
      const subject = encodeURIComponent(`Portfolio message from ${name}`);
      const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: KEY,
          subject: `Portfolio message from ${name}`,
          from_name: name,
          name,
          email,
          message,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="contact container">
      <Reveal className="contact__intro">
        <p className="eyebrow">Contact</p>
        <h2 className="contact__title">
          Let&apos;s make
          <br />
          <em>something good.</em>
        </h2>
        <p className="muted">Open to design, content and creative-tech roles. Based in {site.location}.</p>
        <ul className="contact__links">
          <li>
            <a href={`mailto:${site.email}`}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
              {site.email}
            </a>
          </li>
          <li>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
              </svg>
              {site.linkedinLabel}
            </a>
          </li>
        </ul>
        <a className="btn btn--accent" href={site.resume} download>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
          </svg>
          Download resume
        </a>
      </Reveal>

      <Reveal delay={100} className="contact__form-wrap">
        <form className="contact__form" onSubmit={onSubmit}>
          <label>
            Name
            <input name="name" type="text" required autoComplete="name" placeholder="Your name" />
          </label>
          <label>
            Email
            <input name="email" type="email" required autoComplete="email" placeholder="you@company.com" />
          </label>
          <label>
            Message
            <textarea name="message" rows={5} required placeholder="Tell me about the project or role" />
          </label>
          <button type="submit" className="btn btn--solid" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>
          <p className="form-status" role="status" aria-live="polite">
            {status === 'sent' && 'Thanks! Your message is on its way.'}
            {status === 'error' && (
              <>
                Something went wrong. Email me directly at <a href={`mailto:${site.email}`}>{site.email}</a>.
              </>
            )}
          </p>
        </form>
      </Reveal>
    </section>
  );
}
