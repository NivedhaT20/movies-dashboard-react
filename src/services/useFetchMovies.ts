import { useFetch } from "./useFetch";
import type { Movie } from "./types";

export function useFetchMovies() {
    return useFetch<Movie[]>("https://my-json-server.typicode.com/alb90/aieng-tech-test-assets/data");
}
