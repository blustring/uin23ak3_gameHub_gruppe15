import { Link, Outlet } from "react-router-dom";

export default function Layout() {
    const userFromLocalStorage = JSON.parse(localStorage.getItem('user'));
    const username = userFromLocalStorage ? userFromLocalStorage.name : '';
    return (
        <div id="layoutContainer">
            <div className="header-nav">
                <header>
                    <div className="logo-container">
                        <Link to="/">
                            <h2>MACs Gamehub</h2>
                        </Link>
                    </div>
                </header>
                <nav className="nav-container">
                    <ul>
                        <li><Link to="/gameshop">Shop</Link></li>
                        <li><Link to="/mygames">My Games</Link></li>
                        <li><Link to="/myfavourites">Favourites</Link></li>
                        <li>{username}</li>
                        <li><Link to="/gameshop" onClick={() => localStorage.removeItem('user')}>Logout</Link></li>

                    </ul>
                </nav>
            </div>

            <div className="main-div">
                <main>
                    <Outlet />
                </main>
            </div>

            <div className="footer-div">
                <footer>
                    <p>Copyright © 2023</p> <p>The data used is from the API:<a href="https://rawg.io/"> https://rawg.io/ </a> </p>
                </footer>
            </div>
        </div >
    )
}
////Kilde: https://github.com/ackarlse/gitcollab/blob/main/src/components/Layout.js