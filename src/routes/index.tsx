import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import { InquiryForm } from '@/components/InquiryForm'
import { contact, home, img, site } from '@/content/site'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <>
      {/* Hero: copy on the left, illustration breaking out on the right */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pt-12 pb-16 md:grid-cols-[1fr_1.15fr] md:pt-20">
          <div>
            <p className="rise mb-4 text-lg font-bold uppercase tracking-widest text-teal">{site.name}</p>
            <h1 className="rise text-5xl font-semibold md:text-[3.6rem]" style={{ animationDelay: '80ms' }}>
              Seniors <span className="scribble">Music</span> and Cognitive Wellness Program
            </h1>
            <p className="rise mt-6 text-xl text-ink-soft" style={{ animationDelay: '160ms' }}>
              {home.intro}
            </p>
            <div className="rise mt-9 flex flex-wrap gap-4" style={{ animationDelay: '240ms' }}>
              <Link to="/" hash="contact" className="btn btn-primary">
                {home.primaryCta}
                <ArrowRight size={20} aria-hidden />
              </Link>
              <Link to="/program" className="btn btn-ghost">
                {home.secondaryCta}
              </Link>
            </div>
          </div>

          <div className="rise relative" style={{ animationDelay: '200ms' }}>
            <div className="absolute -top-6 -left-6 h-28 w-28 rounded-full bg-sun/40" aria-hidden />
            <img
              src={img('class-smiling.png', 1200)}
              srcSet={`${img('class-smiling.png', 700)} 700w, ${img('class-smiling.png', 1200)} 1200w`}
              sizes="(min-width: 768px) 55vw, 100vw"
              alt="Smiling older adults sitting in a row, playing ukuleles together in a bright community room."
              width={1536}
              height={1024}
              className="relative w-full rotate-1 rounded-[2rem] border-8 border-white shadow-[0_20px_50px_-20px_rgba(20,58,56,0.45)]"
            />
          </div>
        </div>
      </section>

      {/* Quick facts strip */}
      <section aria-label="Program at a glance" className="bg-ink text-cream">
        <dl className="mx-auto grid max-w-6xl gap-6 px-5 py-10 sm:grid-cols-3">
          {home.stats.map((s) => (
            <div key={s.label} className="flex items-baseline gap-3">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-6xl font-semibold text-sun">{s.value}</dd>
              <dd className="text-lg text-cream/85">{s.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Active music-making, beside a second image */}
      <section className="mx-auto mt-24 grid max-w-6xl gap-14 px-5 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <img
          src={img('lounge-duo.jpg', 900)}
          alt="Two older adults laughing as they play ukuleles together in a community lounge."
          width={1210}
          height={864}
          loading="lazy"
          className="w-full -rotate-1 rounded-[1.5rem] border-8 border-white shadow-lg"
        />
        <div>
          <h2 className="text-4xl font-semibold md:text-5xl">{home.active.heading}</h2>
          <div className="mt-8 space-y-6 text-xl leading-relaxed text-ink-soft">
            {home.active.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <Link
            to="/research"
            className="mt-8 inline-flex items-center gap-2 text-xl font-bold text-teal underline underline-offset-4"
          >
            Read the research <ArrowRight size={20} aria-hidden />
          </Link>
        </div>
      </section>

      {/* The weekly course */}
      <section aria-label="The weekly course" className="mx-auto mt-24 max-w-6xl px-5">
        <div className="relative overflow-hidden rounded-[2rem] bg-paper px-8 py-12 md:px-14 md:py-16">
          <div className="absolute -top-16 -right-12 h-56 w-56 rounded-full bg-mint/30" aria-hidden />
          <div className="relative grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-14">
            <img
              src={img('duet-music-stand.jpg', 800)}
              alt="Two older adults smiling at each other as they play ukuleles at a shared music stand."
              width={1210}
              height={864}
              loading="lazy"
              className="w-full rotate-1 rounded-[1.5rem] border-8 border-white shadow-lg"
            />
            <div className="space-y-6">
              {home.course.map((p, i) => (
                <p key={p.slice(0, 24)} className={i === 0 ? 'font-display text-2xl leading-snug md:text-3xl' : 'text-xl leading-relaxed text-ink-soft'}>
                  {p}
                </p>
              ))}
            </div>
          </div>
          <Link to="/program" className="btn btn-ghost relative mt-10">
            {home.secondaryCta}
          </Link>
        </div>
      </section>

      {/* Contact: menu links and buttons across the site scroll here */}
      <section id="contact" className="mx-auto mt-24 max-w-6xl scroll-mt-28 px-5">
        <p className="mb-3 text-lg font-bold uppercase tracking-widest text-teal">Contact</p>
        <h2 className="max-w-3xl text-5xl font-semibold md:text-6xl">{contact.heading}</h2>
        <p className="mt-6 max-w-2xl text-xl text-ink-soft">{contact.intro}</p>

        <div className="mt-10 grid gap-10 md:grid-cols-[1.6fr_1fr]">
          <InquiryForm />

          <aside className="space-y-6 md:pt-4">
            <h3 className="text-3xl font-semibold">Prefer to call or email?</h3>
            <p className="flex items-start gap-3 text-xl">
              <Mail size={26} aria-hidden className="mt-1 shrink-0 text-teal" />
              <a href={`mailto:${site.email}`} className="font-bold break-all underline underline-offset-4">
                {site.email}
              </a>
            </p>
            <p className="flex items-start gap-3 text-xl">
              <Phone size={26} aria-hidden className="mt-1 shrink-0 text-teal" />
              <a href={`tel:${site.phone.replace(/[^\d+]/g, '')}`} className="font-bold underline underline-offset-4">
                {site.phone}
              </a>
            </p>
            <p className="flex items-start gap-3 text-xl text-ink-soft">
              <MapPin size={26} aria-hidden className="mt-1 shrink-0 text-teal" />
              {site.serviceArea}
            </p>
          </aside>
        </div>
      </section>
    </>
  )
}
