//ComponentBranch
//GamePage, som viser et spill med all informasjon

import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";

export default function GamePage() {

    //ComponentBranch
    const { slug } = useParams();
    const [game, setGames] = useState({});

    const API_KEY = "e00c96374e5247b58471e9ee8f5e4770";

    useEffect(() => {
        fetch(`http://api.rawg.io/api/games/${slug}?key=${API_KEY}`)
            .then(response => response.json())
            .then(data => setGames(data))
            .catch(error => console.log(error));
    }, [slug]);


    return (
        <section className="game-page" >
            <div className="gamePage-img">
                <img src={game.background_image} alt={game.name} />
            </div>

            <div className="gamePage-title">
                <h1>{game.name}</h1>
            </div>

            <div className="games-rating">
                <p>{game.rating}</p>
                {/*eller : <p>{game.ratings}</p> Er usikker på hvem som er riktig
                    Her skal det legges inn som en firkant med ratingverdi inni, 
        og mulighet til å lagre som favoritt ved å trykke på hjertet*/}
            </div>

            <div className="game-data">
                <img src={game.background_image} alt={game.name} />
                <h1>{game.name}</h1>
                <p>Plot: {game.description_raw}</p>
                <p>Genre:{game.genres.map((genreList) => genreList.name).join(", ")}</p>
                <p>Publisher: {game.publishers}</p>
                <p>Platforms: {game.platforms}</p>
            </div>

            <div className="game-details">
                <p>Tags: {game.tags}</p>
                {/*Tags skal være egne trykkbare knapper med tilhørende tags??*/}

            </div>
            <button>Legg til i favoritt</button>
            <div><button>BUY</button></div>
        </section>

    )

}