'use client'

import { useState } from 'react'
import { Loader2 } from 'lucide-react'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validateForm(name, email, message) {
  const errors = []
  if (!name || name.trim().length < 2) errors.push('Enter your name.')
  if (!emailRegex.test(email)) errors.push('Enter a valid email address.')
  if (!message || message.trim().length < 10) errors.push('Write a brief message.')
  return errors
}

export default function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '', honeypot: '' })
  const [status, setStatus] = useState({ loading: false, success: '', error: '' })

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus({ loading: false, success: '', error: '' })

    const errors = validateForm(formState.name, formState.email, formState.message)
    if (errors.length) {
      setStatus({ loading: false, success: '', error: errors.join(' ') })
      return
    }

    if (formState.honeypot) {
      setStatus({ loading: false, success: '', error: 'Spam detected.' })
      return
    }

    setStatus({ loading: true, success: '', error: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      })
      const result = await response.json()

      if (!response.ok) {
        setStatus({ loading: false, success: '', error: result.error || 'Unable to submit the form right now.' })
        return
      }

      setStatus({ loading: false, success: 'Message sent successfully. We will respond shortly.', error: '' })
      setFormState({ name: '', email: '', message: '', honeypot: '' })
    } catch (error) {
      setStatus({ loading: false, success: '', error: 'A network error occurred. Please try again.' })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-[32px] border border-lightgreen/30 bg-white p-8 shadow-soft">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-darkgreen/85">
          <span className="font-semibold">Name</span>
          <input
            name="name"
            type="text"
            value={formState.name}
            onChange={(event) => setFormState((prev) => ({ ...prev, name: event.target.value }))}
            className="w-full rounded-3xl border border-lightgreen/30 bg-beige px-4 py-3 text-sm text-darkgreen outline-none transition focus:border-darkgreen focus:ring-2 focus:ring-darkgreen/10"
            required
          />
        </label>
        <label className="space-y-2 text-sm text-darkgreen/85">
          <span className="font-semibold">Email</span>
          <input
            name="email"
            type="email"
            value={formState.email}
            onChange={(event) => setFormState((prev) => ({ ...prev, email: event.target.value }))}
            className="w-full rounded-3xl border border-lightgreen/30 bg-beige px-4 py-3 text-sm text-darkgreen outline-none transition focus:border-darkgreen focus:ring-2 focus:ring-darkgreen/10"
            required
          />
        </label>
      </div>
      <label className="space-y-2 text-sm text-darkgreen/85">
        <span className="font-semibold">Message</span>
        <textarea
          name="message"
          rows={6}
          value={formState.message}
          onChange={(event) => setFormState((prev) => ({ ...prev, message: event.target.value }))}
          className="w-full rounded-3xl border border-lightgreen/30 bg-beige px-4 py-3 text-sm text-darkgreen outline-none transition focus:border-darkgreen focus:ring-2 focus:ring-darkgreen/10"
          required
        />
      </label>
      <label className="sr-only">
        <span>Leave this field empty</span>
        <input
          name="honeypot"
          type="text"
          value={formState.honeypot}
          onChange={(event) => setFormState((prev) => ({ ...prev, honeypot: event.target.value }))}
          autoComplete="off"
          className="pointer-events-none absolute left-[-9999px]"
        />
      </label>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status.loading}
          className="inline-flex items-center justify-center rounded-full bg-darkgreen px-6 py-4 text-base font-semibold text-white transition hover:bg-[#233a39] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status.loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          Send message
        </button>
        {status.success ? <p className="text-sm font-medium text-darkgreen/80">{status.success}</p> : null}
        {status.error ? <p className="text-sm font-medium text-rose-600">{status.error}</p> : null}
      </div>
    </form>
  )
}
