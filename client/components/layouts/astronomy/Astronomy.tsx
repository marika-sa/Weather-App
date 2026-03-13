import Card from "@/components/ui/card/Card";
import styles from "./Astronomy.module.css"
import { AstronomyData } from "@/types/astronomy";
import { getAstronomy } from "@/services/api";
import { useFetch } from "@/hooks/useFetch";

export default function Astronomy({ location }: { location: string }) {
    const { data, loading, error } = useFetch<AstronomyData>(() =>
        getAstronomy(location),
        [location]
    );

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error loading astronomy data.</div>
    if (!data) return <div>No data has been loaded.</div>

    const items = [
        { heading: data.astronomy.astro.sunrise, label: "Sunrise" },
        { heading: data.astronomy.astro.sunset, label: "Sunset" },
        { heading: data.astronomy.astro.moon_phase, label: "Moon Phase" },
        { heading: data.astronomy.astro.moon_illumination.toString(), label: "Moon Illumination" }
    ]

    return (
        <section className={styles.section} >
            <div className={styles.container}>
                <Card
                    items={items} />
            </div>
        </section>
    )
}