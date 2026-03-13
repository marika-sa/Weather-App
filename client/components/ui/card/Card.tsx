import CardItem from "../cardItem/CardItem"
import styles from "./Card.module.css"

export default function Card({ items }: { items: { heading: string, label: string }[] }) {
    return (
        <div className={styles.card}>
            {items.map(item => (
                <CardItem
                    heading={item.heading}
                    label={item.label}
                />
            ))}
        </div>
    )
}