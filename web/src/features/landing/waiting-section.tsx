import Image from 'next/image'
import * as React from 'react'
import { WaitingListForm } from './waiting-list-form'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@shared/components/ui/tooltip'
import Link from 'next/link'

export function WaitingSection(): React.ReactElement {
  return (
    <section className="flex flex-col container mx-auto">
      <div className="flex flex-col items-center py-52">
        <div className="flex">
          <Image
            src={
              'https://cdn.hashnode.com/res/hashnode/image/upload/v1733929141883/afa49f0c-7a26-496e-8f5d-384021654627.png'
            }
            width={60}
            height={60}
            alt="Image"
          />
        </div>

        <p className="text-foreground/60 text-center mt-5">
          Developer Collections
          <br />
          <span className="text-foreground">(Devcrates)</span>
        </p>

        <h2 className="text-5xl !leading-tight font-medium mt-10 text-center">
          Join the waitlist for <br />{' '}
          <span className="text-accent">developer resources</span>
        </h2>

        <div className="flex mt-20 justify-center w-4/12 mx-auto">
          <WaitingListForm />
        </div>

        <div className="flex flex-col mt-52 items-center">
          <div className="flex flex-col items-cente text-center text-foreground/70 gap-4">
            <p>
              Design & develop by{' '}
              <Link
                href={'https://nyomansunima.one'}
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
                href={'https://weecraft.club'}
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
    </section>
  )
}
