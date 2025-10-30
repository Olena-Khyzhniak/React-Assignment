import React from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getActorDetails, getActorsMovies } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import MovieList from "../components/movieList";

const ActorPage = () => {
  const { id } = useParams();

  const { data: actor, isLoading: isActorLoading } = useQuery({
    queryKey: ['actor', { id }],
    queryFn: getActorDetails
  });


  const { data: movies, isLoading: isMoviesLoading } = useQuery({
  queryKey: ['actorMovies', { id }],
  queryFn: getActorsMovies
});


  

   if (isActorLoading || isMoviesLoading) return <Spinner />;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{actor.name}</h1>
      <p>Born: {actor.birthday}</p>
      <p>Place of Birth: {actor.place_of_birth}</p>
      <p>{actor.biography}</p>

      <h3>Movies</h3>
    <MovieList movies={movies?.cast || []} />
    </div>
  );
};

export default ActorPage;
