import { useParams, useNavigate } from "react-router-dom";
import { useFetchMovies } from "../services/useFetchMovies";
import { formatGenre } from "../utils/format";
import { Button } from "react-bootstrap";

import "../styles/movie-details.css";

const MovieDetail = () => {
  const { movieName } = useParams<{ movieName: string }>();
  const navigate = useNavigate();
  const {
    data: movies,
    loading: loadingMovies,
    error: errorMovies,
  } = useFetchMovies();

  if (loadingMovies) return <p>Loading movie details...</p>;
  if (errorMovies) return <p>Error loading movie details: {errorMovies}</p>;

  const decodedName = decodeURIComponent(movieName || "");
  const movie = movies?.find((m) => m.name === decodedName);

  if (!movie) return <p>Movie not found.</p>;

  const {
    videoImage,
    name,
    provider,
    genre,
    totalViews,
    prevTotalViews,
    description,
  } = movie;

  const extractDuration = (text: string): string | null => {
    const match = text.match(/\((\d+)\s*mins\)$/);
    return match ? `${match[1]} mins` : null;
  };

  const movieDuration = extractDuration(description);

  return (
    <div
      className="movie-detail-page"
      style={{
        backgroundImage: `url(${videoImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="background-layer">
        <Button
          onClick={() => navigate(-1)}
          style={{ marginBottom: 16 }}
          variant="secondary"
        >
          Back
        </Button>
        <h1 className="movie-title">
          {name} ({provider})
        </h1>
        <p className="movie-description">
          {description.replace(/\(\d+\s*mins\)$/, "").trim()}
        </p>

        <p>
          <strong>Genre:</strong>{" "}
          <span className="movie-description">{formatGenre(genre)}</span>
        </p>
        <p>
          <strong>Duration:</strong>
          <span className="movie-description"> {movieDuration}</span>
        </p>
        <p>
          <strong>Views</strong>
        </p>
        <div className="view-board">
          <div>
            <span>
              <strong>Today</strong>
            </span>
            {Object.entries(totalViews).map(([platform, value]) => (
              <div key={platform}>
                {platform.toUpperCase()}:
                <span className="movie-description"> {value}</span>
              </div>
            ))}
          </div>

          <div>
            <span>
              <strong>Yesterday</strong>
            </span>
            {Object.entries(prevTotalViews).map(([platform, value]) => (
              <div key={platform}>
                {platform.toUpperCase()}:
                <span className="movie-description"> {value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
