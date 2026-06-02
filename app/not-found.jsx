import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 py-12 text-center sm:px-8">
      <p className="text-sm uppercase tracking-[0.35em] text-lightgreen">Page not found</p>
      <h1 className="mt-4 text-5xl font-semibold text-darkgreen">404</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-darkgreen/80">
        The page you are looking for is not available. Return to the home page or explore our wellness services.
      </p>
      <Link href="/" className="mt-8 inline-flex items-center justify-center rounded-full bg-darkgreen px-6 py-4 text-base font-semibold text-white transition hover:bg-[#233a39]">
        Return Home
      </Link>
    </section>
  )
}
