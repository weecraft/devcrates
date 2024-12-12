import { waitListClient } from '@shared/libs/connections'
import { splitName } from '@shared/utils'

const WAITLIST_ID = '23033'

type WaitingListInput = {
  fullName: string
  email: string
}

class WaitingListService {
  async joinWaitingList(input: WaitingListInput): Promise<void> {
    const { email, fullName } = input
    const { firstName, lastName } = splitName(fullName)

    return await waitListClient('/api/v1/signup', {
      method: 'POST',
      body: {
        email: email,
        waitlist_id: WAITLIST_ID,
        first_name: firstName,
        last_name: lastName,
      },
    })
  }
}

export const waitingListService = new WaitingListService()
