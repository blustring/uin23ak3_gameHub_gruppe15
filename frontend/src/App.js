import './css/main.css';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react';

import Layout from './Components/Layout';
import GameShop from './Components/GameShop';
import MyGames from './Components/MyGames';
import MyFavourites from './Components/MyFavourites';
import GamePage from './Components/GamePage';
import Dashboard from './Components/Dashboard';

export default function App() {
  const [games, setGames] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const getGames = async () => {
    //default page_size=20 
    //setting page_size=100 to get enough games
    fetch(`https://api.rawg.io/api/games?key=e00c96374e5247b58471e9ee8f5e4770&page_size=100`)
      .then(response => response.json())
      .then(data => setGames(data.results))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    getGames()
  }, [])

  const handleAddFavorite = (game) => {
    setFavorites(prevFavorites => [...prevFavorites, game])
  }

  return (
    <Routes>
      <Route element={<Layout onAddFavorite={handleAddFavorite} />}>
        <Route index element={<Dashboard games={games} getGames={getGames} />} />
        <Route path='/game/:slug' element={<GamePage games={games} onAddFavorite={setFavorites} />} />
        <Route path="/gameshop" element={<GameShop games={games} getGames={getGames} />} />
        <Route path="/mygames" element={<MyGames games={games} getGames={getGames} />} />
        <Route path="/myfavourites" element={<MyFavourites favorites={favorites} />} />
      </Route>
    </Routes >
  );
}
