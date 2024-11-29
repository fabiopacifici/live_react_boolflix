import { createContext, useContext, useEffect, useState } from 'react';
const GlobalContext = createContext();

/**
 * The GlobalContextProvider component is responsible for managing the global state of the application.
 *
 * It provides a context that can be consumed by any component in the application,
 * allowing them to access and update the global state as needed.
 *
 * @param {ReactNode} children - The child components to render inside the provider.
 */
function GlobalContextProvider({ children }) {

  const [movies, setMovies] = useState([])
  const [serchText, setSearchText] = useState('')


  const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;
  const base_movies_api_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${serchText}`;




  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}`)
      .then((res) => res.json())
      .then(({ results }) => {
        console.log(results);

        setMovies(results);
      });

  }, [])




  /**
   * Handles search text submit event.
   *
   * Fetches movie data from The Movie Database API based on the search query,
   * and updates the movies state with the received results.
   *
   * @param {Event} e - The submit event.
   */
  function HandleSearchTextSubmit(e) {
    e.preventDefault();
    console.log(base_movies_api_url);

    // fetch the data
    fetch(base_movies_api_url)
      .then((res) => res.json())
      .then(({ results }) => {
        console.log(results);

        setMovies(results);
      });


    // reset the search text
    //setSearchText('');
  }




  // sets the values for the provider
  const values = {
    movies,
    setMovies,
    serchText,
    setSearchText,
    base_movies_api_url,
    HandleSearchTextSubmit
  }



  return (
    <GlobalContext.Provider value={values}>
      {children}
    </GlobalContext.Provider>
  )

}


/**
 * A custom hook to consume the GlobalContext.
*
 * Provides a direct access to the context values.
*
 * @returns The context values as an object.
 */
function useGlobalContext() {
  return useContext(GlobalContext);
}



export { GlobalContextProvider, useGlobalContext };


