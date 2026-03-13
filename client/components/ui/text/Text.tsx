import styles from './Text.module.css';
import { FONT_SIZES, FontSizeLevel, FONT_WEIGHTS, FontWeightLevel } from '@/styles/theme';

export default function Text({ text, size = "md", weight = "normal" }: { text: string, size?: FontSizeLevel, weight?: FontWeightLevel }) {
    return (
        <span className={styles.headingText} style={{ fontSize: FONT_SIZES[size], fontWeight: FONT_WEIGHTS[weight] }}>
            {text}
        </span>
    )
}