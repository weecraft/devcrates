import * as React from 'react'
import type { Metadata } from 'next'
import { config } from '@shared/libs'
import { fonts } from '@shared/libs'
import '@shared/styles/globals.css'
import { sharedMetadata } from '@shared/libs'
import {
  AnimationProvider,
  PosthogProvider,
  QueryProvider,
  ThemeProvider,
} from '@shared/providers'
import { Toaster } from '@shared/components'

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Dev Crates',
  description: 'Perfect developer resources & collections',
  applicationName: 'Dev Crates',
  alternates: {},
  keywords: [
    'Developer',
    'Free Resources',
    'Resources',
    'Developer Collections',
    'Clouds',
    'Tools',
    'Database',
    'Stacks',
    'Tech',
    'Trending',
    'Freemium',
    'Freebies',
  ],
  authors: [
    { name: 'Nyoman Sunima', url: 'https://nyomansunima.one' },
    { name: 'Weecraft', url: 'https://weecraft.club' },
  ],
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
  metadataBase: new URL(config.app.host),
  verification: {
    google: config.verification.google,
  },
}

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>): React.ReactElement {
  return (
    <html
      lang="en"
      className={`${fonts.inter.variable}`}
      suppressHydrationWarning
    >
      <PosthogProvider>
        <AnimationProvider>
          <body>
            <ThemeProvider
              attribute={'class'}
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <QueryProvider>{children}</QueryProvider>
              <Toaster />
            </ThemeProvider>
          </body>
        </AnimationProvider>
      </PosthogProvider>
    </html>
  )
}
