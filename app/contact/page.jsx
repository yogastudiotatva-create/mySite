import ContactForm from '../../components/ContactForm'
import { contactDetails, whatsAppLink } from '../../lib/siteConfig'

export const metadata = {
  title: 'Contact | Tatva Yoga Studio',
  description: 'Contact Tatva Yoga Studio for free trial bookings, studio visits, and wellness support.',
}

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:py-16">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8 rounded-[32px] bg-white p-10 shadow-soft">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-lightgreen">Contact</p>
            <h1 className="mt-3 text-4xl font-semibold text-darkgreen sm:text-5xl">Reach Tatva Yoga Studio.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-darkgreen/80">
              Connect with us for your free trial booking, wellness questions, or studio support.
            </p>
          </div>
          <div className="grid gap-4 rounded-[32px] bg-beige p-8 text-darkgreen shadow-soft">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-darkgreen/70">Email</p>
              <p className="mt-2 text-sm">{contactDetails.email}</p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-darkgreen/70">Phone</p>
              <p className="mt-2 text-sm">{contactDetails.phone}</p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-darkgreen/70">Address</p>
              <p className="mt-2 text-sm">{contactDetails.address}</p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-darkgreen/70">GSTIN</p>
              <p className="mt-2 text-sm">{contactDetails.gstin}</p>
            </div>
          </div>
          <a
            href={whatsAppLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center justify-center rounded-full bg-darkgreen px-6 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#233a39]"
          >
            Book via WhatsApp
          </a>
        </div>
        <div className="rounded-[32px] border border-lightgreen/30 bg-white p-8 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-darkgreen/70">Need support?</p>
          <p className="mt-4 text-base leading-7 text-darkgreen/80">
            Send us a quick message here and we’ll respond within one business day.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}
