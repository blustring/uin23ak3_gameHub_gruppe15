import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from './sanityClient';

const MyGamePage = () => {
  const [fetchedGame, setFetchedGame] = useState(null);
  const { slug } = useParams();
  const [game, setGame] = useState({});
  const API_KEY = "e00c96374e5247b58471e9ee8f5e4770";

  useEffect(() => {
    async function fetchGame() {
      const gameQuery = `*[_type == "game" && slug == $slug] {
        id,
        name,
        image
      }[0]`;

      const [fetchedGame] = await Promise.all([
        sanityClient.fetch(gameQuery, { slug })
      ]);

      setFetchedGame(fetchedGame);
      fetchGameFromApi(fetchedGame.id);
    }

    async function fetchGameFromApi(id) {
      fetch(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
          setGame(data);
        })
        .catch((error) => console.log(error));
    }

    fetchGame();
  }, [slug]);

  if (!fetchedGame) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={fetchedGame.image} alt={fetchedGame.name} />
      <h1>{fetchedGame.name}</h1>
      <p><b>Rating: </b>{game?.rating}</p>
      <p><b>Plot:</b> {game?.description_raw}</p>
      <p><b>Genre:</b> {game?.genres?.map((genreList) => genreList.name).join(", ")}</p>
      <p><b>Publisher:</b> {game?.publishers?.map((publisher) => publisher.name).join(", ")}</p>
      <p><b>Platforms:</b> {game?.platforms?.map((platform) => platform.platform.name).join(", ")}</p>
      <p><b>Tags:</b> {game?.tags?.map((tag) => tag.name).join(", ")}</p>
    </div>
  );
};

export default MyGamePage;
