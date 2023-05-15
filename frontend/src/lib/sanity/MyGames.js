import React, { useEffect, useState } from 'react';
import sanityClient from './sanityClient';

const MyGames = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function getGames() {
      const fetchedGames = await fetchGames();
      setGames(fetchedGames);
    }

    getGames();
  }, []);

  async function fetchGames() {
    const query = `*[_type == "game"] {
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
    const fetchedGames = await sanityClient.fetch(query);
    return fetchedGames;
  }

  return (
    <div>
      <h1>My Games</h1>
      <ul>
        {games.map(game => (
          <li key={game._id}>
            <h2>{game.name}</h2>
            <img src={game.image} alt={game.name} />
            <p>Genre: {game.genres.join(", ")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyGames;
