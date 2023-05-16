import React, { useState, useEffect } from "react";

export default function MyFavorites() {
  const [favoriteGames, setFavoriteGames] = useState([]);

  useEffect(() => {
    // retrieve favorite games from localStorage
    const favorites = Object.keys(localStorage).map((key) =>
      JSON.parse(localStorage.getItem(key))
    );
    setFavoriteGames(favorites);
  }, []);

  const handleRemoveFromFavorites = (id) => {
    // remove game from localStorage
    localStorage.removeItem(id);
    // remove game from favoriteGames state
    setFavoriteGames(favoriteGames.filter((game) => game.id !== id));
  };

  return (
    <div className="favorites-container">
      <h4>My Favourites </h4>
      {favoriteGames.map((game) => (
        <div key={game.id} className="favorite-game">
          <img src={game.background_image} alt={game.name} />
          <div className="game-info">
            <h3>{game.name}</h3>
            <button onClick={() => handleRemoveFromFavorites(game.id)}>
              Remove from Favorites
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
