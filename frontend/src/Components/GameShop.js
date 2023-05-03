import GameCard from './GameCard';
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
        <section className='gameshop-view'>
            <h2>GAMESHOP</h2>
            {games
                ?.sort((a, b) => new Date(b.released) - new Date(a.released)) // sort games by date
                .slice(0, 10) // select the first 10 games
                .map((game, index) => (
                    <div key={index} className="game-card-wrapper">
                        <GameCard
                            title={game.name}
                            img={game.background_image}
                            genre={game.genres.map((genreList) => genreList.name).join(", ")}
                            slug={game.slug}
                        />
                        <button className="buy-button" onClick={() => handleBuyClick(game)}>BUY</button>
                    </div>))}
        </section>
    )
}
