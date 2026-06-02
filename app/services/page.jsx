import { services } from '../../lib/siteConfig'

export const metadata = {
  title: 'Services | Tatva Yoga Studio',
  description: 'Discover Tatva Yoga Studio services for yoga classes, online sessions, and personalized nutrition plans.',
}

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:py-16">
      <div className="space-y-10 rounded-[32px] bg-white p-10 shadow-soft">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-lightgreen">Our services</p>
          <h1 className="mt-3 text-4xl font-semibold text-darkgreen sm:text-5xl">Wellness services designed for every step.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-darkgreen/80">
            Our offerings are built around beginner-friendly yoga and nutrition support, with a premium, calm experience for all wellness goals.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="rounded-[32px] border border-lightgreen/30 bg-beige p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-md">
              <h2 className="text-2xl font-semibold text-darkgreen">{service.title}</h2>
              <p className="mt-4 text-base leading-7 text-darkgreen/75">{service.description}</p>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-darkgreen/80">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-darkgreen"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="rounded-[32px] bg-darkgreen px-8 py-10 text-white shadow-soft sm:px-12">
          <h2 className="text-3xl font-semibold">How Tatva helps you stay consistent</h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/75">
            We combine approachable yoga routines with practical nutrition coaching so progress feels easy, sustainable and supportive.
          </p>
        </div>
      </div>
    </section>
  )
}
