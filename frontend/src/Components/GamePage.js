import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function GamePage({ onAddFavorite }) {
  const { slug } = useParams();
  const [game, setGame] = useState({});
  const [games, setGames] = useState([]);

  console.log(games);

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
    <section id="gamePageAlone">
      <div id="imgGamePage">
        <img src={game?.background_image} alt={game?.name} />
      </div>
      <div id="detailsGamePage">
        <h1>{game?.name}</h1>
        <p><b>Rating: </b>{game?.rating}</p>
        <p><b>Plot:</b> {game?.description_raw}</p>
        <p><b>Genre:</b> {game?.genres?.map((genreList) => genreList.name).join(", ")}</p>
        <p><b>Publisher:</b> {game?.publishers?.map((publisher) => publisher.name).join(", ")}</p>
        <p><b>Platforms:</b> {game?.platforms?.map((platform) => platform.platform.name).join(", ")}</p>
        <p><b>Tags:</b> {game?.tags?.map((tag) => tag.name).join(", ")}</p>
        <button className="btn-fav" onClick={handleAddToFavorite}>Add to favorites</button>
        <button className="buy-button" onClick={handleBuyClick}>Buy</button>
      </div>
    </section>
  );
}
