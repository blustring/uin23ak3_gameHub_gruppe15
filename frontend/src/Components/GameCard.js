
export default function GameCard({ title, img, genre, slug }) {
  return (
    <article className="game-card">
      <div className="left">
        <img src={img} alt={title} />
      </div>
      <div className="right">
        <div>
          <h4>{title}</h4>
          <p>{genre}</p>
        </div>
        <div>
          <a href={`/game/${slug}`} className="link">
            <button>More info</button>
          </a>
        </div>
      </div>
    </article>

  )

}