import { HeadContent, Link, Scripts, createRootRoute } from '@tanstack/react-router'
import { SiteFooter, SiteHeader } from '@/components/Layout'
import { site } from '@/content/site'

import '../styles.css'

const siteName = `${site.name} | ${site.tagline}`
const siteDescription = site.description

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        name: 'google-site-verification',
        content: 'BFRxHsVP4bNeAO3_SGfLjk4_WafJ3_J5NZr3nJPF1MU',
      },
      {
        title: siteName,
      },
      {
        name: 'description',
        content: siteDescription,
      },
      {
        property: 'og:title',
        content: siteName,
      },
      {
        property: 'og:description',
        content: siteDescription,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    links: [
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400&family=Caladea:ital,wght@0,400;0,700;1,400&display=swap',
      },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="grain">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <Scripts />
      </body>
    </html>
  )
}

function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24 text-center">
      <h1 className="text-5xl font-semibold">That page hit a wrong note.</h1>
      <p className="mt-4 text-xl text-ink-soft">The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="btn btn-primary mt-8">
        Back to the home page
      </Link>
    </section>
  )
}
