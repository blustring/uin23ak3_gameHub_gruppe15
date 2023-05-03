import GameCard from "./GameCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Dashboard({ games }) {
  const [favoriteGames, setFavoriteGames] = useState([]);

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
        <h4>My GAMES-LIBRARY</h4>
        {games
          ?.filter((game) => game.genres.find((genre) => genre.slug === "role-playing-games-rpg"))
          .slice(0, 4)
          .map((game, index) => (
            <GameCard
              key={index}
              title={game.name}
              img={game.background_image}
              genre={game.genres.map((genreList) => genreList.name).join(", ")}
              slug={game.slug}
            />
          ))}
        <Link to="/mygames">
          <button type="button">Go to library</button>
        </Link>
      </section>

      <section id="myFavourites">
        <h4>MY FAVOURITES</h4>
        {favoriteGames.slice(0, 4).map((game) => (
          <div key={game.id} className="favorite-game">
            <img src={game.background_image} alt={game.name} />
            <div className="game-info">
              <h3>{game.name}</h3>
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
