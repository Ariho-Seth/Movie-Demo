import MovieCard from "../components/MovieCard";

const Home = () => {
    const movies = [
        { id: 1, title: "John Wick", release_date: "05-11-2021" },
        { id: 2, title: "Fast & Furious", release_date: "09-01-2023" },
        { id: 3, title: "Before", release_date: "15-07-2025" },
        { id: 4, title: "Working Man", release_date: "07-03-2020" }
    ];
    const handleSearch=()=>{

    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="search movies here..." className="search-input" />
                <button type="submit" className="search-btn">Search</button>
            </form>
            <div className="movies-grid">
                {movies.map((movie, key) => (
                    <MovieCard movie={movie} key={key} />
                
                ))}
            </div>
        </div>
    )

}
export default Home;