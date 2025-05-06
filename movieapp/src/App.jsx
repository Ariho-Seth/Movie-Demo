import { use, useEffect, useState } from "react"
import { useDebounce } from "react-use";
import Search from "./components/Search.jsx"
import Spinner from "./components/Spinner.jsx";
import MovieCard from "./components/MOvieCard.jsx";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}


function App() {

  const [moviesList, setMovieList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [debouncedSearchTerm, setdebouncedSearchTerm]= useState('');

 useDebounce(()=>setdebouncedSearchTerm(searchTerm), 500, [searchTerm])

  const fetchMovies = async (query='') => {

    const endPoint = query ? 
             `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}` :
             `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

    try {
      setLoading(true);

      const response = await fetch(endPoint, API_OPTIONS);

      if (!response.ok) throw new Error("Failed to fetch new Movies");
      const data = await response.json();
      console.log(data);
      if (data.response === false) {

        setErrorMessage(data.Error || "Failed to load movies")
        setMovieList([]);
        return;


      } else {
        setMovieList(data.results || []);
      }
    } catch (error) {
      setLoading(false);

      console.log(error);
      setErrorMessage(`Movies failed to load!`);

    } finally {
      setLoading(false);
    }
  }





  useEffect(() => {
    fetchMovies(debouncedSearchTerm);
  }, [debouncedSearchTerm])
  return (


    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./hero-img.png" alt="hero banner" />
          <h1>Find All the <span className="text-gradient">Movies </span> you'll Enjoy without the Hassle</h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        </header>
        <section className="all-movies" >
          <h2 className="mt-[40px]">All Movies</h2>
          {loading ? 
            <Spinner />
           : errorMessage ? <p>{errorMessage}</p> : 
          
          <ul className="movie-card">
            {moviesList.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
              
             ))}
          </ul>}
         
        </section>

      </div>

    </main>


  )
}

export default App
