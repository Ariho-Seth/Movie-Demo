
const API_KEY= "e34812f1f270840feac63667305f8b42";
const BASE_URL= "https://api.themoviedb.org/3"




export const getPopularMovies= async()=>{
    console.log(API_KEY)
    const response= await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data= await response.json();
    return data.results;

}

export const searchMovies= async(query)=>{

    const response= await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data= await response.json();
    return data.results;

}