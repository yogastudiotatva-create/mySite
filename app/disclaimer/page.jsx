export const metadata = {
  title: 'Disclaimer | Tatva Yoga Studio',
  description: 'Disclaimer for Tatva Yoga Studio wellness programs and online information.',
}

export default function DisclaimerPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-12 sm:px-8 lg:py-16">
      <div className="space-y-10 rounded-[32px] bg-white p-10 shadow-soft">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-lightgreen">Disclaimer</p>
          <h1 className="mt-3 text-4xl font-semibold text-darkgreen sm:text-5xl">Health and wellness guidance disclaimer.</h1>
        </div>
        <div className="space-y-6 text-sm leading-7 text-darkgreen/80">
          <p>The information on this site and in Tatva Yoga Studio programs is for educational and wellness-support purposes only. It is not medical advice.</p>
          <p>Individual results may vary. Please consult a healthcare professional before starting any new fitness or nutrition program.</p>
          <p>We aim to support sustainable wellness through yoga and nutrition, but we do not offer medical diagnosis or treatment.</p>
        </div>
      </div>
    </section>
  )
}
