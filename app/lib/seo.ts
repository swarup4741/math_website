import type { Metadata } from 'next'

export const site = {
  url: 'https://swarup.vercel.app',
  name: 'Swarup Kumar Das',
  homeTitle: 'Swarup Kumar Das | Low-Dimensional Topology',
  description:
    'Swarup Kumar Das is a Ph.D. student at TCG CREST working on low-dimensional topology under the supervision of Dr. Apratim Chakraborty.',
  researchTitle: 'Research in Low-Dimensional Topology | Swarup Kumar Das',
  researchDescription:
    'Explore Swarup Kumar Das’s research interests in low-dimensional topology, knot theory, Dehn surgery, Khovanov homology, and Heegaard Floer homology.',
}

export function absoluteUrl(path: string) {
  return new URL(path, site.url).toString()
}

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}): Metadata {
  const image = new URL('/og', site.url)
  image.searchParams.set('title', title)

  return {
    title,
    description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: site.name,
      locale: 'en_US',
      type: 'website',
      images: [{ url: image.toString(), width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [{ url: image.toString(), alt: title }],
    },
  }
}

export const profileStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': absoluteUrl('/#profile'),
  url: absoluteUrl('/'),
  name: site.homeTitle,
  description: site.description,
  inLanguage: 'en',
  isPartOf: {
    '@type': 'WebSite',
    '@id': absoluteUrl('/#website'),
    name: site.name,
    url: absoluteUrl('/'),
  },
  mainEntity: {
    '@type': 'Person',
    '@id': absoluteUrl('/#person'),
    name: site.name,
    url: absoluteUrl('/'),
    image: absoluteUrl('/profile.jpg'),
    description: site.description,
    jobTitle: 'Ph.D. student',
    affiliation: {
      '@type': 'Organization',
      name: 'Institute for Advancing Intelligence, TCG CREST',
      url: 'https://www.tcgcrest.org/institutes/iai/',
    },
    knowsAbout: ['Low-dimensional topology'],
  },
}

export const researchStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': absoluteUrl('/research#page'),
  url: absoluteUrl('/research'),
  name: site.researchTitle,
  description: site.researchDescription,
  inLanguage: 'en',
  isPartOf: { '@id': absoluteUrl('/#website') },
  about: [
    'Low-dimensional topology',
    'Knot theory',
    'Dehn surgery',
    'Khovanov homology',
    'Heegaard Floer homology',
    'Chromatic homology',
  ].map(name => ({ '@type': 'Thing', name })),
}
