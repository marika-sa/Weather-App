import styles from "./Timezone.module.css"
import Text from "@/components/ui/text/Text"
import { TimezoneData } from "@/types/timezone"
import { getTimezone } from "@/services/api"
import { useFetch } from "@/hooks/useFetch"

export default function Timezone({ location }: { location: string }) {
    const { data, loading, error } = useFetch<TimezoneData>(() =>
        getTimezone(location),
        [location]
    );

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading timezone data.</div>;
    if (!data) return <div>No data has been loaded.</div>;

    const localtime = new Date(data.location.localtime);

    const date = new Intl.DateTimeFormat('en-GB', {
        weekday: "long",
        month: "long",
        day: "numeric"
    }).format(localtime);

    const time = new Intl.DateTimeFormat('en-GB', {
        hour: "2-digit",
        minute: "2-digit"
    }).format(localtime)

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.dateTime}>
                    <Text
                        text={`${date}, ${time}`}
                    />
                </div>
                <Text
                    text={`${data.location.name}, ${data.location.country}`}
                    size="xl"
                    weight="bold"
                />
            </div>
        </section>
    )
}