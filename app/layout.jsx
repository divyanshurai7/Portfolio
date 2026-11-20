import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';
import { site } from '../data/content';
import './globals.css';

const fraunces = Fraunces({ subsets: ['latin'], style: ['normal', 'italic'], variable: '--font-serif', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });

export const metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} | Engineer & Artist`,
  description: site.description,
  openGraph: {
    title: `${site.name} | Engineer & Artist`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: site.name }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', images: ['/og-image.jpg'] },
  icons: { icon: '/icon.svg' },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0F0E0D' },
    { media: '(prefers-color-scheme: light)', color: '#FAF7F2' },
  ],
};

// Sets the saved theme before the page paints, so there is no flash.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');document.documentElement.dataset.theme=t==='light'?'light':'dark';}catch(e){document.documentElement.dataset.theme='dark';}document.documentElement.classList.add('js');})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning className={`${fraunces.variable} ${inter.variable} ${mono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
