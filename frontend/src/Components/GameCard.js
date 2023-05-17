

export default function GameCard({ title, img, genre, slug }) {
    return (
        <article class="game-card">
  <div class="left">
    <img src={img} alt={title} />
  </div>
  <div class="right">
    <div>
      <h4>{title}</h4>
      <p>{genre}</p>
    </div>
    <div>
      <a href={`/game/${slug}`} class="link">
        <button>More info</button>
      </a>
    </div>
  </div>
</article>

      
    )

}