import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types'
import { Twitter } from 'next/dist/lib/metadata/types/twitter-types'

const openGraph: OpenGraph = {
  images: [
    'https://cdn.hashnode.com/res/hashnode/image/upload/v1732079951931/3ac2d9b4-d790-4b31-8855-4f6a909811b2.png',
  ],
  locale: 'en_US',
  type: 'website',
  siteName: 'Dev Crates',
}

const twitter: Twitter = {
  images: [
    'https://cdn.hashnode.com/res/hashnode/image/upload/v1732079951931/3ac2d9b4-d790-4b31-8855-4f6a909811b2.png',
  ],
  card: 'summary_large_image',
  creator: '@nyomansunima',
  site: 'Dev Crates',
}

export const sharedMetadata = {
  openGraph,
  twitter,
}
