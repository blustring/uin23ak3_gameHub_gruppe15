import React, { useEffect, useState } from 'react';
import sanityClient from './sanityClient';

const MyGames = ({ games, displayCount }) => {
  const [fetchedGames, setFetchedGames] = useState([]);
  const [gameCount, setGameCount] = useState(0); // Add gameCount state

  useEffect(() => {
    async function fetchGames() {
      const gamesQuery = `*[_type == "game"] {
        _id,
        name,
        release_date,
        developer,
        publisher,
        genres,
        image,
        rating,
        summary,
        tags,
        developers,
        releaseDate,
        stores
      }`;
      const countQuery = `count(*[_type == "game"])`; // GROQ query to count games

      const [fetchedGames, gameCount] = await Promise.all([
        sanityClient.fetch(gamesQuery),
        sanityClient.fetch(countQuery)
      ]);

      setFetchedGames(fetchedGames);
      setGameCount(gameCount);
    }

    fetchGames();
  }, []);

  const displayedGames = fetchedGames.slice(0, displayCount);

  return (
    <div>
      <h4>My Games-Library ({gameCount} games)</h4>
        {displayedGames.map((game) => (
          <div key={game._id}>
            <h4>{game.name}</h4>
            <img src={game.image} alt={game.name} />
            <p>Genre: {game.genres.join(", ")}</p>
          </div>
        ))}
    </div>
  );
};

export default MyGames;
