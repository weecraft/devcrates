'use client'

import * as React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Button,
  Input,
  showSonner,
} from '@shared/components'
import { useMutation } from '@tanstack/react-query'
import { waitingListService } from './waiting-list-service'
import { SuccessWaitlistModal } from './success-waitlist-modal'
import posthog from 'posthog-js'

const formSchema = z.object({
  fullName: z.string().min(2, 'Hey, you are forget fill the name'),
  email: z
    .string()
    .min(2, 'Please insert your awesome email address')
    .max(50)
    .email('Opps, Please insert valid email'),
})

export function WaitingListForm(): React.ReactElement {
  const [isShowSuccessModal, setIsShowSuccessModal] = React.useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
    },
  })

  const joinWaitingListMutation = useMutation({
    mutationFn: waitingListService.joinWaitingList,
    onError: () => {
      showSonner('Opps, something went wrong. Please try again later')
    },
    onSuccess: () => {
      setIsShowSuccessModal(true)
      form.reset()
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { fullName, email } = values

    posthog.identify(email, { fullName })
    posthog.capture('Join Waiting List', { fullName, email })

    joinWaitingListMutation.mutate({ email, fullName })
  }

  return (
    <div className="flex flex-col w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-3"
        >
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Your awesome name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Your email address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={joinWaitingListMutation.isPending}
            className="mt-5 transition-all duration-300 hover:scale-95"
          >
            {joinWaitingListMutation.isPending ? (
              <>
                Joining you in ...
                <i className="fi fi-rr-spinner absolute right-4 text-base animate-spin" />
              </>
            ) : (
              <>
                Join waitlist
                <i className="fi fi-rr-arrow-right absolute right-4 text-base" />
              </>
            )}
          </Button>
        </form>
      </Form>

      <SuccessWaitlistModal
        isOpen={isShowSuccessModal}
        onOpenChange={setIsShowSuccessModal}
      />
    </div>
  )
}
