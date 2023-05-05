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
 <section class="gameshop-view">   
 <h2>My Favorites</h2>
  
  <div class="gameshop-grid">
    {favoriteGames.map((game) => (
      <div key={game.id} class="game-card-wrapper">
          <div class="game-card-img">
            <img src={game.background_image} alt={game.name} />
          </div>
          <div class="game-card-details">
            <h4>{game.name}</h4> <button onClick={() => handleRemoveFromFavorites(game.id)}>
            Remove from Favourites
          </button> 
            </div>      
        
           </div>
    ))} 
      
  </div>
  
</section>

  );
}