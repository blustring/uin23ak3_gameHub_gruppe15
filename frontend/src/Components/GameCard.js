//ComponentBranch
//GameCard, som viser et spillkort

import { Link } from "react-router-dom";

export default function GameCard({ title, img, genre, slug }) {
    return (
        <article className="game-card">
            <img src={img} alt={title} />
            <h4>{title}</h4>
            <p>{genre.join(", ")}</p>
            <Link to={slug} className="link"></Link>
        </article>
    )
}