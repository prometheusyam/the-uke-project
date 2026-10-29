import { createFileRoute } from '@tanstack/react-router'
import { CtaBand, PageHeading } from '@/components/Layout'
import { about, img, site } from '@/content/site'

export const Route = createFileRoute('/about')({
  head: () => ({ meta: [{ title: `About | ${site.name}` }] }),
  component: About,
})

function About() {
  return (
    <>
      <PageHeading eyebrow={about.eyebrow} title={about.heading} />

      <section className="mx-auto mt-8 grid max-w-6xl gap-10 px-5 md:grid-cols-[17rem_1fr] md:items-start md:gap-14">
        <img
          src={img('james-walsh.jpg', 600)}
          alt="Portrait of James Walsh, smiling, wearing glasses and a flat cap."
          width={600}
          height={600}
          className="aspect-square w-full max-w-[17rem] -rotate-2 rounded-[2rem] border-8 border-white object-cover shadow-[0_20px_50px_-20px_rgba(20,58,56,0.45)]"
        />
        <div className="space-y-6 text-xl leading-relaxed text-ink-soft md:pt-2">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  )
}
