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
            {games?.map((game, index) => (
                <GameCard key={index} title={game.name}
                    img={game.background_image} genre={game.genres}
                    slug={game.slug} />
            ))}

        </section>
    )
} 