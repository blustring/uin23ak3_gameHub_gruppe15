import { useState } from "react";
import useAuthentication from '../lib/sanity/userAuthentication';

export default function GameShop({ games }) {
  const [cart, setCart] = useState([]);

  //useAuthentication();

  const handleBuyClick = (game) => {
    const searchTerm = encodeURIComponent(game.name);
    const steamUrl = `https://store.steampowered.com/search/?term=${searchTerm}`;
    window.open(steamUrl, "_blank");
    setCart([...cart, game]);
  };


  console.log(games);



  return (

    <section className="gameshop-view">
      <h2>GAMESHOP</h2>

      <div className="gameshop-grid">
        {games
          ?.sort((a, b) => new Date(b.released) - new Date(a.released))
          .slice(0, 10)
          .map((game, index) => (
            <div key={index} className="game-card-wrapper">
              <div className="game-card-img">
                <img src={game.background_image} alt={game.name} />
              </div>
              <div className="game-card-details">
                <h2>{game.name}</h2>
                <p>{game.genres.map((genreList) => genreList.name).join(", ")}</p>
                <a href={`/game/${game.slug}`} className="link">
                  <button >More info</button><button onClick={() => handleBuyClick(game)}>BUY</button>
                </a>

              </div>
            </div>
          ))}
      </div>
    </section>



  )
}