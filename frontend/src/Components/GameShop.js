//ComponentBranch

//Merk at disse skal ha en knapp "BUY" med mulighet 
//for å kjope som linker til kjopslenken

//Hent ut de 10 nyeste for visning på /gameshop (når du klikker linken "Visit Shop")

import GameCard from './GameCard';

export default function GameShop({ games }) {
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
                        <button className="buy-button">BUY</button>
                    </div>))}
        </section>
    )
} 