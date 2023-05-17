export default {

    name: 'genres',
    type: 'document',
    title: 'Genre',
    fields: [
          {
            name: 'name',
            title: 'Name',
            type: 'string',
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'string',
          },
        /*{
            name: 'genre_slug',
            type: 'slug',
            title: 'URL-tittel',
            options: {
                source: 'genre_title',
                slugify: input => input.toLowerCase()
                    .replace(/[^\w-]+/g, '-')
                    .slice(0, 150)
            }
        },*/
    ],
};

