import { useState } from 'react'
import styles from './Moment.module.css'

import TextContent from './TextContent'
import Image from './Image'
import YouTube from './YouTube'

const Content = ({moment}) => {
    switch (moment.type) {
        case 'text':
            return <TextContent content={moment.content} />
        case 'image':
            return <Image content={moment.content} />
        case 'youtube':
            return <YouTube content={moment.content} />
        default:
            return <div>Content type not supported</div>
    }
}

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
                <Content moment={moment} />
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