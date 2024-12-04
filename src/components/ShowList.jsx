import MediaCard from "./MediaCard"
import { useGlobalContext } from "../contexts/GlobalContext"

export default function ShowList() {
  const { shows } = useGlobalContext()

  const flags = [
    'it',
    'de',
    'fr'
  ]
  //console.log(movies);
  return (
    <>

      <section className="movie-list">

        <div className="p-3 bg-dark mb-4">
          <h2>Tv Series</h2>
        </div>

        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4">

            {shows && shows.map((show) => (
              <MediaCard key={show.id} title={show.name} original={show.original_name} vote={show.vote_average} overview={show.overview} poster={show.poster_path} lang={show.original_language} />
            ))}

          </div>
        </div>
      </section>
    </>
  )
}