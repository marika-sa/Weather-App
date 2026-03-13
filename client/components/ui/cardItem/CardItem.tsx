import Text from "../text/Text"
import styles from "./CardItem.module.css"

export default function CardItem({ heading, label }: { heading: string, label: string }) {
    return (
        <div className={styles.cardItemContainer}>
            <Text
                text={heading}
                size="lg"
                weight="bold"
            />
            <Text
                text={label}
                size="sm"
                weight="normal"
            />
        </div>
    )
}