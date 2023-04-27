//ComponentBranch
//Litt usikker op den sluggen
import GameCard from './GameCard';

export default function MyGames({ games }) {
    console.log(games);
    return (
        <section className='mygames-view'>
            <h2>MY GAMES LIBRARY</h2>
            {games && games
                .filter((game) => game.genres.find((genre) => genre.slug === "role-playing-games-rpg")) // filter games by rpg genre
                .slice(0, 20) // select the first 20 games
                .map((game, index) => (
                    <GameCard
                        key={index}
                        title={game.name}
                        img={game.background_image}
                        genre={game.genres.map((genreList) => genreList.name).join(", ")}
                        slug={game.slug}
                    >
                    </GameCard>
                ))}
        </section>
    )

}