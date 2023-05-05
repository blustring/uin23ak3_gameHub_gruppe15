import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function GamePage({ onAddFavorite }) {
    const { slug } = useParams();
    const [game, setGame] = useState({});
    const [games, setGames] = useState([]);
  
    const API_KEY = "e00c96374e5247b58471e9ee8f5e4770";
  
    useEffect(() => {
      fetch(`https://api.rawg.io/api/games/${slug}?key=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
          setGame(data);
        })
        .catch((error) => console.log(error));
    }, [slug]);
  
    useEffect(() => {
      fetch(`https://api.rawg.io/api/games?search=${game?.name}&key=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
          setGames(data.results);
        })
        .catch((error) => console.log(error));
    }, [game]);
  
    const handleAddToFavorite = () => {
      onAddFavorite({
        id: game.id,
        name: game.name,
        background_image: game.background_image,
      });
      localStorage.setItem(game.id, JSON.stringify(game));
    };
  
    const handleBuyClick = () => {
      const searchTerm = encodeURIComponent(game?.name);
      const steamUrl = `https://store.steampowered.com/search/?term=${searchTerm}`;
      window.open(steamUrl, "_blank");
    };
      
  
    return (
      <section class="game-page">
      <div id="gamePage-Image">
        <img src={game?.background_image} alt={game?.name} />
      </div>
    
      <div class="gamePage-title">
        <h1>{game?.name}</h1>
      </div>
    
      <div class="games-rating">
        <p>{game?.rating}</p>
      </div>
    
      <div class="game-data">
        <p>Plot: {game?.description_raw}</p>
        <p>Genre: {game?.genres?.map((genreList) => genreList.name).join(", ")}</p>
        <p>Publisher: {game?.publishers?.map((publisher) => publisher.name).join(", ")}</p>
        <p>Platforms: {game?.platforms?.map((platform) => platform.platform.name).join(", ")}</p>
      </div>
    
      <div class="game-details">
        <p>Tags: {game?.tags?.map((tag) => tag.name).join(", ")}</p>
      </div>
    
      <button class="add-to-favorites" onClick={handleAddToFavorite}>Add to favorites</button>
    
      <div>
        <button class="buy" onClick={handleBuyClick}>Buy</button>
      </div>
    </section>
    
    
    
    

    );
  }