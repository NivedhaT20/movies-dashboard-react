import { format as formatDateFn } from "date-fns";

export function calculatePercentChange(prev: number, current: number): number {
    if (prev === 0) return 0;
    return ((current - prev) / prev) * 100;
}

export function formatGenre(genres: string[]): string {
    return genres.map(g => g.charAt(0).toUpperCase() + g.slice(1)).join(" • ");
}

export function formatTime(timestamp: number, format = "HH:mm"): string {
    return formatDateFn(new Date(timestamp), format);
}

// utils.ts (or top of Dashboard.tsx)
export const chunkMovies = <T,>(arr: T[], size: number): T[][] => {
    return Array.from(
        { length: Math.ceil(arr.length / size) },
        (_, i) => arr.slice(i * size, (i + 1) * size)
    );
};
