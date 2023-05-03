import { Link, Outlet } from "react-router-dom";
//import { Link, Outlet } from "react-router-dom";
//import Dashboard from "./Dashboard";
//test 
export default function Layout() {
    return (
        <div id="container">
            <header>
                <Link to="/">
                    <h3>MACs Gamehub</h3>
                </Link>
                <nav>
                    <ul>
                        <li><Link to="/gameshop">Shop</Link></li>
                        <li><Link to="/mygames">My Games</Link></li>
                        <li><Link to="/favourites">Favourites</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                {/* Usikker på hva som er best å bruke av <Outlet/>  og <Dashboard/> her */}
                {/*<Outlet />*/}
                <Outlet />
            </main>
            <footer>
                <p> The data used is from the API: <a href="https://rawg.io/"> https://rawg.io/ </a> </p>
            </footer>
        </div>
    )
}