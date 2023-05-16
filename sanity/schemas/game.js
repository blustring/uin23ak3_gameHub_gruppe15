export default {
  name: 'game',
  title: 'Game',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'ID',
      type: 'string',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'platforms',
      title: 'Platforms',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'release_date',
      title: 'Release Date',
      type: 'date',
    },
    {
      name: 'developer',
      title: 'Developer',
      type: 'string',
    },
    {
      name: 'publisher',
      title: 'Publisher',
      type: 'string',
    },
    /*{
      name: 'genres',
      title: 'Genres',
      type: 'array',
      of: [{ type: 'genres' }],
    },*/
    {
      name: 'genres',
      title: 'Genres',
      type: 'reference',
      to: [{ type: 'genres' }],
    },

    {
      name: 'image',
      title: 'Image',
      type: 'url',
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'developers',
      title: 'Developers',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'releaseDate',
      title: 'Release Date (Alternate)',
      type: 'date',
    },
    {
      name: 'stores',
      title: 'Stores',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};
