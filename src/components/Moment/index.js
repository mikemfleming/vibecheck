import { useState } from 'react'
import styles from './Moment.module.css'

const Moment = ({ moment }) => {
    const [vote, setVote] = useState()
    const upvote = () => setVote(1)
    const downvote = () => setVote(-1)

    return (
        <article key={moment.id} className={styles.moment}>
            <header>
                <h3>{moment.title}</h3>
                <p>type: {moment.type}</p>
            </header>
            <section>
                <p>{moment.content}</p>
            </section>
            <section>
                <button onClick={upvote} className={styles.upvoteBtn}>This is good</button>
                <button onClick={downvote} className={styles.downvoteBtn}>This is bad</button>
                <span>{vote}</span>
            </section>
        </article>
    )
}

export default Moment