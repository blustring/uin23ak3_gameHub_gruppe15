import GameCard from "./GameCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MyGames from "../lib/sanity/MyGames";


export default function Dashboard({ games }) {
  const [favoriteGames, setFavoriteGames] = useState([]);
  const slicedFavoriteGames = favoriteGames.slice(0, 2); // Slice the favoriteGames array to get only two games
  const [favoriteGamesCount, setFavoriteGamesCount] = useState(0);

  useEffect(() => {
    const favorites = Object.keys(localStorage).map((key) =>
      JSON.parse(localStorage.getItem(key))
    );
    setFavoriteGames(favorites);
    setFavoriteGamesCount(favorites.length);
  }, []);

  useEffect(() => {
    // retrieve favorite games from localStorage
    const favorites = Object.keys(localStorage).map((key) =>
      JSON.parse(localStorage.getItem(key))
    );
    setFavoriteGames(favorites);
  }, []);

  const handleBuyClick = (game) => {
    const searchTerm = encodeURIComponent(game.name);
    const steamUrl = `https://store.steampowered.com/search/?term=${searchTerm}`;
    window.open(steamUrl, "_blank");
  };

  const handleRemoveFromFavorites = (id) => {
    // remove game from localStorage
    localStorage.removeItem(id);
    // remove game from favoriteGames state
    setFavoriteGames(favoriteGames.filter((game) => game.id !== id));
  };
   

  return (
    <main>
      <section id="gameshop">
        <h4>GAMESHOP</h4>
        <Link to="/gameshop">
          <button type="button">Visit shop</button>
        </Link>
        {games
          ?.sort((a, b) => new Date(b.released) - new Date(a.released))
          .slice(0, 3)
          .map((game, index) => (
            <div key={index}>
              <GameCard
                title={game.name}
                img={game.background_image}
                genre={game.genres.map((genreList) => genreList.name).join(", ")}
                slug={game.slug}
              />
              <button type="button" onClick={() => handleBuyClick(game)}>
                Buy
              </button>
            </div>
          ))}
      </section>

      <section id="myGames">
        <MyGames games={games} displayCount={4} />
        <Link to="/mygames">
          <button type="button">Go to library</button>
        </Link>
      </section>

      <section id="my-favorites">
      <h4>My Favourites ({favoriteGamesCount} games)</h4>
      {slicedFavoriteGames.map((game) => (
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
      <Link to="/myfavourites">
          <button type="button">Go to favourites</button>
        </Link>
    </section>

    </main>
  );
}
