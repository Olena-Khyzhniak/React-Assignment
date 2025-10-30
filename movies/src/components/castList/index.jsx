import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const CastList = ({ cast }) => {
  if (!cast || cast.length === 0) return <p>No cast info.</p>;

  return (
  <div style={{ display: "flex", gap: "1rem", overflowX: "auto" }}>
      {cast.map((actor) => (

          <Link 
        
        to={`/actors/${actor.id}`} 
        key={actor.id}
        style={{ textDecoration: "none", color: "inherit" }}
      >



        <Card key={actor.id} sx={{ minWidth: 150 }}>
          <CardMedia
            component="img"
            image={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                : "https://via.placeholder.com/200x300?text=No+Image"
            }
            alt={actor.name}
          />
          <CardContent>
            <Typography variant="subtitle1">{actor.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {actor.character}
            </Typography>
          </CardContent>
        </Card>
        </Link>
      ))}
    </div>
  );
};

export default CastList;
