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
                <strong className="font-bold text-ink">The Research:</strong> {f.research}
              </p>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  )
}
