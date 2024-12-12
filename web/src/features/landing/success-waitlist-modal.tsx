import * as React from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
} from '@shared/components'

type SuccessWaitlistModalProps = {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
}

export function SuccessWaitlistModal({
  isOpen,
  onOpenChange,
}: SuccessWaitlistModalProps): React.ReactElement {
  return (
    <AlertDialog open={isOpen} onOpenChange={onOpenChange}>
      <AlertDialogContent className="max-w-md">
        <AlertDialogBody className="items-center px-5 py-10 pb-16 space-y-3">
          <div className="flex justify-center">
            <div className="flex justify-center items-center h-14 w-14 rounded-full border border-border duration-1000 animate-bounce">
              <i className="fi fi-sr-badge-check text-2xl" />
            </div>
          </div>
          <AlertDialogTitle className="!mt-5 text-center">
            We’ve added you to
            <br />
            our waiting list!
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center !mt-4">
            You're awesome!, we'll send you an email and notifications when
            we're ready to launch.
          </AlertDialogDescription>
        </AlertDialogBody>
        <AlertDialogFooter>
          <AlertDialogAction>OK, I’ll waiting</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
