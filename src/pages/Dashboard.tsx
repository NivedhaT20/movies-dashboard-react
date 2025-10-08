import { useState, useMemo } from "react";
import { useFetchMovies } from "../services/useFetchMovies";
import { useFetchValues } from "../services/useFetchValues";
import { chunkMovies } from "../utils/format";
import MovieCard from "../components/Movies";
import Chart from "../components/Chart";
import Header from "../components/Header";
import ErrorPage from "./ErrorPage";
import Footer from "../components/Footer";
import { Carousel } from "react-bootstrap";
import "../styles/dashboard.css";


const Dashboard = () => {
  const {
    data: movies,
    loading: loadingMovies,
    error: errorMovies,
  } = useFetchMovies();
  const {
    data: views,
    loading: loadingViews,
    error: errorViews,
  } = useFetchValues();
  const [searchTerm, setSearchTerm] = useState("");

  // Memoize the filtered movies
  const filteredMovies = useMemo(() => {
    if (!movies) return [];
    const trimmedSearch = searchTerm.trim().toLowerCase();
    return trimmedSearch
      ? movies.filter((movie) =>
          movie.name.toLowerCase().includes(trimmedSearch)
        )
      : movies;
  }, [movies, searchTerm]);

  const groupedMovies = useMemo(
    () => chunkMovies(filteredMovies, 5),
    [filteredMovies]
  );

  // Messages to be displayed during app load or error
  if (loadingMovies || loadingViews)
    return (
      <ErrorPage message="Your dashboard is loading and will be ready shortly..." />
    );
  if (errorMovies)
    return <ErrorPage message={`Error loading movies: ${errorMovies}`} />;
  if (errorViews)
    return <ErrorPage message={`Error loading views: ${errorViews}`} />;

  return (
    <div className="dashboard-container">
      <Header />
      <div style={{ padding: 24 }}>
        <div className="container-content">
          <div className="container-content-text">View Trends Over Time</div>
          <input
            type="text"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
            aria-label="Search movies"
          />
        </div>

        {views && <Chart data={views} />}

        {filteredMovies.length > 0 ? (
          <Carousel slide={false} controls={false}>
            {groupedMovies.map((group, index) => (
              <Carousel.Item key={index}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px",
                    flexWrap: "nowrap", 
                  }}
                >
                  {group.map((movie) => (
                    <div
                      key={movie.name}
                      style={{
                        flex: "0 0 20%", // fixed width: 20% of container for 5 cards
                        maxWidth: "20%",
                        boxSizing: "border-box",
                      }}
                    >
                      <MovieCard movie={movie} />
                    </div>
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <p>No movies match your search.</p>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default Dashboard;
