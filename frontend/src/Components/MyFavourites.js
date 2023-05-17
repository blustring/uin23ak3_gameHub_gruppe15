import { useState, useEffect } from "react";

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
    <section className="gameshop-view">
      <h2>MY FAVOURITES</h2>

      <div className="gameshop-grid">
        {favoriteGames.map((game) => (
          <div key={game.id} className="game-card-wrapper">
            <div className="game-card-img">
              <img src={game.background_image} alt={game.name} />
            </div>
            <div className="game-card-details"><button onClick={() => handleRemoveFromFavorites(game.id)}>
              Remove from Favourites
            </button>
              <h2>{game.name}</h2>
            </div>

          </div>
        ))}

      </div>

    </section>

  );
}