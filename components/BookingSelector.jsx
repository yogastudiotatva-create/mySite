'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { branchData } from '../lib/siteConfig'

const branchOptions = [...branchData.map((branch) => branch.title), 'Online session']
const phoneNumber = '918121612347'

function buildWhatsAppLink(selection) {
  const message =
    selection === 'Online session'
      ? 'Hello, I’d like to book my free online trial session at Tatva Yoga Studio.'
      : `Hello, I’d like to book my free trial session at Tatva Yoga Studio at ${selection}.`

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
}

export default function BookingSelector() {
  const [selection, setSelection] = useState('')
  const selectedLink = selection ? buildWhatsAppLink(selection) : '#'

  return (
    <div className="space-y-5">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {branchOptions.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setSelection(option)}
            className={`rounded-full border px-4 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-darkgreen/50 ${
              selection === option
                ? 'border-darkgreen bg-darkgreen text-white'
                : 'border-darkgreen/30 bg-white text-darkgreen hover:border-darkgreen hover:bg-darkgreen/5'
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="rounded-[32px] border border-lightgreen/40 bg-beige/95 p-6 shadow-soft">
        <p className="text-sm uppercase tracking-[0.35em] text-darkgreen/70">Book Free Trial</p>
        <h2 className="mt-3 text-2xl font-semibold text-darkgreen">Choose your preferred session type.</h2>
        <p className="mt-3 text-base leading-7 text-darkgreen/75">
          Select a branch or online session, then confirm on WhatsApp to reserve your free trial.
        </p>

        {selection ? (
          <div className="mt-6 space-y-4">
            <div className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-lightgreen/30">
              <p className="text-sm text-darkgreen/70">Selected option</p>
              <p className="mt-2 text-lg font-semibold text-darkgreen">{selection}</p>
            </div>

            <a
              href={selectedLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-darkgreen px-6 py-4 text-base font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#233a39]"
            >
              Confirm on WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>

            <button
              type="button"
              onClick={() => setSelection('')}
              className="text-sm font-semibold text-darkgreen underline transition hover:text-black"
            >
              Change selection
            </button>
          </div>
        ) : (
          <div className="mt-6 text-sm text-darkgreen/80">
            Tap a branch or online session above to start booking.
          </div>
        )}
      </div>
    </div>
  )
}
