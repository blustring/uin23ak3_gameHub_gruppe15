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
              <div id="h3div">
                <h2>GAMESHOP</h2>
            </div>
            
               <div id="linkdiv" >
                <Link to="/gameshop" >
                    <button type="submit">Visit shop</button>
                  </Link>
                </div>  
              </div>       
                <div id="gameShopview">
                  {games
                      ?.sort((a, b) => new Date(b.released) - new Date(a.released)) // sort games by date
                      .slice(0, 3) // select the first 3 games
                      .map((game, index) => (
                        <div key={index} class="game-card-wrapper">
                          <div class="game-card-img">
                            <img src={game.background_image} alt={game.name} />
                          </div>
                          <div class="game-card-details">
                            <h2>{game.name}</h2>
                            <p>{game.genres.map((genreList) => genreList.name).join(", ")}</p>
                            <a href={`/game/${game.slug}`} class="link">
                              <button class="buy-button">More info</button>
                            </a>
                            <button class="buy-button" onClick={() => handleBuyClick(game)}>BUY</button>
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
                        <div key={index} class="game-card-wrapper">
                          <div class="game-card-img">
                            <img src={game.background_image} alt={game.name} />
                          </div>
                          <div class="game-card-details">
                            <h2>{game.name}</h2>
                            <p>{game.genres.map((genreList) => genreList.name).join(", ")}</p>
                            <a href={`/game/${game.slug}`} class="link">
                              <button class="buy-button">More info</button>
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
            <h2>MY FAVOURITES</h2>
              {favoriteGames.slice(0, 3).map((game) => (
                <div key={game.id} class="game-card-wrapper">
                  <div class="vl"></div> <div class="game-card-img">
                      <img src={game.background_image} alt={game.name} />
                      <h2>{game.name}</h2>
                  </div>
                  <div class="game-card-details">
                    
            
                  </div>
                </div>
              ))}
              <Link to="/myfavourites">
                <button type="button">Go to favourites</button>
              </Link>
        </section>
    

      </div>
             
         
           
    )
}