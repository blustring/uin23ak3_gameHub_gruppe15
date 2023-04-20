//ComponentBranch
//GamePage, som viser et spill med all informasjon

//import { useParams } from "react-router-dom"
//import { useState, useEffect } from "react";

export default function GamePage() {
    /*
        //ComponentBranch
        const { slug } = useParams()
        const [game, setGames] = useState({});
    
        useEffect(() => {
            fetch(`http://api.rawg.io/api/games?key=e00c96374e5247b58471e9ee8f5e4770&t=${slug}`)
                .then(response => response.json())
                .then(data => setGames(data))
                .catch(error => console.log(error));
        }, [slug]);
    
        return (
            //nav-meny inn her, ref singlegame.png ??
            <main>
                <section className="game-page" >
                    <div className="gamePage-img">
                        <img src={game.background_image} alt={game.name} />
                    </div>
    
                    <div className="gamePage-title">
                        <h1>{game.name}</h1>
                    </div>
    
                    <div className="movie-rating">
                        <p>{game.rating}</p>
                        {/*eller : <p>{game.ratings}</p> Er usikker på hvem som er riktig
                    Her skal det legges inn som en firkant med ratingverdi inni, 
                    og mulighet til å lagre som favoritt ved å trykke på hjertet
                    </div>
    
                    <div className="game-data">
                        <img src={game.image} alt={game.name} />
                        <h1>{game.name}</h1>
                        <p>Plot: {game.description}</p>
                        <p>Runtime: {game.playtime}</p>
                        <p>Publisher: {game.publishers}</p>
                        <p>Platforms: {game.platforms}</p>
                    </div>
    
                    <div className="game-details">
                        <p>Tags: {game.tags}</p>
                        {/*Tags skal være egne trykkbare knapper med tilhørende tags??
    
                    </div>
    
                </section>
            </main>
        )
    */
}