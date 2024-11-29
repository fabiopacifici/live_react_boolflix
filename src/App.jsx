import { GlobalContextProvider, useGlobalContext } from "./contexts/GlobalContext"

function App() {


  function AppHeader() {
    const { searchText, setSearchText, base_movies_api_url, HandleSearchTextSubmit } = useGlobalContext()
    //console.log(base_movies_api_url);


    return (
      <header>

        <div className="logo">Boolflix</div>
        <form onSubmit={HandleSearchTextSubmit}>
          <input type="text" placeholder="Search..." onChange={(e) => setSearchText(e.target.value)} value={searchText} />

        </form>
      </header>

    )

  }


  function MovieList() {
    const { movies } = useGlobalContext()

    console.log(movies);
    return (
      <ul className="movie-list">
        {movies && movies.map((movie, index) => (
          <li key={index} style={{ borderBottom: '1px solid black', marginBottom: '1rem' }}>
            {movie.original_title} <br />
            {movie.title} <br />
            {movie.vote_average} <br />
            {movie.original_language}

          </li>
        ))}

      </ul>
    )
  }



  return (
    <>

      <GlobalContextProvider>

        <AppHeader />

        <main>
          <MovieList />
        </main>

      </GlobalContextProvider>


    </>
  )
}

export default App
