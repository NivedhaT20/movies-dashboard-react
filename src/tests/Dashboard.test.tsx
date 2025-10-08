import { render, screen } from "@testing-library/react";
import Dashboard from "../pages/Dashboard";
import { BrowserRouter } from "react-router-dom";

jest.mock("../services/useFetchMovies", () => ({
  useFetchMovies: jest.fn(),
}));
jest.mock("../services/useFetchValues", () => ({
  useFetchValues: jest.fn(),
}));

import {
  mockUseFetchMovies,
  mockUseFetchValues,
} from "./mock-data/dashboard-mock";

import { useFetchMovies } from "../services/useFetchMovies";
import { useFetchValues } from "../services/useFetchValues";

describe("Dashboard", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders movies and chart when data is loaded", async () => {
    (useFetchMovies as jest.Mock).mockReturnValue(mockUseFetchMovies);
    (useFetchValues as jest.Mock).mockReturnValue(mockUseFetchValues);

    render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );

    expect(await screen.findByText("Trolls")).toBeInTheDocument();
    expect(screen.getByText("SkyCinema")).toBeInTheDocument();
    expect(screen.getByText("View Trends Over Time")).toBeInTheDocument();
  });
});
