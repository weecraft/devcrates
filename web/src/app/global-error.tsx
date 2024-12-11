'use client'
import * as React from 'react'
import '@shared/styles/globals.css'
import { Button } from '@shared/components'
import { ThemeProvider } from '@shared/providers'
import { fonts } from '@shared/libs'

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}): React.ReactElement {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider
        attribute={'class'}
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body className={`${fonts.inter.variable}`}>
          <main className="min-h-screen py-20 tablet:pb-56">
            <h1 className="!leading-tight text-3xl tablet:text-4xl text-center font-medium">
              Something wrong!
            </h1>

            <div className="mt-16 flex justify-center">
              <Button variant={'text'} size={'lg'} onClick={() => reset()}>
                Try again
              </Button>
            </div>
          </main>
        </body>
      </ThemeProvider>
    </html>
  )
}
