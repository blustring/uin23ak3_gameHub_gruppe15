import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from './sanityClient';
import useAuthentication from './userAuthentication';

const MyGames = ({ games, displayCount }) => {
  const [fetchedGames, setFetchedGames] = useState([]);
  const [gameCount, setGameCount] = useState(0); // Add gameCount state

  useAuthentication();

  const isFavorit = (id) => {
    const favGame = localStorage.getItem(id);

    return favGame !== null;
  };

  // 1. Få tak i innlogget user
  const userFromLocalStorage = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    async function fetchGames(id, user) {
      // 2. Hent ut ID på denne user (userId)
      const gamesQuery = `*[_type == "game" && $userId in connectedUser[]._ref]{
        id,
        slug,
        name,
        release_date,
        developer,
        publisher,
        gameGenre[]->,
        hoursPlayed,
        image,
        rating,
        summary,
        tags,
        developers,
        releaseDate,
        stores
      }`;
      const countQuery = `count(*[_type == "game" && $userId in connectedUser[]._ref])`; // GROQ query to count games

      const [fetchedGames, gameCount] = await Promise.all([
        sanityClient.fetch(gamesQuery, { userId: user._id }),
        sanityClient.fetch(countQuery, { userId: user._id })
      ]);

      setFetchedGames(fetchedGames);
      setGameCount(gameCount);
    }

    fetchGames(fetchGames.id, userFromLocalStorage);
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
              <p>Hours played:{game.hoursPlayed}</p>
              {game.gameGenre !== null && (
                <p>{game.gameGenre.map((genre) => genre.name).join(', ')}</p>
                
              )}<Link to={`/mygames/${game.slug}`}>
                <button type="button">View Details</button>
              </Link>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyGames;
