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

  async function getGames(type) {
    let url;
    if (type === "all") {
      url = "https://api.rawg.io/api/games?key=6a68d1095df14ebb9f742dba2387e7ef";
    } else if (type === "gameshop") {
      url = "https://api.rawg.io/api/games?key=6a68d1095df14ebb9f742dba2387e7ef&ordering=-released&page_size=3";
    }
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  }
  

  useEffect(() => {
    getGames("all").then((data) => {
      setGames(data);
      console.log(data);
    });
  }, []);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Dashboard games={games} getGames={getGames} />} />
        <Route path=':slug' element={<GamePage games={games} />} />
        <Route path="/gameshop" element={<GameShop games={games} getGames={getGames} />} />
        <Route path="/mygames" element={<MyGames />} />
        <Route path="/favourites" element={<MyFavourites />} />
      </Route>
    </Routes >
  );
}
