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
  const [games, setGames] = useState([])

  const getGames = async (type) => {
    let url;
    //Henter ut alt, usikker på om vi trenger denne
    if (type === "all") {
      url = "https://api.rawg.io/api/games?key=e00c96374e5247b58471e9ee8f5e4770";
    }
    //Skal hente ut de tre siste på dashboard
    else if (type === "gameshop") {
      url = "https://api.rawg.io/api/games?key=e00c96374e5247b58471e9ee8f5e4770&ordering=-released&page_size=3";
    }
    const response = await fetch(url);
    const data = await response.json();
    setGames(data.results);
  };

  useEffect(() => {
    getGames();
  }, []);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Dashboard games={games} getGames={getGames} />} />
        <Route path=':slug' element={<GamePage games={games} />} />
        <Route path="/gameshop" element={<GameShop games={games} />} />
        <Route path="/mygames" element={<MyGames />} />
        <Route path="/favourites" element={<MyFavourites />} />
      </Route>
    </Routes >
  );
}
