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
      name: 'slug',
      title: 'Slug',
      type: 'string',
      options: {
        source: 'name',
        slugify: input => input.toLowerCase()
            .replace(/[^\w-]+/g, '-')
            .slice(0, 150)
    }
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
    {
      name: 'gameGenre',
      title: 'Genres',
      type: 'array',
      of: [{ type: 'reference', to: [{type: 'genres'}] }],
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
      name: 'hoursPlayed',
      title: 'Hours played',
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
    {
      name: 'connectedUser',
      title: 'Users',
      type: 'array',
      of: [{ type: 'reference', to: [{type: 'user'}] }],
    },
  ],
};
