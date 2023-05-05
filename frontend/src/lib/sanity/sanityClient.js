import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'tlexghg7',
  dataset: 'game_data',
  apiVersion: '2021-08-31',
  useCdn: true,
});

export default client;

