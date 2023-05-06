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
    console.log(games[0]);
  }, []);

  async function fetchGames() {
    const query = `*[_type == "game"] | order(publishedAt desc) [0...9] {
      _id,
      name,
      releaseDate,
      summary,
      coverImage,
      "slug": slug.current
    }`;
    const fetchedGames = await sanityClient.fetch(query);
    console.log(fetchedGames);
    return fetchedGames;
  }
  


  return (
    <div>
      <h1>My Games</h1>
      <ul>
        {games.map(game => (
          <li key={game._id}>
            <h2>{game.name}</h2>
            <img src={game.coverImage} alt={game.name} />
            <p>{game.summary}</p>
            <p>Release Date: {game.releaseDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyGames;
