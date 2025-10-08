import { useFetch } from "./useFetch";
import type { ViewPoint } from "./types";

export function useFetchValues() {
    return useFetch<ViewPoint[]>("https://my-json-server.typicode.com/alb90/aieng-tech-test-timeseries/data");
}
