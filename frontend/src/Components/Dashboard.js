//ComponentBranch...
import GameCard from "./GameCard";
import { Link } from "react-router-dom";
//Et spill i dashboard, My Games-librariet og My Favourites skal kunne klikkes paa
// (enten hele spillkortet, eller med en knapp/lenke til et spill).

export default function Dashboard({ games, getGames }) {
    console.log("Adventure games: ", games.filter((game) => game.genres.find((genre) => genre.slug === "Racing")).length);
    // Define the handleBuy function
    function handleBuy(game) {
        // Implement the logic for buying the game here
        console.log(`Buy ${game.name}`);
    }

    return (
        <main>
            <section id="gameshop">
                {/* For GameShop, hent ut de 3 nyeste spillene for visning i dashboard.Skal ha en knapp BUY */}
                <h4>GAMESHOP</h4>
                <Link to="/gameshop">
                    <button type="submit">Visit shop</button>
                </Link>


                {games
                    ?.sort((a, b) => new Date(b.released) - new Date(a.released)) // sort games by date
                    .slice(0, 3) // select the first 3 games
                    .map((game, index) => (
                        <div key={index}>
                            <GameCard
                                title={game.name}
                                img={game.background_image}
                                genre={game.genres.map((genreList) => genreList.name).join(", ")}
                                slug={game.slug}
                            >

                            </GameCard>
                            <button onClick={() => handleBuy(game)}>Buy</button>
                        </div>
                    ))
                }


            </section>

            <section id="myGames">
                <h4>My GAMES-LIBRARY</h4>
                {games && games
                    .filter((game) => game.genres.find((genre) => genre.slug === "role-playing-games-rpg")) // filter games by rpg genre
                    .slice(0, 4) // select the first 4 games
                    .map((game, index) => (
                        <GameCard
                            key={index}
                            title={game.name}
                            img={game.background_image}
                            genre={game.genres.map((genreList) => genreList.name).join(", ")}
                            slug={game.slug}
                        >

                        </GameCard>
                    ))
                }
                <Link to="/mygames">
                    <button type="submit">Go to library</button>
                </Link>
            </section>

            <section id="myFavourites">
                {/*SE oppgavebeskrivelse for funksjonaliteter i favorittseksjonen*/}
                {/*Hent 2 filmer*/}
                <h4>MY FAVOURITES</h4>
                <button type="submit" /* onClick={getMyFavourites} */ >Go to favourites</button>
            </section>
        </main>
    )
}