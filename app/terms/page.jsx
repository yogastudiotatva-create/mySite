export const metadata = {
  title: 'Terms & Conditions | Tatva Yoga Studio',
  description: 'Terms and conditions for using Tatva Yoga Studio services and website content.',
}

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-12 sm:px-8 lg:py-16">
      <div className="space-y-10 rounded-[32px] bg-white p-10 shadow-soft">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-lightgreen">Terms & Conditions</p>
          <h1 className="mt-3 text-4xl font-semibold text-darkgreen sm:text-5xl">Terms for using Tatva Yoga Studio.</h1>
        </div>
        <div className="space-y-6 text-sm leading-7 text-darkgreen/80">
          <p>These terms explain how you may use our wellness services and website. They are designed to be clear, fair, and aligned with our premium, supportive approach.</p>
          <p>Bookings and program details are subject to the latest studio policies. Contact us for any specific questions about availability, schedules, or offers.</p>
          <p>Individual outcomes depend on consistency, personal conditions, and adherence to guidance. Tatva supports wellness but does not guarantee specific results.</p>
        </div>
      </div>
    </section>
  )
}
