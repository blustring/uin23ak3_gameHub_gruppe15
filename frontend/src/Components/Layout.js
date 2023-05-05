import { Link, Outlet } from "react-router-dom";
//import { Link, Outlet } from "react-router-dom";
//import Dashboard from "./Dashboard";
//test 
export default function Layout() {
    return (
        <div id="layoutContainer">
            <div class="header-nav">
            <header>
                <div class="logo-container">
                <Link to="/">
                    <h2>MACs Gamehub</h2>
                </Link>
                </div>
            </header>
                <nav class="nav-container">
                <ul>
                    <li><Link to="/gameshop">Shop</Link></li>
                    <li><Link to="/mygames">My Games</Link></li>
                    <li><Link to="/myfavourites">Favourites</Link></li>
                </ul>
                </nav>
            
            </div>

            

            <div className="main-div">
                <main>
                    {/* Usikker på hva som er best å bruke av <Outlet/>  og <Dashboard/> her */}
                    {/*<Outlet />*/}
                    <Outlet />
                </main>
            </div>
            
            <div className="footer-div">
                <footer>
                <p>Copyright © 2023</p> <p>The data used is from the API:<a href="https://rawg.io/"> https://rawg.io/ </a> </p>
            </footer>
            </div>
            
        </div>
    )
}