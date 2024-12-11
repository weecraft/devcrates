import dayjs from 'dayjs'

export function parseReadableDate(date: string): string {
  return dayjs(date).format('DD MMMM YYYY')
}
