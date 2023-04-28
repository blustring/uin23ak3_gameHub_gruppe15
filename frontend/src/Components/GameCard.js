//ComponentBranch
//GameCard, som viser et spillkort

import { Link } from "react-router-dom";

export default function GameCard({ title, img, genre, slug }) {
    return (
        <article className="game-card">

            {/*Et spill i dashboard, My Games-librariet og My Favourites skal kunne klikkes paa
             (enten hele spillkortet, eller med en knapp/lenke til et spill). 
             Tips: lag en ny property i objektene i games-arrayen kalt "slug" 
             med en pen variant av tittelen du kan bruke som parameter i URL/Routing 
             for aa peke til ett spill. Naar linken aapnes, 
             brukes GamePage for aa vise et enkelt spill med all informasjon knyttet til 
             dette spillet. Vi anbefaler aa bruke ruten /game/gametitle-as-slug for ett enkelt spill*/}
            <img src={img} alt={title} />
            <h4>{title}</h4>
            <p>{genre}</p>
            <Link to={`/game/${slug}`} className="link">
                <button>VIS MER</button>
            </Link>

        </article>
    )

}