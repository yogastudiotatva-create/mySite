export const metadata = {
  title: 'Privacy Policy | Tatva Yoga Studio',
  description: 'Privacy policy for Tatva Yoga Studio, describing how personal data is collected and protected.',
}

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-12 sm:px-8 lg:py-16">
      <div className="space-y-10 rounded-[32px] bg-white p-10 shadow-soft">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-lightgreen">Privacy Policy</p>
          <h1 className="mt-3 text-4xl font-semibold text-darkgreen sm:text-5xl">Privacy and trust, handled carefully.</h1>
        </div>
        <div className="space-y-6 text-sm leading-7 text-darkgreen/80">
          <p>At Tatva Yoga Studio, we collect only the information needed to respond to inquiries and support your wellness journey.</p>
          <p>We do not sell or share personal information with third parties without consent. Data from contact forms is treated securely and used only for booking and support.</p>
          <p>If you have questions about your data or privacy, please reach out through our contact page.</p>
        </div>
      </div>
    </section>
  )
}
