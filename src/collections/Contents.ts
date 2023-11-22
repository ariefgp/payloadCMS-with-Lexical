import type { CollectionConfig } from 'payload/types'
import {
  lexicalEditor
} from '@payloadcms/richtext-lexical'

const Contents: CollectionConfig = {
  slug: 'contents',
  fields: [
    {
      name: 'content',
      type: 'richText'
    }
  ]
}

export default Contents