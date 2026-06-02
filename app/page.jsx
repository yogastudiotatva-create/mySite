import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import BookingSelector from '../components/BookingSelector'
import { branchData, benefits, services, whatsAppLink } from '../lib/siteConfig'

export const metadata = {
  title: 'Tatva Yoga Studio | Home',
  description: 'Transform your body and mind with premium yoga and nutrition guidance in Hyderabad.',
}

export default function HomePage() {
  return (
    <>
      {/* Dark Teal Hero Section */}
      <section className="relative w-full bg-[#3a6b6b] overflow-hidden">
        <div className="mx-auto max-w-full px-6 py-20 sm:px-8 lg:py-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Content */}
            <div className="space-y-8 text-white max-w-2xl">
              <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                Ready to Transform Your Body and Mind
              </h1>
              <p className="text-xl leading-8 text-white/90 max-w-lg">
                Trainers and nutrition counselors to help you transform your body and health
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href={whatsAppLink} target="_blank" className="inline-flex items-center gap-2 rounded-full bg-amber-500 hover:bg-amber-600 px-8 py-4 font-semibold text-darkgreen transition-colors">
                  Book Free Trial
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-full min-h-[500px] lg:min-h-[600px]">
              <img src="/hero-yoga-pose.png" alt="Woman doing yoga pose" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        {/* Features Grid */}
        <div className="mb-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-[28px] bg-lightgreen/10 p-6 text-sm font-semibold text-darkgreen shadow-sm ring-1 ring-lightgreen/20 hover:bg-lightgreen/15 transition">
              Beginner-friendly
            </div>
            <div className="rounded-[28px] bg-lightgreen/10 p-6 text-sm font-semibold text-darkgreen shadow-sm ring-1 ring-lightgreen/20 hover:bg-lightgreen/15 transition">
              Nutrition + yoga
            </div>
            <div className="rounded-[28px] bg-lightgreen/10 p-6 text-sm font-semibold text-darkgreen shadow-sm ring-1 ring-lightgreen/20 hover:bg-lightgreen/15 transition">
              Online & studio
            </div>
            <div className="rounded-[28px] bg-lightgreen/10 p-6 text-sm font-semibold text-darkgreen shadow-sm ring-1 ring-lightgreen/20 hover:bg-lightgreen/15 transition">
              Sustainable results
            </div>
          </div>
        </div>
      </section>

      {/* Why Tatva Section */}
      <section className="mx-auto max-w-7xl px-4 mt-16 sm:px-6">
        <div className="rounded-[32px] bg-white p-8 shadow-soft sm:p-10">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-lightgreen">Why Tatva</p>
            <h2 className="mt-3 text-3xl font-semibold text-darkgreen">Built for simple, practical wellness.</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => (
              <article key={item} className="rounded-3xl border border-lightgreen/20 bg-beige p-6 text-darkgreen shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-darkgreen" />
                  <h3 className="text-xl font-semibold">{item}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 mt-20 sm:px-6">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-lightgreen">Core services</p>
          <h2 className="mt-3 text-3xl font-semibold text-darkgreen">A complete wellness system.</h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {services.map((service) => (
            <section key={service.title} className="rounded-[32px] border border-lightgreen/30 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-md sm:p-8">
              <h3 className="text-2xl font-semibold text-darkgreen">{service.title}</h3>
              <p className="mt-4 text-base leading-7 text-darkgreen/75">{service.description}</p>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-darkgreen/80">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-4 w-4 text-darkgreen" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>

      <section className="mt-20 rounded-[32px] bg-white p-6 shadow-soft sm:p-10">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-lightgreen">Branch locations</p>
          <h2 className="mt-3 text-3xl font-semibold text-darkgreen">Supporting Hyderabad communities.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {branchData.map((branch) => (
            <article key={branch.title} className="rounded-[32px] border border-lightgreen/20 bg-beige p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-darkgreen/70">{branch.type}</p>
                  <h3 className="text-xl font-semibold text-darkgreen">{branch.title}</h3>
                </div>
                {branch.note ? <span className="rounded-full bg-darkgreen/5 px-3 py-1 text-xs text-darkgreen">{branch.note}</span> : null}
              </div>
              <p className="text-sm leading-7 text-darkgreen/75">{branch.address}</p>
              <p className="mt-3 text-sm leading-7 text-darkgreen/75">{branch.phone}</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href={branch.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-darkgreen px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#233a39]">
                  WhatsApp
                </a>
                <a href={branch.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-darkgreen px-4 py-3 text-sm font-semibold text-darkgreen transition hover:bg-darkgreen/5">
                  Instagram
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-[32px] bg-darkgreen px-6 py-12 text-white shadow-soft sm:px-10 sm:py-14">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-lightgreen/80">Ready to begin</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight">Start your wellness journey today.</h2>
          </div>
          <a href={whatsAppLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-4 text-base font-semibold text-darkgreen transition hover:-translate-y-0.5">
            Book Your Free Trial
          </a>
        </div>
      </section>
    </>
  )
}
