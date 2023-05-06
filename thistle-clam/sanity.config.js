import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'thistle-clam',

  projectId: 'tlexghg7',
  dataset: 'game_data',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
