// __mocks__/dashboardHooksMock.ts

export const mockMovieData = [
    {
        name: "Trolls",
        provider: "SkyCinema",
        genre: ["kids", "animation"],
        description: "Sampledescription",
        duration: 5580,
        totalViews: {
            total: 10266,
            "sky-go": 4853,
            "now-tv": 1493,
            "peacock": 3920,
        },
        prevTotalViews: {
            total: 11904,
            "sky-go": 6344,
            "now-tv": 898,
            "peacock": 4662,
        },
    },
];

export const mockViewsData = [
    { timestamp: 1625616000000, value: 1021936 },
    { timestamp: 1625618160000, value: 1011837 },
];

// 👇 Mocks for useFetchMovies and useFetchValues
export const mockUseFetchMovies = {
    data: mockMovieData,
    loading: false,
    error: null,
};

export const mockUseFetchValues = {
    data: mockViewsData,
    loading: false,
    error: null,
};
