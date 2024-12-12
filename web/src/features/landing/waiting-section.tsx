import * as React from 'react'
import { WaitingListForm } from './waiting-list-form'
import Link from 'next/link'
import {
  DynamicLogo,
  Meteors,
  Spotlight,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@shared/components'

export function WaitingSection(): React.ReactElement {
  return (
    <section className="flex flex-col container mx-auto relative px-5 tablet:px-0">
      <div className="flex flex-col items-center pt-20 tablet:pt-40 pb-10 relative z-10">
        <div className="flex cursor-pointer transition-all duration-300 hover:scale-95">
          <DynamicLogo width={60} height={60} />
        </div>

        <p className="text-foreground/60 text-center mt-5 text-sm">
          Developer Collections
          <br />
          <span className="text-foreground font-medium">(Devcrates)</span>
        </p>

        <h2 className="text-3xl tablet:text-5xl !leading-tight font-medium mt-10 text-center">
          Join the waitlist for <br />{' '}
          <span className="text-accent">developer resources</span>
        </h2>

        <div className="flex mt-20 justify-center w-full tablet:w-4/12 mx-auto">
          <WaitingListForm />
        </div>

        <div className="flex flex-col mt-52 items-center">
          <div className="flex flex-col items-cente text-center text-foreground/70 gap-4 text-sm">
            <p>
              Design & develop by{' '}
              <Link
                href={'https://nyomansunima.one?ref=devcrates'}
                target="_blank"
                className="font-medium text-foreground"
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>@nyomansunima</TooltipTrigger>
                    <TooltipContent>
                      I'am a indie love to craft digital products
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>{' '}
              in Bali, Indonesia
              <br />
              Ship for global audiences.
            </p>

            <p>
              Powered & supply by{' '}
              <Link
                href={'https://weecraft.club?ref=devcrates'}
                target="_blank"
                className="font-medium text-foreground"
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>weecraft</TooltipTrigger>
                    <TooltipContent>
                      Awesome place for better developer experiences
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Meteors number={14} />
      <Spotlight />
    </section>
  )
}
