export interface AstronomyData {
    location: {
        name: string
        country: string
    }
    astronomy: {
        astro: {
            sunrise: string
            sunset: string
            moon_phase: string
            moon_illumination: number
        }
    }
}