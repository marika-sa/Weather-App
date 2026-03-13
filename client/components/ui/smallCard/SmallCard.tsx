import styles from "./SmallCatd.module.css"
import Text from "../text/Text"

export default function SmallCard({ text, label }: { text: string, label: string }) {
    return (
        <div className={styles.card}>
            <Text
                text={text}
                weight="bold"
            />
            <Text
                text={label}
                size="sm"
            />
        </div>
    )
}