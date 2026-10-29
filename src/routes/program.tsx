import { createFileRoute } from '@tanstack/react-router'
import { Check, Plus } from 'lucide-react'
import { CtaBand, PageHeading } from '@/components/Layout'
import { img, program, site } from '@/content/site'

export const Route = createFileRoute('/program')({
  head: () => ({ meta: [{ title: `The Program | ${site.name}` }] }),
  component: Program,
})

function Program() {
  return (
    <>
      <PageHeading eyebrow="The Program" title={program.heading} intro={program.intro} />

      {/* How a session works, plus image */}
      <section className="mx-auto mt-10 grid max-w-6xl gap-12 px-5 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <ul className="space-y-5">
          {program.points.map((point) => (
            <li key={point} className="flex gap-4 rounded-[1.25rem] bg-paper p-6 text-xl">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-mint text-white">
                <Check size={22} aria-hidden />
              </span>
              {point}
            </li>
          ))}
        </ul>
        <img
          src={img('instructor-playing.png', 900)}
          alt="An instructor seated in a bright room, demonstrating a chord on a ukulele."
          width={1536}
          height={1024}
          loading="lazy"
          className="w-full rotate-1 rounded-[2rem] border-8 border-white shadow-lg"
        />
      </section>

      {/* Questions */}
      <section className="mx-auto mt-24 max-w-4xl px-5">
        <h2 className="text-4xl font-semibold md:text-5xl">Common questions</h2>
        <div className="mt-10 space-y-4">
          {program.faq.map((item, i) => (
            <details
              key={item.q}
              open={i === 0}
              className="group rounded-[1.25rem] border-2 border-ink/15 bg-cream open:bg-paper"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-6 text-2xl font-bold [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-cream transition-transform group-open:rotate-45">
                  <Plus size={24} aria-hidden />
                </span>
              </summary>
              <div className="space-y-4 px-6 pb-6 text-xl leading-relaxed text-ink-soft">
                {item.a.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </details>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  )
}
