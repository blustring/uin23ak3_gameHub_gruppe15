import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from './sanityClient';

const MyGames = ({ games, displayCount }) => {
  const [fetchedGames, setFetchedGames] = useState([]);
  const [gameCount, setGameCount] = useState(0); // Add gameCount state

  useEffect(() => {
    async function fetchGames() {
      const gamesQuery = `*[_type == "game"] {
        id,
        slug,
        name,
        release_date,
        developer,
        publisher,
        gameGenre[]->,
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
        <div key={game.id}>
          <h4>{game.name}</h4>
          <img src={game.image} alt={game.name} />
          {game.gameGenre !== null && (
            <p>{game.gameGenre.map((genre) => genre.name).join(', ')}</p>
          )}
          <Link to={`/mygames/${game.slug}`}>
            <button type="button">View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MyGames;
