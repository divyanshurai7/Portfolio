// All the text and media on the site lives here.
// Edit this file to change projects, stats, or the timeline. No other code needs to change.

export const site = {
  name: 'Divyanshu Rai',
  url: 'https://divyanshurai.vercel.app', // update after deploying
  description:
    'Divyanshu Rai is a Computer Engineering student and creative: graphic design, video, music and web, from Nepal to Southern Miss.',
  email: 'divyanshu.2004.rai@gmail.com',
  linkedin: 'https://www.linkedin.com/in/divyanshurai7/',
  linkedinLabel: 'linkedin.com/in/divyanshurai7',
  location: 'Hattiesburg, MS',
  resume: '/Divyanshu_Rai_Resume.pdf',
};

export const engineer = {
  eyebrow: '// the_engineer',
  headline: ['I build', 'technology.'],
  intro:
    'Computer Engineering student at Southern Miss, learning how machines think from the logic gate up.',
  items: [
    { label: 'B.S. Computer Engineering, USM', status: "'29", tone: 'muted' },
    { label: '7400-series logic IC tester', status: '✓ built', tone: 'done' },
    { label: '8-bit CPU · Verilog on FPGA', status: 'building', tone: 'active' },
    { label: 'Wireless gesture-controlled robot', status: '✓ built', tone: 'done' },
  ],
};

export const artist = {
  eyebrow: '— the artist',
  headline: ['I make', 'the stories.'],
  intro:
    'Graphic designer, video maker and composer. Five years of campaigns, music videos and live events.',
  tiles: {
    poster: { src: '/media/tedx-speakers.webp', alt: 'TEDx IOE Pulchowk speakers poster' },
    video: { src: '/media/smtv-loop.mp4', poster: '/media/smtv-loop-poster.webp', alt: 'SMTV reporting clip' },
    social: { src: '/media/athaa-hello-world.webp', alt: 'Athaa Solutions launch social graphic' },
  },
};

export const pitch =
  'Engineer by training, creative by instinct. I design, film and build things people remember, then use the data to make them perform.';

export const stats = [
  { value: '20+', label: 'hospitality clients managed every month' },
  { value: '200–300%', label: 'social media growth delivered for clients' },
  { value: '100+', label: 'TEDx tickets sold, beating the target' },
  { value: '100K+', label: 'YouTube views on a TEDx talk we produced' },
];

// kind: 'design' | 'video'  (drives the filter)
// open: 'youtube' (plays in a pop-up), 'gallery' (image pop-up), 'link' (opens the article)
export const work = [
  {
    id: 'tedx-posters',
    kind: 'design',
    category: 'Graphic Design',
    client: 'TEDx IOE Pulchowk',
    title: 'Event posters & launch graphics',
    thumb: '/media/tedx-speakers.webp',
    result: '100+ tickets sold',
    summary:
      'Designed the poster series and launch graphics that marketed the event, from early-bird tickets to the speaker reveal. Ticket sales beat the target.',
    open: 'gallery',
    gallery: [
      '/media/gallery/tedx-speakers.webp',
      '/media/gallery/tedx-earlybird.webp',
      '/media/gallery/tedx-tata.webp',
    ],
  },
  {
    id: 'tedx-talk',
    kind: 'video',
    category: 'Video',
    client: 'TEDx IOE Pulchowk',
    title: 'Talk recording & post-production',
    youtube: 'OAcSEDsyUUY',
    result: '100K+ views',
    summary:
      'Led the team behind the live AV setup, recording and post-production. One of the talks has passed 100K views on YouTube.',
    open: 'youtube',
  },
  {
    id: 'cafe-branding',
    kind: 'design',
    category: 'Branding & Menu Design',
    client: 'Athaa · Cups & Mugs Café',
    title: 'Café menu, signage & wall graphics',
    thumb: '/media/cafe-coffee-wall.webp',
    summary:
      'Menu design, in-store signage, promo boards and a coffee wall mural for a café client, all in one consistent look.',
    open: 'gallery',
    gallery: [
      '/media/gallery/cafe-3.webp',
      '/media/gallery/cafe-1.webp',
      '/media/gallery/cafe-2.webp',
      '/media/gallery/cafe-4.webp',
    ],
  },
  {
    id: 'festival-campaigns',
    kind: 'design',
    category: 'Occasion Design',
    client: 'Athaa · Hospitality clients',
    title: 'Festival & special-occasion campaigns',
    thumb: '/media/fest-gaijatra.webp',
    summary:
      'Branded greetings for Gai Jatra, Teej, Janai Purnima and Raksha Bandhan, built to keep clients visible on the days their audience is online most.',
    open: 'gallery',
    gallery: [
      '/media/gallery/fest-gaijatra.webp',
      '/media/gallery/fest-teej.webp',
      '/media/gallery/fest-rakhi.webp',
    ],
  },
  {
    id: 'background-scores',
    kind: 'video',
    category: 'Original Music',
    client: 'Brand & event videos',
    title: 'Background scores composed for video',
    thumb: '/media/bg-score.webp',
    thumbPosition: 'center top',
    summary:
      'Composed, recorded and mixed original background music for promotional and event videos, so every piece sounds as considered as it looks.',
    open: 'gallery',
    gallery: ['/media/bg-score.webp'],
  },
  {
    id: 'music-video',
    kind: 'video',
    category: 'Music Video',
    client: 'Swopna Digital',
    title: 'Music video concept & direction',
    thumb: '/media/music-video.webp',
    thumbPosition: 'center 30%',
    youtube: 'zFDML1WkCsw',
    summary:
      'Developed concepts for and directed music videos for independent artists, and produced the songs behind them.',
    open: 'youtube',
  },
  {
    id: 'animation-loops',
    kind: 'video',
    category: 'Motion',
    client: 'Swopna Digital',
    title: 'Animation loops for music videos',
    thumb: '/media/anim-loop.webp',
    youtube: 'zFDML1WkCsw',
    summary: 'Looping animated backdrops and promotional motion pieces for each release.',
    open: 'youtube',
  },
  {
    id: 'smtv-story',
    kind: 'video',
    category: 'Video',
    client: 'Southern Miss Student Media',
    title: 'Weekly story package for SMTV',
    thumb: '/media/smtv-still.webp',
    preview: '/media/smtv-loop.mp4',
    youtube: '7Op-Y3G7xeo',
    summary:
      'A complete story every week: video segment, radio wrap, article, graphics and photos for SMTV, WUSM Radio and the Student Printz.',
    open: 'youtube',
  },
  {
    id: 'hub-city-swing',
    kind: 'design',
    category: 'Reporting & Photography',
    client: 'The Student Printz',
    title: 'Hub City Swing draws 16 schools to USM',
    thumb: '/media/hub-city-swing.webp',
    open: 'link',
    href: 'https://sm2media.com/38856/news/on-campus/hub-city-swing-draws-16-schools-to-usm/',
  },
  {
    id: 'visa-story',
    kind: 'design',
    category: 'Reporting & Graphics',
    client: 'The Student Printz',
    title: 'International students face visa uncertainty',
    thumb: '/media/visa-story.webp',
    overlayTitle: true,
    open: 'link',
    href: 'https://sm2media.com/38427/news/international-students-face-visa-uncertainty/',
  },
];

export const journey = [
  {
    when: '2020–21',
    logo: '/media/logo-swopna.webp',
    org: 'Swopna Digital',
    role: 'Music Producer & Creative Assistant',
    note: 'Kathmandu, Nepal. Produced songs, directed music videos, made release graphics.',
  },
  {
    when: '2022–25',
    logo: '/media/logo-athaa.webp',
    org: 'Athaa Solutions',
    role: 'Co-Founder & Creative Executive',
    note: 'India. Ran social, ads and design for 20+ restaurants, bars, cafés and resorts.',
  },
  {
    when: '2024',
    logo: '/media/logo-tedx.webp',
    org: 'TEDx IOE Pulchowk',
    role: 'Production Manager',
    note: 'Lalitpur, Nepal. Posters that beat the ticket target, and the production team behind the talks.',
  },
  {
    when: '2025–',
    logo: null,
    logoText: 'USM',
    org: 'University of Southern Miss',
    role: 'B.S. Computer Engineering',
    note: 'Hattiesburg, MS. Dean’s List. Digital logic, hardware and code.',
  },
  {
    when: '2026–',
    logo: '/media/logo-sm2.webp',
    org: 'Southern Miss Student Media',
    role: 'Multimedia Journalist',
    note: 'My campus job: a full story package every week for SMTV, WUSM Radio and the Student Printz.',
  },
];
