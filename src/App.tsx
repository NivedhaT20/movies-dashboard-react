import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import 'bootstrap/dist/css/bootstrap.min.css';



const Dashboard = lazy(() => import("./pages/Dashboard"));
const MovieDetail = lazy(() => import("./pages/MovieDetails"));

const App = () => {
  return (
    <Suspense fallback={<ErrorPage message="Please wait, your dashboard is loading and will be ready shortly..." />}>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/movie/:movieName" element={<MovieDetail/>} />
      </Routes>
    </Suspense>
  );
};

export default App;
