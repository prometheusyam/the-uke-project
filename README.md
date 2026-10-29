# The Uke Project

The website for The Uke Project, a small business that teaches ukulele classes to residents of retirement homes and senior communities. It has five pages (Home, About, The Program, FAQ, and Contact) and an inquiry form so activities directors, residents, and families can get in touch.

## Technologies

- [TanStack Start](https://tanstack.com/start) with React and file-based routes
- Tailwind CSS for styling
- Netlify Forms for the contact form (submissions show up in the Netlify dashboard under **Forms**)
- Netlify Image CDN to serve resized WebP versions of the illustrations in `public/img/`

## Editing the content

Almost every word on the site lives in **`src/content/site.ts`**: business name, email, phone, page headings, FAQ questions, program details, and so on. Edit the text there and redeploy. The current text is a draft and should be replaced with your own wording.

Colors and fonts are set at the top of `src/styles.css`.

## Running locally

```bash
pnpm install
netlify dev        # runs the site with Netlify features (forms, image CDN) emulated
```

`pnpm dev` also works for a quick preview, but the contact form and image CDN only work under `netlify dev` or on Netlify.

## Form notifications

To get an email for each inquiry, open the site in the Netlify dashboard, go to **Forms → Form notifications**, and add an email notification for the `inquiry` form.
