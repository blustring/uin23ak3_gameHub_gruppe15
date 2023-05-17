import { useState } from "react";

export default function GameShop({ games }) {
  const [cart, setCart] = useState([]);

  const handleBuyClick = (game) => {
    const searchTerm = encodeURIComponent(game.name);
    const steamUrl = `https://store.steampowered.com/search/?term=${searchTerm}`;
    window.open(steamUrl, "_blank");
    setCart([...cart, game]);
  };

  console.log(games);

  return (

    <section class="gameshop-view">
      <h2>GAMESHOP</h2>

      <div class="gameshop-grid">
        {games
          ?.sort((a, b) => new Date(b.released) - new Date(a.released))
          .slice(0, 10)
          .map((game, index) => (
            <div key={index} class="game-card-wrapper">
              <div class="game-card-img">
                <img src={game.background_image} alt={game.name} />
              </div>
              <div class="game-card-details">
                <h2>{game.name}</h2>
                <p>{game.genres.map((genreList) => genreList.name).join(", ")}</p>
                <a href={`/game/${game.slug}`} class="link">
                  <button class="buy-button">More info</button><button class="buy-button" onClick={() => handleBuyClick(game)}>BUY</button>
                </a>

              </div>
            </div>
          ))}
      </div>
    </section>



  )
}