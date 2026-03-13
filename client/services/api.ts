import { WeatherData } from "@/types/weather";
import { Locations } from "@/types/locations";
import { TimezoneData } from "@/types/timezone";
import { AstronomyData } from "@/types/astronomy";

const BASE_URL = "/api"

async function baseFetch<T>(endpoint: string): Promise<T> {
    const res = await fetch(`${BASE_URL}/${endpoint}`);
    if (!res.ok) throw new Error("Failed to fetch the endpoint.")
    return res.json();
};

export const getLocations = () =>
    baseFetch<Locations>("locations");

export const getWeather = (location: string) =>
    baseFetch<WeatherData>(`weather/${location}`);

export const getTimezone = (location: string) =>
    baseFetch<TimezoneData>(`timezone/${location}`);

export const getAstronomy = (location: string) =>
    baseFetch<AstronomyData>(`astronomy/${location}`);