import React, { useEffect, useState } from 'react';
//import { Link } from 'react-router-dom';
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

    <section className="gameshop-view">
      <h2>MY GAMES-LIBRARY ({gameCount} games)</h2>
      <div className="gameshop-grid">
        {displayedGames.map((game) => (
          <div key={game.id} className="game-card-wrapper">
            <div className="game-card-img">
              <img src={game.image} alt={game.name} />
            </div>
            <div className="game-card-details">
              <h2>{game.name}</h2>
              {game.gameGenre !== null && (
                <p>{game.gameGenre.map((genre) => genre.name).join(', ')}</p>
              )}<a href={`/mygame/${game.slug}`} className="link">
                <button >View Details</button></a>
            </div>
          </div>

        ))}

      </div>

    </section>


  );
};

export default MyGames;
