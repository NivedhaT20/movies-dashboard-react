export interface ViewPoint {
    timestamp: number;
    value: number;
}

export interface Movie {
    name: string;
    totalViews: {
        total: number;
        "sky-go": number;
        "now-tv": number;
        "peacock": number;
    };
    prevTotalViews: {
        total: number;
        "sky-go": number;
        "now-tv": number;
        "peacock": number;
    };
    description: string;
    duration: number;
    provider: string;
    genre: string[];
    videoImage: string
}
