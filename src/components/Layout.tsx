import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { Mail, Menu, Phone, X } from 'lucide-react'
import { img, nav, site } from '@/content/site'

// Two versions of the logo: `text` (wordmark only) and `wrap` (wordmark inside the ukulele outline).
const logos = {
  text: { file: 'logo-text.png', width: 1362, height: 241 },
  wrap: { file: 'logo-wrap.png', width: 1561, height: 628 },
}

export function Logo({ variant, className = '' }: { variant: keyof typeof logos; className?: string }) {
  const { file, width, height } = logos[variant]
  return (
    <img
      src={img(file, 600)}
      srcSet={`${img(file, 300)} 1x, ${img(file, 600)} 2x`}
      alt={site.name}
      width={width}
      height={height}
      className={`w-auto ${className}`}
    />
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b-4 border-mint bg-ink">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link to="/" className="flex items-center gap-2 no-underline" onClick={() => setOpen(false)}>
          <Logo variant="text" className="h-9 sm:h-11" />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  hash={item.hash}
                  className="rounded-full px-4 py-2 text-lg font-bold no-underline"
                  activeProps={{ className: 'bg-mint-light text-ink' }}
                  inactiveProps={{ className: 'text-cream hover:bg-white/10' }}
                  activeOptions={{ exact: true, includeHash: true }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="flex min-h-12 items-center gap-2 rounded-full border-2 border-cream px-4 font-bold text-cream lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
          Menu
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Main" className="border-t-2 border-white/10 bg-ink lg:hidden">
          <ul className="mx-auto max-w-6xl px-5 py-3">
            {nav.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  hash={item.hash}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-xl font-bold no-underline"
                  activeProps={{ className: 'bg-mint-light text-ink' }}
                  inactiveProps={{ className: 'text-cream hover:bg-white/10' }}
                  activeOptions={{ exact: true, includeHash: true }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo variant="wrap" className="h-24" />
          <p className="mt-3 max-w-sm text-cream/80">{site.tagline}. {site.serviceArea}.</p>
        </div>
        <div>
          <h2 className="mb-3 text-xl">Pages</h2>
          <ul className="space-y-1">
            {nav.map((item) => (
              <li key={item.label}>
                <Link to={item.to} hash={item.hash} className="text-cream underline-offset-4 hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-3 text-xl">Get in touch</h2>
          <p className="flex items-center gap-2">
            <Mail size={20} aria-hidden className="shrink-0 text-sun" />
            <a href={`mailto:${site.email}`} className="text-cream underline underline-offset-4">
              {site.email}
            </a>
          </p>
          <p className="mt-2 flex items-center gap-2">
            <Phone size={20} aria-hidden className="shrink-0 text-sun" />
            <a href={`tel:${site.phone.replace(/[^\d+]/g, '')}`} className="text-cream underline underline-offset-4">
              {site.phone}
            </a>
          </p>
        </div>
      </div>
      <p className="border-t border-cream/15 py-5 text-center text-base text-cream/70">
        © {new Date().getFullYear()} {site.name}
      </p>
    </footer>
  )
}

export function PageHeading({ eyebrow, title, intro }: { eyebrow?: string; title: string; intro?: string }) {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-14 pb-6 md:pt-20">
      {eyebrow && <p className="rise mb-3 text-lg font-bold uppercase tracking-widest text-teal">{eyebrow}</p>}
      <h1 className="rise max-w-3xl text-5xl font-semibold md:text-6xl" style={{ animationDelay: '80ms' }}>
        {title}
      </h1>
      {intro && (
        <p className="rise mt-6 max-w-2xl text-xl text-ink-soft" style={{ animationDelay: '160ms' }}>
          {intro}
        </p>
      )}
    </section>
  )
}

export function CtaBand() {
  return (
    <section className="mx-auto mt-24 max-w-6xl px-5">
      <div className="relative overflow-hidden rounded-[2rem] bg-mint-light px-8 py-12 md:px-14 md:py-16">
        <div className="absolute -right-10 -bottom-16 h-64 w-64 rounded-full bg-sun/30" aria-hidden />
        <div className="relative max-w-2xl">
          <h2 className="text-4xl font-semibold md:text-5xl">Ready to bring music to your residents?</h2>
          <p className="mt-4 text-xl text-ink-soft">
            Tell us a little about your community and we’ll find a time that works.
          </p>
          <Link to="/" hash="contact" className="btn btn-primary mt-8">
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  )
}
