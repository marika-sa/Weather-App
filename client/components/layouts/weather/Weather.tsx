import Text from "@/components/ui/text/Text";
import SmallCard from "@/components/ui/smallCard/SmallCard";
import styles from "./Weather.module.css";
import { WeatherData } from "@/types/weather";
import { getWeather } from "@/services/api";
import { useFetch } from "@/hooks/useFetch";

export default function Weather({ location }: { location: string }) {
    const { data, loading, error } = useFetch<WeatherData>(() =>
        getWeather(location),
        [location]
    );

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading weather data.</div>;
    if (!data) return <div>No data has been loaded.</div>;

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <img src={`https:${data.current.condition.icon}`} alt="weather icon" />
                <Text
                    text={`${data.current.temp_c}°C`}
                    size="xl"
                    weight="bold"
                />
                <Text
                    text={data.current.condition.text}
                />
                <div className={styles.details}>
                    <SmallCard
                        text={`${data.current.humidity}%`}
                        label="Humidity"
                    />
                    <SmallCard
                        text={`${data.current.wind_kph}kph`}
                        label="Wind Speed"
                    />
                    <SmallCard
                        text={`${data.current.precip_mm}mm`}
                        label="Precipitation"
                    />
                </div>
            </div>
        </section>
    )
}