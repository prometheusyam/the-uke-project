import { createFileRoute } from '@tanstack/react-router'
import { CtaBand } from '@/components/Layout'
import { img, research, site } from '@/content/site'

export const Route = createFileRoute('/research')({
  head: () => ({ meta: [{ title: `The Research | ${site.name}` }] }),
  component: Research,
})

function Research() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-14 pb-6 md:pt-20">
        <p className="rise mb-3 text-lg font-bold uppercase tracking-widest text-teal">The Research</p>
        <h1 className="rise max-w-4xl text-5xl font-semibold md:text-6xl" style={{ animationDelay: '80ms' }}>
          {research.heading[0]}
          <br />
          <span className="text-teal">{research.heading[1]}</span>
        </h1>
        <p className="rise mt-8 max-w-3xl text-xl text-ink-soft" style={{ animationDelay: '160ms' }}>
          {research.intro}
        </p>
      </section>

      <section className="mx-auto mt-10 max-w-6xl px-5">
        <img
          src={img('park-group.png', 1400)}
          srcSet={`${img('park-group.png', 800)} 800w, ${img('park-group.png', 1400)} 1400w`}
          sizes="(min-width: 1152px) 1152px, 100vw"
          alt="A group of smiling older adults playing ukuleles together outdoors in a sunny park."
          width={1536}
          height={1024}
          className="aspect-[2/1] w-full rounded-[2rem] border-8 border-white object-cover object-[center_30%] shadow-[0_20px_50px_-20px_rgba(20,58,56,0.45)] md:aspect-[5/2]"
        />
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-5">
        <div className="grid gap-6 md:grid-cols-2">
          {research.features.map((f, i) => (
            <article
              key={f.title}
              className={`flex flex-col rounded-[1.75rem] border-2 border-ink/15 p-8 md:p-10 ${
                i === 1 || i === 2 ? 'bg-mint-light' : 'bg-cream'
              }`}
            >
              <span aria-hidden className="font-display text-5xl leading-none text-teal">
                ❋
              </span>
              <h2 className="mt-4 text-3xl font-semibold">{f.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-soft">{f.body}</p>
              <p className="mt-6 rounded-[1.25rem] bg-white/70 p-5 text-lg leading-relaxed">
                <strong className="font-bold text-ink">The Research:</strong> <Cited text={f.research} />
              </p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="references-heading" className="mx-auto mt-16 max-w-6xl px-5">
        <div className="rounded-[1.75rem] border-2 border-ink/15 bg-paper p-8 md:p-10">
          <h2 id="references-heading" className="text-2xl font-semibold md:text-3xl">
            {research.referencesHeading}
          </h2>
          <ol className="mt-6 list-decimal space-y-4 pl-6 text-base leading-relaxed text-ink-soft marker:font-bold marker:text-teal">
            {research.references.map((r, i) => (
              <li key={r.doi} id={`ref-${i + 1}`} className="scroll-mt-28 pl-1">
                {r.citation}{' '}
                <a
                  href={`https://doi.org/${r.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all text-teal underline underline-offset-2 hover:text-ink"
                >
                  https://doi.org/{r.doi}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  )
}

/** Renders `*Title*` in card text as italics and `^n` as a superscript link to reference n. */
function Cited({ text }: { text: string }) {
  return text.split(/(\*[^*]+\*|\^\d+)/).map((part, i) => {
    if (part.startsWith('*')) return <em key={i}>{part.slice(1, -1)}</em>
    if (part.startsWith('^')) {
      const n = part.slice(1)
      return (
        <sup key={i}>
          <a
            href={`#ref-${n}`}
            aria-label={`Reference ${n}`}
            className="inline-block rounded pr-1 pl-px font-bold text-teal underline underline-offset-2 hover:bg-white hover:text-ink"
          >
            {n}
          </a>
        </sup>
      )
    }
    return part
  })
}
