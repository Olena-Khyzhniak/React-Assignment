import React, { useState, useEffect } from "react";
import { getUpcomingMovies } from "../api/tmdb-api";


export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [mustWatch, setMustWatch] = useState([]);
  const [myReviews, setMyReviews] = useState( {} ) 


  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)){
      newFavorites = [...favorites, movie.id];
    }
    else{
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites)
  };


  const addToMustWatch = (movie) => {
  setMustWatch((prevMustWatch) => {
    if (!prevMustWatch.includes(movie.id)) {
      const updated = [...prevMustWatch, movie.id];
      console.log("Must Watch list:", updated);
      return updated;
    }
    return prevMustWatch;
  });
};


  
  // We will use this function in the next step
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };


  const [upcomingMovieIds, setUpcomingMovieIds] = useState([]);

useEffect(() => {
  getUpcomingMovies().then((data) => {
    const ids = data.results.map((movie) => movie.id);
    setUpcomingMovieIds(ids);
  });
}, []);



    const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };
  console.log(myReviews);


  return (
    <MoviesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        addReview,
        upcomingMovieIds,
        mustWatch,
        addToMustWatch,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );

};

export default MoviesContextProvider;
