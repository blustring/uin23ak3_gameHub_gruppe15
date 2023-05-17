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

    <div id="dashboardContainer">
      <section id="gameshop">
        <div className="gridt">

          <h2>GAMESHOP</h2>


          <div id="linkdiv" >
            <Link to="/gameshop" >
              <button type="submit">Visit shop</button>
            </Link>
          </div>
        </div>
        <div className="gameshop-grid" id="dashboardBorder">
          {games
            ?.sort((a, b) => new Date(b.released) - new Date(a.released))
            .slice(3, 6)
            .map((game, index) => (
              <div key={index} className="game-card-wrapper" >
                <div className="game-card-img">
                  <img src={game.background_image} alt={game.name} />
                </div>
                <div className="game-card-details">
                  <h2>{game.name}</h2>
                  <p>{game.genres.map((genreList) => genreList.name).join(", ")}</p>
                  <a href={`/game/${game.slug}`} className="link">
                    <button >More info</button><button  onClick={() => handleBuyClick(game)}>BUY</button>
                  </a>

                </div>
              </div>
            ))}
        </div>
      </section>

      <section id="myGames">
        <h2>MY GAMES-LIBRARY</h2>

        <div id="libraryView">
          {games
            ?.filter((game) => game.genres.find((genre) => genre.slug === "role-playing-games-rpg"))
            .slice(0, 4)
            .map((game, index) => (
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
        <div>
          <Link to="/mygames">
            <button type="submit">Go to library</button>
          </Link>
        </div>
      </section>



      <section id="myFavourites">
        <div className="vl">
          <h2>MY FAVOURITES</h2>

          {favoriteGames.slice(0, 2).map((game) => (
            <div key={game.id} className="game-card-wrapper">
              <div className="game-card-img">
                <img src={game.background_image} alt={game.name} />
                <h2>{game.name}</h2>
              </div>

            </div>
          ))}
          <Link to="/myfavourites">
            <button type="button">Go to favourites</button>
          </Link>
        </div>

      </section>


    </div>



  )
}
