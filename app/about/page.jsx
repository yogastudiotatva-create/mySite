import { benefits } from '../../lib/siteConfig'

export const metadata = {
  title: 'About Tatva Yoga Studio',
  description: 'Learn how Tatva Yoga Studio supports physical and mental transformation through yoga and nutrition.',
}

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:py-16">
      <div className="space-y-10 rounded-[32px] bg-white p-10 shadow-soft">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-lightgreen">About Tatva</p>
          <h1 className="mt-3 text-4xl font-semibold text-darkgreen sm:text-5xl">We make wellness calm, clear, and effective.</h1>
        </div>
        <p className="max-w-3xl text-lg leading-8 text-darkgreen/80">
          Tatva Yoga Studio exists to simplify fitness and wellness with a balanced system of movement and nutrition. Our approach is designed to feel premium, practical, and welcoming for beginners and experienced clients alike.
        </p>
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[32px] bg-beige p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-darkgreen">Our philosophy</h2>
            <p className="mt-4 text-base leading-7 text-darkgreen/75">
              Living fit and healthy requires the right body movement and the right nutrition. Tatva combines both in a way that feels simple, sustainable, and real.
            </p>
          </article>
          <article className="rounded-[32px] bg-white p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-darkgreen">What we support</h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-darkgreen/80">
              <li>Physical wellness through guided yoga</li>
              <li>Mental calm with structured movement</li>
              <li>Weight loss with easy nutrition habits</li>
              <li>Joint care and sustainable recovery</li>
              <li>Everyday lifestyle improvement</li>
            </ul>
          </article>
        </div>
      </div>

      <section className="mt-16 rounded-[32px] bg-beige p-10 shadow-soft">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.35em] text-darkgreen/70">Why people choose Tatva</p>
          <h2 className="mt-3 text-3xl font-semibold text-darkgreen">A system built for lasting change.</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item) => (
            <article key={item} className="rounded-3xl border border-lightgreen/20 bg-white p-6 text-darkgreen shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <h3 className="text-xl font-semibold">{item}</h3>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}
