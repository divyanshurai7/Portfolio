# Divyanshu Rai: Portfolio

Personal portfolio built with Next.js (App Router). Engineer / artist split hero with a cursor reveal, animated stats, a filterable work gallery with pop-up project views, a journey timeline, and a contact form.

## Run it on your computer

You need [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Put it online (free, on Vercel)

1. Create a new repository on GitHub and push this folder to it:
   ```bash
   git init
   git add .
   git commit -m "Portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```
2. Go to https://vercel.com, sign in with GitHub, click **Add New → Project**, pick the repository and click **Deploy**. No settings needed.
3. Vercel gives you a link like `https://portfolio-xxxx.vercel.app`. You can rename it under **Settings → Domains** (for example `divyanshurai.vercel.app`) or connect your own domain.
4. Put that final link in `data/content.js` (`site.url`) so link previews on LinkedIn and iMessage work, then push again. Vercel redeploys automatically on every push.

## Editing content

Almost everything lives in **`data/content.js`**: projects, stats, the timeline, your email and LinkedIn. Change the text there and save.

- **Add a project:** copy one of the objects in the `work` list. Put its image in `public/media/` and point `thumb` at it.
  - `open: 'youtube'` plays a YouTube video in a pop-up (set `youtube` to the video ID, the part after `youtu.be/`).
  - `open: 'gallery'` shows a slideshow of the images in `gallery`.
  - `open: 'link'` opens an article in a new tab (set `href`).
- **Update your resume:** replace `public/Divyanshu_Rai_Resume.pdf` with the new PDF (same file name).
- **Change the accent color:** edit `--accent` in `app/globals.css`.

## Contact form

By default the form opens the visitor's email app with their message filled in. To have messages arrive straight in your inbox instead:

1. Get a free access key at https://web3forms.com (enter your email; they send you the key).
2. In Vercel, open the project → **Settings → Environment Variables**, add `NEXT_PUBLIC_WEB3FORMS_KEY` with the key, and redeploy.
   For local testing, copy `.env.example` to `.env.local` and paste the key there.

## Project structure

```
app/
  layout.jsx      fonts, page metadata, link-preview image, theme setup
  page.jsx        puts the sections together
  globals.css     all styling and animations, both themes
components/        Nav, Hero, Stats, Work (gallery + pop-up), Journey, Contact, Footer
data/content.js    all text and media paths
public/            images, video, resume PDF, favicon, link-preview image
```

Animations respect the "reduce motion" setting on visitors' devices.
