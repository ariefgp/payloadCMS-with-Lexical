import type { CollectionConfig } from 'payload/types'
import {
  lexicalEditor
} from '@payloadcms/richtext-lexical'

const Contents: CollectionConfig = {
  slug: 'contents',
  fields: [
    {
      name: 'content',
      type: 'richText',
      // Pass the Lexical editor here and override base settings as necessary
      editor: lexicalEditor({})
    }
  ]
}

export default Contents