import type { CollectionConfig } from 'payload/types'
import Editor from '../client/components/lexicalEditors/LexicalEditor'

const ContentsNative: CollectionConfig = {
  slug: 'contents-native',
  fields: [
    {
      name: 'content',
      type: 'richText',
      admin: {
        components: {
            Field: Editor,
        }
      }
    }
  ]
}

export default ContentsNative