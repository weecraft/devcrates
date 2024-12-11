import { Metadata } from 'next'
import * as React from 'react'
import { sharedMetadata } from '@shared/libs'
import { WaitingSection } from '@features/landing'

export const metadata: Metadata = {
  title: 'Dev Crates',
  description: 'Perfect developer resources & collections',
  openGraph: {
    ...sharedMetadata.openGraph,
    title: 'Dev Crates',
    description: 'Perfect developer resources & collections',
  },
  twitter: {
    ...sharedMetadata.twitter,
    title: 'Dev Crates',
    description: 'Perfect developer resources & collections',
  },
}

export default function LandingPage(): React.ReactElement {
  return (
    <main className="flex flex-col">
      <WaitingSection />
    </main>
  )
}
