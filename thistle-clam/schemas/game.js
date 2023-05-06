export default {
    name: 'game',
    title: 'Game',
    type: 'document',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
        validation: Rule => Rule.required()
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
        validation: Rule => Rule.required()
      },
      {
        name: 'releaseDate',
        type: 'date',
        title: 'Release Date',
        options: {
          dateFormat: 'YYYY-MM-DD'
        }
      },
      {
        name: 'coverImage',
        type: 'image',
        title: 'Cover Image',
        options: {
          hotspot: true
        },
        fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Alternative Text',
            description: 'Alternative text for screen readers and search engines. The description should describe the image and its context.'
          }
        ],
        validation: Rule => Rule.required()
      }
    ]
  }
  