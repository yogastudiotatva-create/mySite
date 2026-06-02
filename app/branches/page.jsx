import { branchData } from '../../lib/siteConfig'

export const metadata = {
  title: 'Branch Locations | Tatva Yoga Studio',
  description: 'Find Tatva Yoga Studio branch locations in Hyderabad with direct WhatsApp and Instagram links.',
}

export default function BranchesPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:py-16">
      <div className="space-y-10 rounded-[32px] bg-white p-10 shadow-soft">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-lightgreen">Branch locations</p>
          <h1 className="mt-3 text-4xl font-semibold text-darkgreen sm:text-5xl">Visit our Hyderabad studios.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-darkgreen/80">
            Each studio offers calm, spacious wellness support with easy booking through WhatsApp and Instagram.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {branchData.map((branch) => (
            <article key={branch.title} className="rounded-[32px] border border-lightgreen/20 bg-beige p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-darkgreen/70">{branch.type}</p>
                  <h2 className="text-xl font-semibold text-darkgreen">{branch.title}</h2>
                </div>
                {branch.note ? <span className="rounded-full bg-darkgreen/5 px-3 py-1 text-xs text-darkgreen">{branch.note}</span> : null}
              </div>
              <p className="text-sm leading-7 text-darkgreen/75">{branch.address}</p>
              <p className="mt-3 text-sm leading-7 text-darkgreen/75">{branch.phone}</p>
              <div className="mt-6 flex flex-wrap gap-3">
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
      </div>
    </section>
  )
}
