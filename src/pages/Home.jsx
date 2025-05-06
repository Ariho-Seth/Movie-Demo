import { useEffect, useState } from "react";
import { getPopularMovies, searchMovies } from "../services/api.js"
import MovieCard from "../components/MovieCard";
import "../css/Home.css"

const Home = () => {

    const [searchQuery, setSearchQuery] = useState();

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        const loadPopularMovies = async () => {
            try {
                setIsLoading(true)
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (error) {
                console.log(error)
                setError("Failed to Load Movies")
            } finally {
                setIsLoading(false)
            }
        }
        loadPopularMovies();

    }, [])

    const handleSearch = async(e) => {
        e.preventDefault();

   
        if(!searchQuery.trim()) return;
        if(isLoading) return;
        setIsLoading(true)
        try{
            
            const searhResults= await searchMovies(searchQuery);
            setMovies(searhResults);
        }catch(error){
            console.log(error)
            setError("Failed to search Movies")

        }finally{
            setIsLoading(false);
        }

      

    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text"
                    placeholder="search movies here..."
                    className="search-input"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)} />
                <button type="submit" className="search-btn">Search</button>
            
            </form>
           
                {isLoading ? (<div><p>Loading Movies...</p></div>) : 
                (<div className="movies-grid">
                    {movies.map(movie=>(
                        <MovieCard movie={movie} key={movie.id}/>
                    ))}

                </div>)}
            </div>
       
    )

}
export default Home;