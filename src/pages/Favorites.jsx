
import { useMovieContext } from "../components/contexts/MovieContext";
import MovieCard from "../components/MovieCard";
import "../css/Favorites.css"
const Favorites = () => {

    const { favorites } = useMovieContext();

    if(favorites) {
        return (
            <div className="favorites"> 
                <h2>Your Favorite Movies</h2>
                <div className="movies-grid">
                    {favorites.map((movie, key) => (<MovieCard movie={movie} key={key} />))}
                </div>

            </div>
            
        )

    }
        return (
            <div className="favorites-empty">
                <h2>No Favorites Here</h2>
                <p>Your Favorites will be showed here</p>
            </div>
        );
    }
export default Favorites;