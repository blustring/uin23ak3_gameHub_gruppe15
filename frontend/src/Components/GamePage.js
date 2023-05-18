import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import sanityClient from '../lib/sanity/sanityClient';
import useAuthentication from '../lib/sanity/userAuthentication';

export default function GamePage({ onAddFavorite }) {
  const { slug } = useParams();
  const [game, setGame] = useState({});

  useAuthentication();

  const API_KEY = "e00c96374e5247b58471e9ee8f5e4770";

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games/${slug}?key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setGame(data);
      })
      .catch((error) => console.log(error));
  }, [slug]);

  const handleAddToFavorite = () => {
    onAddFavorite({
      id: game.id,
      name: game.name,
      background_image: game.background_image,
    });
    localStorage.setItem(game.id, JSON.stringify(game));

    updateFavorits();
  };

  async function updateFavorits() {
    const transaction = sanityClient.transaction();
    
    try {
      //finn user id
      const userFromLocalStorage = JSON.parse(localStorage.getItem('user'));
      const currentUser = await sanityClient.getDocument(userFromLocalStorage._id);

      let oldFavorits = currentUser.favorits ?? [];
      if (oldFavorits.includes(game.id)) {
        // Since there is no change, dont go further and update sanity
        return;
      }

      oldFavorits.push(game.id);
  
      const updatedUser = {
        ...currentUser,
        favorits: oldFavorits,
      };
  
      // oppdater user med ny idListe
      await transaction.createOrReplace(updatedUser).commit();
      
      console.log('User updated successfully.');
    } catch (error) {
      console.error('Error updating:', error);
    }
  }

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
