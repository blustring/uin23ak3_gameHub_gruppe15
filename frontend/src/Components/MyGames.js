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

    useEffect(() => {
      console.log(gamesByGenre); // Log the values in the console
    }, [gamesByGenre]);

    return (
<section class="gameshop-view">
  <h2>MY GAMES LIBRARY</h2>
      <div class="gameshop-grid">
    {gamesByGenre.map((game, index) => (

      
<div key={index} class="game-card-wrapper">
<div class="game-card-img">
  <img src={game.background_image} alt={game.name} />
</div>
<div class="game-card-details">
  <h2>{game.name}</h2>
  <p>{game.genres.map((genreList) => genreList.name).join(", ")}</p>
  <a href={`/game/${game.slug}`} class="link">
    <button class="buy-button">More info</button>
  </a> </div> </div>
    ))}
  </div>
</section>

    );
}