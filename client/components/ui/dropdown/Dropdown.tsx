import styles from './Dropdown.module.css'
import { Locations } from '@/types/locations'

export default function Dropdown({ locations, selected, onChange }: { locations: Locations, selected: string, onChange: (location: string) => void }) {
    return (
        <div className={styles.dropdownContainer}>
            <select className={styles.dropdown} name="locations" value={selected} onChange={(e) => onChange(e.target.value)}>
                {locations.map(location => (
                    <option key={location.key} value={location.key}>
                        {location.name}
                    </option>
                ))}
            </select>
        </div>
    )
}