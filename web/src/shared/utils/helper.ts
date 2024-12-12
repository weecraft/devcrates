import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function mergeClass(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type NameParts = {
  firstName: string
  lastName: string
}

export function splitName(fullName: string): NameParts {
  const [firstName, ...rest] = fullName.trim().split(' ')
  const lastName = rest.length > 0 ? rest.join(' ') : ''

  return {
    firstName,
    lastName,
  }
}
