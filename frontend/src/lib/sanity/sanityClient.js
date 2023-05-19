import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'tlexghg7',
  dataset: 'game_data',
  apiVersion: '2021-08-31',
  useCdn: true,
  token: 'skw9tuMb9mxjcZj2bL4trKtmZ06cf8PooYKurwLOfK8VI26Bz2M9JXYcuvsVAOAtJ6Xi3ZHGlOTYgSGzENTyOvdQRwTTBlDRjgvPHr1dNVhkAL7awzCagr2EHzEUbeUFS6T8C7q46Ivcs30jEKOXxwCQ1oWejz7gwrnFDE1VdFoYG2TJloHL',
  ignoreBrowserTokenWarning: true,
});

export default client;
/*
  For å kunne få "permission" til å sende og endre favorits til sanity måtte jeg bruke en token.
  Dette er ikke helt optimalt av sikkerhets-messige grunner, men var den løsningen jeg fant.
  example: https://www.sanity.io/help/js-client-browser-token
*/