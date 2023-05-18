import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from './sanityClient';

const MyGamePage = () => {
  const [fetchedGame, setFetchedGame] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    async function fetchGame() {
      const gameQuery = `*[_type == "game" && slug.current == $slug] {
        id,
        name,
        image
      }[0]`;

      const [fetchedGame] = await sanityClient.fetch(gameQuery, { slug });
      setFetchedGame(fetchedGame);
    }

    fetchGame();
  }, [slug]);

  if (!fetchedGame) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{fetchedGame.name}</h2>
      <img src={fetchedGame.image} alt={fetchedGame.name} />
    </div>
  );
};

export default MyGamePage;
