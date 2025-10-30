import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import MovieCard from "../movieCard";

const root = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  listStyle: "none",
  padding: 1.5,
  margin: 0,
};

const ActorDetails = ({ actor, movies }) => {
  return (
    <div style={{ padding: "2rem" }}>
      <Typography variant="h3">{actor.name}</Typography>
      <Typography variant="h6">Born: {actor.birthday}</Typography>
      <Typography variant="h6">Place of Birth: {actor.place_of_birth}</Typography>

      <Paper component="div" sx={{ ...root, marginY: 2 }}>
        <Typography variant="body1">
          {actor.biography || "No biography available."}
        </Typography>
      </Paper>

      <Typography variant="h4" sx={{ marginTop: 3, marginBottom: 1 }}>
        Movies
      </Typography>
      <Grid container spacing={2}>
        {movies?.map((movie) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ActorDetails;
