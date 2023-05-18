
import React, { useState, useEffect } from 'react';



export default function MyGames() {
  const getGamesByGenre = async () => {
    const response = await fetch('https://api.rawg.io/api/games?key=e00c96374e5247b58471e9ee8f5e4770&genres=role-playing-games-rpg&page_size=20');
    const data = await response.json();
    return data.results;
  };


  const [gamesByGenre, setGamesByGenre] = useState([]);

  useEffect(() => {
    getGamesByGenre().then((data) => {
      setGamesByGenre(data);
    });
  }, []);

  useEffect(() => {
    console.log(gamesByGenre);
  }, [gamesByGenre]);

  return (
    <section className="gameshop-view">
      <h2>MY GAMES LIBRARY</h2>
      <div className="gameshop-grid">
        {gamesByGenre.map((game, index) => (

          <div key={index} className="game-card-wrapper">
            <div className="game-card-img">
              <img src={game.background_image} alt={game.name} />
            </div>
            <div className="game-card-details">
              <h2>{game.name}</h2>
              <p>{game.genres.map((genreList) => genreList.name).join(", ")}</p>
              <a href={`/game/${game.slug}`} className="link">
                <button >More info</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>

  );
}