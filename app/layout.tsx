import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Swarup Kumar Das",
  description: "Hi, I am graduate student at TCG CREST working in low-dimensional topology.",
  verification: {
    google: "HJeA2AkdrCjT6aE2kfF5DvoERrJcXjaHQi8W4ZSfA00"
  },
  category: 'personal',
  creator: 'Swarup Kumar Das',
  publisher: 'Swarup Kumar Das',
  openGraph: {
    title: "Swarup Kumar Das",
    description: "Hi, I am graduate student at TCG CREST working in low-dimensional topology.",
    url: baseUrl,
    siteName: 'Swarup Kumar Das',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="site-body">
        <main className="site-shell">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
