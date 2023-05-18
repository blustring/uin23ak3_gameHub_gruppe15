// user.js

export default {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'favorits',
      title: 'Favorits',
      type: 'array',
      of: [{type: 'number'}],
      readOnly: true,
    },
  ],
};
