import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Recommendations = ({ movies }) => {
  if (!movies || movies.length === 0) return <p>No recommendations.</p>;

  return (
    <div style={{ display: "flex", gap: "1rem", overflowX: "auto" }}>
      {movies.map((m) => (
        <Card key={m.id} sx={{ minWidth: 150 }}>
          <Link to={`/movies/${m.id}`}>
            <CardMedia
              component="img"
              image={
                m.poster_path
                  ? `https://image.tmdb.org/t/p/w200${m.poster_path}`
                  : "https://via.placeholder.com/200x300?text=No+Image"
              }
              alt={m.title}
            />
          </Link>
          <CardContent>
            <Typography variant="subtitle1">{m.title}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Recommendations;
