import React, { useState, useEffect } from "react";


export default function MyFavorites() {
  const [favoriteGames, setFavoriteGames] = useState([]);
  const [favoriteGamesCount, setFavoriteGamesCount] = useState(0);


  useEffect(() => {
    // retrieve favorite games from localStorage
    const favorites = Object.keys(localStorage)
      .filter((key) => key !== "user")
      .map((key) => JSON.parse(localStorage.getItem(key)
    ));
    setFavoriteGames(favorites);
    setFavoriteGamesCount(favorites.length);
  }, []);

  const handleRemoveFromFavorites = (id) => {
    // remove game from localStorage
    localStorage.removeItem(id);
    // remove game from favoriteGames state
    setFavoriteGames(favoriteGames.filter((game) => game.id !== id));
  };

  return (
    <section className="gameshop-view">
      <h2>MY FAVOURITES ({favoriteGamesCount} GAMES) </h2>
      <div className="gameshop-grid">
        {favoriteGames.map((game) => (
          <div key={game.id} className="game-card-wrapper">
            <div className="game-card-details">
              <h2>{game.name}</h2>
            <div className="game-card-img">
              <img src={game.background_image} alt={game.name} />
            </div>

              <button id="removeFav" onClick={() => handleRemoveFromFavorites(game.id)}>
                Remove from Favorites
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
