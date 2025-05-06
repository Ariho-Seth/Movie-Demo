import { createContext, useContext, useEffect, useState } from "react";

const MovieContext= createContext();

export const useMovieContext=()=> useContext(MovieContext);

export const MovieProvider=({children})=>{

    const[favorites, setFavorites]= useState([]);

    useEffect(()=>{

        const storedFavs= localStorage.getItem("favorites");

        if(storedFavs) setFavorites(JSON.parse(storedFavs))
    }, []);

    useEffect(()=>{
       localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    const addToFavorites=(newFavoriteMovie)=>{
        setFavorites(prev =>[...prev, newFavoriteMovie]);
    }

   const removeFromFavorites=(movieId)=>{
            setFavorites(prev => prev.filter(movie => movie.id !== movieId))
   }

  const isFavorite=(movieId)=>{
       return favorites.some(movie => movie.id === movieId);
  }


    const resources={ favorites, addToFavorites, removeFromFavorites, isFavorite};
    return(
        <MovieContext.Provider value={resources}>
            {children}
        </MovieContext.Provider>
    )
}