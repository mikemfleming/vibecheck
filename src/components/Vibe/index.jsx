
import styles from './Vibe.module.css'

const Vibe = ({vibe}) => (
    <article>
        <header>
            <h1 class={styles.name}>{vibe.name.replace(/-/g, ' ')}</h1>
        </header>
        <p>{vibe.description}</p>
    </article>
)

export default Vibe