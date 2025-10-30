import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import MovieCard from "../movieCard";
import { Link } from "react-router-dom";

const ActorDetails = ({ actor, movies }) => {
  return (
    <Box sx={{ padding: "2rem" }}>
      <Typography variant="h3">{actor.name}</Typography>
      <Typography variant="h6">Born: {actor.birthday}</Typography>
      <Typography variant="h6">Place of Birth: {actor.place_of_birth}</Typography>

      {actor.profile_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
          alt={actor.name}
          style={{ width: "300px", borderRadius: "10px", marginTop: "1rem" }}
        />
      )}

      <Paper sx={{ padding: "1rem", marginY: 2 }}>
        <Typography variant="body1">
          {actor.biography || "No biography available."}
        </Typography>
      </Paper>

      <Typography variant="h4" sx={{ marginTop: 3, marginBottom: 1 }}>
        Movies
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <Box key={movie.id} sx={{ width: 250 }}>
              <MovieCard
                movie={{
                  id: movie.id,
                  title: movie.title || movie.original_title,
                  poster_path: movie.poster_path,
                  release_date: movie.release_date,
                  vote_average: movie.vote_average || 0,
                }}
                action={() => null} // отключаем ошибку, если action не нужен
              />
            </Box>
          ))
        ) : (
          <Typography variant="body2">No movies found for this actor.</Typography>
        )}
      </Box>
    </Box>
  );
};

export default ActorDetails;
