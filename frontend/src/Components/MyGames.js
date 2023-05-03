//ComponentBranch
//Litt usikker op den sluggen
import React, { useState, useEffect } from 'react';
import GameCard from './GameCard';


export default function MyGames() {
    const getGamesByGenre = async () => {
        const response = await fetch('https://api.rawg.io/api/games?key=e00c96374e5247b58471e9ee8f5e4770&genres=role-playing-games-rpg&page_size=20');
        const data = await response.json();
        return data.results;
    };


    const [gamesByGenre, setGamesByGenre] = useState([]);

    useEffect(() => {
        getGamesByGenre().then((data) => {
            setGamesByGenre(data);
        });
    }, []);

    return (
        <section className='mygames-view'>
            <h2>MY GAMES LIBRARY</h2>
            {gamesByGenre.map((game, index) => (

                <GameCard
                    key={index}
                    title={game.name}
                    img={game.background_image}
                    genre={game.genres.map((genreList) => genreList.name).join(", ")}
                    slug={game.slug}
                />
            ))}
        </section>
    );
}
