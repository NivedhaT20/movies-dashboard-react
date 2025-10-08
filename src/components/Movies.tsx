import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button} from "react-bootstrap";
import type { Movie } from "../services/types";
import { calculatePercentChange } from "../utils/format";
import "../styles/movies.css";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const navigate = useNavigate();
 
  const { name, totalViews, prevTotalViews, videoImage } = movie;

  const percentChange = calculatePercentChange(
    prevTotalViews.total,
    totalViews.total
  );

  const handleCardClick = () => {
    navigate(`/movie/${encodeURIComponent(name)}`);
  };

  return (
    <Card
      className="movie-card"
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleCardClick();
      }}
    >
      <Card.Body className="movie-card-body">
        <img src={videoImage} className="movie-image"></img>
      </Card.Body>
      <div className="overlay">
        <div className="movie-name-text">
          <span>{name}</span>
          <span
            style={{
              color: percentChange < 0 ? "red" : "hsl(142, 90%, 61%)",
              fontWeight: "bold",
              paddingLeft: "5px",
            }}
          >
            {percentChange < 0 ? "⬇️" : "⬆️"} {percentChange.toFixed(1)}%
          </span>
        </div>

        <Button variant="primary">Learn More</Button>
      </div>
    </Card>
  );
};

export default React.memo(MovieCard);
