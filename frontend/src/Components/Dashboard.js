//ComponentBranch
import GameCard from "./GameCard";
import { Link } from "react-router-dom";
//Et spill i dashboard, My Games-librariet og My Favourites skal kunne klikkes paa
// (enten hele spillkortet, eller med en knapp/lenke til et spill).

export default function Dashboard({ games, getGames }) {

    return (
        <main>
            <section id="gameshop">
                {/* For GameShop, hent ut de 3 nyeste spillene for visning i dashboard.Skal ha en knapp BUY */}
                <h4>GAMESHOP</h4>
                <Link to="/gameshop">
                    <button type="submit">Visit shop</button>
                </Link>

                {games?.map((game, index) => (
                    <GameCard key={index} title={game.name}
                        img={game.background_image}
                        genre={game.genres.map(genreList => genreList.name).join(", ")}
                        slug={game.slug} >
                        <button>BUY</button>
                    </GameCard>
                ))}



            </section>

            <section id="myGames">
                {/* For MyGames, hent 4 spill fra en valgri sjanger som vises i seksjonen My Games i dashboard, */}
                <h4>My GAMES-LIBRARY</h4>
                <button type="submit" /* onClick={getMyGames} */ >Go to library</button>
            </section>

            <section id="myFavourites">
                {/*SE oppgavebeskrivelse for funksjonaliteter i favorittseksjonen*/}
                <h4>MY FAVOURITES</h4>
                <button type="submit" /* onClick={getMyFavourites} */ >Go to favourites</button>
            </section>
        </main>
    )
}