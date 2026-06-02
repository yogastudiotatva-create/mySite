import './globals.css'
import { Montserrat } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata = {
  title: 'Tatva Yoga Studio | Premium Wellness in Hyderabad',
  description: 'Tatva Yoga Studio delivers calm, modern yoga and nutrition guidance for physical and mental transformation.',
  keywords: [
    'Yoga Studio Hyderabad',
    'Weight Loss Yoga Hyderabad',
    'Yoga Near Me',
    'Online Yoga Classes Hyderabad',
  ],
  openGraph: {
    title: 'Tatva Yoga Studio',
    description: 'Premium wellness with yoga and personalized nutrition in Hyderabad.',
    siteName: 'Tatva Yoga Studio',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans bg-beige text-darkgreen`}> 
        <div className="min-h-screen bg-beige text-darkgreen">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
