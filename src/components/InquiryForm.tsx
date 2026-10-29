import { useState, type FormEvent } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import { contact, site } from '@/content/site'

type State = 'idle' | 'pending' | 'success' | 'error'

const field =
  'mt-2 block w-full rounded-xl border-2 border-ink/30 bg-white px-4 py-3 text-lg text-ink placeholder:text-ink/45 focus:border-ink focus:outline-none'
const label = 'block text-lg font-bold'

export function InquiryForm() {
  const [state, setState] = useState<State>('idle')

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (state === 'pending') return
    const body = new URLSearchParams()
    new FormData(event.currentTarget).forEach((value, key) => body.append(key, String(value)))
    setState('pending')
    try {
      const response = await fetch('/inquiry-form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
        signal: AbortSignal.timeout(15000),
      })
      if (!response.ok) throw new Error('Submission failed')
      const isUnprocessedRegistration = /\bdata-netlify\s*=/i.test(await response.text())
      if (isUnprocessedRegistration) throw new Error('Form handling is unavailable')
      setState('success')
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div role="status" className="rounded-[1.5rem] bg-mint-light p-10 text-center">
        <CheckCircle2 size={56} aria-hidden className="mx-auto text-ink" />
        <h2 className="mt-4 text-4xl font-semibold">Thank you!</h2>
        <p className="mt-3 text-xl text-ink-soft">
          Your message was received. We’ll be in touch soon.
        </p>
      </div>
    )
  }

  return (
    <form
      name="inquiry"
      method="POST"
      action="/inquiry-form.html"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={submit}
      onChange={() => {
        if (state === 'error') setState('idle')
      }}
      className="rounded-[1.5rem] bg-paper p-7 md:p-10"
    >
      <input type="hidden" name="form-name" value="inquiry" />
      <input type="hidden" name="subject" value={`New class inquiry from the ${site.name} website`} />
      <p hidden>
        <label>
          Leave this empty
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <fieldset disabled={state === 'pending'} className="grid gap-6 md:grid-cols-2">
        <legend className="sr-only">Your details</legend>
        <label className={label}>
          Your name
          <input name="name" autoComplete="name" required maxLength={100} className={field} />
        </label>
        <label className={label}>
          Email address
          <input name="email" type="email" autoComplete="email" required maxLength={254} className={field} />
        </label>
        <label className={label}>
          Phone <span className="font-normal text-ink-soft">(optional)</span>
          <input name="phone" type="tel" autoComplete="tel" maxLength={40} className={field} />
        </label>
        <label className={label}>
          I am a…
          <select name="role" defaultValue={contact.roles[0]} className={field}>
            {contact.roles.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </label>
        <label className={`${label} md:col-span-2`}>
          Community or facility name <span className="font-normal text-ink-soft">(optional)</span>
          <input name="community" autoComplete="organization" maxLength={150} className={field} />
        </label>
        <label className={`${label} md:col-span-2`}>
          How can we help?
          <textarea
            name="message"
            required
            rows={6}
            maxLength={3000}
            placeholder="Tell us a little about your community, your residents, and any days or times that work well."
            className={field}
          />
        </label>
        <div className="md:col-span-2">
          <button type="submit" className="btn btn-primary disabled:opacity-70">
            {state === 'pending' ? 'Sending…' : 'Send message'}
            <Send size={20} aria-hidden />
          </button>
        </div>
      </fieldset>

      {state === 'error' && (
        <p role="alert" className="mt-6 rounded-xl border-2 border-teal bg-white p-4 text-lg text-teal-dark">
          Sorry, your message could not be sent just now. Your details are still here, so please try again, or email{' '}
          <a href={`mailto:${site.email}`} className="font-bold underline">
            {site.email}
          </a>
          .
        </p>
      )}
    </form>
  )
}
