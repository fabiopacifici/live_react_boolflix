import { useGlobalContext } from "../contexts/GlobalContext"
import MediaCard from "./MediaCard";
export default function MovieList() {
  const { movies, serchText } = useGlobalContext()

  const flags = [
    'it',
    'de',
    'fr'
  ]
  //console.log(movies); { id, title, original, vote, lang, overview, poster_path }
  return (
    <>
      <section className="movie-list">

        <div className="p-3 bg-dark mb-4">
          <h2>{!serchText ? 'Popular movies' : 'Movies'}</h2>
        </div>


        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4">
            {movies && movies.map((movie, index) => (
              <MediaCard key={movie.id} title={movie.title} original={movie.original_title} vote={movie.vote_average} overview={movie.overview} poster={movie.poster_path} lang={movie.original_language} />
            ))}
          </div>
        </div>


      </section>
    </>
  )
}